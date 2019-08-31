<template>
<div class="data-handler-page">
    <ul>
        <li  v-for="(item,index) in dataList" :key="index">
            <!-- 上半部分 -->
            <tab :curPage="3">
                <div class="card-page">
                    <div class="card-title"><span>{{item.key}}</span></div>
                    <div class="data-card">
                        <div class="card-border">
                            <div class="circle-label">
                                <span>{{item.viewNum}}</span>
                                <span>{{item.commandNum}}个讨论</span>
                                <span>{{item.keyWordNum}}个关键词</span>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="circle-list">
                                <el-progress type="circle" :percentage="item.viewPer" :width = '70'>
                                </el-progress>
                                <el-progress type="circle" :percentage="item.commandPer" :width = '70'>
                                </el-progress>            
                                <el-progress type="circle" :percentage="item.keyWordPer" :width = '70'>
                                </el-progress>
                            </div>
                        </div>
                    </div>
                </div>
            </tab>
        </li>
    </ul>
    <tab :curPage="3">
        <li v-for="(item,index) in dataList" :key="index">
            <div class="card-page">
                <div class="card-title"><span>{{item.key}}</span></div>
                <div class="data-card">
                    <div class="card-border">
                        <div class="circle-label">
                            <span>{{item.viewNum}}</span>
                            <span>{{item.commandNum}}个讨论</span>
                            <span>{{item.keyWordNum}}个关键词</span>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="circle-list">
                            <el-progress type="circle" :percentage="item.viewPer" :width = '70'>
                            </el-progress>
                            <el-progress type="circle" :percentage="item.commandPer" :width = '70'>
                            </el-progress>            
                            <el-progress type="circle" :percentage="item.keyWordPer" :width = '70'>
                            </el-progress>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 下半部分关键热词 -->
            <div class="key-word">
                <div class="bg-line">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <!-- 溢出滚动  改变滚动样式 -->
                <key-word :curPage="1"> 
                    <li v-for="(wordItem, index) in item.mainConcept" 
                        :key="index"
                        class="key-word-item"
                        :class="{'themeColor--green' : wordItem.themeColor == 'green','themeColor--pink' : wordItem.themeColor == 'pink','themeColor--yellow' : wordItem.themeColor == 'yellow',}">
                        <div class="item-style">
                            <span class="item-title" >{{wordItem.title}}</span>
                            <el-progress type="circle" 
                            :percentage="wordItem.percentage" 
                            :width = '45' 
                            :show-text = false
                            >
                            </el-progress>
                            <span class="item-progress" :style="{height: (wordItem.height + 0.8) + 'rem'}">
                                <span class="replace-text">{{wordItem.num}}</span>
                            </span>
                            <span class="row-line"></span>
                        
                        </div>
                    </li> 
                </key-word>
            </div>
        </li>
    </tab>
  <div class="data-title"><span>词频统计</span></div>

</div>

</template>
<script>
import tab from '@/components/tab'
import keyWord from '@/components/keyWordSwiper'

