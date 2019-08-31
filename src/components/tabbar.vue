<template>
  <div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/')">
            <img :src="'/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
            <span :class="{on: '/' === $route.path}">首页</span>
        </div>
    <div class="tab-item" @click="switchTo('/data')">
            <img :src="'/data' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="数据统计">
            <span :class="{on: '/data' === $route.path}">数据统计</span>
        </div>
  </div>
</template>

<script>
export default {
    data(){
       return{ tabBarImgArr:[   //图片切换
            {normal: require('../assets/image/icon_home.png'), selected: require('../assets/image/icon_home_selected.png')},
            {normal: require('../assets/image//icon_intro.png'), selected: require('../assets/image/icon_intro_selected.png')},
        ]
       }
    },
    methods:{
    switchTo(path){
      // console.log(this.$router)
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="scss">
.bottom-tab{
    width:100%;
    height:1.5rem;
    background-color: #fff;
    position :fixed;
    left:0px;
    bottom:0px;
    display:flex;
    z-index:999;
    .tab-item{
      display :flex;
      flex :1;
      flex-direction :column;
      align-items :center;
      justify-content :center;
      font-size:0.28rem;
      color:#666;
      img{
         width :20%;
         margin-bottom :2px;
      }
      .on{
        color: red;
      }
    }
}
</style>