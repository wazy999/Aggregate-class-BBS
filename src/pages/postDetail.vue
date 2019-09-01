<template>
 <div>
     <!-- 头部固定信息 -->
    <forum-header :pageName="pageTitle" :iconType="'backShow'"></forum-header>
    <div class="post-detail" style="margin-top: 1rem">
        <!-- 帖子详情 -->
      <div :class="{'themeColor--green': themeColor == 'green', 'themeColor--pink': themeColor == 'pink','themeColor--yellow': themeColor == 'yellow','themeColor--blue': themeColor == 'blue','themeColor--purple': themeColor == 'purple'}">
  
          <div class="post-card">
          <div class="postCardHeader">
              <span>{{postMaster.forum}}</span>
              <span>{{postMaster.date}}</span>
              <span>{{postMaster.time}}</span>  
              <span>#1</span>
          </div>
          <div class="postInfo">
              <div>
              <span>本帖最后由 {{postMaster.author}} 于 {{postMaster.date +' '+ postMaster.time}} 编辑</span>
              </div>
              <span style="margin-right: 0;">{{postMaster.totalNum}}</span>
          </div>
          <div class="postCardContent">{{postMaster.content}}</div>
        </div>
        <!-- 评论内容 -->
        <ul>
            <li v-for="(post,index) in postList2" :key="index" class="post-card">
            <div class="postCardHeader" style = "padding-bottom:0.5rem;">
                <span>{{post.author}}</span>
                <span>{{post.date}}</span>
                <span>{{post.time}}</span> 
                <span>#{{index+2}}</span> 
            </div>
            <div class="postCardContent">{{post.content}}</div>
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
  data () {
    return {
      navVisible: false,
      pageTitle: '帖子详情页',
      id: '',
      themeColor: 'blue',
      postMaster: {},
      postList2:[]
    }
  },
  mounted(){
    // this.id = this.$router.query.id
    this.pageTitle = this.$route.query.origin
    this.themeColor = this.$route.query.themeColor
    this.getData()
  },
  methods:{
    back(path){
        this.$router.replace(path);//返回上一层
    },
    back () {
      this.$router.go(-1)
    },
    getData(){
        api.getData('/news/index').then( res=>{
            console.log(res)
            this.postList2 = res.postCommand
            this.postMaster = res.floorMaster
        })
    }
  },
  components:{
    forumHeader: header
  }
}
</script>

<style lang="scss" scoped>
 @import '../assets/main.scss';
.head{
  z-index: 99999;
}
.post-detail{
  position: relative;
  float: left;
  padding: 0;
  margin: 0;
  width: 100%;
  color: #707070;
  box-sizing: border-box;
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
  // 帖子列表   
  .post-card{
    padding: 0.24rem 0.4rem 0.62rem 0.36rem;
    position: relative;
    box-sizing: border-box;
    .postCardHeader{
        display: flex;
        justify-content: flex-start;
        line-height: 1.5;
        font-size: 0.24rem;
        span{
          color: #fff;
          padding: 0.04rem 0.06rem;
          font-size: 0.26rem;
          &:last-child{
              position: absolute;
              color: white;
              border-radius: 0.18rem;
              width: 0.86rem;
              height: 0.38rem;
              text-align:center;
              right:0.36rem
          }
        }
    }
    .postInfo{
      display: flex;
      justify-content: space-between;
      padding:0.2rem 0;
      font-size: 0.28rem;
      span{
        font-size: 0.24rem;
        letter-spacing: -.0048rem;
        color: #999999;
        margin-right: 0.32rem;
      }
    }
    .postCardContent{
      font-size: 0.24rem;
      letter-spacing: -.0048rem;
      color: #707070;
    }
    .beforeLine{
        width: 0.12rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0.32rem;
     }
  }
    // 主题色控制
  $themeColor: ('green', #33c9b0, #b2f0e6),
              ('pink', #f99dce, #ffcfe9),
              ('yellow', #fee432, #fff6b7),
              ('blue', #6CA8C2, #fff6b7),
              ('purple', #DD98E2, #ffecf6);
  @each $name, $bgColor, $subColor in $themeColor{
      .themeColor--#{$name}{
        .post-card{
          border-top: 0.02rem solid $bgColor;
          .postCardHeader{
            span{
              color: $bgColor;
              &:last-child{
                background-color: $bgColor;
                color: #FFf;
              }
            }
          }
        }
      } 
  }
}
</style>
