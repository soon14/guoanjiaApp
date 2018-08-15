<style scoped lang="scss">
    @import "../../style/theme.scss";

    $k: 1;
    $ColorClass: $labelThree, $labelTwo, $labelOne;
    .logo {
        margin-top: 0.8rem;
    }

    .container {
        background-color: $titleColor;
    }

    .houseContent {
        width: 100%;
        height: 4.5rem;
        background-color: #fff;
        position: relative;
        // top: 0.4rem;
        border-top: 1px solid $lineColor;
        .houseId {
            height: 0.57rem;
            line-height: 0.57rem;
            width: 85%;
            margin: 0 auto;
            margin-top: 0.27rem;
            .left {
                float: left;
                font-size: 0.3rem;
                color:#000;
            }
            .right {
                float: left;
                font-size: $mostFontSize;
                color: #999;
                margin-left: 0.3rem;
            }
        }
        .chd {
            height: 0.57rem;
            line-height: 0.57rem;
            width: 85%;
            margin: 0 auto;
            .left {
                float: left;
                font-size: 0.3rem;
                color: #000;
            }
            .right {
                float: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.28rem;
                height: 0.57rem;
                line-height: 0.57rem;
                color: #999;
                text-align: left;
                width: 60%;
                margin-left: 0.3rem;
                .scroll {
                    width: auto;
                    overflow: scroll;
                }
            }
        }
    }

    .stage {
        width: 92%;
        height: 0.57rem;
        line-height: 0.57rem;
        background-color: #fff;
        margin: 0.2rem auto 0;
        .left {
            float: left;
            font-size: 0.35rem;
            margin-left: .3rem;
        }
        .right {
            float: left;
            font-size: 0.28rem;
            color: #999;
            margin-left: .3rem;
            font-weight: bold;
        }
    }

    .allBill {
        background-color: $greyColor;
        width: 100%;
        height: 0.2rem;
        // line-height: 1.3rem;
        // margin: 0 auto;
        // text-align: center;
        // font-size: 0.35rem;
        // color: #656565;
        // .left {
        //     float: left;
        //     width: 35%;
        //     height: 0;
        //     border-bottom: 1px solid $lineColor;
        //     margin-top: 0.65rem;
        // }
        // .right {
        //     float: right;
        //     width: 35%;
        //     height: 0;
        //     border-bottom: 1px solid $lineColor;
        //     margin-top: 0.65rem;
        // }
    }

    .bill {
        width: 92%;
        margin: 0 auto;
        // margin-top: 0.2rem;
        position: relative;
        .top {
            width: 100%;
            height: 1.6rem;
            background-color: #fff;
            border-bottom: 1px solid $greyColor;
            .billL {
                float: left;
                width: auto;
                height: 100%;
                .billLT {
                    height: 0.51rem;
                    line-height: 0.51rem;
                    width: auto;
                    margin: 0.43rem 0 0 0.35rem;
                    color:#000;
                    .left {
                        float: left;
                        font-size: 0.26rem;
                    }
                    .right {
                        float: left;
                        margin-left: 0.2rem;
                        font-size: 0.26rem;
                        color: #9b9b9b;
                    }
                }
                .billLB {
                    height: 0.51rem;
                    width: auto;
                    margin: 0 auto;
                    line-height: 0.51rem;
                    margin-left:.35rem;
                    color:#000;
                    .left {
                        float: left;
                        font-size: 0.26rem;
                        // margin-right: 0.2rem;
                    }
                    img {
                        float: right;
                        height: 0.4rem;
                        margin: 0 0.1rem 0 0.2rem;
                    }
                    .right {
                        margin-right: 0.6rem;
                        margin-left: 0.2rem;
                        color: #9b9b9b;
                    }
                    .countDown {
                        font-size: 0.2rem;
                        margin-right: 0rem;
                        line-height: 0.55rem;
                        color: #0f0;
                    }
                }
            }
            .billR {
                float: left;
                width: 1.2rem;
                height: 1rem;
                margin-top: 0.3rem;
                .billRZ {
                    height: 1rem;
                    width: 1.2rem;
                    // margin-top: 0.3rem;
                    background-color:#ccc;
                    color: #fff;
                    .topp {
                        height: 0.7rem;
                        line-height: 0.7rem;
                        width: 100%;
                        font-size: 0.32rem;
                        // .fr {
                        //     float: right;
                        //     line-height: 1.1rem;
                        //     margin: 0 0.025rem;
                        // }
                        // .di {
                        //     font-size: 0.3rem;
                        // }
                        // .ji {
                        //     font-size: 0.5rem;
                        //     font-weight: bold;
                        // }
                        // .qi {
                        //     font-size: 0.3rem;
                        //     margin-right: 0.1rem;
                        // }
                    }
                    .bottomm {
                        // height: 50%;
                        height: 0.3rem;
                        line-height: 0.2rem;
                        font-size: 0.24rem;
                        color: #fff;
                        // .money {
                        //     font-size: 0.3rem;
                        //     float: left;
                        //     margin-left: 0.2rem;
                        // }
                        // .amount {
                        //     font-size: 0.3rem;
                        //     font-weight: bold;
                        //     float: left;
                        //     text-align: right;
                        // }
                    }
                }
                .paid{
                    background-color: rgb(228,80,68);
                }
            }
        }
        .bottom {
            width: 100%;
            height: 0.9rem;
            background-color: #fff;
            border-bottom: 1px solid $lineColor;
            position: relative;
            .fy {
                width: 100%;
                height: 0.9rem;
                line-height: 0.9rem;
                margin: 0 auto;
                .sjfy {
                    float: left;
                    width: 60%;
                    font-size: 0.24rem;
                    text-align: left;
                    color:#000;
                }
                .money {
                    color: $partColor;
                }
                .dzf {
                    float: left;
                    width: auto;
                    font-size: 0.24rem;
                    text-align: left;
                    color: $friendlyColor;
                    .span {
                        width: auto;
                        color: #3898be;
                        border-radius: 3px;
                        height: 0.6rem;
                        position: absolute;
                        right: 0.3rem;
                        top: 0.15rem;
                        line-height: 0.6rem;
                        padding: 0 2px;
                        text-decoration: underline;
                    }
                }
                .zf {
                    float: right;
                    width: 1.2rem;
                    font-size: 0.24rem;
                    height: 0.4rem;
                    position: absolute;
                    right: 0;
                    line-height: 0.4rem;
                    top: 0.2rem;
                    .span {
                        display: inline-block;
                        width: auto;
                        color: #fff;
                        border-radius: 3px;
                        height: 0.4rem;
                        text-align: center;
                        background-color: $partColor;
                        // margin-top: -0.3rem;
                        padding: 2px 2px;
                    }
                }
                .onpay {
                    float: left;
                    width: 1.2rem;
                    font-size: 0.24rem;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    position: absolute;
                    right:0;
                    top: 0.25rem;
                    .wait {
                        width: auto;
                        color: $friendlyColor;
                        border-radius: 3px;
                        height: 0.4rem;
                        text-align: center;
                        margin-top: -0.3rem;
                        line-height: 0.4rem;
                        padding: 0 2px;
                    }
                }
            }
            // .dzf {
            //     width: 90%;
            //     height: 1.1rem;
            //     line-height: 1.1rem;
            //     margin: 0 auto;
            //     .dzf {
            //         float: left;
            //         width: auto;
            //         font-size: 0.35rem;
            //         text-align: left;
            //         color: $friendlyColor;
            //         .span {
            //             width: auto;
            //             color: #3898be;
            //             border-radius: 3px;
            //             height: 0.6rem;
            //             position: absolute;
            //             right: 0.3rem;
            //             top: 80%;
            //             line-height: 0.6rem;
            //             padding: 0 2px;
            //             text-decoration: underline;
            //         }
            //     }
            //     .zf {
            //         float: right;
            //         width: 25%;
            //         font-size: 0.35rem;
            //         position: relative;
            //         height: 1.1rem;
            //         .span {
            //             width: auto;
            //             color: #fff;
            //             border-radius: 3px;
            //             height: 0.6rem;
            //             text-align: center;
            //             background-color: $partColor;
            //             position: absolute;
            //             right: 0;
            //             top: 50%;
            //             margin-top: -0.3rem;
            //             line-height: 0.6rem;
            //             padding: 0 2px;
            //         }
            //     }
            //     .onpay {
            //         float: left;
            //         width: 50%;
            //         font-size: 0.35rem;
            //         position: relative;
            //         height: 1.1rem;
            //         .wait {
            //             width: auto;
            //             color: $friendlyColor;
            //             border-radius: 3px;
            //             height: 0.6rem;
            //             text-align: center;
            //             position: absolute;
            //             left: 0;
            //             top: 50%;
            //             margin-top: -0.3rem;
            //             line-height: 0.6rem;
            //             padding: 0 2px;
            //         }
            //     }
            // }
        }
        // .radiusL {
        //     width: 0.5rem;
        //     background-color: #e8e8e8;
        //     height: 0.5rem;
        //     position: absolute;
        //     border-radius: 50%;
        //     top: 50%;
        //     left: -0.25rem;
        //     margin-top: -0.25rem;
        // }
        // .radiusR {
        //     width: 0.5rem;
        //     background-color: #e8e8e8;
        //     height: 0.5rem;
        //     position: absolute;
        //     border-radius: 50%;
        //     top: 50%;
        //     right: -0.25rem;
        //     margin-top: -0.25rem;
        // }
    }

    // @mixin color($bgColor) {
    //     background-color: $bgColor;

    // }

    // @for $i from 1 through 3 {
    //     .bill:nth-child(3n+#{$i}) .billRZ {
    //         @include color(nth($ColorClass, $i));
    //     }
    // }

    .btm {
        height: 0.4rem;
        width: 100%;
    }

    .blaok {
        height: 100%;
    }

    .list-box {
        // top: 1.5rem;
        position: absolute;
        // bottom: 0rem;
        width: 100%;
        height: 8rem;
        background-color: #fff;
    }

    .rhg {
        right: 2.3rem !important;
    }

    .unbind {
        pointer-events: none !important;
    }

    .unbindspan {
        background-color: #ccc !important;
    }

    .emptyios {
        height: 1.3rem;
    }

    .emptyandroid {
        height: 1.1rem;
    }
