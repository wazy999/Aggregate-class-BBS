<template>
  <div class="data-page">
    <!-- 
      1.页面布局
      2.进度条过渡增长
      3.底部图形横向滑动
      4.细节调整
     -->
    <forum-header></forum-header>
    <div class="data-statistics">
      <div class="data-select">
          <span :class="{active : isSelected == 'day', brother: isSelected == 'week'}" @click="dateSelect('day')">日</span>
          <span :class="{active : isSelected == 'week', brother: isSelected == 'month'}" @click="dateSelect('week')">周</span>
          <span :class="{active : isSelected == 'month', brother: isSelected == 'year'}" @click="dateSelect('month')">月</span>
          <span :class="{active : isSelected == 'year'}" @click="dateSelect('year')">年</span>
      </div>
      <div class="data-up-title"><span>绊爱</span></div>
      <div class="card-list">
        <card></card>
      </div>
      <div class="data-down-title"><span>词频统计</span></div>
      <div class="key-word">
        <key-word></key-word>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/header'
import card from '@/components/card'
import keyWord from '@/components/keyWord'
export default {
  data() {
    return {
      isSelected: 'day',
    }
  },
  components:{
    forumHeader: header,
    card,
    keyWord
  },
  methods: {
    dateSelect(val){
      this.isSelected = val
    }
  }
}
</script>

<style lang="scss" scoped>
.data-page{
   position: relative;
  //  height: 600px;
  .data-statistics{
     font-size: 0.32rem;
     $themeColor: #6ca8c2;
     .blue-bg{
       background-color: $themeColor;
       color: #fff;
       display: inline-block;
       margin-left: 0.48rem;
     }
     .data-select{
       margin: 1.5rem 0.32rem 0.4rem;
       border: 0.02rem solid $themeColor;
       border-radius: 0.5rem;
       text-align: right;
       display: flex;
       justify-content: space-between;
       transition: all 0.3s cubic-bezier(.55,0,.1,1);
       span{
         display: inline-block;
         padding: 0.05rem 0.32rem;
         font-size: 0.24rem;
         border-right: 0.02rem solid $themeColor;
         border-radius: 0.5rem;
         box-sizing: border-box;
        &:not(active){
          width: 1.2rem;
          border-right: 1px solid $themeColor;
        }
        &:nth-last-child(1){
          border: none;
        }
       }
      .active{
        width: 3.2rem;
        background-color: $themeColor;
        color: #fff;
        transition: width 0.3s cubic-bezier(.55,0,.1,1);
      }
      .brother{
        border: none;
      }
      
     }
     .data-up-title{
       span{
        @extend .blue-bg;
        border-radius: 0.26rem;
        padding: 0.08rem 0.36rem;
       }
     }
     .data-down-title{
       span{
        @extend .blue-bg;
        font-size: 0.24rem;
        border-radius: 0 0.26rem 0.26rem 0;
        padding: 0.08rem 0.36rem;
       }
     }
   }
  // .key-word{
  //   position: absolute;
  //   bottom: 0;
  // }
}
</style>