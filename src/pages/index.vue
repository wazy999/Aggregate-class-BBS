<template>
 <div>
     <!-- 头部固定信息 -->
    <forum-header :pageName="pageTitle" @openNav = "toggleNav" :iconType="'navShow'"></forum-header>
    <!-- 侧边栏 -->
    <side-nav :navVisible = "sideNavShow" style="z-index: 999; position: fixed; top: 2rem; left: 0;"></side-nav>
    <!-- 页面主要内容 -->
    <div class="indexPage" style="margin-top: 1rem">
      <div class="page-mask" @click = "closeNav" :class="{'close-mask' : !sideNavShow}"></div>
        <div class="postCard" style="padding-bottom: 0.24rem">
            <input placeholder="搜索..."/>
            <div class="beforeLine" style="background-color: #6ca8c2;"></div>
        </div>
        <ul>
            <li v-for="(post,index) in postList" 
                :key="index" class="postCard"
                @click="goPage(post.id, post.origin, post.themeColor)"  
                :class="{'themeColor--green': post.themeColor == 'green', 'themeColor--pink': post.themeColor == 'pink','themeColor--yellow': post.themeColor == 'yellow','themeColor--blue': post.themeColor == 'blue','themeColor--purple': post.themeColor == 'purple'}">
                <div class="beforeLine"></div>
                <div class="postCardHeader">
                    <span>+{{post.addNum}}</span>
                    <span>{{post.newestDate}}</span>
                    <span>{{post.origin}}</span>
                </div>
                <div class="postInfo">
                    <div>
                    <span>{{post.author}}</span>
                    <span>{{post.time}}</span>
                    <span>{{post.date}}</span>
                    </div>
                    <span style="margin-right: 0;">{{post.totalNum}}</span>
                </div>
                <div class="postCardContent">{{post.content}}</div>
            </li>
        </ul>
    </div>
 </div>
</template>

<script>
import header from '@/components/header'
import tabbar from '@/components/tabbar'
import nav from '@/components/nav'
export default {
  data () {
    return {
      sideNavShow: false,
      pageTitle: '首页',
      postList: [
        {themeColor: 'pink', addNum: '35', newestDate: '11s',origin: '猫扑', author: '浪荡公子', time: '2019-02-22', date: '08:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼'},
        {themeColor: 'yellow', addNum: '35', newestDate: '22s',origin: '百度贴吧', author: '以你为瘾', time: '2019-08-27', date: '21:20:32', aotalNum: '300256', content: '欢迎来到PMC格里芬法兰克福支部，姑娘们。想必在座的各位都是因这样或者那样的原因从原服役岗位淘汰，最终像电子垃圾一样被送到了这里。毫无疑问，你们的心智云图都在一定程度上出了些‘技术故障’，进而被划入了‘待处理品’的行列。但这些并不重要，这个地方唯一看重的只有诸位的作战能力，而你们也得靠着自己的能力挣扎着存活去!闲话少说，现在就请各位把自己的简历递交上来吧。'},
        {themeColor: 'green', addNum: '35', newestDate: '4s',origin: 'Stage1-动漫', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//'},
        {themeColor: 'blue', addNum: '35', newestDate: '4s',origin: '知乎', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//'},
        {themeColor: 'pink', addNum: '35', newestDate: '55s',origin: '猫扑', author: '饮风道人', time: '2019-08-14', date: '07:55:32', aotalNum: '300256', content: ' 就问你6元一台云虚拟主机,心动不？ '},
        {themeColor: 'yellow', addNum: '35', newestDate: '05s',origin: '百度贴吧', author: '庸俗命运', time: '2019-04-10', date: '03:11:32', aotalNum: '300256', content: 'xwed去哪家医院比较好啊'},
        {themeColor: 'blue', addNum: '35', newestDate: '4s',origin: '知乎', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//'},
        {themeColor: 'green', addNum: '35', newestDate: '52s',origin: 'Stage1-动漫', author: '野客', time: '2019-08-22', date: '11:07:32', aotalNum: '300256', content: '怎样找回两年前的贴子'},
        {themeColor: 'pink', addNum: '35', newestDate: '51s',origin: '猫扑', author: '地狱人间', time: '2019-11-04', date: '14:55:32', aotalNum: '300256', content: '各位朋友帮我看看三个标题，长文分三次，内容是禅与投资'},
        {themeColor: 'yellow', addNum: '35', newestDate: '5s',origin: '百度贴吧', author: '幻噬 ', time: '2019-22-05', date: '12:28:32', aotalNum: '300256', content: '最恨标题党，百度新闻不少，今日头条最甚'},
        {themeColor: 'purple', addNum: '35', newestDate: '4s',origin: '天涯', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//'},
        {themeColor: 'pink', addNum: '35', newestDate: '5s',origin: '猫扑', author: '石磊', time: '2019-04-12', date: '20:23:32', aotalNum: '300256', content: ' 有标题党不，来深入聊聊'}
     ]

    }
  },
  components:{
    forumHeader: header,
    forumTabbar: tabbar,
    sideNav: nav
    //forumSidebar:sidebar
  },
  methods:{
    goPage(id,origin,themeColor){
      this.$router.push({path:'postDetail',query:{id,origin,themeColor}})
    },
    toggleNav(data){
      this.sideNavShow = data
    },
    closeNav(){
      this.sideNavShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '../assets/main.scss';

.indexPage{
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
  .postCard{
    padding: 0.24rem 0.4rem 0.62rem 0.62rem;
    position: relative;
    box-sizing: border-box;
    .postCardHeader{
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
    .postInfo{
      display: flex;
      justify-content: space-between;
      padding:0.2rem 0;
      font-size: 0.28rem;
      span{
        margin-right: 0.32rem;
      }
    }
    .postCardContent{
      font-size: 0.32rem;
    }
    .beforeLine{
        width: 0.12rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0.32rem;
     }
    //搜索按钮
    input{
        outline: none;
        border: none;
        padding: 0.16rem 0.32rem 0.16rem 0.4rem;
        background-color: rgba(94,50,119,.03);
        border-radius: 0.3rem;
        width: 100%;
        box-sizing: border-box;
        color: #6ca8c2;
        &::-webkit-input-placeholder{
            color:#6ca8c2;
        }
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
          .postCardHeader{
            span{
              background: $bgColor;
            }
          }
          .beforeLine{
            background: $bgColor;
          }
         }
  }
  .page-mask{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    transition: width 0.1s;
  }
  .close-mask{
    width: 0;
    transition: width 0.1s;
  }
}

</style>
