<template>
  <div>
     <!-- 头部固定信息 -->
    <forum-header :pageName="pageTitle"></forum-header>
    <!-- 图形绘制 -->
    <div class="shape">
      <div class="keyword">
        <span class="keyword1">{{keyword1}}:</span>
        <span class="keyword2">{{keyword2}}</span>
        </div>
      <div class="beforeline"></div>
      <div class="middleline"></div>
      <div class="circle">250</div>
      <div class="smallcircle"></div>
    </div>
    <!-- 关键字内容 -->
    <div class = 'content'>
      <ul>
            <li v-for="(post,index) in postList" :key="index" class="postCard">
            <div class="beforeLine" :style="{backgroundColor: (post.type == 'modual1') ? '#f8dd25' : (post.type == 'modual2') ? '#33c9b0' : '#f99dce'}"></div>
            <div class="postCardHeader">
                <span :style="{backgroundColor: (post.type == 'modual1') ? '#f8dd25' : (post.type == 'modual2') ? '#33c9b0' : '#f99dce'}">+{{post.addNum}}</span>
                <span :style="{backgroundColor: (post.type == 'modual1') ? '#f8dd25' : (post.type == 'modual2') ? '#33c9b0' : '#f99dce'}">{{post.newestDate}}</span>
                <span :style="{backgroundColor: (post.type == 'modual1') ? '#f8dd25' : (post.type == 'modual2') ? '#33c9b0' : '#f99dce'}">{{post.origin}}</span>
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
import card from '@/components/card'
import keyWord from '@/components/keyWord'

export default {

  data () {
    return {
      navVisible: false,
      pageTitle: '关键词相关',
      keyword1:'name1',
      keyword2:'name2',
      postList: [
        {type: 'modual1', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼'},
        {type: 'modual2', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '欢迎来到PMC格里芬法兰克福支部，姑娘们。想必在座的各位都是因这样或者那样的原因从原服役岗位淘汰，最终像电子垃圾一样被送到了这里。毫无疑问，你们的心智云图都在一定程度上出了些‘技术故障’，进而被划入了‘待处理品’的行列。但这些并不重要，这个地方唯一看重的只有诸位的作战能力，而你们也得靠着自己的能力挣扎着存活去!闲话少说，现在就请各位把自己的简历递交上来吧。'},
        {type: 'modual3', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//'},
        {type: 'modual1', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼'},
        {type: 'modual2', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼'},
      ]
    }
  },
  components:{
    forumHeader: header
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
 .shape{
  position: absolute;
  width: 7.5rem;
  height: 2.16rem;
  top:1.22rem;
  .beforeline{
    position: absolute;
    left: 0.32rem;
    background-color: #6ca8c2;
    width: 0.12rem;
    height: 2.16rem;
  }
  .middleline{
    position: absolute;
    background-color: #6ca8c2;
    width: 4.54rem;
    height: 0.12rem;
    top:50%;
  }
  .circle{
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    border: 0.12rem solid #9ad5ef;
    width: .8rem;
    height: .8rem;
    overflow: hidden;
    top:0.66rem;
    left: 4.54rem;
    font-size: 12px;
    font-weight: 600;
    color: #6ca8c2;
    text-align: center;
    line-height: .8rem;
  }
  .keyword{
    position: absolute;
    font-size: 0.32rem;
    color: #6ca8c2;
    left: 0.62rem;
    top:0.60rem;
    .keyword2{
      color: #f8dd25;
    }
  }
}
.content{
  top: 3.38rem;
  position: absolute;
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
}
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
}

</style>