</style>

<template>
    <div class="container fixContent">

        <img style="width: 38%;margin: 0 auto;padding-top: 100px;" @click="homePage()" v-if="isHad" src="../../../../static/rent/zwtp.png">
        <!--<ga-page-header >
            <p slot="middle">
                <input type="text">
            </p>
            <p slot="right-btn">哈哈</p>
        </ga-page-header>-->

        <!--<ga-page-header title="我的租约">
            <p slot="right-btn"></p>
        </ga-page-header>-->
        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
        <!-- 租约详情 -->
        <swiper v-if="!isHad" :auto="false" height="4.6rem" :show-dots="true" dots-position="center" @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
            <swiper-item class="blaok" v-for="(item,index) in leaseData" :key="index">
                <div class="houseContent">
                    <div class="houseId">
                        <div class="left">合同编码</div>
                        <div class="right">{{item.saleContractId}}</div>
                        <!-- <div class="right">{{item.contractStatus}}</div> -->
                    </div>
                    <div class="address chd">
                        <div class="left">物业地址</div>
                        <div class="right">
                            <div class="scroll">
                                <marquee>{{item.houseAddress}}</marquee>
                            </div>
                        </div>
                    </div>
                    <div class="term chd">
                        <div class="left">合&nbsp;&nbsp;约&nbsp;&nbsp;期</div>
                        <div class="right">{{item.validDate}}-{{item.endDate}}</div>
                    </div>
                    <div class="rent chd">
                        <div class="left">租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金</div>
                        <div class="right">￥{{item.realRentMoney}}/月</div>
                    </div>
                    <div class="payMent chd">
                        <div class="left">付款方式</div>
                        <div class="right">{{item.receiptCycleName}}</div>
                    </div>
                    <div class="payMent chd">
                        <div class="left">本&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期</div>
                        <div class="right">{{item.currentNumber+"期　"}}<span style="color:#e24e59" >{{item.payStatus}}</span></div>
                    </div>
                </div>
            </swiper-item>
        </swiper>
        <!-- 第几期 -->
        <!-- <div class="stage">
            <div class="left">本期</div>
            <div class="right">第三期</div>
        </div> -->
        <!-- 分割线 -->
        <div v-if="!isHad" class="allBill">
            <!-- 全部账单
            <div class="left"></div>
            <div class="right"></div> -->
        </div>
        <!-- 账单 -->
        <div v-if="!isHad" class="list-box">
            <scroller class="scroller"
                      :on-refresh="refresh"
                      :on-infinite="infinite"
                      ref="myList"
            >
                <div class="bill" v-for="(item,index) in receiptPlanList[swiperItemIndex]" :key="index">
                    <div class="top">
                        <div class="billR">
                            <div class="billRZ" :class="{paid:!item.payStatus}">
                                <div class="topp">
                                    第{{item.number}}期
                                    <!-- <div class="qi fr">期</div>
                                    <div class="ji fr">{{item.number}}</div>
                                    <div class="di fr">第</div> -->
                                </div>
                                <div class="bottomm">
                                    {{item.planRent}}元
                                    <!-- <div class="money">￥</div>
                                    <div class="amount">{{item.planRent}}</div> -->
                                </div>
                            </div>
                        </div>
                        <div class="billL">
                            <div class="billLT">
                                <div class="left">账单日期:</div>
                                <div class="right">{{item.rentDateStart}}-{{item.rentDateEnd}}</div>
                            </div>
                            <div class="billLB">
                                <div class="left">应付款日:</div>
                                <span class="countDown left" style="float:right;">{{compareDate(item.rentDateStart,item.rentDateEnd,item.payStatus)}}</span>
                                <!-- <img src="../../../../static/rent/img/collection/shalou.png"> -->
                                <div class="right left" style="float:right;">{{item.rentDate}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="radiusL"></div>
                    <div class="radiusR"></div>
                    <div class="bottom">
                        <div class="fy">
                            <div class="sjfy">实际缴纳费用:
                                <span class="money">{{item.realRent ||"0.00"}}元</span>
                            </div>
                            <div class="dzf" v-if="item.realRent>0" @click="payDetails(item.receiptPlanId)"><span :class="{rhg:!item.payStatus && item.realRent>0}" class="span">支付详情</span></div>
                            <div class="zf" @click="paywayClick(item.receiptPlanId,item.canPay)" v-if="!item.payStatus"><span class="span" :class="{unbindspan:item.canPay == false}">在线支付</span></div>
                            <div class="onpay" @click="paywayClick(item.receiptPlanId)" v-if="!item.payStatus"><span class="span wait">待支付</span></div>
                        </div>
                        <!-- <div class="dzf">
                            <div class="dzf payment" style="color:#1BBE4B" v-if="item.payStatus">支付完成</div>
                            <div class="dzf" v-if="item.realRent>0" @click="payDetails(item.receiptPlanId)"><span :class="{rhg:!item.payStatus && item.realRent>0}" class="span">支付详情</span></div>
                            <div class="zf" @click="paywayClick(item.receiptPlanId,item.canPay)" v-if="!item.payStatus"><span class="span" :class="{unbindspan:item.canPay == false}">在线支付</span></div>
                            <div class="onpay" @click="paywayClick(item.receiptPlanId)" v-if="!item.payStatus"><span class="span wait">待支付</span></div>
                        </div> -->
                    </div>
                </div>
            </scroller>
        </div>
        <div class="btm">
        </div>
    </div>
</template>

<script>
    // import List from './List'
    import {Flexbox, FlexboxItem} from 'vux'
    import {Swiper, GroupTitle, SwiperItem, XButton, Divider} from 'vux'

    export default {
        data() {
            return {
                username: "",
                password: "",
                swiperItemIndex: 0,
                leaseData: [],
                receiptPlanList: [],
                saleContractId: "",//出房合同ID
                userId: "",
                androidOrIos: true,	//默认为安卓登录
                isHad: false,
                isPaid:false,
            }
        },
        components: {
            // List,
            Flexbox,
            FlexboxItem,
            Swiper,
            SwiperItem,
            GroupTitle,
            XButton,
            Divider
        },
        created() {
            this.getUserLease();
            this.isIosAndroid();
        },

        mounted() {

        },

        methods: {
            isIosAndroid() {
                //判断是安卓还是ios登录，定义到变量中
                if (this.AndroidOrIos()) {
                    //安卓
                    this.androidOrIos = true;
                } else {
                    //ios
                    this.androidOrIos = false;
                }
                console.log(this.AndroidOrIos());
            },
            //获取支付详情
            getUserLease() {
                var self = this;
                this.post("RentContractController/getUserLease", {}).then((res) => {
                    if (res.msg == "没有数据了") {
                        self.isHad = true;
                    }
//                     res={
//     "msg":"成功",
//     "pageCount":0,
//     "code":0,
//     "flag":false,
//     "data":[
//         {
//             "houseId":"BJGAJFY1511363922571",
//             "contractStatus":"0043004",
//             "endDate":1564156800000,
//             "validDate":1532707200000,
//             "discount":0,
//             "realRentMoney":2580,
//             "saleContractId":"BJGAJCF1532330041681",
//             "roomName":"B",
//             "roomId":"BJGAJZF1511364244479",
//             "houseName":"柳浪家园东里三居室",
//             "receiptCycleName":"月付（押一付一）",
//             "differencesRent":0,
//             "couponsDiscount":0,
//             "currentNumber":1,
//             "payStatus":"已支付",
//             "houseAddress":"柳浪家园东里2-3-1001",
//             "receiptPlanList":[
//                 {
//                     "canPay":true,
//                     "discount":0,
//                     "realRent":4778,
//                     "saleContractId":"BJGAJCF1532330041681",
//                     "number":1,
//                     "rentDateEnd":1535299200000,
//                     "rentDate":1532707200000,
//                     "rentDateStart":1532707200000,
//                     "differencesRent":0,
//                     "couponsDiscount":0,
//                     "receiptPlanId":"BJGAJSKJH11532330041863",
//                     "planCompleteTime":1532332075000,
//                     "planRent":4778,
//                     "payStatus":true
//                 },
// {
//                     "canPay":true,
//                     "discount":0,
//                     "realRent":4778,
//                     "saleContractId":"BJGAJCF1532330041681",
//                     "number":1,
//                     "rentDateEnd":1535299200000,
//                     "rentDate":1532707200000,
//                     "rentDateStart":1532707200000,
//                     "differencesRent":0,
//                     "couponsDiscount":0,
//                     "receiptPlanId":"BJGAJSKJH11532330041863",
//                     "planCompleteTime":1532332075000,
//                     "planRent":4778,
//                     "payStatus":true
//                 }
//             ]
//         }
//     ],"currentPageNo":0}
                    if (res.code != 10031 && res.code != -1) {
                        self.isHad = false;
                        this.leaseData = res.data.map(item=>{
                            item.validDate = new Date(item.validDate).Format("yyyy-MM-dd");
                            item.endDate = new Date(item.endDate).Format("yyyy-MM-dd");
                            
                            return item;
                        });
                        this.leaseData[0].receiptPlanList.map(item=>{
                            item.rentDateStart = new Date(item.rentDateStart).Format("yyyy-MM-dd");
                            item.rentDateEnd = new Date(item.rentDateEnd).Format("yyyy-MM-dd");
                            item.rentDate = new Date(item.rentDate).Format("yyyy-MM-dd");
                            item.planCompleteTime = new Date(item.planCompleteTime).Format("yyyy-MM-dd");
                            return item;
                        })
                        if (this.leaseData.length != undefined) {
                            for (let i = 0; i < this.leaseData.length; i++) {
                                this.receiptPlanList.push(this.leaseData[i].receiptPlanList)
                            }
                        }
                        // console.log(this.leaseData)
                        this.saleContractId = this.leaseData[0].saleContractId;
                    }
                })
            },
            paywayClick(receiptPlanId, canPay) {//在线支付
                // this.$router.push({path:"/PaySure",params:{receiptPlanId:receiptPlanId,saleContractId:this.saleContractId}})
                if (canPay) {
                    this.$router.push({path: 'PaySure', query: {receiptPlanId: receiptPlanId, saleContractId: this.saleContractId}})
                } else {
                    this.$vux.confirm.show({
                        content: "还未到本期租约支付时间！"
                    })
                    return;
                }

            },
            homePage() {
                this.$router.push("/HomePage");
            },
            //跳转支付详情
            payDetails(receiptPlanId) {

                this.$router.push({path: "/PaymentDetails", query: {receiptPlanId: receiptPlanId, saleContractId: this.saleContractId}})
            },

            //监听滚动
            onSwiperItemIndexChange(index) {
                this.swiperItemIndex = index;
                this.saleContractId = this.leaseData[index].saleContractId;
                this.$refs.myList.scrollTo(0, 0, false);
            },

            refresh(done) {
                // this.getHouseList().then((res)=>{
                //     done(res)
                // })
                done(true)
            },

            compareDate(start, end, status) {

                if (!(!!start)|| !(!!end)){
                    return "数据错误"
                }

                let start_time =  new Date(start).getTime();

                let end_time =new Date(end).getTime();

                let now_time = new Date(new Date().toLocaleDateString()).getTime();

                if (!!status){
                    return "已支付"
                } else if (now_time <= start_time) {
                    return "未支付"
                } else if (now_time > end_time) {
                    return "已逾期"
                } else {
                    return "未支付"
                }
            },
            infinite(done) {
                // if(this.preventLoad){
                //     done(true);
                //     return;
                // }
                // this.getHouseList().then((res)=>{
                //     done(res)
                // })
                done(true)
            },
        },
    }
</script>
