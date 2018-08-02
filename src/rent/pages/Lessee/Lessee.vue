<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
    .Lessee-box{
        background:$titleColor;
        width:100%;
        height:100%;
        overflow: hidden;
        .Lessee-box-center{
            width:100%;
            height:90%;
            overflow: hidden;
            .Lessee-box-center-details{
                width:100%;
                height: 2.8rem;
                background:#fff;
                border-top:1px solid #ccc;
                // .details-top{
                //     width:90%;
                //     margin-left:5%;
                //     height: 25%;
                //     border-bottom:solid 1px #dbdbdb;
                //     p{
                //         font-size: 12px;
                //         float:right;
                //         line-height:0.6rem;
                //     }
                // }
                .details-bottom{
                    width:100%;
                    margin-left:0.3rem;
                    height: 100%;
                    overflow: hidden;
                    .details-bottom-left{
                        width:2.8rem;
                        height:2.1rem;
                        margin-top:0.32rem;
                        float:left;
                        img{
                            width:100%;
                            height:100%;
                            border-radius: 0.1rem;
                        }
                    }
                    .details-bottom-right{
                        width:4rem;
                        height:100%;
                        float: left;
                        margin-left: 0.3rem;
                        margin-top:0.4rem;
                        text-align: left;
                        .details-bottom-right-div1{
                            width:100%;
                            height:0.32rem;
                            line-height: 0.32rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            
                            p{
                                white-space: nowrap;
                                font-size: 0.32rem;
                                line-height:0.32rem;
                                color: #000;
                                transform: translateX(0rem);
                                // animation: bounce-out 10s  linear infinite;
                            }
                        }
                        .details-bottom-right-div2{
                            width:100%;
                            height: 0.45rem;
                            line-height: 0.45rem;
                            margin-top:0.2rem;
                            color: #666;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            p{
                                font-size: 0.26rem;
                                line-height:0.5rem;
                            }
                        }
                        .details-bottom-right-div3{
                            width:100%;
                            height: 0.45rem;
                            margin-top:0.1rem;
                            p{
                                font-size: 0.32rem;
                                height: 0.45rem;
                                line-height: 0.45rem;
                                float:left;
                                color:#000;
                            }
                            // span{
                            //     display: block;
                            //     float: left;
                            //     line-height:0.5rem;
                            //     font-size: 12px;
                            // }
                            div{
                                width:30%;
                                height: 80%;
                                margin-top:3%;
                                margin-right:2%;
                                float:right;
                                background:url("../../../assets/home/DepositContract-lxz.png") no-repeat;
                                background-size:100% 100%;
                                overflow:hidden;
                                span{
                                    display:block;
                                    width:100%;
                                    height:100%;
                                    line-height: 0.1rem;
                                    font-size:$fewFontSize;
                                    color:#fff;
                                    text-align: center;
                                    line-height:0.4rem;
                                }
                            }
                        }
                        .bottom-label{
                            width: 100%;
                            // margin-top: 0.05rem;
                            .bottom-label-list{
                                height: 0.4rem;
                                padding: 0 0.1rem;
                                display: block;
                                float: left;
                                color: #999;
                                text-align: center;
                                line-height: 0.4rem;
                                font-size: 0.24rem;
                                margin-top: 0.15rem;
                                border-radius: 0.05rem;
                                background-color: #f5f5f5;
                                margin-left: 0.1rem;
                                max-width: 1.2rem;
                                overflow: hidden;
                                &:nth-child(1){
                                    margin-left: 0rem;
                                }
                            }
                        }
                    }
                }
            }
            .Lessee-box-center-tenancies{
                width:100%;
                height: auto;
                // margin-top:0.2rem;
                background:#fff;
                .tenancies-div1,.tenancies-div2,.tenancies-div3,.tenancies-div4{
                    width:90%;
                    margin-left:5%;
                    height: 1.08rem;
                    border-bottom:1px solid #eee;
                    font-size: 0.32rem;
                    color:#000;
                    p{
                        // font-size: 12px;
                        line-height: 1.1rem;
                    }
                    .tenancies-p1{
                        float: left;
                        text-indent: 0.1rem;
                    }
                    .tenancies-p2{
                        float:right;
                        margin-right:0.1rem;
                    }
                    .a-decor{
                        text-decoration:underline;
                    }
                    .tenancies-p3{
                        float:right;
                        margin-right:0.1rem;
                    }
                }
                .tenancies-div3{
                    .tenancies-p2{
                        float: right;
                        width: 1rem;
                        height: 0.4rem;
                        display: inline-block;
                        line-height: 0.4rem;
                        text-align:center;
                        background-color: #e34b3e;
                        font-size: 0.24rem;
                        color: #fff;
                        margin-top: 0.33rem;
                    }
                }


            }
            .Lessee-box-center-partnership{
                width:100%;
                height: 1.08rem;
                // margin-top:0.2rem;
                background:#fff;
                color:#000;
                font-size: 0.32rem;
                border-bottom:1px solid #eee;
                div{
                    width:90%;
                    margin-left:5%;
                }
                p{
                    // font-size: 12px;
                    line-height:1.1rem;
                };
                .partnership-p1{
                    float:left;
                    text-indent: 0.1rem;
                }
                .partnership-p2,.partnership-p3{
                    float:right;
                    margin-right:0.1rem;
                }
            }
            .Lessee-box-center-sign{
                width:100%;
                height: 1.08rem;
                // margin-top:0.2rem;
                background:#fff;
                border-bottom:1px solid #eee;
                div{
                    width:90%;
                    margin-left:5%;
                    p{
                        float:left;
                        font-size:0.32rem;
                        line-height:1.1rem;
                    }
                    .sign-sign-p1{
                        width:auto;
                    }
                    .sign-sign-p2{
                        width:auto;
                    }
                    .sign-sign-p3{
                        width:auto;
                    }
                    .sign-sign-p4{
                        width:auto;
                        float:right;
                    }
                }
            }
        }
    }
    .emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
    }
    @keyframes bounce-out {
        0% {
            // left: 0;
            transform: translateX(0.1rem);
        }
        100% {
            // left: -100%;
            transform: translateX(-58%);
        }
    }
