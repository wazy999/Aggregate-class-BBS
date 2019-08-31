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
      <div class="circle"><div></div>250</div>
      <div class="smallcircle"></div>
    </div>
       <!-- 帖子内容 -->
    <div class="indexPage" @click="isshow">
        <ul>
            <li v-for="(post,index) in postList1" :key="index" class="postCard">
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
    <!-- 评论内容 -->
    <div class="content" :style = "'margin-top:0;'" v-show = 'flag'>
        <ul>
            <li v-for="(post,index) in postList2" :key="index" class="postCard">
            <div class="postCardHeader" :style = "'padding-bottom:0.5rem;'">
                <span :style="'color: #5e3277;'">{{post.author}}</span>
                <span :style="'color: #5e3277;'">{{post.discussDate}}</span>
                <span :style="'color: #5e3277;'">{{post.discusstime}}</span> 
                <span :style="'background-color:#fff6b7;position:absolute;color:black;border-radius: 0.18rem;width: 0.86rem;height: 0.38rem;text-align:center;right:0.36rem'">#{{post.floorNum}}</span> 
            </div>
            <div class="postCardContent">{{post.content}}</div>
            </li>
        </ul>
    </div>
      <!-- 帖子内容 -->
    <div class="indexPage" @click="isshow3">
        <ul>
            <li v-for="(post,index) in postList3" :key="index" class="postCard">
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
    <!-- 评论内容 -->
    <div class="content" :style = "'margin-top:0;'" v-show = 'flag3'>
        <ul>
            <li v-for="(post,index) in postList33" :key="index" class="postCard">
            <div class="postCardHeader" :style = "'padding-bottom:0.5rem;'">
                <span :style="'color: #5e3277;'">{{post.author}}</span>
                <span :style="'color: #5e3277;'">{{post.discussDate}}</span>
                <span :style="'color: #5e3277;'">{{post.discusstime}}</span> 
                <span :style="'background-color:#fff6b7;position:absolute;color:black;border-radius: 0.18rem;width: 0.86rem;height: 0.38rem;text-align:center;right:0.36rem'">#{{post.floorNum}}</span> 
            </div>
            <div class="postCardContent">{{post.content}}</div>
            </li>
        </ul>
    </div>
      <!-- 帖子内容 -->
    <div class="indexPage" @click="isshow4">
        <ul>
            <li v-for="(post,index) in postList4" :key="index" class="postCard">
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
    <!-- 评论内容 -->
    <div class="content" :style = "'margin-top:0;'" v-show = 'flag4'>
        <ul>
            <li v-for="(post,index) in postList44" :key="index" class="postCard">
            <div class="postCardHeader" :style = "'padding-bottom:0.5rem;'">
                <span :style="'color: #5e3277;'">{{post.author}}</span>
                <span :style="'color: #5e3277;'">{{post.discussDate}}</span>
                <span :style="'color: #5e3277;'">{{post.discusstime}}</span> 
                <span :style="'background-color:#fff6b7;position:absolute;color:black;border-radius: 0.18rem;width: 0.86rem;height: 0.38rem;text-align:center;right:0.36rem'">#{{post.floorNum}}</span> 
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
import content from '@/components/content'

export default {

  data () {
    return {
      flag:false,
      flag3:false,
      flag4:false,
      navVisible: false,
      pageTitle: '关键词相关',
      keyword1:'绊爱',
      keyword2:'压榨',
      //帖子列表
       postList1: [
        {type: 'modual1', addNum: '60', newestDate: '5s',origin: 'Stage1-动漫', author: 'Sgacra', aime: '2019-08-22', date: '08:22:32', aotalNum: '300256', content: '【V4】虚拟YouTuber(vtuber)综合交流讨论专楼[新人请阅读主楼]'},
      ],
      postList3: [
        {type: 'modual1', addNum: '2528', newestDate: '1h30m',origin: 'NGA  - Vtuber', author: 's1观测站', aime: '2019-07-15', date: '18:23:32', aotalNum: '300256', content: '“にじさんじ”所属Vtuber综合交流讨论贴V2'},
      ],
      postList4: [
        {type: 'modual1', addNum: '35', newestDate: '5s',origin: 'Stage1-动漫', author: 'sl', aime: '2019-08-24', date: '21:22:32', aotalNum: '300256', content: '[新番] 【冈田麿里】19.07『#荒乙／骚动时节的少女们啊。』专楼'},
      ],
       postList2:[
         {author: 'yjsp1',discussDate:'2018-08-26',discusstime:'12:28:22',floorNum:'18',content:'压榨阿……a8该被炎上了',},
         {author: 'findjya',discussDate:'2018-08-25',discusstime:'20:25:22',floorNum:'20',content:'压榨传言？？？……a8在搞啥？',},
         {author: 'dfdaa',discussDate:'2018-08-28',discusstime:'01:27:22',floorNum:'80',content:'老爱阿……a8该被炎上了',},
         {author: 'ddssa',discussDate:'2018-08-27',discusstime:'20:24:22',floorNum:'95',content:'我要原初爱呜呜呜',}
      ],//评论列表
        postList33:[
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'23',content:'干，自从点开这个帖子钱包的口子堵不住了',},
         {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'53',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'74',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'85',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'86',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
      ],
        postList44:[
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'干，自从点开这个帖子钱包的口子堵不住了',},
         {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'6',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
      ],
    }
  },
  components:{
    forumHeader: header,
    forumContent: content
  },
  methods:{
      isshow(){
       this.flag = !this.flag;
      },
       isshow3(){
       this.flag3 = !this.flag3;
      },
       isshow4(){
       this.flag4 = !this.flag4;
      }
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
    border: 6px solid #6ca8c2;
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
.indexPage{
  float: left;
  position: relative;
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
  }
}
//评论样式
.content{
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
  .postCard{
    border-top: 0.02rem solid #fff6b7;
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
        font-size: 0.26rem
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
  }
}
</style>