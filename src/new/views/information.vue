<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: "\00A0";
    display: block;
    visibility: hidden;
    width: 0;
    height: 0;
    clear: both;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
}

.box(@line) {
    display: -webkit-box;
    -webkit-line-clamp: @line;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.nowrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.conentwrap {
    background: #f5f5f5;
}

.infoTab_wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
    line-height: 0.9rem;
    background: #fff;
    font-size: 0.28rem;
    color: #323232;
    box-sizing: border-box;
    text-align: left;
    white-space: nowrap;
    overflow-x: scroll;
    height: 0.9rem;
    &::-webkit-scrollbar {
        display: none;
    }
    span {
        padding: 0 0.5rem;
        display: inline-block;
        &:last-child {
            margin-right: 0;
        }
    }
    span.active {
        color: #d7000f;
    }
}
</style>
<style lang="less">
.swipe_wrap {
    .vux-swiper {
        height: 100%;
        margin-top: 0.9rem;
        box-sizing: border-box;
    }

}
.classname {
    .vux-swiper {
        height: 100%;
        margin-top: 0;
        box-sizing: border-box;
    }
}
</style>
<template>
<div class="conentwrap" :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]">
    <!-- 咨讯tab导航 -->
    <div v-if="!isClassName" class="infoTab_wrap">
        <span v-for="(item,index) in tabs" :key="item.id" v-if="item.isShow" :class="{'active':index==activeindex}" @click="changeSwiper(index)">{{item.name}}</span>
    </div>
    <!-- 咨讯列表组件 -->
    <swiper v-if="!isClassName" @on-index-change="switchlist" v-model="activeindex" :show-dots="false" :height="swiperH" :threshold="100" :duration="300" ref="swiperWrap" :min-moving-distance="100" class="swipe_wrap">
        <swiper-item :key="index" v-for="(item,index) in tabs" class="swipercontent" ref="swpierConter">
            <information-list :classId="item.id" :pageNo="item.cuurentPage" key="item.id"></information-list>
        </swiper-item>
    </swiper>
    <swiper v-else @on-index-change="switchlist" v-model="activeindex" :show-dots="false" :height="swiperH" :threshold="100" :duration="300" ref="swiperWrap" :min-moving-distance="100" class="swipe_wrap" :class="{'classname':isClassName}">
        <swiper-item :key="index" v-for="(item,index) in tabs" class="swipercontent" ref="swpierConter">
            <information-list :className="item.className" :pageNo="item.cuurentPage" key="index"></information-list>
        </swiper-item>
    </swiper>
</div>
</template>
<script>
import informationList from "../components/newhouse/informationList"; //资讯列表组件
import {
    Tab,
    TabItem,
    Swiper
}
from "vux";
export default {
    data() {
        return {
            tabs: [],
            activeindex: 0,
            swiperH: '',
            className: '',
            keepType: null //0:全部资讯 1:单个列表
        }
    },
    components: {
        informationList,
        Tab,
        TabItem,
        Swiper
    },
    computed: {
        isClassName() {
            if (this.$route.query.param) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        switchlist(cuurindex) {
            //咨讯列表，左右滑动切换tab导航
            this.activeindex = cuurindex;
            this.$nextTick(() => {
                document.querySelector(".active").scrollIntoView(false);
            })
        },
        changeSwiper(index) {
            //点击tab导航，切换咨讯列表
            this.activeindex = index;
        }
    },
    created() {
        //请求tab导航咨讯分类列表
        if(!this.keepType){
            if (this.$route.query.param) {
                this.keepType = 2;
                this.tabs = [{
                    className: this.$route.query.param,
                    cuurentPage: 0
                }]
            } else {
                this.keepType = 1;
                this.get("/consultClassApp/getShowClassByApp", {
                    interfaceType: 'newhouse'
                }).then(res => {
                    if (res.data != null) {
                        res.data.forEach(item => {
                            let obj = {};
                            obj.id = item.id;
                            obj.name = item.name;
                            obj.isShow = item.isShow;
                            obj.cuurentPage = 0;
                            this.tabs.push(obj);
                        })
                    }
                    //console.log(this.tabs)

                })
            }
        }

    },
    mounted: function() {
        //动态设置swiper高度
        if (this.isClassName) {
            this.swiperH = this.$el.offsetHeight + 'px';
        } else {
            this.swiperH = (this.$el.offsetHeight - document.querySelector(".infoTab_wrap").offsetHeight) + 'px';
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (vm.getSession("ViewScrollTop")) {
                setTimeout(() => {
                    vm.$refs.swpierConter[vm.activeindex].$children[0].$refs.swiperScroll.scrollTo(0, vm.getSession("ViewScrollTop"), false);
                }, 0)
            }
        })

    },
    beforeRouteLeave(to, from, next) {
        //判断是否打开详情页
        if (to.name == "informationDetail") {
            let n = this.activeindex;
            this.setSession("ViewScrollTop", this.$refs.swpierConter[n].$children[0].$refs.swiperScroll.getPosition().top);
            //console.log("缓存" + this._uid);
        } else {
            this.setSession("ViewScrollTop", undefined);
            //this.$destroy();
            //console.log("缓存" + this._uid);
        }
        next()
    },
    activated() {
        if (this.$route.query.param) {
            if (this.keepType == 1) {
                this.tabs = [{
                    className: this.$route.query.param,
                    cuurentPage: 0
                }];
                this.activeindex = 0;
                this.keepType = 2;
            }
        } else {
            if (this.keepType == 2) {
                this.keepType = 1;
                this.tabs = [];
                this.get("/consultClassApp/getShowClassByApp", {
                    interfaceType: 'newhouse'
                }).then(res => {
                    if (res.data != null) {
                        res.data.forEach(item => {
                            let obj = {};
                            obj.id = item.id;
                            obj.name = item.name;
                            obj.isShow = item.isShow;
                            obj.cuurentPage = 0;
                            this.tabs.push(obj);
                        })
                    }
                    //console.log(this.tabs)

                })
            }
        }
    }

}
</script>
