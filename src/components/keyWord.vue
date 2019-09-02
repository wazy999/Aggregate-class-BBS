<template>
  <div class="key-word">
      <div class="bg-line">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <div><span class="title">词频统计</span></div>
      <key-word :curPage="1"> 
        <li v-for="(item, index) in wordList" 
            :key="index"
            class="key-word-item"
            :class="{'themeColor--green' : item.themeColor == 'green','themeColor--pink' : item.themeColor == 'pink','themeColor--yellow' : item.themeColor == 'yellow',}">
            <div class="item-style">
                <span class="item-title" @click="goPage(item.topic,item.title,item.themeColor,item.percentage,item.height,item.num)">{{item.title}}</span>
                <el-progress type="circle" 
                :percentage="item.percentage" 
                :width = '45' 
                :show-text = false
                >
                </el-progress>
                <span class="item-progress" :style="{height: (item.height + 0.8) + 'rem'}">
                     <span class="replace-text">{{item.num}}</span>
                </span>
                <span class="row-line"></span>
               
            </div>
        </li> 
      </key-word>
  </div>
</template>

<script>
import keyWord from '@/components/keyWordSwiper'

export default {
    props: ['timeType','page'],
    data() {
        return{
            wordList: [],
            wordListDay :[
                {topic: '绊爱', title: '携程', num: 200, themeColor: 'green'},
                {topic: '绊爱', title: '川藏', num: 302, themeColor: 'pink'},
                {topic: '绊爱', title: '骑车', num: 113, themeColor: 'yellow'},
                {topic: '绊爱', title: '自驾游', num: 222, themeColor: 'green'},
                {topic: '绊爱', title: '去哪儿', num: 23, themeColor: 'pink'}, 
                {topic: '绊爱', title: '景区', num: 113, themeColor: 'yellow'},
                {topic: '绊爱', title: '西湖', num: 222, themeColor: 'green'},
                {topic: '绊爱', title: '国外', num: 23, themeColor: 'pink'},
                {topic: '绊爱', title: '巴黎铁塔', num: 113, themeColor: 'yellow'},
                {topic: '绊爱', title: '结婚旅行', num: 222, themeColor: 'green'},
                {topic: '绊爱', title: '青春', num: 23, themeColor: 'pink'},             
                {topic: '绊爱', title: '退休', num: 23, themeColor: 'yellow'},             
                {topic: '绊爱', title: '相机', num: 23, themeColor: 'pink'},             
                {topic: '绊爱', title: '记录', num: 23, themeColor: 'green'},             
                {topic: '绊爱', title: '照片', num: 23, themeColor: 'pink'},             
            ],           
             wordListWeek :[
                {topic: '关键词2', title: '诗集', num: 200, themeColor: 'green'},
                {topic: '关键词2', title: '散文', num: 302, themeColor: 'pink'},
                {topic: '关键词2', title: '翻译', num: 302, themeColor: 'pink'},
                {topic: '关键词2', title: '鲁迅', num: 113, themeColor: 'yellow'},
                {topic: '关键词2', title: '当当网', num: 222, themeColor: 'green'},
                {topic: '关键词2', title: '书籍', num: 23, themeColor: 'pink'}, 
                {topic: '关键词2', title: '人生', num: 23, themeColor: 'pink'},             
                {topic: '关键词2', title: '爱情', num: 222, themeColor: 'green'},
                {topic: '关键词2', title: '成语', num: 23, themeColor: 'yellow'},             
                {topic: '关键词2', title: '文笔', num: 23, themeColor: 'pink'},             
                {topic: '关键词2', title: '字体', num: 23, themeColor: 'green'},             
                {topic: '关键词2', title: '', num: 23, themeColor: 'pink'},             
            ],
            wordListMonth :[
                {topic: '关键词3', title: '热血', num: 302, themeColor: 'pink'},
                {topic: '关键词3', title: '崛起', num: 113, themeColor: 'yellow'},                
                {topic: '关键词3', title: '评价', num: 23, themeColor: 'pink'},
                {topic: '关键词3', title: '电影', num: 113, themeColor: 'yellow'},
                {topic: '关键词3', title: '动画', num: 222, themeColor: 'green'},
                {topic: '关键词3', title: '打压', num: 23, themeColor: 'pink'}, 
                {topic: '关键词3', title: '言论', num: 113, themeColor: 'yellow'},
                {topic: '关键词3', title: '暴力', num: 222, themeColor: 'green'},
                {topic: '关键词3', title: '', num: 23, themeColor: 'pink'},             
                {topic: '关键词3', title: '', num: 23, themeColor: 'yellow'},             
                {topic: '关键词3', title: '', num: 23, themeColor: 'pink'},             
                {topic: '关键词3', title: '', num: 23, themeColor: 'pink'},             
            ],            
            wordListYear :[
                {topic: '关键词4', title: '食谱', num: 113, themeColor: 'yellow'},
                {topic: '关键词4', title: '节目', num: 222, themeColor: 'green'},
                {topic: '关键词4', title: '阿婆主', num: 23, themeColor: 'pink'},             
                {topic: '关键词4', title: '广东', num: 23, themeColor: 'yellow'},             
                {topic: '关键词4', title: '台湾', num: 23, themeColor: 'pink'},             
                {topic: '关键词4', title: '小吃街', num: 23, themeColor: 'green'},             
                {topic: '关键词4', title: '祖庙', num: 23, themeColor: 'pink'}, 
                {topic: '关键词4', title: '大碗宽面', num: 113, themeColor: 'yellow'},
                {topic: '关键词4', title: '4', num: 222, themeColor: 'green'},
                {topic: '关键词4', title: '5', num: 23, themeColor: 'pink'}, 
                {topic: '关键词4', title: '6', num: 113, themeColor: 'yellow'},
                {topic: '关键词4', title: '7', num: 222, themeColor: 'green'},
                {topic: '关键词4', title: '8', num: 23, themeColor: 'pink'},
                {topic: '关键词4', title: '9', num: 113, themeColor: 'yellow'},                         
            ],           
            totalWord: 0,
        }
    },
    components:{
        keyWord
    },
    mounted(){
        this.wordList = this.wordListDay
        this.dataHandler(this.wordListDay)
        this.dataHandler(this.wordListWeek)
        this.dataHandler(this.wordListMonth)
        this.dataHandler(this.wordListYear)
    },
    watch: {
        timeType: function (val) {
           switch(val){
                case 'day':
                    this.wordList = this.wordListDay
                    break
                case 'week':
                    this.wordList = this.wordListWeek
                    break                
                case 'month':
                    this.wordList = this.wordListMonth
                    break                
                case 'year':
                    this.wordList = this.wordListYear
                    break
                default: break
            }
        },
        page: function(val){
            switch(val){
                case 1:
                    this.wordList = this.wordListMonth
                    break
                case 2:
                    this.wordList = this.wordListWeek
                    break                
                case 3:
                    this.wordList = this.wordListDay
                    break                
                case 4:
                    this.wordList = this.wordListMonth
                    break
                case 5:
                    this.wordList = this.wordListYear
                    break
                default: break
            }
        }
    },
    methods:{
        //数据处理
        dataHandler(val){
            // 计算关键词总数 以及 最多的关键词
            let wordNum = []
            let totalWord = 0
            for (let obj of val){
                totalWord += obj.num
                wordNum.push(obj.num)
            }
            let maxWordNum = Math.max(...wordNum)
            //关键词百分比、柱状高度计算
            val.forEach((item,index) => {
                item.percentage = item.num / totalWord *100
                item.height = (item.num / maxWordNum) * 2.4 + 0.8
            });
        },
        goPage(topic,title,color,per,height,num){
            this.$router.push({path:'keyWordDetail',query:{topic,title,color,per,height,num}})
        }
    }

}
</script>