</style>

<template>
    <div class="Lessee-box fixContent">
        <!--<div class="Lessee-box-top">
            <PageHeader :title="parentMsg"></PageHeader>
        </div>-->
        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
        <div class="Lessee-box-center">
            <div class="Lessee-box-center-details">
                <!-- <div class="details-top">
                    <p v-if="saleContractId">{{saleContractId}}</p>
                </div> -->
                <div class="details-bottom">
                    <div class="details-bottom-left">
                        <img :src="picImage">
                    </div>
                    <div class="details-bottom-right">
                        <div class="details-bottom-right-div1">
                            <p class="p1"><span>{{houseRoom}}</span>&nbsp;<span v-if="roomName">{{roomName}}房间</span></p>
                            <!-- <p><span v-if="houseRoom">{{houseRoom}}</span>&nbsp;<span v-if="roomName">{{roomName}}</span>房间</p> -->
                        </div>
                        <div class="details-bottom-right-div2">
                            <p><span v-if="buildNo">{{buildNo}}号楼</span>&nbsp;<span v-if="buildUnitNo">{{buildUnitNo}}单元&nbsp;&nbsp;</span>{{houseBuildNo}}层/{{area}}㎡</p>
                        </div>
                        <div class="details-bottom-right-div3">
                            <p v-if="realRentMoney">{{realRentMoney}}元/月</p>
                            <!-- <div>
                                <span v-if="statusName">{{statusName}}</span>
                            </div> -->
                        </div>
                        <div class="bottom-label">
                            <span class="bottom-label-list" v-for="(label,index) in tags" :key="index">{{label}}</span>
                            <div style="clear: both;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Lessee-box-center-tenancies">
                <div style="background-color:#eee; width:100%;height:0.2rem;"></div>
                <div class="tenancies-div1">
                    <p class="tenancies-p1">租期</p>
                    <p class="tenancies-p2" style="color:#999">{{validDate+"-"+endDate}}</p>
                </div>
                <div class="tenancies-div2">
                    <p class="tenancies-p1">付款方式</p>
                    <p class="tenancies-p2" style="color:#999">{{receiptCycleName}}</p>
                </div>
                <div class="tenancies-div3">
                    <p class="tenancies-p1">物业交割信息</p>
                    <span class="tenancies-p2" >{{isDelivery}}</span>
                </div>
                <div class="tenancies-div4">
                    <p class="tenancies-p1">租约账单</p>
                    <p class="tenancies-p2 a-decor" v-if="unbind" @click="lease" style="color:#3195d1">{{payStatus}}</p>
                    <p class="tenancies-p2 a-decor" v-if="!unbind" style="color:#d7d7d7">{{payStatus}}</p>
                    <p class="tenancies-p3" style="color:#999">{{number+"期"}}</p>
                </div>
            </div>
            <div class="Lessee-box-center-partnership">
                <div>
                    <p class="partnership-p1">合租人</p>
                    <p class="partnership-p3" style="color:#999">{{jointRentPhone}}</p>
                    <p class="partnership-p2" style="color:#999">{{jointRentName}}</p>
                </div>
            </div>
            <div class="Lessee-box-center-sign">
                <div>
                    <p class="sign-sign-p1">签约主体信息</p>
                    <!-- <p class="sign-sign-p2" v-if="renterName">姓名:</p> -->
                    <!-- <p class="sign-sign-p3" v-if="renterName">{{renterName}}</p> -->
                    <p class="sign-sign-p4" style="color:#999">{{ownerPhone}}</p>
                </div>
            </div>
        </div>
        <ga-page-bottom></ga-page-bottom>
    </div>
