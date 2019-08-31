<template>
    <div class="tab-container">
        <div class="tabswiper"
             :class="{'invisible':invisible}"
             @touchstart="onTouchStart">
            <ul class="tabswiper-wrap"
                 ref="tabswiper-wrap"
                 :class="{'dragging': dragging}"
                 :style="{'transform' : 'translate3d(' + translateX + 'px,0, 0)'}"
                 @transitionend="onTransitionEnd">
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<script type="text/babel">

    const JUDGE_INITIAL = 0
    const JUDGE_SLIDEING = 1
    const JUDGE_SCROLLING = 2


    const replaceAll=(str,target,replace)=>{
        var reg="/"+target+"/g";    //查找时忽略大小写
        reg=eval(reg);
        return str.replace(reg,replace)
    }
    const addClass=(el,className)=>{
        if (!className) 
            return false;
        className = className.trim('').replace(/\s+/, ' ').split(' ');
        el.className += ' ' + className.join(' ');
        return true;
    };
    const removeClass=(el,className)=>{
        if (!className) 
            return false;
        className = className.trim('').replace(/\s+/, ' ').split(' ');
        var cls = ' ' + el.className + ' ';
                className.forEach(function (item)
                {
                    item = ' ' + item;
                    cls = replaceAll(cls,item, ' ');
                });
                el.className = cls.trim();
        return true;
    };

   export default {
        props: {
            curPage: {
                type: Number,
                default: 1
            },
        },
        watch: {
            curPage: function (val) {
                this.setPage(val)
            }
        },
        data() {
            return {
                lastPage: 1,
                currentPage: this.curPage,
                translateX: 0,
                startTranslateX: 0,
                delta: 0,
                deltaY: 0,
                dragging: false,
                startPos: null,
                startPosY: null,
                transitioning: false,
                slideEls: [],
                invisible: true,
                judge: JUDGE_INITIAL,
            };
        },
        mounted(){
            this.$nextTick(function () {
                this.onTouchMove = this.onTouchMove.bind(this);
                this.onTouchEnd = this.onTouchEnd.bind(this);
                // 获取全部卡片dom结点列表
                this.slideEls = this.$refs['tabswiper-wrap'].children;
                // console.log(this.slideEls)
                this.dragging = true;
                this.setPage(this.currentPage);
                let _this = this;
                setTimeout(() => {
                    _this.dragging = _this.invisible = false;
                }, 100)
                window.onresize=()=>{
                    _this.setPage(_this.currentPage)
                }
            })
        },
        methods: {
            next() {
                var page = this.currentPage;
                if (page < this.slideEls.length) {
                    page++;
                    this.setPage(page);
                } else {
                    this.revert();
                }
            },
            prev() {
                var page = this.currentPage;
                if (page > 1) {
                    page--;
                    this.setPage(page);
                } else {
                    this.revert();
                }
            },
            // 重置页面
            setPage(page) {
                this.$emit('pageChange',page)
                this.lastPage = this.currentPage;
                this.currentPage = page;
                let res = [].reduce.call(this.slideEls, function (total, el, i) {
                    //previousValue,currentValue,currentIndex
                    //  console.log("当前元素的索引:",i)
                    // console.log("要返回的值:",total)
                    // console.log("当前元素:", el)
                    return i > page - 2 ? total : total + el['clientWidth'];
                }, 0);
                this.translateX = -res
                // console.log(res,-res,this.translateX)
                this.onTransitionStart();
            },
            onTouchStart(e) {
                this.startPos = this.getTouchPos(e);
                this.startYPos = this.getTouchYPos(e);
                this.delta = 0;
                this.startTranslateX = this.translateX;
                this.startTime = new Date().getTime();
                this.dragging = true;

                document.addEventListener('touchmove', this.onTouchMove, false);
                document.addEventListener('touchend', this.onTouchEnd, false);
            },
            onTouchMove(e) {
                this.delta = this.getTouchPos(e) - this.startPos;
                this.deltaY = Math.abs(this.getTouchYPos(e) - this.startYPos);

                switch (this.judge) {
                    case JUDGE_INITIAL:
                        // if (Math.abs(this.delta) > 20 && this.deltaY<25) {//judge to allow/prevent scroll
                        if (Math.abs(this.delta) / this.deltaY > 1.5) {//judge to allow/prevent scroll
                            this.judge = JUDGE_SLIDEING
                            e.preventDefault();
                            e.stopPropagation()
                        } else {
                            this.judge = JUDGE_SCROLLING
                        }
                        break;
                    case JUDGE_SCROLLING:

                        break;
                    case JUDGE_SLIDEING:
                        e.preventDefault();
                        e.stopPropagation()
                        this.translateX = this.startTranslateX + this.delta;
                        break;

                    default:

                        break;
                }

            },
            // 页面跳转
            onTouchEnd(e) {
                this.dragging = false;
                if (this.judge == JUDGE_SLIDEING) {
                    var isQuickAction = new Date().getTime() - this.startTime < 1000;
                    if (this.delta < -100 || (isQuickAction && this.delta < -15 && this.deltaY / this.delta > -6)) {
                        this.next();
                    } else if (this.delta > 100 || (isQuickAction && this.delta > 15 && this.deltaY / this.delta < 6)) {
                        this.prev();
                    } else {
                        this.revert();
                    }
                }
                this.judge = JUDGE_INITIAL
                document.removeEventListener('touchmove', this.onTouchMove);
                document.removeEventListener('touchend', this.onTouchEnd);
            },
            revert() {
                this.setPage(this.currentPage);
            },
            getTouchPos(e) {
                var key = 'pageX';
                return e.changedTouches ? e.changedTouches[0][key] : e[key];
            },
            getTouchYPos(e) {
                var key = 'pageY';
                return e.changedTouches ? e.changedTouches[0][key] : e[key];
            },
            onTransitionStart() {
                this.transitioning = true;
                if (this.isPageChanged()) {
                    this.$emit('tab-change-start', this.currentPage);
                    //FIX:remove the height of the hidden tab-items
                    [].forEach.call(this.slideEls,(item,index)=>{
                        if (index== (this.currentPage-1)) {
                            removeClass(item,'hide-height')
                        }
                        else {
                            addClass(item,'hide-height')
                        }
                    })
                } else {
                    this.$emit('tab-revert-start', this.currentPage);
                }
            },
            onTransitionEnd(e) {
                e.stopPropagation()
                if (e.target.className != 'tabswiper-wrap') return;
                this.transitioning = false;
                if (this.isPageChanged()) {
                    this.$emit('tab-change-end', this.currentPage);
                } else {
                    this.$emit('tab-revert-end', this.currentPage);
                }
            },
            isPageChanged() {
                return this.lastPage !== this.currentPage;
            }
        }
    };
</script>

<style>
    .tab-container{
        width: 100%;
    }
    .invisible{
        visibility:hidden;
    }
    .tabswiper {
      position: relative;
      overflow: hidden;
    }
    .tabswiper-wrap {
        display: flex;
        /* display: inline-flex; */
        width: 100%;
        height: 100%;
        transition: all 0.3s cubic-bezier(.55,0,.1,1);
        flex-direction: row;
    }
    .tabswiper-wrap.dragging{
        transition: none;
    }
    .tab-container .tabswiper-wrap> li {
        overflow-x: hidden; 
        flex-shrink: 0;
        width: 100%;
        margin: 0px;
        padding: 0px;
        height: inherit;
    }
    .tabswiper-wrap> .hide-height {
        height: 0px;
        transition: height 1s cubic-bezier(.55,0,.1,1);
    }
    ::-webkit-scrollbar  
    {  
        width: 0px;  
    }  
</style>
