<template>
  <div>
     <!-- 头部固定信息 -->
     <div class="forum-header">
    <forum-header :pageName="pageTitle" ></forum-header>
    </div>
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
    <!-- <div>
      <forum-content :postlist = "postList"></forum-content>
    </div> -->
    <!-- 折叠
    <div class="fold">
       <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <div class="postcard">
                <div class="beforeline"></div>
            </div>
          </template>
          <div></div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div> -->
    <!-- 关键字内容 -->
  <forum-content class="content"> </forum-content>
   </div>
</template>

<script>
import header from '@/components/header'
import card from '@/components/card'
import keyWord from '@/components/keyWord'
import content from '@/components/content'

export default {

  data () {
    return {
      navVisible: false,
      pageTitle: '关键词相关',
      keyword1:'name1',
      keyword2:'name2',
      // postList: [
      //   {type: 'modual1', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼'},
      //   {type: 'modual2', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '欢迎来到PMC格里芬法兰克福支部，姑娘们。想必在座的各位都是因这样或者那样的原因从原服役岗位淘汰，最终像电子垃圾一样被送到了这里。毫无疑问，你们的心智云图都在一定程度上出了些‘技术故障’，进而被划入了‘待处理品’的行列。但这些并不重要，这个地方唯一看重的只有诸位的作战能力，而你们也得靠着自己的能力挣扎着存活去!闲话少说，现在就请各位把自己的简历递交上来吧。'},
      //   {type: 'modual3', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '上周末和心理医生预约了谈心，我怕了，不清楚自己是不是真的有病//'},
      //   {type: 'modual1', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼'},
      //   {type: 'modual2', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: '石磊', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼'},
      // ],
    }
  },
  components:{
    forumHeader: header,
    forumContent: content
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';
//形状样式
 .shape{
   float: left;
  position: relative;
  width: 7.5rem;
  height: 2.16rem;
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
// .fold{
//   float: left;
//   position: relative;
//   width: 100%;
//   .postcard{
//     float: left;
//     position: relative;
//       background-color: rgba(108,168,194,.03);
//       width: 375px;
//       height: 142px;
//     .beforeline{
//       position: relative;
//       left: 0.32rem;
//       background-color: #f8dd25;
//       width: 0.12rem;
//       height: 2.16rem;
//     }
//   }
// }
.content{
  position: relative;
  float: left;
}
</style>