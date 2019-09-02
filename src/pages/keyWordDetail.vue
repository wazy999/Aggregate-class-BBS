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
            {postId: 1 ,addNum: '35', newestDate: '11s',origin: '猫扑', author: '小胡', time: '2019-02-22', date: '08:22:32', aotalNum: '300256', content: '大家都有什么自驾游经历的 #旅游', 
            commandList:[
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'去青海湖大环线自驾游，大概一个月时间，沿途风光无限美好',},
                {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'自驾游去川藏，这趟川藏线 ，我们共有台越野车！我们这车，除我们家人 ，有可爱姐姐（ 刚认识还熟 心里暗想 个女生来 西藏 绝对般 ）还有就我们引路人－乔帮主！',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'8',content:'说起云南，我已经去过很多次了，有自由行，当地临时一日游，但是今年刚刚从云南回来，对这种管家式服务很满意。我这次玩了6天，一价全含1680元/人，当时找的云南区去哪儿旅游达人晓晓旅游管家安排的，他全程帮你安排好酒店，门票，路线规划，坐车，吃饭，机场接送，甚至是机票，高铁票，都可以搞定，什么都不用管，玩就行了，享受了一次管家式服务。云南景点分散，有很多旅游景点，自驾游的话，路上太堵了，而且非常不安全，到了之后酒店门票全买不到。时间都花在路上，心情也糟透了。',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'20',content:'在湖南，要开车去新疆需要勇气啊。最远也只开过7小时。唉。怎么办。可性格又是比较独行侠的那种。又不喜欢麻烦别人，搭车好麻烦。去过一次新疆，是宁时拼的人。真的没玩好',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'22',content:'本人远游经历：5月自驾西藏，6月尼泊尔十天自由行。远游方式：床车自驾游（单独）。',},
            ]},
            {postId: 2 ,addNum: '35', newestDate: '22s',origin: '百度贴吧', author: '小管家', time: '2019-08-27', date: '21:20:32', aotalNum: '300256', content: '关于自驾游应该注意的几点 #旅游',
            commandList:[
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:' 如果是年轻旅友，请务必告知父母你要去哪儿哪儿自助游，并征得父母的同意。如果父母不同意，还是暂时放弃吧，毕竟我们要理解父母的一片苦心，不要让他们担心。最忌讳的就是瞒着父母独自上路，如果出了状况真的很麻烦。',},
                {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'如果想要在某个假期旅行，最好尽快做决定。车票机票也好，酒店也好，早订不仅意味着可以拿到低价，而且会有更多的选择。订晚了，错过了优惠必须花高价不说，还会遇到根本订不到票导致旅行被迫取消的麻烦。尤其是几个人一起出行，最忌讳集体选择性恐惧症，而又没有一个拍板儿做决定去哪儿的领导者。这种情况多半是以哪儿也去不成告终。',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'一个人会不会旅行，基本上就是看他是否是一个有计划的人。攻略一定要做而且要趁早做，最好在出发前至少两个星期做。自助游最重要的就是提前做功课，什么都没有也不能没有计划。最忌讳的就是走一步看一步、事前没计划事到临头才拍脑门儿。我不相信什么“车道山前必有路”，“山重水复疑无路，柳暗花明又一村”毕竟是小概率事件。',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'自助游变数极大的，即使去前做了充分的准备，一到真格还是可能会出现各种各样的突发状况。所以一定要制定备选方案，这条路走不通，可以启动备选方案。最忌讳的就是一根筋，导致整个旅行计划因为一个小小的变动变成一张废纸。',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'6',content:'比如说，即使酒店的介绍中明确写出了“提供免费wifi”，也要做好酒店里没有wifi的最坏打算：把需要出示给前台的预定证明提前打印出来，提前查好地图不要指望到酒店再用wifi查。在德国的慕尼黑曾经遭遇过酒店因为技术故障无法正常上网的情况。（尤其适用于出国旅行）',},
            ]},
            {postId: 3 ,addNum: '35', newestDate: '4s',origin: 'Stage1-动漫', author: '颜荣蔚Sj7owk', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '本人女孩 一个人在上海 想找独自出游的小姐姐结伴游玩 太无聊 #旅游', 
            commandList:[
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'干，自从点开这个帖子钱包的口子堵不住了',},
                {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
            ]},
            {postId: 4 ,addNum: '35', newestDate: '4s',origin: '知乎', author: '狂客', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '头一热，就买了一张九月一号南昌去重庆的票，攻略也没有找，没有 #旅游', 
            commandList:[
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'2',content:'干，自从点开这个帖子钱包的口子堵不住了',},
                {author: 'findjya',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'3',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'4',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
                {author: 'yjsp114514',discussDate:'2018-08-02',discusstime:'12:26:22',floorNum:'5',content:'买了上个帖子有券的米酒，冰镇后比较好喝，几乎没有度数，当饮料喝了。一看配料有砂糖心塞',},
            ]},
            {postId: 5 ,addNum: '35', newestDate: '55s',origin: '猫扑', author: '湖西岸', time: '2019-08-14', date: '07:55:32', aotalNum: '300256', content: ' 有没有志同道合一起旅游的，沉稳不路痴，时间自由，女孩子最好，#旅游 ', commandList:[]},
            {postId: 6 ,addNum: '35', newestDate: '05s',origin: '百度贴吧', author: '土语', time: '2019-04-10', date: '03:11:32', aotalNum: '300256', content: '9月6号或者7号成都出发进藏 走稻城亚丁转丙察察线也可以 有 #旅游', commandList:[]},
            {postId: 7 ,addNum: '35', newestDate: '4s',origin: '知乎', author: '狂小风', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '边境城市每周俄罗斯三天 喜欢俄罗斯的风土人情吗// #旅游', commandList:[]},
            {postId: 8 ,addNum: '35', newestDate: '52s',origin: 'Stage1-动漫', author: '野人', time: '2019-08-22', date: '11:07:32', aotalNum: '300256', content: '九月底退伍旅行，目前3个即将退伍的老爷们，来两个小伙伴一起？招两个小伙伴 #旅游', commandList:[]},
            {postId: 9 ,addNum: '35', newestDate: '51s',origin: '猫扑', author: '地狱', time: '2019-11-04', date: '14:55:32', aotalNum: '300256', content: '有没有一起去旅游的呀？最好是女生。地点商量 #旅游', commandList:[]},
            {postId: 10 ,addNum: '35', newestDate: '5s',origin: '百度贴吧', author: '旅旅旅旅 ', time: '2019-22-05', date: '12:28:32', aotalNum: '300256', content: '杭州旅游-车辆齐全,-服务江浙沪-专业商务租车公司  #旅游', commandList:[]},
            {postId: 11,addNum: '35', newestDate: '4s',origin: '天涯', author: '小霖', time: '2019-05-15', date: '08:01:32', aotalNum: '300256', content: '有没有成都的，明天出发去旅游的，我是93年的小姐姐，想来一场 #旅游', commandList:[]},
            {postId: 12,addNum: '35', newestDate: '5s',origin: '猫扑', author: '石磊', time: '2019-04-12', date: '20:23:32', aotalNum: '300256', content: ' 10月底爬泰山攻略，有没有，大神指点一下 #旅游', commandList:[]}
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