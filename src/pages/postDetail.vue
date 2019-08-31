<template>
 <div>
     <!-- 头部固定信息 -->
    <forum-header :pageName="pageTitle"></forum-header>
    <!-- 帖子内容 -->
    <div class="indexPage">
        <ul>
            <li v-for="(post,index) in postList1" :key="index" class="postCard">
            <div class="postCardHeader">
                <span :style="'color: #5e3277;'">{{post.forum}}</span>
                <span :style="'color: #5e3277;'">{{post.newestDate}}</span>
                <span :style="'color: #5e3277;'">{{post.origin}}</span>  
                 <span :style="'background-color:#5e3277;position:absolute;color:white;border-radius: 0.18rem;width: 0.86rem;height: 0.38rem;text-align:center;right:0.36rem'">#{{post.floorNum}}</span>
            </div>
            <div class="postInfo">
                <div>
                <span>{{post.subtitle}}</span>
                </div>
                <span style="margin-right: 0;">{{post.totalNum}}</span>
            </div>
            <div class="postCardContent">{{post.content}}</div>
            </li>
        </ul>
    </div>
    <!-- 评论内容 -->
    <div class="indexPage" :style = "'margin-top:0;'">
        <ul>
            <li v-for="(post,index) in postList2" :key="index" class="postCard">
            <div class="postCardHeader" :style = "'padding-bottom:0.5rem;'">
                <span :style="'color: #5e3277;'">{{post.author}}</span>
                <span :style="'color: #5e3277;'">{{post.discussDate}}</span>
                <span :style="'color: #5e3277;'">{{post.discusstime}}</span> 
                <span :style="'background-color:#5e3277;position:absolute;color:white;border-radius: 0.18rem;width: 0.86rem;height: 0.38rem;text-align:center;right:0.36rem'">#{{post.floorNum}}</span> 
            </div>
            <div class="postCardContent">{{post.content}}</div>
            </li>
        </ul>
    </div>
 </div>
</template>

<script>
import header from '@/components/header'

export default {
  data () {
    return {
      navVisible: false,
      pageTitle: '帖子详情页',
      postList1: [
        {type: 'modual1', forum : 's1观测站', newestDate: '2019-08-15',origin: '08:22:32',floorNum:'1',subtitle:'本帖最后由 S1观测站 于 2019-8-22 09:38 编辑',  content: '关爱社畜青年，观测食中百味排遍吃中千雷，挑选味道绝美这里是爱你们的观测站如果你有好的建议或是想看到的评测，请加入观测站粉丝群！S1-观测站品鉴委员会：144107770你在验证里填我来找观测站是没问题的！如果你一直想看某样产品，但我一直没有做，欢迎支援我一些评测材料想要投食观测站的话，请直接私信我，或在直播群私聊我，我会给你地址的附带说一句，观测站在微博也有更新~微博关注@S1观测站'},
      ],
      postList2:[
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'干，自从点开这个帖子钱包的口子堵不住了',},
         {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
         {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'6',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
      ]
    }
  },
  methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
  },
  components:{
    forumHeader: header
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
    border-top: 0.02rem solid #5e3277;
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
    .beforeLine{
        width: 0.12rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0.32rem;
     }
  }
}
</style>