export default {
    components:{
        tab,
        keyWord
    },
    data(){
        return{
            dataList: [],
            dataListDay: [
                {viewNum: 232, commandNum: 358, keyWordNum: 555, key: '关键词1',
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'},
                    {title: '5', num: 23, themeColor: 'pink'}, 
                    {title: '6', num: 113, themeColor: 'yellow'},
                    {title: '7', num: 222, themeColor: 'green'},
                    {title: '8', num: 23, themeColor: 'pink'},
                    {title: '9', num: 113, themeColor: 'yellow'},
                    {title: '10', num: 222, themeColor: 'green'},
                    {title: '11', num: 23, themeColor: 'pink'},             
                    {title: '12', num: 23, themeColor: 'yellow'},             
                    {title: '13', num: 23, themeColor: 'pink'},             
                    {title: '14', num: 23, themeColor: 'green'},             
                    {title: '15', num: 23, themeColor: 'pink'},  
                ]},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '关键词2',
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'},
                    {title: '5', num: 23, themeColor: 'pink'}, 
                    {title: '6', num: 113, themeColor: 'yellow'},
                    {title: '7', num: 222, themeColor: 'green'},
                    {title: '8', num: 23, themeColor: 'pink'},
                    {title: '9', num: 113, themeColor: 'yellow'},
                    {title: '10', num: 222, themeColor: 'green'},
                    {title: '11', num: 23, themeColor: 'pink'},             
                    {title: '12', num: 23, themeColor: 'yellow'},             
                    {title: '13', num: 23, themeColor: 'pink'},             
                    {title: '14', num: 23, themeColor: 'green'},             
                    {title: '15', num: 23, themeColor: 'pink'},  
                ]},
                {viewNum: 566, commandNum: 526, keyWordNum: 222, key: '关键词3',
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '关键词4',
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '关键词5',
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
            ],
            dataListWeek: [
                {viewNum: 200, commandNum: 358, keyWordNum: 555, key: '周关键词1',
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 7555, commandNum: 20, keyWordNum: 555, key: '周关键词2',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 233, commandNum: 17, keyWordNum: 56, key: '周关键词3',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 33, commandNum: 358, keyWordNum: 555, key: '周关键词4',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 200, commandNum: 358, keyWordNum: 555, key: '周关键词5',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
            ],
            dataListMonth: [
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '月关键词1',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 33, commandNum: 358, keyWordNum: 555, key: '月关键词2',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 22, commandNum: 358, keyWordNum: 555, key: '月关键词3',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 100, commandNum: 358, keyWordNum: 56, key: '月关键词4',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '月关键词5',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
            ],
            dataListYear: [
                {viewNum: 200, commandNum: 358, keyWordNum: 555, key: '年关键词1',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 358, commandNum: 358, keyWordNum: 555, key: '年关键词2',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 33, commandNum: 26, keyWordNum: 555, key: '年关键词3',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 200, commandNum: 358, keyWordNum: 36, key: '年关键词4',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
                {viewNum: 200, commandNum: 358, keyWordNum: 555, key: '年关键词5',           
                mainConcept:[
                    {title: '1', num: 200, themeColor: 'green'},
                    {title: '2', num: 302, themeColor: 'pink'},
                    {title: '3', num: 113, themeColor: 'yellow'},
                    {title: '4', num: 222, themeColor: 'green'}, 
                ]},
            ],
        }
    },
    props: ['timeType'],
    mounted(){
        this.dataList = this.dataListDay
        this.dataHandle(this.dataListDay)
        this.dataHandle(this.dataListWeek)
        this.dataHandle(this.dataListMonth)
        this.dataHandle(this.dataListYear)
    },
    watch: {
        timeType: function (val) {
           switch(val){
                case 'day':
                    this.dataList = this.dataListDay
                    this.$emit(changeKey,'day')
                    break
                case 'week':
                    this.dataList = this.dataListWeek
                    this.$emit(changeKey,'week')
                    break                
                case 'month':
                    this.dataList = this.dataListMonth
                    break                
                case 'year':
                    this.dataList = this.dataListYear
                    break
                default: break
            }
        }
    },
    methods:{
        dataHandle(dataListType){
            let viewNumTotal = 0
            let commandNumTotal = 0
            let keyWordNumTotal = 0
            let wordNum = []
            let totalWord = 0
            // 计算个指标总量
            for (let obj of dataListType){
                viewNumTotal += obj.viewNum
                commandNumTotal += obj.commandNum
                keyWordNumTotal += obj.keyWordNum
                let mainConcept = obj.mainConcept
                for(let item of mainConcept){
                    totalWord += item.num
                    wordNum.push(item.num)
                }
            }
            let maxWordNum = Math.max(...wordNum)
            console.log(totalWord,maxWordNum)

             //计算各指标占比 初始化
             //关键词百分比、柱状高度计算
            dataListType.forEach((obj,index) =>{
                obj.viewPer = Math.ceil(obj.viewNum / viewNumTotal *100)
                obj.commandPer = Math.ceil(obj.commandNum / commandNumTotal *100) 
                obj.keyWordPer = Math.ceil(obj.keyWordNum / keyWordNumTotal *100)
                let mainConcept = obj.mainConcept
                console.log(mainConcept)
                mainConcept.forEach((item,index) => {
                    item.percentage = item.num / totalWord *100
                    item.height = (item.num / maxWordNum) * 2.4 + 0.8
                });
            })
         }
    }
}
</script>

