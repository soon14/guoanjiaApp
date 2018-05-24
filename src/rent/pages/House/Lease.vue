<style scoped lang="scss">
    @import "../../style/theme.scss";
    $k:1;
    $ColorClass: $labelThree, $labelTwo, $labelOne;
    .logo {
        margin-top:0.8rem;
    }
    .container {
        background-color: $greyColor;
    }
    .houseContent {
        width: 100%;
        height: 5.5rem;
        background-color: #fff;
        position: relative;
        top: 0.4rem;
        .houseId {
            height: 0.9rem;
            line-height: 0.9rem;
            width: 85%;
            margin: 0 auto;
            border-bottom:1px solid $lineColor;
            .left {
                float:left;
                font-size:0.3rem;
            }
            .right{
                float:right;
                font-size:0.37rem;
                color: $friendlyColor;
            }
        }
        .chd {
            height: 0.72rem;
            line-height: 0.72rem;
            width: 85%;
            margin: 0 auto;
            .left {
                float:left;
                font-size:0.35rem;
            }
            .right{
                float:right;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                font-size:0.35rem;
                height: 0.72rem;
                color: #999;
                text-align:right;
                width:60%;
                .scroll{
                    width:auto;
                    overflow:scroll;
                }
            }
        }
    }
    .stage {
        width:92%;
        height:1.3rem;
        line-height:1.3rem;
        background-color:#fff;
        margin: 0.2rem auto 0;
        .left {
            float:left;
            font-size:0.35rem;
            margin-left:.3rem;
        }
        .right{
            float:right;
            font-size:0.33rem;
            color: #999;
            margin-right:.3rem;
            font-weight: bold;
        }
    }
    .allBill {
        width:92%;
        height:1.3rem;
        line-height:1.3rem;
        margin:0 auto;
        text-align:center;
        font-size:0.35rem;
        color:#656565;
        .left {
            float:left;
            width:35%;
            height:0;
            border-bottom:1px solid $lineColor;
            margin-top:0.65rem;
        }
        .right{
            float:right;
            width:35%;
            height:0;
            border-bottom:1px solid $lineColor;
            margin-top:0.65rem;
        }
    }
    .bill {
        width:92%;
        margin:0 auto;
        margin-top:0.2rem;
        position:relative;
        .top {
            width:100%;
            height:2.3rem;
            background-color:#fff;
            border-bottom:2px dashed $greyColor;
            .billL {
                float:left;
                width:73%;
                height:2.3rem;
                .billLT{
                    height:1rem;
                    line-height:1.3rem;
                    width:95%;
                    margin:0.2rem auto 0;
                    .left {
                        float:left;
                        font-size:0.3rem;
                    }
                    .right {
                        float:right;
                        font-size:0.3rem;
                        color:#9b9b9b;
                    }
                }
                .billLB{
                    height:1rem;
                    width:95%;
                    margin:0 auto;
                    .left {
                        float:left;
                        font-size:0.3rem;
                        margin-right:0.2rem;
                    }
                    img{
                        float:right;
                        height: 0.4rem;
                        margin: 0 0.1rem 0 0.2rem;
                    }
                    .right {
                        margin-right:0.15rem;
                        color:#9b9b9b;
                    }
                    .countDown {
                        font-size:0.2rem;
                        margin-right:0rem;
                        line-height: 0.4rem;
                        color:$partColor;
                    }
                }
            }
            .billR {
                float:right;
                width:27%;
                height:2.3rem;
                .billRZ {
                    height:1.5rem;
                    width:1.5rem;
                    margin-top:0.4rem;
                    // background-color:$labelOne;
                    color:#fff;
                    .topp{
                        height:70%;
                        width:100%;
                        .fr{
                            float:right;
                            line-height:1.1rem;
                            margin:0 0.025rem;
                        }
                        .di{
                            font-size:0.3rem;
                        }
                        .ji{
                            font-size:0.5rem;
                            font-weight:bold;
                        }
                        .qi{
                            font-size:0.3rem;
                            margin-right:0.1rem;
                        }
                    }
                    .bottomm{
                        height:50%;
                        width:100%;
                        line-height:0.3rem;
                        color:#fff;
                        .money {
                            font-size:0.3rem;
                            float:left;
                            margin-left:0.2rem;
                        }
                        .amount {
                            font-size:0.3rem;
                            font-weight: bold;
                            float:left;
                            text-align:right;
                        }
                    }
                }
            }
        }
        .bottom {
            width:100%;
            height:2.3rem;
            background-color:#fff;
            .fy {
                width:90%;
                height:1.1rem;
                line-height:1.1rem;
                border-bottom:1px solid $lineColor;
                margin:0 auto;
                .sjfy {
                    float:left;
                    width:50%;
                    font-size:0.35rem;
                    text-align:right;
                }
                .money {
                    text-indent:0.5rem;
                    float:left;
                    width:50%;
                    font-size:0.35rem;
                    color:$partColor;
                }
            }
            .dzf {
                width:90%;
                height:1.1rem;
                line-height:1.1rem;
                margin:0 auto;
                .dzf{
                    float:left;
                    width:auto;
                    font-size:0.35rem;
                    text-align:left;
                    color:$friendlyColor;
                    .span{
                        width:auto;
                        color:#3898be;
                        border-radius:3px;
                        height:0.6rem;
                        position: absolute;
                        right: 0.3rem;
                        top: 80%;
                        line-height: 0.6rem;
                        padding: 0 2px;
                        text-decoration:underline;
                    }
                }
                .zf{
                    float:right;
                    width:25%;
                    font-size:0.35rem;
                    position:relative;
                    height:1.1rem;
                    .span{
                        width:auto;
                        color:#fff;
                        border-radius:3px;
                        height:0.6rem;
                        text-align:center;
                        background-color:$partColor;
                        position: absolute;
                        right: 0;
                        top: 50%;
                        margin-top: -0.3rem;
                        line-height: 0.6rem;
                        padding: 0 2px;
                    }
                }
                .onpay{
                        float: left;
                        width:50%;
                        font-size:0.35rem;
                        position:relative;
                        height:1.1rem;
                        .wait{
                            width:auto;
                            color:$friendlyColor;
                            border-radius:3px;
                            height:0.6rem;
                            text-align:center;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            margin-top: -0.3rem;
                            line-height: 0.6rem;
                            padding: 0 2px;
                        }
                    }
            }
        }
        .radiusL { 
            width: 0.5rem;
            background-color: #e8e8e8;
            height: 0.5rem;
            position: absolute;
            border-radius: 50%;
            top: 50%;
            left: -0.25rem;
            margin-top:-0.25rem;
        }
        .radiusR {
            width: 0.5rem;
            background-color: #e8e8e8;
            height: 0.5rem;
            position: absolute;
            border-radius: 50%;
            top: 50%;
            right: -0.25rem;
            margin-top:-0.25rem;
        }
    }
    @mixin color($bgColor){
        background-color: $bgColor;

    }
    @for $i from 1 through 3{
        .bill:nth-child(3n+#{$i}) .billRZ{
            @include color(nth($ColorClass,$i));
        }
    }
    .btm {
        height:0.4rem;
        width:100%;
    }
    .blaok {
        height: 100%;
    }
    .list-box{
        // top: 1.5rem;
        position: absolute;
        // bottom: 0rem;
        width: 100%;
        height: 5rem;
        background-color: #e8e8e8;
    }
    .rhg{
         right: 2.3rem !important;
    }

    .unbind {
        pointer-events: none !important;
    }
    .unbindspan {
        background-color:#e88a91 !important;
    }
    .emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
