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

.infolistwrap {
    padding: 0 0.2rem 1rem;
    box-sizing: border-box;
    overflow: hidden;
    a:last-child {
        .info_box {
            margin-bottom: 1rem;
        }
    }
}

.info_box {
    background: #fff;
    padding: 0.2rem 0.15rem;
    border-radius: 0.1rem;
    margin-bottom: 0.1rem;
    box-sizing: border-box;
}

.info_img {
    width: 2.4rem;
    height: 1.8rem;
    img {
        width: 100%;
        height: 100%;
        border-radius: 0.08rem;
        overflow: hidden;
        object-fit: cover;
    }
}

.info_text {
    box-sizing: border-box;
    height: 1.8rem;
    padding-left: 0.27rem;
}

.info_tit {
    text-align: left;
    height: 0.88rem;
    padding: 0;
    line-height: 0.44rem;
    font-size: 0.26rem;
    color: #323232;
    .box(2);
}

.info_source {
    text-align: left;
    font-size: 0.22rem;
    line-height: 0.52rem;
    color: #757575;
    .nowrap;
}

.info_state {
    font-size: 0.22rem;
    color: #757575;
    text-align: left;
    line-height: 0.4rem;
}

.info_time {
    float: left;
    width: 50%;
    .nowrap;
}

.info_look {
    float: left;
    width: 50%;
    text-align: right;
    .nowrap;
}

.swiperScroll {
    padding: 0.15rem 0.2rem;
    box-sizing: border-box;
}
</style>
<style lang="less">
.vux-loading {
    font-size: 0.3rem;
}
</style>
<template>
<!-- 资讯列表组件 -->
<div class="infolistwrap">
    <keep-alive>
        <scroller :on-refresh="refresh" :on-infinite="loadmore" ref="swiperScroll" refreshText="下拉刷新" noDataText="无更多资讯" class="swiperScroll">
            <router-link v-for="(item,index) in infolists" :to="{ path: 'informationDetail', query: { id:item.id,param:className}}" :key="item.id">
                <flexbox class="info_box" :gutter="0">
                    <div class="info_img">
                        <img :src="item.imgsrc" alt="">
                    </div>
                    <flexbox-item class="info_text">
                        <div class="info_tit">
                            {{item.tit}}
                        </div>
                        <div class="info_source">来自{{item.source}}</div>
                        <div class="info_state clearfix">
                            <span class="info_time">{{item.time}}</span>
                            <span class="info_look">{{item.look}}人查看</span>
                        </div>
                    </flexbox-item>
                </flexbox>
            </router-link>
        </scroller>
    </keep-alive>
</div>
</template>

<script>
import {
    Flexbox,
    FlexboxItem
}
from "vux";
export default {
    name: 'informationlist',
    data() {
        return {
            infolists: [],
            city: this.$store.state.area,
            nextPage: 0,
            loadingmore: false,
            activeState: false
        }
    },
    props: {
        classId: {
            type: String,
            default: ''
        },
        pageNo: {
            type: Number,
            default: 0
        },
        className: {
            type: String,
            default: ''
        }
    },
    computed: {},
    components: {
        Flexbox,
        FlexboxItem
    },
    methods: {
        /**
         * 请求资讯列表
         * @param  {[String]} classId [资讯分类ID]
         * @param  {[Number]} pagenum [当前分类页码]
         * @param  {[String]} city    [城市]
         */
        updata(classId, className, pagenum, city) {
            this.$vux.loading.show();
            this.loadingmore = true;
            let opt = {};
            if (className) {
                opt = {
                    "className": className,
                    "city": city,
                    "pageNo": pagenum
                }
            } else {
                opt = {
                    "consultClassId": classId,
                    "city": city,
                    "pageNo": pagenum
                }
            }
            // console.log(opt);
            this.post('/consult/appPageList', opt, {
                    interfaceType: "newhouse"
                })
                .then(response => {
                    if (response.data.data) {
                        response.data.data.forEach((item, i) => {
                            let obj = {};
                            obj.id = response.data.data[i].id;
                            obj.imgsrc = this.concatFileUrl(response.data.data[i].pictureURL);
                            obj.tit = response.data.data[i].name;
                            obj.source = response.data.data[i].source;
                            obj.time = new Date(this.GetDateDiff(response.data.data[i].updateTime)).Format("yyyy.MM.dd");
                            obj.look = response.data.data[i].browseQuantity;
                            this.infolists.push(obj);
                        })
                        this.loadingmore = false;
                        this.nextPage++
                    }

                    //console.log(response)
                }).then(
                    () => {
                        this.$vux.loading.hide();
                    }
                )
        },
        GetDateDiff(date) {
            //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
            let time = date.replace(/\-/g, "/");
            return time;
        },
        refresh() {
            //下拉刷新
            this.infolists = [];
            this.nextPage = 0;
            setTimeout(() => {
                this.updata(this.classId, this.className, 0, this.city);
                this.$refs.swiperScroll.finishPullToRefresh()
            }, 0)
        },
        loadmore() {
            //无限加载
            if (this.nextPage == 0 || this.$parent._inactive) {
                return this.$refs.swiperScroll.finishInfinite(true);
            } else {
                setTimeout(() => {
                    this.updata(this.classId, this.className, this.nextPage, this.city);
                    this.$refs.swiperScroll.finishInfinite(true);
                }, 0)
            }


        }
    },
    created() {
        //do something after creating vue instance
        setTimeout(() => {
            if(this.classId || this.className){
                this.updata(this.classId, this.className, this.pageNo, this.city);
            }
        }, 0)
    }

}
</script>
