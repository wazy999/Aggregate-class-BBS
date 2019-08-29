<template>
  <div class="data-card">
    <div class="card-border">
        <div class="circle-label">
            <span>36次浏览</span>
            <span>6320个讨论</span>
            <span>6个关键词</span>
        </div>
    </div>
    <div class="card-content">
        <div class="circle-list">
            <el-progress type="circle" :percentage="49" width="70">
            </el-progress>
            <el-progress type="circle" :percentage="17" width="70">
            </el-progress>            
            <el-progress type="circle" :percentage="80" width="70">
            </el-progress>
        </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 @import '../assets/main.scss';
    .data-card{
        position: relative;
        font-size: 0.32rem;
        margin: 0.4rem;
        width: 6.4rem;
        height: 4rem;
        // 卡片边框
        .card-border{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px solid #6ca8c2;
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
                background-color: #6ca8c2;
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
            background: #6ca8c2;
            border: 2px solid #6ca8c2;
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
            color: #6ca8c2;
            font-size: 0.24rem;
            height: 0.36rem;
            line-height: 0.36rem;
            width: 1.56rem;
            z-index: 200;
            border-radius: 0 0.3rem 0.3rem  0;
            padding-left: 0.34rem;
        }
    }
    // 进度条样式覆盖
    .el-progress--circle .el-progress__text, .el-progress--dashboard .el-progress__text {
        font-size: 0.45rem !important;
        color: #ffffff;
    }
    path.el-progress-circle__track {
        stroke: #9ad5ef;
    }
    path.el-progress-circle__path {
        stroke: #ffffff;
    }

</style>