<style lang="scss">
   .key-word{
        height: 6rem;
        position: relative;
        width: 100%;
        .title{
            position: absolute;
            top: -0.24rem;
            left: 0.52rem;
            background-color: #6ca8c2;
            color: #fff;
            display: inline-block;
            font-size: 0.24rem;
            border-radius: 0 0.26rem 0.26rem 0;
            padding: 0.08rem 0.36rem;
        }
       .bg-line{
           width: 100%;
           height: 5.2rem;
           position: absolute;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           box-sizing: border-box;
           z-index: -999;
           top: 0;
           span{
               height: 1.02rem;
               border-bottom: 0.02rem solid #cfe2eb;
               &:last-child{
                    border-bottom: 0.12rem solid #cfe2eb;
               }
           }
           &::after{
               content: '';
               position: absolute;
               top: 0;
               left: 0.52rem;
               height: 100%;
               width: 0.2rem;
               border-left: 0.02rem solid #cfe2eb;
           }
           &::before{
                content: '';
                height: 0.12rem;
                width: 0.52rem;
                background: #6ca8c2;
                position: absolute;
                bottom: 0;
                left: 0;

           }
       }
        .key-word-item{
            position: relative;  
            z-index: 999;
            .item-style{
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center; 
                width: 1.28rem;
                position: relative;  
                .item-title{
                    border-radius: 0.18rem;
                    // height: 0.36rem;
                    color: #fff;
                    font-size: 0.22rem;
                    padding: 0.02rem 0.4rem;
                    margin-bottom: 0.2rem;
                }
                .item-progress{
                    height: 0;
                    width: 0.12rem;
                    display: inline-block;
                    position: relative;
                    transition: height 0.4s cubic-bezier(.55,0,.1,1);
                    .replace-text{
                        position: absolute;
                        width: 0.9rem;
                        height: 0.9rem;
                        line-height: 0.9rem;
                        display: inline-block;
                        text-align: center;
                        margin: 0;
                        -webkit-transform: translate(-45%,-100%);
                        transform: translate(-45%,-100%);
                    }
                }
                .row-line{
                    position: absolute;
                    left: 0;
                    bottom: 0.8rem;
                    display: inline-block;
                    height: 0.12rem;
                    width: 100%;
                }
            }
        }
        // 主题色控制
        $themeColor: ('green', #33c9b0, #b2f0e6),
                    ('pink', #f99dce, #ffcfe9),
                    ('yellow', #fee432, #fff6b7);
        @each $name, $bgColor, $pathColor in $themeColor{
            .themeColor--#{$name}{
                z-index: 999;
                // 标题 竖线
                .item-title , .item-progress , .row-line{
                    background-color: $bgColor;
                }
                .replace-text{
                    font-size: 0.24rem !important;
                    color: $bgColor;
                }
                .el-progress-circle__track {
                    stroke: $bgColor;
                }
                .el-progress-circle__path {
                    stroke: $pathColor;
                }  
            } 
        }

   }
   
</style>