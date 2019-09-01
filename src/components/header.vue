<template>
  <div class="project-header">
    <div class="top-foroum">
        <div v-show="iconType == 'navShow'" class="nav">
            <img src="../assets/image/headerIcon.png"  @click="openSideNav" />
            <span class="pageName">{{pageName}}</span>
        </div>
        <div v-show="iconType == 'backShow'" class="back">
            <i class="el-icon-arrow-left" @click ='backPage'></i>
            <span class="pageName">{{pageName}}</span>
        </div>

    </div>
    
  </div>
</template>

<script>
export default {
    props: ['pageName','iconType'],
    data(){
        return{
            navShow: false,
            type: 'navShow'
        }
    },
    methods:{
        openSideNav(){
            this.navShow = !this.navShow
            this.$emit('openNav', this.navShow)
        },
        backPage(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
.project-header{
    float: left;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 1rem;
    padding: 0.1rem 0 0.08rem 0;
    font-size: 0.36rem;
    background: #faf9fb;
    z-index: 999;
    .top-foroum{
        .nav{
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
        .back{
            i{
                width: 0.8rem;
                color:#6ca8c2;
                padding-left: 0.32rem;
                font-size: 0.7rem;
                vertical-align: middle;
            }   
            span{
                vertical-align: middle;
                color:#6ca8c2;
                margin-left: 0.1rem;
            } 
        }

    }
}
</style>