<template>
  <div class="key-word">
      <div class="bg-line">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      <!-- 溢出滚动  改变滚动样式 -->
      <div class="word-list">
          <ul>
              <li v-for="(item, index) in wordList" :key="index"
              :class="{'themeColor--green' : item.themeColor == 'green','themeColor--pink' : item.themeColor == 'pink','themeColor--yellow' : item.themeColor == 'yellow',}"
               >
                  <span class="item-title" >{{item.title}}</span>
                  <el-progress type="circle" 
                    :percentage="item.percentage" 
                    :width = '45' 
                    :format="format" 
                    >
                  </el-progress>
                  <span class="item-progress" :style="{height: (item.height + 0.8) + 'rem'}"></span>
                  <span class="row-line"></span>
              </li> 
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    props:['keyword1'],
    props:['keyword2'],
    data() {
        return{
            wordList :[
                {percentage: 0, height: 2, title: '资本', num: 200, themeColor: 'green'},
                {percentage: 0, height: 3, title: '2号机', num: 302, themeColor: 'pink'},
                {percentage: 0, height: 1.2, title: '压榨', num: 113, themeColor: 'yellow'},
                {percentage: 0, height: 0.5, title: '资本', num: 222, themeColor: 'green'},
                {percentage: 0, height: 1, title: '资本', num: 23, themeColor: 'pink'},             
            ],
            totalWord: 0,
            maxWordNum: 0,
        }
    },
    mounted(){
        this.dataTidy()
    },
    methods:{
        //数据整理
        dataTidy(){
            let wordNum = []
            for (let obj of this.wordList){
                this.totalWord += obj.num
                wordNum.push(obj.num)
            }
            this.maxWordNum = Math.max(...wordNum)
            //关键词百分比、柱状高度计算
            for (let obj of this.wordList){
                let per = obj.num / this.maxWordNum
                obj.percentage = obj.num / this.totalWord *100
                obj.height = per * 2.4 + 0.8
            }
        },
        format(val) {
            if(this.totalWord){
                console.log(val)
                return `${val * this.totalWord /100 }`
            }
        },
    }

}
</script>

<style lang="scss">
//  @import '../assets/main.scss';
   .key-word{
        height: 6rem;
        position: relative;
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
       .word-list{
           position: absolute;
           padding-left: 0.52rem;
           z-index: 999;
           bottom: 0;
           height: 5.4rem;
           ul{
               list-style: none;
               display: flex;
               justify-content: center;
               align-items: flex-end;
               height: 100%;
               li{
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
                        // 环形进度条颜色控制
                        .el-progress--circle .el-progress__text, .el-progress--dashboard .el-progress__text {
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
               &::before{
                    content: '';
                    position: absolute;
                    left: -0.48rem;
                    bottom: 0.8rem;
                    display: inline-block;
                    background-color: #6ca8c2;
                    height: 0.12rem;
                    width: 100%;
               }
  
           }
       }
   }
   
</style>