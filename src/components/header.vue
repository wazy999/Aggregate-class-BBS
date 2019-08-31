<template>
  <div class="project-header">
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
    float: left;
    position: relative;
    top: 0;
    left: 0;
    width:100%;
    height: 1rem;
    padding: 0.1rem 0 0.08rem 0;
    font-size: 0.36rem;
    background: #faf9fb;
    .top-foroum{
        img{
            width: 0.8rem;
            height: 0.8rem;
            padding-left: 0.32rem;
            vertical-align: middle;
        }
        span{
            vertical-align: bottom;
            color:#6ca8c2;
            margin-left: 0.1rem;
        }
    }
}
</style>