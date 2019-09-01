<template>
  <div class="data-page" >
    <forum-header :pageName="'数据统计'" @openNav = "toggleNav"></forum-header>
    <side-nav :navVisible = "sideNavShow" style="z-index: 999; position: fixed; top: 2rem; left: 0;"></side-nav>
    <div class="data-statistics" style="margin-top: 1.2rem;">
      <div class="page-mask" @click = "closeNav" :class="{'close-mask' : !sideNavShow}"></div>
      <div class="data-select">
          <span :class="{active : isSelected == 'day', brother: isSelected == 'week'}" @click="dateSelect('day')">日</span>
          <span :class="{active : isSelected == 'week', brother: isSelected == 'month'}" @click="dateSelect('week')">周</span>
          <span :class="{active : isSelected == 'month', brother: isSelected == 'year'}" @click="dateSelect('month')">月</span>
          <span :class="{active : isSelected == 'year'}" @click="dateSelect('year')">年</span>
      </div>
      <div class="card-list">
        <card :timeType="isSelected" @cardPageChange="pageChange"></card>
      </div>
      <div class="key-word">
        <key-word :timeType="isSelected" :page = 'page'></key-word>
      </div>
    </div>
    <!-- <forum-tabbar></forum-tabbar> -->
  </div>
</template>

<script>
import header from '@/components/header'
import card from '@/components/card'
import keyWord from '@/components/keyWord'
import tabbar from '@/components/tabbar'
import nav from '@/components/nav'

export default {
  data() {
    return {
      isSelected: 'day',
      sideNavShow: false,
      page: 0,
    }
  },
  components:{
    forumHeader: header,
    forumTabbar: tabbar,
    card,
    keyWord,
    sideNav: nav
  },
  methods: {
    dateSelect(val){
      this.isSelected = val
    },
    pageChange(data){
      this.page = data
    },    
    toggleNav(data){
      this.sideNavShow = data
    },
    closeNav(){
      this.sideNavShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.data-page{
   position: relative;
  //  margin-top: 63.2px;
  //  height: 600px;
  .data-statistics{
     font-size: 0.32rem;
     $themeColor: #6ca8c2;
     height: -webkit-fill-available;
     .data-select{
       margin: 0 0.32rem 0.4rem;
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
         color: $themeColor;
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
          background-color: $themeColor;
          color: #fff;
          display: inline-block;
          margin-left: 0.48rem;
          border-radius: 0.26rem;
          padding: 0.08rem 0.36rem;
       }
     }
   }
  .key-word{
    position: relative;
    margin-top: 0.52rem;
  }
  .page-mask{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    transition: width 0.1s;
  }
  .close-mask{
    width: 0;
    transition: width 0.1s;
  }
}
</style>