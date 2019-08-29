<template>
  <div>
    <!-- 头部固定信息 -->
    <forum-header :pageName = "title"></forum-header>
    <!-- 页面主要内容 -->
    <div class="post-detail">
        <span>李树霖</span>
    </div>
  </div>
</template>

<script>
import header from '@/components/header'
export default {
  components:{
    forumHeader: header
  },
  data(){
      return{
          title: '帖子详情页',
      }
  },
  mounted() {

  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  .post-detail{
     margin-top: 63.2px;
     font-size: 0.32rem;
  }
</style>