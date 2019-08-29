<template>
  <div class="project-header">
    <div class="top-iphone">
        <img src="../assets/image/header.png" style="width: 100%;" />
    </div>
    <div class="top-foroum">
        <img src="../assets/image/headerIcon.png"/>
        <span class="pageName">{{pageName}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: ['pageName'],
}
</script>

<style lang="scss">
.project-header{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    // height: 1.28rem;
    padding: 0;
    font-size: 0.32rem;
    background: #faf9fb;
    z-index: 999;
    .top-iphone{
        padding: 0 0.32rem;

    }
    .top-foroum{
        img{
            width: 0.8rem;
            height: 0.8rem;
            padding-left: 0.32rem;
            vertical-align: middle;
        }
        span{
            vertical-align: middle;
            color:#6ca8c2;
            margin-left: 1.8rem;
        }
    }
}
</style>