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
              <li v-for="(item, index) in wordList" :key="index">
                  <el-progress type="circle" :percentage="item.num" width="40"></el-progress>
              </li> 
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            wordList :[{num: 30},{num: 20},{num: 20},{num: 50},{num: 42}]
        }
    },

}
</script>

<style lang="scss">
//  @import '../assets/main.scss';
   .key-word{
       .bg-line{
           width: 100%;
           height: 6rem;
           position: relative;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           span{
               height: 1.2rem;
               border: 0.02rem solid #f2f7fa;
           }
           &::before{
               content: '';
               position: absolute;
               top: 0;
               left: 0.52rem;
               height: 100%;
               width: 0.2rem;
               border-left: 0.02rem solid #f2f7fa;
           }
       }
       .word-list{
           padding-left: 0.52rem;
           ul{
               list-style: none;
               display: flex;
               justify-content: space-between;
               li{
                   width: 1.28rem;
                   height: 100%;
                   position: relative;
                   el-progress{
                    &::before{
                        content:"";

                    }
                   }
               }
           }
       }
   }
</style>