</style>

<template>
    <div class="container fixContent">

        <img style="width: 38%;margin: 0 auto;padding-top: 100px;" @click="homePage()" v-if="isHad" src="../../../../static/zwtp.png">
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
        <swiper v-if="!isHad" :auto="false" height="6rem" :show-dots= "true"  dots-position = "center"@on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
             <swiper-item class="blaok" v-for="(item,index) in leaseData" :key="index">
                <div class="houseContent">
                    <div class="houseId">
                        <div class="left">合同编码</div>
                        <div class="right">{{item.saleContractId}}</div>
                        <!-- <div class="right">{{item.contractStatus}}</div> -->
                    </div>
                    <div class="address chd">
                        <div class="left">物业地址</div>
                        <div class="right"><div class="scroll"><marquee>{{item.houseAddress}}</marquee></div></div>
                    </div>
                    <div class="term chd">
                        <div class="left">合约期</div>
                        <div class="right">{{item.validDate.replace(/-/g,'.')}}-{{item.endDate.replace(/-/g,'.')}}</div>
                    </div>
                    <div class="rent chd">
                        <div class="left">租金</div>
                        <div class="right">￥{{item.realRentMoney}}/月</div>
                    </div>
                    <div class="payMent chd">
                        <div class="left">付款方式</div>
                        <div class="right">{{item.receiptCycleName}}</div>
                    </div>
                    <div class="payMent chd">
                        <div class="left">本期</div>
                        <div class="right" style="color:#e24e59">{{item.currentNumber+"期 - "+item.payStatus}}</div>
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
        <div v-if="!isHad" class="allBill">全部账单
            <div class="left"></div>
            <div class="right"></div>
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
                        <div class="billL">
                            <div class="billLT">
                                <div class="left">租期</div>
                                <div class="right">{{item.rentDateStart.replace(/-/g,'.')}}-{{item.rentDateEnd.replace(/-/g,'.')}}</div>
                            </div>
                            <div class="billLB">
                                <div class="left">应付款日</div>
                                <span class="countDown left" style="float:right;">({{compareDate(item.planCompleteTime,item.rentDate,item.planRent,item.realRent)}})</span>
                                <img src="../../../../static/rent/img/collection/shalou.png">
                                <div class="right left" style="float:right;">{{item.rentDate.replace(/-/g,'.')}}</div>
                            </div>
                        </div>
                        <div class="billR">
                            <div class="billRZ">
                                <div class="topp">
                                    <div class="qi fr">期</div>
                                    <div class="ji fr">{{item.number}}</div>
                                    <div class="di fr">第</div>
                                </div>
                                <div class="bottomm">
                                    <div class="money">￥</div>
                                    <div class="amount">{{item.planRent}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="radiusL"></div>
                    <div class="radiusR"></div>
                    <div class="bottom">
                        <div class="fy">
                            <div class="sjfy">实缴纳费用</div>
                            <div class="money">￥ {{item.realRent ||"0.00"}}</div>
                        </div>
                        <div class="dzf">
                            <div class="dzf payment" style="color:#1BBE4B" v-if="item.payStatus">支付完成</div>
                            <div class="dzf" v-if="item.realRent>0" @click="payDetails(item.receiptPlanId)"><span :class="{rhg:!item.payStatus && item.realRent>0}" class="span">支付详情</span></div>
                             <div class="zf" @click="paywayClick(item.receiptPlanId)" :class="{unbind:item.canPay == false}" v-if="!item.payStatus"><span class="span" :class="{unbindspan:item.canPay == false}">在线支付</span></div>
                            <div class="onpay" @click="paywayClick(item.receiptPlanId)" v-if="!item.payStatus"><span class="span wait">待支付</span></div>
                        </div>
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
    import { Flexbox, FlexboxItem } from 'vux'
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
    export default {
        data() {
            return {
                username: "",
                password: "",
                swiperItemIndex:0,
                leaseData: [],
                receiptPlanList:[],
                saleContractId:"",//出房合同ID
                userId:"",
                androidOrIos:true,	//默认为安卓登录
                isHad:false
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
        	isIosAndroid(){
				//判断是安卓还是ios登录，定义到变量中
				if(this.AndroidOrIos()){
					//安卓
					this.androidOrIos = true; 
				}else{
					//ios
					this.androidOrIos = false; 
				}
				console.log(this.AndroidOrIos());
			},
            //获取支付详情
            getUserLease(){
                var self = this;
                this.post("RentContractController/getUserLease",{

                }).then((res)=>{
                    if(res.msg == "没有数据了"){
                        self.isHad = true;
                    }
                    if(res.code != 10031 && res.code!= -1){
                        self.isHad = false;
                        this.leaseData = res.data;
                        if(this.leaseData.length != undefined){
                            for(let i = 0;i< this.leaseData.length;i++){
                                this.receiptPlanList.push(this.leaseData[i].receiptPlanList)
                            }
                        }
                        this.saleContractId = this.leaseData[0].saleContractId;
                    }
                })
            },
            paywayClick(receiptPlanId) {//在线支付
                // this.$router.push({path:"/PaySure",params:{receiptPlanId:receiptPlanId,saleContractId:this.saleContractId}})
                this.$router.push({path:'PaySure',query:{receiptPlanId:receiptPlanId,saleContractId:this.saleContractId}})
            },
            homePage(){
                this.$router.push("/HomePage");
            },
            //跳转支付详情
            payDetails(receiptPlanId){

                this.$router.push({path:"/PaymentDetails",query:{receiptPlanId:receiptPlanId,saleContractId:this.saleContractId}})
            },

            //监听滚动
            onSwiperItemIndexChange (index) {
                this.swiperItemIndex = index;
                this.saleContractId = this.leaseData[index].saleContractId;
                this.$refs.myList.scrollTo(0, 0, false);
            },

            refresh(done){
                // this.getHouseList().then((res)=>{
                //     done(res)
                // })
                done(true)
            },

            compareDate(start,end,plan,real){
                start = this.getNowFormatDate(start).substring(0,10);
                if(start == "1970-01-01"){
                    start = this.getNowFormatDate(new Date()).substring(0,10);
                }
                if(start==null||start.length==0||end==null||end.length==0){
                return 0;
                }

                var arr=start.split("-");
                var starttime=new Date(arr[0],parseInt(arr[1]-1),arr[2]);
                var starttimes=starttime.getTime();

                var arrs=end.split("-");
                var endtime=new Date(arrs[0],parseInt(arrs[1]-1),arrs[2]);
                var endtimes=endtime.getTime();

                var intervalTime = endtimes-starttimes;//两个日期相差的毫秒数 一天86400000毫秒
                var Inter_Days = ((intervalTime).toFixed(2)/86400000)+1;//加1，是让同一天的两个日期返回一天
                // console.log(Inter_Days);

                if(Inter_Days == -30){
                }
                if(Inter_Days <= 0 && plan > real){
                    var date = "已逾期";
                }else if(Inter_Days <= 0 && plan == real){
                    var date = "已支付";
                }else if(Inter_Days == 1){
                    var date = "已支付";
                }else{
                    var date = Inter_Days+"天";
                }
                return date;
            },
            getNowFormatDate(start) {
                var date = new Date(start);
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                        + " " + date.getHours() + seperator2 + date.getMinutes()
                        + seperator2 + date.getSeconds();
                return currentdate;
            },
            infinite(done){
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
