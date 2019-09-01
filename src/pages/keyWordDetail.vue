<template>
    <div>
        <forum-header :pageName="keyWordInfo.title" :iconType="'backShow'"></forum-header>
        <div class="keyWord-detail" style="margin-top: 1rem;">
            <div :class="{'themeColor--green': keyWordInfo.color == 'green', 'themeColor--pink': keyWordInfo.color == 'pink','themeColor--yellow': keyWordInfo.color == 'yellow','themeColor--blue': keyWordInfo.color == 'blue','themeColor--purple': keyWordInfo.color == 'purple'}">
                <!-- 顶部信息 -->
                <div class="page-header">
                    <span class="row-line"></span>
                    <div class="item-progress" :style="{width: (parseInt(keyWordInfo.height)*2 + 0.32) + 'rem'}">
                            <span class="replace-text">{{keyWordInfo.num}}</span>
                            <div class="topic-name"><span style="margin-right: 0.1rem;">{{keyWordInfo.topic}}:</span><span class="spacial-title">{{keyWordInfo.title}}</span></div>
                    </div>            
                    <el-progress type="circle" 
                        :percentage='parseInt(keyWordInfo.per)'
                        :width = '50' 
                        :show-text = false>
                    </el-progress>
                </div>
                <!-- 评论列表 -->
                <ul>
                    <li v-for="(post,index) in postList" 
                        :key="index" 
                        @click="toggleCommand(post.postId,post.commandList)"
                        >
                        <div class="outer-command">
                            <div class="before-line"></div>
                            <div class="post-card-header">
                                <span>+{{post.addNum}}</span>
                                <span>{{post.newestDate}}</span>
                                <span>{{post.origin}}</span>
                            </div>
                            <div class="post-info">
                                <div>
                                    <span>{{post.author}}</span>
                                    <span>{{post.time}}</span>
                                    <span>{{post.date}}</span>
                                </div>
                                <span style="margin-right: 0;">{{post.totalNum}}</span>
                            </div>
                            <div class="post-card-content">{{post.content}}</div>
                        </div>
                        <ul class="inner-command" :class="{'collapseCommand': postIndex == post.postId}">
                            <li v-for="(item,index) in post.commandList" :key="index" class="sub-commend" >
                                <div class="before-line"></div>
                                <div class="post-info">
                                    <div>
                                        <span>{{item.author}}</span>
                                        <span>{{item.discussDate}}</span>
                                        <span>{{item.discusstime}}</span> 
                                    </div>
                                    <span style="margin-right: 0;" class="foolr-num">#{{item.floorNum}}</span>
                                </div>
                                <div class="post-card-content">{{item.content}}</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import header from '@/components/header'

export default {
  components:{
    forumHeader: header,
  },
  data(){
      return{
          postIndex: 0,
          per: 0,
          keyWordInfo:{
            topic: '热词',
            title: '关键词详情',
            color: 'blue',
            per: 0,
            height: 0,
            num: 0,
          },
          postList: [
            {postId: 1 ,addNum: '35', newestDate: '11s',origin: '猫扑', author: '浪荡公子', time: '2019-02-22', date: '08:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼', 
            commandList:[
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'干，自从点开这个帖子钱包的口子堵不住了',},
                {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'6',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
            ]},
            {postId: 2 ,addNum: '35', newestDate: '22s',origin: '百度贴吧', author: '以你为瘾', time: '2019-08-27', date: '21:20:32', aotalNum: '300256', content: '欢迎来到PMC格里芬法兰克福支部，姑娘们。想必在座的各位都是因这样或者那样的原因从原服役岗位淘汰，最终像电子垃圾一样被送到了这里。毫无疑问，你们的心智云图都在一定程度上出了些‘技术故障’，进而被划入了‘待处理品’的行列。但这些并不重要，这个地方唯一看重的只有诸位的作战能力，而你们也得靠着自己的能力挣扎着存活去!闲话少说，现在就请各位把自己的简历递交上来吧。',
            commandList:[
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'干，自从点开这个帖子钱包的口子堵不住了',},
                {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'6',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
            ]},
            {postId: 3 ,addNum: '35', newestDate: '4s',origin: 'Stage1-动漫', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//', 
            commandList:[
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'干，自从点开这个帖子钱包的口子堵不住了',},
                {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
            ]},
            {postId: 4 ,addNum: '35', newestDate: '4s',origin: '知乎', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//', 
            commandList:[
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'干，自从点开这个帖子钱包的口子堵不住了',},
                {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
            ]},
            {postId: 5 ,addNum: '35', newestDate: '55s',origin: '猫扑', author: '饮风道人', time: '2019-08-14', date: '07:55:32', aotalNum: '300256', content: ' 就问你6元一台云虚拟主机,心动不？ ', commandList:[]},
            {postId: 6 ,addNum: '35', newestDate: '05s',origin: '百度贴吧', author: '庸俗命运', time: '2019-04-10', date: '03:11:32', aotalNum: '300256', content: 'xwed去哪家医院比较好啊', commandList:[]},
            {postId: 7 ,addNum: '35', newestDate: '4s',origin: '知乎', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//', commandList:[]},
            {postId: 8 ,addNum: '35', newestDate: '52s',origin: 'Stage1-动漫', author: '野客', time: '2019-08-22', date: '11:07:32', aotalNum: '300256', content: '怎样找回两年前的贴子', commandList:[]},
            {postId: 9 ,addNum: '35', newestDate: '51s',origin: '猫扑', author: '地狱人间', time: '2019-11-04', date: '14:55:32', aotalNum: '300256', content: '各位朋友帮我看看三个标题，长文分三次，内容是禅与投资', commandList:[]},
            {postId: 10 ,addNum: '35', newestDate: '5s',origin: '百度贴吧', author: '幻噬 ', time: '2019-22-05', date: '12:28:32', aotalNum: '300256', content: '最恨标题党，百度新闻不少，今日头条最甚', commandList:[]},
            {postId: 11,addNum: '35', newestDate: '4s',origin: '天涯', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//', commandList:[]},
            {postId: 12,addNum: '35', newestDate: '5s',origin: '猫扑', author: '石磊', time: '2019-04-12', date: '20:23:32', aotalNum: '300256', content: ' 有标题党不，来深入聊聊', commandList:[]}
        ]
      }
  },
  mounted(){
    this.keyWordInfo = this.$route.query
    console.log(this.keyWordInfo)
  },
  methods:{
      toggleCommand(index,list){
         //  有评论则展开
          if(list.length > 0){
            if(this.postIndex === index){
                this.postIndex = 0
            }else{
                this.postIndex = index
            }
          }
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