<style lang="scss">
.data-handler-page{
    $themeColor: #6ca8c2;
    font-size: 0.32rem;
    // PartUp
    .card-page{
        .card-title{
            span{
            background-color: $themeColor;
            color: #fff;
            display: inline-block;
            margin-left: 0.48rem;
            border-radius: 0.26rem;
            padding: 0.08rem 0.36rem;
            }
        }
        .data-card{
            position: relative;
            font-size: 0.32rem;
            margin: 0.4rem auto;
            width: 6.4rem;
            height: 4rem;
            // 卡片边框
            .card-border{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 2px solid $themeColor;
                border-radius: 0.4rem 0.7rem 0.4rem 0.4rem;
                box-sizing: border-box;
                .circle-label{
                    display: flex;
                    justify-content: space-between;
                    color: #fff;
                    font-size: 0.24rem;
                    position: absolute;
                    bottom: 0.3rem;
                    width: 90%;
                    left: 50%;
                    transform: translateX(-50%);
                    span{
                    padding: 0.05rem 0.3rem;
                    border-radius: 0.16rem;
                    background-color: $themeColor;
                    }
                }
            }
            // 圆形进度条
            .card-content{
                position: absolute;
                top: 0;
                left: 0;
                height: 75%;
                width: 100%;
                background: $themeColor;
                border: 2px solid $themeColor;
                border-radius: 0.4rem 0.7rem 0.3rem 0.3rem;
                box-sizing: border-box;
                z-index: 101;
                .circle-list{
                    display: flex;
                    justify-content: space-around;
                    width: 90%;
                    position: absolute;
                    bottom: 0.3rem;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            &::before{
                content:'历史统计';
                position: absolute;
                left: 0;
                top: 0.46rem;
                background-color: #fff;
                color: $themeColor;
                font-size: 0.24rem;
                height: 0.36rem;
                line-height: 0.36rem;
                width: 1.56rem;
                z-index: 200;
                border-radius: 0 0.3rem 0.3rem  0;
                padding-left: 0.34rem;
            }
            // 进度条样式覆盖
            .el-progress--circle .el-progress__text, .el-progress--dashboard .el-progress__text {
                font-size: 0.45rem !important;
                color: #ffffff;
            }
            .el-progress-circle__track {
                stroke: #9ad5ef;
            }
            .el-progress-circle__path {
                stroke: #ffffff;
            }
        }
    }
    //中间标题
    .data-title{
      span{
        background-color: $themeColor;
        color: #fff;
        display: inline-block;
        margin-left: 0.48rem;
        font-size: 0.24rem;
        border-radius: 0 0.26rem 0.26rem 0;
        padding: 0.08rem 0.36rem;
       }
    }
    // partDown
    .key-word{
        height: 6rem;
        position: relative;
        width: 100%;
       .bg-line{
           width: 100%;
           height: 5.2rem;
           position: absolute;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           box-sizing: border-box;
           z-index: 100;
           top: 0;
           span{
               height: 1.02rem;
               border-bottom: 0.02rem solid #cfe2eb;
           }
           &::before{
               content: '';
               position: absolute;
               top: 0;
               left: 0.52rem;
               height: 100%;
               width: 0.2rem;
               border-left: 0.02rem solid #cfe2eb;
           }
       }
       .key-word-item{
            .item-style{
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center; 
                width: 1.28rem;
                position: relative;  
                .item-title{
                    border-radius: 0.18rem;
                    height: 0.36rem;
                    color: #fff;
                    font-size: 0.22rem;
                    padding: 0 0.4rem;
                    margin-bottom: 0.2rem;
                }
                .item-progress{
                    height: 0;
                    width: 0.12rem;
                    display: inline-block;
                    position: relative;
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
}

    
</style>