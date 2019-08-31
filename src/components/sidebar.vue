<template>
  <div class="left-tab">
    <div class="tab-item" @click="switchTo('/')">
    <div class="beforeline"></div>
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
.left-tab{
  position: fixed;
    width:3rem;
    height:10rem;
    background-color: #fff;
    left:-1.5rem;
    top: 15%;
    display:flex;
    border: grey 0.5px solid;
    border-radius: 30px;
    border-left:none;
    z-index:999;
    .tab-item{
      position: relative;
      left:1.5rem;
      width: 100%;
      height: 2rem;
      font-size:0.28rem;
      color:#666;
      .beforeline{
      position: relative;
      left: 0.05rem;
      background-color: yellow;
      height: 2rem;
      width: 0.1rem
    }
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