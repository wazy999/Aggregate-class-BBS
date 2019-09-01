<template>
    <div>
        <forum-header :pageName="info.forumName" :iconType="'backShow'"></forum-header>
        <div class="keyWord-detail" style="margin-top: 1rem;">
            <div :class="{'themeColor--green': info.forumColor == 'green', 'themeColor--pink': info.forumColor == 'pink','themeColor--yellow': info.forumColor == 'yellow','themeColor--blue': info.forumColor == 'blue','themeColor--purple': info.forumColor == 'purple'}">
                <!-- 评论列表 -->
                <ul>
                    <li v-for="(post,index) in postList" 
                        :key="index" 
                        @click="goPage(post.forumPostId, post.origin, info.forumColor)"
                        >
                        <div class="outer-command">
                            <div class="before-line"></div>
                            <div class="post-card-header">
                                <span>+{{post.addNum}}</span>
                                <span>{{post.newestDate}}min</span>
                            </div>
                            <div class="post-info">
                                <div>
                                    <span>{{post.author}}</span>
                                    <span>{{post.date}}</span>
                                    <span>{{post.time}}</span>
                                </div>
                                <span style="margin-right: 0;">{{post.totalNum}}</span>
                            </div>
                            <div class="post-card-content">{{post.content}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import header from '@/components/header'
import api from '../request.js'
export default {
  components:{
    forumHeader: header,
  },
  data(){
      return{
          postIndex: 0,
          per: 0,
          info:{
            forumName: '首页',
            forumColor: 'blue',
          },
          postList: []
      }
  },
  mounted(){
    this.info = this.$route.query
    this.getData()

  },
  methods:{
    goPage(id,origin,themeColor){
      this.$router.push({path:'postDetail',query:{id,origin,themeColor}})
    },
    getData(){
        api.getData('/news/index').then( res=>{
            console.log(res)
            this.postList = res.postList
        })
    }
  }
}
</script>

<style lang="scss">
.keyWord-detail{
    position: relative;
    width: 100%;
    ul{
        width: 100%;
        list-style: none;
        li:nth-child(2n+1){
        background: rgba(94,50,119,.03);
        }
        li:nth-child(2n){
        background: rgba(94,50,119,0);
        }
    }
    // 顶部数据信息
    .page-header{
        position: relative;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        height: 2rem;
        justify-content: flex-start;
        align-items: center;
        .row-line{
            background: #6CA8C2;
            height: 100%;
            width: 0.12rem;
            position: absolute;
            top: 0;
            left: 0.32rem;
        }
        .item-progress{
            height: 0.12rem;
            width: 0;
            display: inline-block;
            position: relative;
            background: #6CA8C2;
            transition: height 0.4s cubic-bezier(.55,0,.1,1);
            .replace-text{
                position: absolute;
                font-size: 0.24rem;
                display: inline-block;
                text-align: center;
                color: #6CA8C2;
                top: -0.1rem;
                right: -0.68rem;
            }
            .topic-name{
                position: absolute;
                font-size: 0.28rem;
                color: #6CA8C2;
                left: 0.8rem;
                top: -0.5rem;
            }
        }

        }
    // 帖子列表样式 
    .outer-command{
        padding: 0.24rem 0.4rem 0.62rem 0.62rem;
        position: relative;
        box-sizing: border-box;
        .post-card-header{
        display: flex;
        justify-content: flex-end;
        line-height: 1.5;
        font-size: 0.24rem;
        span{
            color: #fff;
            padding: 0.04rem 0.26rem;
            border-radius: 0.2rem;
            margin-left: 0.2rem;
        }
        }
        .post-info{
        display: flex;
        justify-content: space-between;
        padding:0.2rem 0;
        font-size: 0.28rem;
        span{
            margin-right: 0.32rem;
        }
        }
        .post-card-content{
        font-size: 0.32rem;
        }
        .before-line{
            width: 0.12rem;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0.32rem;
        }
    }
    // 贴子评论样式
    .inner-command{
        height: 0;
        overflow-y: scroll;
        transition: height 0.4s cubic-bezier(.55,0,.1,1);
        .sub-commend{
            position: relative;
            padding: 0.2rem 0.32rem 0.26rem 1rem;
            .post-info{
                display: flex;
                justify-content: space-between;
                padding:0.2rem 0;
                font-size: 0.24rem;
                .foolr-num{
                    padding: 0.02rem 0.3rem;
                    border-radius: 0.2rem;
                }
                span{
                    margin-right: 0.32rem;
                }
            }
            .post-card-content{
                font-size: 0.24rem;
            }
            .before-line{
                width: 0.12rem;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0.7rem;
            }
        }
    }
    .collapseCommand{
        height: 5.3rem;
        transition: height 0.4s cubic-bezier(.55,0,.1,1);
    }
    // 主题色控制
    $themeColor: ('green', #33c9b0, #b2f0e6),
                ('pink', #f99dce, #ffcfe9),
                ('yellow', #fee432, #fff6b7),
                ('blue', #6CA8C2, rgb(147, 195, 216)),
                ('purple', #DD98E2, #ffecf6);
    @each $name, $bgColor, $subColor in $themeColor{
        .themeColor--#{$name}{
            //   外层主题色控制
            .outer-command{
                .post-card-header{
                    span{
                        background: $bgColor;
                    }
                }
                .before-line{
                    background: $bgColor;
                }
            }
            // 内层展开评论主题色
            .inner-command{
                .sub-commend{
                    .post-info{
                        .foolr-num{
                            background: $subColor;
                        }
                    }
                    .before-line{
                        background: $subColor;
                    }
                }
            }
            .spacial-title{
                color: $bgColor;
            }
        }
    }
        .el-progress-circle__track {
            stroke: #6CA8C2 !important;
        }
        .el-progress-circle__path {
            stroke: #9ad5ef!important;
        }      
}
 
</style>