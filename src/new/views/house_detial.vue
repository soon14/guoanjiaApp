<template>
       <div  class="fixContent" >
        <!-- <div class="bj"></div> -->
        <div class="bodyTop">
            <div style="width: 100%;overflow-x:scroll;-webkit-overflow-scrolling:touch;">
                <tab style="width:1000px;" :line-width=2 active-color='#e00019' v-model="index">
                    <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in floorArr" @click="demo2 = item" :key="index" @on-item-click='floorClick(item.floor)'>{{item.floor}}层</tab-item>
                </tab>
            </div>
        </div>
        <div class="houseDetialList">
            <ul>
                <li :class="{listClssStyle:listStyle==index}" :key="index" v-for="(item,index) in housDetialListFilter" @click="oLiClick(index,item)">
                    <div class="detial">
                        <div class="leftImg">
                            <img :src='item.typepicturename'>
                        </div>
                        <div class="rightInformation">
                            <div class="rightInformationTop">
                                <div class="roomNumber">{{item.roomnumber}}</div>
                                <div class="roomState" :class="{roomStateStyle:item.housestate=='已售'}">{{item.housestate}}</div>
                                <div class="roomMoney">{{item.totalprices}}</div>
                            </div>
                            <div class="rightInformationCenter">
                                {{item.buildType.housetypedescribe}}
                            </div>
                            <div class="rightInformationbottom">
                                <span>{{item.towards}}</span>
                                <span>建筑面积:</span>
                                <span>{{item.buidingarea}}㎡</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bodyBottom">
            <div class="bodyBottomLeft">
                <x-button plain type="primary" class="justSale" @click.native='saleClick'>只看可售</x-button>
            </div>
            <div class="bodyBottomLeft">
                <x-button type="warn" class="immeditBooking" @click.native="ImmeditClick">立即订房</x-button>
            </div>
            <div class="bodyBottomLeft1" v-show="showJstSale">
                <x-button plain type="primary" class="justSale" @click.native="allJustSale">查看全部</x-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
    name: 'house_detial',
    components: {
        Tab, TabItem
    },
    data() {
        return {
            buildid: '',
            housenumber: '',
            unitnumber: '',
            index: 0,
            demo2: '1',
            // floorArr: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],//头部楼层
            floorArr: [],
            houseDetialLists: [],//户型详情列表所有数据
            housDetialListFilter: [],
            //控制查看全部按钮的变量
            showJstSale: false,
            // 列表样式控制,默认选中第一列
            listStyle: 0,
            // 当前的楼层
            currentFloor: '',
            roomnumberid: '',
            housetypeid: '',
            buildState: '',
        }
    },
    methods: {
        // 列表数据加载
        house_detialOnLoad() {
            this.get('palmsaleapp/api/v1/build/buildhousefloor?roomnumberid=' + "&buildid=" + this.buildid + "&housenumber=" + this.housenumber + "&unitnumber=" + this.unitnumber + '&housetypeid=' + this.housetypeid,{ interfaceType: "newHouse"}).then(response => {
                if (response.status == 200) {
                    this.houseDetialLists = response.data;
                    // console.log(JSON.stringify(this.houseDetialLists));
                    let fArr = [];
                    // 处理图片数据,楼层数据
                    for (let i = 0; i < this.houseDetialLists.length; i++) {
                        // this.houseDetialLists[i].typepicturename = this.ImgSrc + this.houseDetialLists[i].typepicturename
                        this.houseDetialLists[i].typepicturename = this.concatFileUrl( this.houseDetialLists[i].typepicturename)
                        this.houseDetialLists[i].totalprices = (this.houseDetialLists[i].totalprices / 10000).toFixed(2) + "万元"
                        fArr.push(this.houseDetialLists[i].housefloor);
                    }

                    // 数组去重
                    fArr = Array.from(new Set(fArr));
                    // 添加到新数组,遍历头部楼盘
                    for (let i = 0; i < fArr.length; i++) {
                        let obj = {};
                        obj.floor = fArr[i];
                        this.floorArr.push(obj);
                    }
                    // console.log(this.floorArr);
                    this.floorClick(this.floorArr[0].floor);
                }
            }, response => {
                this.showalert(response.msg);
            });
        },

        // 只看可售的点击事件
        saleClick() {
            this.showJstSale = true;
            this.housDetialListFilter = this.housDetialListFilter.filter((item) => {
                return item.housestate == "可售";
            })
        },

        // 头部楼层的点击事件
        floorClick(index) {
            this.showJstSale = false;
            // this.listStyle = 0;
            this.currentFloor = index;
            this.housDetialListFilter = this.houseDetialLists.filter((item) => {
                return item.housefloor == index;
            })
            // console.log(this.housDetialListFilter)
            //   debugger;
            for (var i = 0; i < this.housDetialListFilter.length; i++) {
                if (this.housDetialListFilter[i].housestate == '可售') {
                    this.listStyle = i;
                    this.buildState = this.housDetialListFilter[i].housestate;
                    this.roomnumberid = this.housDetialListFilter[i].id;
                    return;
                }else{
                    this.buildState = this.housDetialListFilter[i].housestate;
                    // console.log(this.buildState);
                }
            }
            // alert(JSON.stringify(this.housDetialListFilter));
            this.roomnumberid = this.housDetialListFilter[0].id;
            // console.log(this.roomnumberid);
        },
        // 查看全部按钮的点击事件
        allJustSale() {
            this.showJstSale = false;
            this.housDetialListFilter = this.houseDetialLists.filter((item) => {
                return item.housefloor == this.currentFloor;
            })
        },
        // 立即订房的点击事件
        ImmeditClick() {
            // console.log(this.buildState);
            if (this.buildState === '已售') {
                this.msgalert('该楼盘已售，请选择在售楼盘');
                return;
            } else {
                this.$router.push({
                    path: 'downPage', query: {
                        buildid: this.buildid,
                        roomnumberid: this.roomnumberid,
                        housenumber: this.housenumber,
                        unitnumber: this.unitnumber,
                        housetypeid: this.housetypeid
                    }
                });
            }
        },
        // 列表的点击事件
        oLiClick(index, item) {
            // console.log(item);
            // for (var i = 0; i < item.length; i++) {
                if (item.housestate == '可售') {
                    // debugger;
                    this.listStyle = index;
                    this.roomnumberid = item.id;
                } else {
                    this.msgalert('请选择在售房源');
                }

            // }

            // this.buildState = item.housestate;
        },
        msgalert(msg) {
            this.$vux.toast.show({
                text: msg,
                type: "text"
            })
        }

    },
    mounted() {
        this.buildid = this.$route.query.typeid;//楼盘id
        this.housenumber = this.$route.query.resource;//楼盘号
        this.unitnumber = this.$route.query.house_resource;//房间号
        this.housetypeid = this.$route.query.housetypeid;
        this.house_detialOnLoad();
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close';
@import '~vux/src/styles/center.less';
// .bj {
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     background: #f8f8f8;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     margin: auto;
// }
.bodyTop {
    width: 100%;
    height: 1.1rem;
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 10;
}

.box {
    padding: .375rem;
}

.active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
}

