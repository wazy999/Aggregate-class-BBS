<template>
  <div>
    <!-- 头部固定信息 -->
    <forum-header></forum-header>
    <div class="data-statistics">
      <div class="data-sort">
        <span>日</span><span>周</span><span>月</span><span>年</span>
      </div>
      <div>绊爱</div>
      <div class="cardList">
        <card></card>
      </div>
      <div>词频统计</div>
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
  components:{
    forumHeader: header,
    card,
    keyWord
  }
}
</script>

<style lang="scss" scoped>
  .data-statistics{
     margin-top: 63.2px;
     font-size: 0.32rem;
  }
</style>