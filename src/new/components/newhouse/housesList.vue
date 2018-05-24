<template>
<div class="houses_list">
    <div class="scroll_wrap">
        <scroller>
            <div class="house_box" @click="openDetial(item.id)" v-for="item in buildData" :key="item.id" v-if="buildData">
                <img class="house_L" :src="item.src" alt="">
                <div class="house_nR">
                    <div class="house_RT">
                        <div class="house_M">
                            <div class="house_name">
                                {{item.name}}
                            </div>
                            <div class="house_site">
                                {{item.site}}
                            </div>
                            <div class="house_desc">
                                {{item.description}}
                            </div>
                        </div>
                        <div class="house_R">
                            <span>{{item.price}}</span>
                        </div>
                    </div>
                    <div class="house_tag">
                        <span v-for="(tag,_index) in item.tag" :key="_index">{{tag}}</span>
                    </div>
                </div>
            </div>
            <div class="no-data" v-if="buildData.length==0 && !no_data">
                <span>正在加载…</span>
            </div>
            <div class="no-data" v-if="buildData.length==0 && no_data">
                <span>暂无数据</span>
            </div>
        </scroller>
    </div>
</div>
</template>
<script>
export default {
    name: "housesList",
    props: {
        province: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        country: {
            type: String,
            default: ''
        },
        averageprice: {
            type: String,
            default: ''
        },
        totalprice: {
            type: String,
            default: ''
        },
        tenementtypeList: {
            type: String,
            default: ''
        },
        typenumberList: {
            type: String,
            default: ''
        },
        arearegionList: {
            type: String,
            default: ''
        },
        indexnumtype: {
            type: Number,
            default: 0
        },
        buildtag: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        buildData: [],
        no_data: false
    }),
    methods: {
        upList() {
            this.buildData = [];
            this.get('/buildapp/BuildBaseInfoA/showbuildList?province=' + this.province + '&city=' + this.city + '&country=' + this.country + '&averageprice=' + this.averageprice + '&totalprice=' + this.totalprice + '&tenementtypeList=' + this.tenementtypeList +
                '&typenumberList=' + this.typenumberList + '&arearegionList=' + this.arearegionList + '&indexnumtype=' + this.indexnumtype + '&buildtag=' + this.buildtag + '', {
                    interfaceType: 'newhouse'
                }).then(
                res => {
                    if (res.status == 200) {
                        if (res.data.length > 0) {
                            res.data.forEach((item, i) => {
                                let obj = {};
                                obj.id = res.data[i].id;
                                obj.name = res.data[i].buildname;
                                obj.src = this.concatFileUrl(res.data[i].picturename)
                                obj.site = res.data[i].address;
                                obj.description = res.data[i].typenumber;
                                obj.tag = res.data[i].buildtag.split(",");
                                obj.price = res.data[i].averageprice + "元/㎡";
                                this.buildData.push(obj);
                            })

                        } else {
                            this.no_data = true;
                        }
                    }
                }
            )
        },
        openDetial(buildId) {
            this.$router.push({
                path: 'newhousebuilddetail',
                query: {
                    buildID: buildId
                }
            })
        }
    },
    created() {
        //this.upList()
    },
    watch: {
        $props: {
            handler: function() {
                this.upList()
            },
            deep: true
        }
    }
}
</script>
<style lang="less" scoped>
.houses_list {
    position: absolute;
    top: 0.9rem;
    left: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0.1rem 0.15rem;
    .scroll_wrap {
        position: relative;
        width: 100%;
        height: 100%;
    }
}
.house_box {
    display: flex;
    background: #fff;
    padding: 0.15rem 0 0.15rem 0.1rem;
    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
    .house_L {
        width: 2.4rem;
        height: 1.8rem;
        border-radius: 0.05rem;
        object-fit: cover;
    }
    .house_nR {
        flex: 1;
        height: 1.8rem;
        min-width: 0;
        margin-left: 0.27rem;
        .house_RT {
            display: flex;
            align-items: center;
            height: 1.35rem;
            .house_M {
                width: 55%;
                text-align: left;
                & > div {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    line-height: 0.45rem;
                    height: 0.45rem;
                }
                .house_name {
                    font-size: 0.26rem;
                    color: #323232;
                }
                .house_desc,
                .house_site {
                    font-size: 0.22rem;
                    color: #757575;
                }
            }
            .house_R {
                width: 45%;
                text-align: right;
                margin-right: 0.1rem;
                font-size: 0.3rem;
                color: #D7000F;
                line-height: 0.45rem;
            }
        }
        .house_tag {
            font-size: 0.22rem;
            height: 0.5rem;
            line-height: 0.4rem;
            text-align: left;
            overflow: hidden;
            white-space: nowrap;
            span {
                display: inline-block;
                margin-right: 0.1rem;
                padding: 0 0.1rem;
                &:nth-child(1) {
                    color: #E79C87;
                    background: #feebe5;
                }
                &:nth-child(2) {
                    color: #6A9DE5;
                    background: #e4f3fa;
                }
                &:nth-child(3) {
                    color: #91C076;
                    background: #edf0e5;
                }
                &:nth-child(4) {
                    color: #E79C87;
                    background: #feebe5;
                }
                &:nth-child(5) {
                    color: #6A9DE5;
                    background: #e4f3fa;
                }
                &:nth-child(6) {
                    color: #91C076;
                    background: #edf0e5;
                    margin-right: 0;
                }
            }
        }
    }

}
.no-data {
    font-size: 0.3rem;
    margin-top: 0.6rem;
    color: #757575;
}
</style>