.active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
}

.active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
}

.houseDetialList {
    // width: 90%;
    // margin-top: 1.35rem;
    // margin-left: 5%; // height: 2rem;
    // padding-bottom: 1rem; // background: red;
    width: 94%;
    margin-top: 2rem;
    margin-left: 3%;
    padding-bottom: 1rem;
}

.listClssStyle {
    border: 1px solid red;
    margin-bottom: 10px;
    background: rgb(255, 255, 255);
    position: relative;
    box-shadow: rgb(221, 221, 221) -3px 0px 3px, rgb(221, 221, 221) 3px 0px 3px, rgb(221, 221, 221) 0px -3px 3px, rgb(221, 221, 221) 0px 3px 3px;
}



.rightInformation {
    width: 75%;
    height: 100%;
    float: right;
    .rightInformationTop {
        line-height: .8rem;
        .roomNumber {
            width: 40%;
            float: left;
            text-align: left;
            margin-left: .45rem;
            font-size: .4rem;
        }
        .roomState {
            float: left;
            height: .5rem;
            width: 1.1rem; // line-height: .9rem;
            position: absolute;
            left: 8%;
            bottom: .2rem;
            border-radius: .05rem;
            border: 1px solid rgb(104, 191, 52);
            color: rgb(104, 191, 52);
            text-align: center;
            font-size: .3rem;
            line-height: .5rem;
        }
        .roomStateStyle {
            float: left;
            height: 20px;
            width: 50px;
            line-height: 19px;
            position: absolute;
            left: 8%;
            bottom: .2rem;
            border: 1px solid rgb(255, 96, 0);
            color: rgb(255, 96, 0);
            text-align: center;
        }
        .roomStateStyle1 {
            float: left;
            height: 20px;
            width: 50px;
            line-height: 19px;
            position: absolute;
            left: 8%;
            bottom: .2rem;
            border: 1px solid #ccc;
            color: #ccc;
            text-align: center;
        }
        .roomMoney {
            padding-right: 0px;
            width: 45%;
            float: left;
            text-align: right;
            font-size: .4rem;
            color: red;
        }
    }
    .rightInformationCenter {
        padding: 0;
        float: left; // margin-top: .25rem;
        margin-left: .5rem;
        overflow: hidden;
        font-size: .35rem;
    }
    .rightInformationbottom {
        padding: 0;
        margin-left: 19px;
        float: left;
        width: 100%;
        font-size: .35rem;
        text-align: left;
        margin-top: .125rem;
    }
}

.detial {
    height: 2.625rem; // border: 1px solid #ccc;
    padding: 10px 5px;
    margin-bottom: 10px;
    background: rgb(255, 255, 255);
    position: relative;
    .leftImg {
        width: 25%;
        height: 100%;
        float: left;
        padding-right: 0;
        img {
            display: inline-block;
            width: 100%;
            height: 60px;
        }
    }
}

.bodyBottom {
    width: 100%;
    height: 1.1rem;
    position: fixed;
    bottom: -1px;
    left: 0;
    z-index: 10;
    background: #fff;
    .bodyBottomLeft {
        width: 50%;
        float: left;
    }
    .bodyBottomLeft1 {
        width: 50%;
        position: fixed;
        background: #fff;
        left: 0;
        bottom: 0;
    }
}

.immeditBooking {
    // border-radius: 14px;
    background: url('../../../static/new/img/btnbj.png') no-repeat !important;
    background-size: cover !important;
    height: 1.075rem;
}

.justSale {
    color: #000!important;
    border: none!important;
    background: #fff;
    font-size: .35rem!important;
    line-height: 1.05rem!important;
    border-top: 1px solid #ccc!important;
}
</style>

<style>
    .bodyTop div .vux-center{
        width:3rem;
    }
</style>