</template>

<script>
    import PageHeader from '../../components/public/PageHeader';//导航
    export default {
        data() {
            return {
            	noDataimg : "https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png",

                parentMsg:"合同详情",
                buildNo:"",//房源楼
                buildUnitNo:"",//房源单元
                endDate:"",//合同结束日期
                houseNo:"",//门牌号
                houseRoom:"",//房源名称
                jointRentName:"",//合租人姓名
                jointRentPhone:"",//合租人电话
                ownerPhone:"",//租客电话
                realRentMoney:"",//租金
                receiptCycleName:"",//付款周期
                roomName:"",//房间名称
                saleContractId:"",//合同id
                validDate:"",//合同生效日期
                payStatus:"",//支付状态
                number:"",//第几期
                isDelivery:"",//物业交割状态
                picImage:"",//图片路径
                renterName:"",//租客姓名
                statusName:"",//履行中
                receiptPlanId:"",//收款计划id
                unbind:true,//解约显示不同标签
                androidOrIos:true,	//默认为安卓登录
                tags:"",
                changeRoomNo:"",
                area:"",//房间面积
                houseBuildNo:"",//房间楼层
            }
        },

        created() {
            this.saleContractId = this.$route.query.id;
            //this.saleContractId = '113a7c43-9d14-460c-9642-d89940e25dbb';//接收上个页面的合同id
            this.post('RentContractController/getRentContractDetail',{
                'saleContractId':this.saleContractId
            }).then((res) =>{
                // console.log(1111111111);
                // console.log(res.data.picImage);
                this.saleContractId = res.data.saleContractId;//合同id
                this.buildNo = res.data.buildNo;//房源楼
                this.buildUnitNo = res.data.buildUnitNo;//房源单元
                this.endDate = res.data.endDate;//合同结束日期
                this.houseNo = res.data.houseNo;//门牌号
                this.houseRoom = res.data.houseRoom;//房源名称
                this.jointRentName = res.data.jointRentName;//合租人姓名
                this.jointRentPhone = res.data.jointRentPhone;//合租人电话
                this.ownerPhone = res.data.ownerPhone;//租客电话
                this.realRentMoney = res.data.realRentMoney;//realRentMoney
                this.receiptCycleName = res.data.receiptCycleName;//付款周期
                this.roomName = res.data.roomName;//房间名称
                this.saleContractId = res.data.saleContractId;//合同id
                this.validDate = res.data.validDate;//合同生效日期
                this.number= res.data.number;//第几期
                if(res.data.picImage){
                    this.picImage = this.concatFileUrl(res.data.picImage,200,200);//图片路径
                }else{
                    this.picImage = "https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png";
                }

                this.renterName = res.data.renterName;//租客姓名
                this.statusName = res.data.statusName;//履行中
                this.receiptPlanId = res.data.receiptPlanId;//收款计划id
                if(res.data.statusName == "已解约"){
                    this.unbind = false;
                }else{
                    this.unbind = true;
                }
                if(res.data.payStatus == 0){ //支付状态
                    this.payStatus="待支付"
                }else{
                    this.payStatus="已支付"
                };
                if(res.data.isDelivery == 0){ //物业交割状态
                    this.isDelivery="未交割"
                }else{
                    this.isDelivery="已交割"
                };
                this.tags= res.data.advantageTags ? res.data.advantageTags.split(",").slice(0,3) : "";
                if(this.tags.length==1){
                    this.tags= res.data.advantageTags ? res.data.advantageTags.split("，").slice(0,3) : "";
                }
                // item.attachImageLength = item.attachImage.length-2;
                for( var i = 0; i < this.tags.length; i ++){
                    if(this.tags[i] == ""){
                        this.tags.splice(i,1)
                        i--;
                    }
                }
                this.changeRoomNo = res.data.changeRoomNo;
                this.area = res.data.coveredArea;//房间面积
                this.houseBuildNo = res.data.buildFloor;//房间楼层
            });
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
				// console.log(this.AndroidOrIos());
			},
            Homepage(){//跳转到首页
                this.$router.push('/Homepage')
            },
            ykList(){//跳转约看清单
                this.$router.push('/ykList')
            },
            lease(){
                this.$router.push({path: '/PaySure', query: {receiptPlanId: this.receiptPlanId,saleContractId:this.saleContractId}});

            }
        },

        components: {
            PageHeader
        }
    }
</script>
