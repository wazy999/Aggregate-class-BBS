<template>
<div>
    <tab :curPage="3">
        <li v-for="(item,index) in dataList" :key="index">
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
            dataList: [
                {viewNum: 100, commandNum: 358, keyWordNum: 555, viewPer: 49, commandPer: 22, keyWordPer: 19,},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, viewPer: 22, commandPer: 33, keyWordPer: 29,},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, viewPer: 88, commandPer: 33, keyWordPer: 69,},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, viewPer: 10, commandPer: 83, keyWordPer: 99,},
                {viewNum: 100, commandNum: 358, keyWordNum: 555, viewPer: 23, commandPer: 23, keyWordPer: 39,},
                ]
        }
    }
}
</script>

<style lang="scss">
    .data-card{
        position: relative;
        font-size: 0.32rem;
        margin: 0.4rem auto;
        width: 6.4rem;
        height: 4rem;
        $themeColor: #6ca8c2;
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
</style>