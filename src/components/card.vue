<template>
<div>
    <tab :curPage="3" @pageChange = "pageHandle">
        <li v-for="(item,index) in dataList" :key="index">
            <div class="card-page">
                <div class="card-title"><span>{{item.key}}</span></div>
                <div class="data-card">
                    <div class="card-border">
                        <div class="circle-label">
                            <div>
                                <img src="../assets/image/view.png" style="height: 0.28rem; width: 0.48rem;"/>
                                <span>{{item.viewNum}}</span>
                            </div>                            
                            <div>
                                <img src="../assets/image/focus.png" style="height: 0.28rem; width: 0.36rem;"/>
                                <span>{{item.keyWordNum}}</span>
                            </div>                            
                            <div>
                                <img src="../assets/image/command.png" style="height: 0.28rem; width: 0.4rem;"/>
                                <span>{{item.commandNum}}</span>
                            </div>
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
        </li>
    </tab>
</div>

</template>
<script>
import tab from '@/components/tab'
export default {
    components:{
        tab
    },
    data(){
        return{
            dataList: [],
            dataListDay: [
                {viewNum: 232, commandNum: 358, keyWordNum: 555, key: '职人'},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '美食'},
                {viewNum: 566, commandNum: 526, keyWordNum: 222, key: '旅游'},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '单反相机'},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '国漫'},
            ],
            dataListWeek: [
                {viewNum: 200, commandNum: 358, keyWordNum: 555, key: '美食'},
                {viewNum: 7555, commandNum: 20, keyWordNum: 555, key: '旅游'},
                {viewNum: 233, commandNum: 17, keyWordNum: 56, key: '文学'},
                {viewNum: 33, commandNum: 358, keyWordNum: 555, key: '职人'},
                {viewNum: 200, commandNum: 358, keyWordNum: 555, key: '创意'},
            ],
            dataListMonth: [
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '考研'},
                {viewNum: 33, commandNum: 358, keyWordNum: 555, key: '工业化'},
                {viewNum: 22, commandNum: 358, keyWordNum: 555, key: '认识颠覆'},
                {viewNum: 100, commandNum: 358, keyWordNum: 56, key: '高音'},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, key: '奶茶'},
            ],
            dataListYear: [
                {viewNum: 200, commandNum: 358, keyWordNum: 555, key: '配音'},
                {viewNum: 358, commandNum: 358, keyWordNum: 555, key: '饮食'},
                {viewNum: 33, commandNum: 26, keyWordNum: 555, key: '小程序'},
                {viewNum: 200, commandNum: 358, keyWordNum: 36, key: '诗选'},
                {viewNum: 200, commandNum: 358, keyWordNum: 555, key: '创赢'},
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
                    break
                case 'week':
                    this.dataList = this.dataListWeek
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
            // 计算个指标总量
            for (let obj of dataListType){
                viewNumTotal += obj.viewNum
                commandNumTotal += obj.commandNum
                keyWordNumTotal += obj.keyWordNum
            }
             //计算各指标占比 初始化
            dataListType.forEach((obj,index) =>{
                obj.viewPer = Math.ceil(obj.viewNum / viewNumTotal *100)
                obj.commandPer = Math.ceil(obj.commandNum / commandNumTotal *100) 
                obj.keyWordPer = Math.ceil(obj.keyWordNum / keyWordNumTotal *100)
            })
        },
        pageHandle(page){
            console.log(page,'page')
            this.$emit('cardPageChange', page)
        }
    }
}
</script>

<style lang="scss">
.card-page{
    $themeColor: #6ca8c2;
    .card-title{
        span{
          background-color: $themeColor;
          color: #fff;
          display: inline-block;
          margin-left: 0.48rem;
          border-radius: 0.26rem;
          padding: 0.08rem 0.36rem;
          font-size: 0.32rem;
        }
    }
    .data-card{
        position: relative;
        font-size: 0.32rem;
        margin: 0.2rem auto;
        width: 6.4rem;
        height: 3.42rem;
        // 卡片边框
        .card-border{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3.42rem;
            border: 2px solid $themeColor;
            border-radius: 0.32rem 0.96rem 0.44rem 0.44rem;
            box-sizing: border-box;
            .circle-label{
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                font-size: 0.32rem;
                position: absolute;
                bottom: 0.08rem;
                width: 90%;
                left: 50%;
                transform: translateX(-50%);
                div{
                    width: 30%;
                    text-align: center;
                }
                img{
                    vertical-align: middle;
                }
                span{
                    color: $themeColor;
                    vertical-align: middle;
                }
            }
        }
        // 圆形进度条
        .card-content{
            position: absolute;
            top: 0;
            left: 0;
            height: 2.78rem;
            width: 100%;
            background: $themeColor;
            border: 2px solid $themeColor;
            border-radius: 0.32rem 0.96rem 0.32rem 0.32rem;
            box-sizing: border-box;
            z-index: 101;
            .circle-list{
                display: flex;
                justify-content: space-between;
                width: 86%;
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
    
</style>