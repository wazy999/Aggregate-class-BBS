<template>
    <div class="nav-page" v-show="navVisible" >
        <div class="nav-list">
            <div class="themeColor--pink">
                <div class="nav-item" @click="isSelected('love')" :class="{'navBg': selectItem == 'love'}">
                    <div class="side-line"></div>
                    <div class="nav-icon">
                        <img src="../assets/image/love_g.png"/>
                        <span>收藏</span>
                    </div>
                </div> 
            </div>
            <div class="themeColor--yellow">
                <div class="nav-item"  @click="isSelected('his')" :class="{'navBg': selectItem == 'his'}">
                    <div class="side-line"></div>
                    <div class="nav-icon">
                        <img src="../assets/image/his_g.png"/>
                        <span>历史</span>
                    </div>
                </div> 
            </div>
            <div class="themeColor--blue">
                <div class="nav-item"  @click="isSelected('week')" :class="{'navBg': selectItem == 'week'}">
                    <div class="side-line"></div>
                    <div class="nav-icon">
                        <img src="../assets/image/week_g.png"/>
                        <span>统计</span>
                    </div>
                </div> 
            </div>
            <div class="themeColor--green" style="position: relative;">
                <div class="nav-item"  @click="isSelected('set')" :class="{'navBg': selectItem == 'set'}">
                    <div class="side-line"></div>
                    <div class="nav-icon">
                        <img src="../assets/image/set_g.png"/>
                        <span>设定</span>
                    </div>
                </div> 
                <div class="set-option" :class="{'setShow': !setVisible}">
                    <div class="set-item">
                        <span class="option-span">风格设定</span>
                        <span class="option-span">版块管理</span>
                        <span class="option-span">登录管理</span>
                    </div>
                </div>
            </div>
            <div class="themeColor--purple" style="position: relative;">
                <div class="nav-item"  @click="isSelected('block')" :class="{'navBg': selectItem == 'block'}">
                    <div class="side-line"></div>
                    <div class="nav-icon">
                        <img src="../assets/image/block_g.png"/>
                        <span>版块</span>
                    </div>
                </div>           
                <div class="block-option" :class="{'blockShow': !blockVisible}">
                    <div class="block-item">
                        <span class="option-span" @click="goPage('index')">时间线</span>
                        <span class="option-span" style="background: #fef8d3;" @click="goPage('singleForum', '百度贴吧', 'yellow')">百度贴吧</span>
                        <span class="option-span" style="background: #ffecf6;" @click="goPage('singleForum', '猫扑', 'pink')">猫扑</span>
                        <span class="option-span" style="background: #c1efe7;" @click="goPage('singleForum', 'STAGE1-动漫', 'green')">STAGE1-动漫</span>
                        <span class="option-span" style="background: #bde0f0;" @click="goPage('singleForum', '知乎', 'blue')">知乎</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['navVisible'],
    data(){
        return{
            selectItem: '',
            setVisible: false,
            blockVisible: false,
        }
    },
    methods:{
        isSelected(val){
            if(val === 'set'){
                this.setVisible = !this.setVisible 
            }else{
                this.setVisible = false
            }
            if(val === 'block'){
                this.blockVisible = !this.blockVisible 
            }else{
                this.blockVisible = false
            }
            if(val === 'week'){
                this.$router.push({path: 'data'})
            }
            this.selectItem = val
        },
        goPage(val,forumName,forumColor){
           this.$router.push({path: val, query:{forumName,forumColor}})
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-page{
    .nav-list{
        $themeColor1: #F99DCE;
        font-size: 0.32rem;
        width: 1.6rem;
        padding: 0.5rem 0 0.5rem 0;
        border: 0.02rem solid #959595;
        border-left: none;
        box-sizing: border-box;
        border-radius: 0 0.4rem 0.4rem 0;
        height: 9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #fff;
        .nav-item{
            width: 100%;
            height: 1.5rem;
            position: relative;
            display: flex;
            padding: 0.1rem 0 0.1rem 0;
            box-sizing: border-box;
            .nav-icon{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 1.6rem;
                // position: relative;
                z-index: 999;
                img{
                    height: 0.6rem;
                    width: 0.6rem;
                    margin-bottom: 0.1rem;
                }
                span{
                    display: inline-block;
                    color: #aeaeae;
                    font-size: 0.32rem;
                }
            }
            .side-line{
                position: absolute;
                z-index: 0;
                height: 1.3rem;
                width: 0.1rem;
                display: block;
            }
        }
        .set-option{
            position: absolute;
            height: 3.6rem;
            overflow: hidden;
            left: 1.8rem;
            top: 0;
            transition: height 0.4s;
            .set-item{
                display: flex;
                // margin-left: 1.8rem;
                justify-content: flex-start;
                flex-direction: column;
                span{
                    box-sizing: border-box;
                    display: inline-block;
                    color:#959595;
                    margin-bottom: 0.2rem;
                    height: 1rem;
                    line-height: 1rem;
                    padding-left: 0.5rem;
                    width: 3rem;
                    border-radius: 0 0.5rem 0.5rem 0;
                }
            }
        }
        .block-option{
            position: absolute;
            height: 6rem;
            overflow: hidden;
            left: 1.8rem;
            bottom: 0;
            transition: height 0.4s;
            .block-item{
                display: flex;
                // margin-left: 1.8rem;
                justify-content: flex-start;
                flex-direction: column;
                span{
                    box-sizing: border-box;
                    display: inline-block;
                    color:#959595;
                    margin-bottom: 0.2rem;
                    height: 1rem;
                    line-height: 1rem;
                    padding-left: 0.5rem;
                    width: 3rem;
                    border-radius: 0 0.5rem 0.5rem 0;
                }
            }
        }

        // 主题色控制
        $themeColor: ('green', #33c9b0, #b2f0e6),
                    ('pink', #f99dce, #ffcfe9),
                    ('yellow', #fee432, #fff6b7),
                    ('blue', #6CA8C2, #fff6b7),
                    ('purple', #DD98E2, #ffecf6),;
        @each $name, $bgColor, $subColor in $themeColor{
            .themeColor--#{$name}{
                .side-line{
                    background: $bgColor;
                }
                .navBg{
                    .side-line{
                        width: 100%;
                        transition: width 0.4s;
                    }
                    .nav-icon{
                        span{
                            color: #fff;
                        }
                    }
                }
                .option-span{
                    background: $subColor;
                    position: relative;
                    &::before{
                        content: '';
                        width: 0.1rem;
                        height: 1rem;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: $bgColor;
                    }
                }
            } 
        }
        .setShow{
            height: 0;
            transition: height 0.4s;
        }    
        .blockShow{
            height: 0;
            transition: height 0.4s;
        }
    }
}
</style>