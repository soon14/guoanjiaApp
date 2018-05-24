<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
    .Lessee-box{
        background:$greyColor;
        width:100%;
        height:100%;
        overflow: hidden;
        .Lessee-box-center{
            width:100%;
            height:90%;
            overflow: hidden;
            .Lessee-box-center-details{
                width:100%;
                height: 2.6rem;
                background:#fff;
                .details-top{
                    width:90%;
                    margin-left:5%;
                    height: 25%;
                    border-bottom:solid 1px #dbdbdb;
                    p{
                        font-size: 12px;
                        float:right;
                        line-height:0.6rem;
                    }
                }
                .details-bottom{
                    width:90%;
                    margin-left:5%;
                    height: 75%;
                    overflow: hidden;
                    .details-bottom-left{
                        width:40%;
                        height:80%;
                        margin-top:3%;
                        float:left;
                        img{
                            width:90%;
                            height:100%;
                        }
                    }
                    .details-bottom-right{
                        width:60%;
                        height:80%;
                        margin-top:3%;
                        float:right;
                        text-align: left;
                        .details-bottom-right-div1{
                            width:100%;
                            height: 32%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            p{
                                font-size: 14px;
                                line-height:0.5rem;
                            }
                        }
                        .details-bottom-right-div2{
                            width:100%;
                            height: 32%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            p{
                                font-size: 12px;
                                line-height:0.5rem;
                            }
                        }
                        .details-bottom-right-div3{
                            width:100%;
                            height: 32%;
                            p{
                                font-size: 14px;
                                line-height:0.5rem;
                                float:left;
                                color:$partColor;
                            }
                            span{
                                display: block;
                                float: left;
                                line-height:0.5rem;
                                font-size: 12px;
                            }
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
                    }
                }
            }
            .Lessee-box-center-tenancies{
                width:100%;
                height: 3.16rem;
                margin-top:0.2rem;
                background:#fff;
                .tenancies-div1,.tenancies-div2,.tenancies-div3,.tenancies-div4{
                    width:90%;
                    margin-left:5%;
                    height: 0.79rem;
                    p{
                        font-size: 12px;
                        line-height: 0.79rem;
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


            }
            .Lessee-box-center-partnership{
                width:100%;
                height: 1rem;
                margin-top:0.2rem;
                background:#fff;
                div{
                    width:90%;
                    margin-left:5%;
                }
                p{
                    font-size: 12px;
                    line-height:1rem;
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
                height: 1rem;
                margin-top:0.2rem;
                background:#fff;
                div{
                    width:90%;
                    margin-left:5%;
                    p{
                        float:left;
                        font-size:12px;
                        line-height:1rem;
                    }
                    .sign-sign-p1{
                        width:25%;
                    }
                    .sign-sign-p2{
                        width:10%;
                    }
                    .sign-sign-p3{
                        width:20%;
                    }
                    .sign-sign-p4{
                        width:30%;
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
</style>

<template>
    <div class="Lessee-box fixContent">
        <!--<div class="Lessee-box-top">
            <PageHeader :title="parentMsg"></PageHeader>
        </div>-->
        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
        <div class="Lessee-box-center">
            <div class="Lessee-box-center-details">
                <div class="details-top">
                    <p v-if="saleContractId">{{saleContractId}}</p>
                </div>
                <div class="details-bottom">
                    <div class="details-bottom-left">
                        <img :src="picImage">
                    </div>
                    <div class="details-bottom-right">
                        <div class="details-bottom-right-div1">
                            <p><span v-if="houseRoom">{{houseRoom}}</span><span v-if="roomName">{{roomName}}</span></p>
                        </div>
                        <div class="details-bottom-right-div2">
                            <p><span v-if="buildUnitNo">{{buildUnitNo}}</span><span v-if="buildNo">{{buildNo}}</span><span v-if="houseNo">{{houseNo}}</span></p>
                        </div>
                        <div class="details-bottom-right-div3">
                            <p v-if="realRentMoney">{{realRentMoney}}</p>
                            <span>元/月</span>
                            <div>
                                <span v-if="statusName">{{statusName}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Lessee-box-center-tenancies">
                <div class="tenancies-div1">
                    <p class="tenancies-p1">租期</p>
                    <p class="tenancies-p2" style="color:#d7d7d7">{{validDate+"-"+endDate}}</p>
                </div>
                <div class="tenancies-div2">
                    <p class="tenancies-p1">付款方式</p>
                    <p class="tenancies-p2" style="color:#d7d7d7">{{receiptCycleName}}</p>
                </div>
                <div class="tenancies-div3">
                    <p class="tenancies-p1">物业交割信息</p>
                    <p class="tenancies-p2" style="color:#76b48f">{{isDelivery}}</p>
                </div>
                <div class="tenancies-div4">
                    <p class="tenancies-p1">租约账单</p>
                    <p class="tenancies-p2 a-decor" v-if="unbind" @click="lease" style="color:#3195d1">{{payStatus}}</p>
                    <p class="tenancies-p2 a-decor" v-if="!unbind" style="color:#d7d7d7">{{payStatus}}</p>
                    <p class="tenancies-p3" style="color:#e24e59">{{number+"期"}}</p>
                </div>
            </div>
            <div class="Lessee-box-center-partnership">
                <div>
                    <p class="partnership-p1">合租人</p>
                    <p class="partnership-p3" style="color:#d7d7d7">{{jointRentPhone}}</p>
                    <p class="partnership-p2" style="color:#d7d7d7">{{jointRentName}}</p>
                </div>
            </div>
            <div class="Lessee-box-center-sign">
                <div>
                    <p class="sign-sign-p1">签约主体信息</p>
                    <p class="sign-sign-p2" v-if="renterName">姓名:</p>
                    <p class="sign-sign-p3" v-if="renterName">{{renterName}}</p>
                    <p class="sign-sign-p4" style="color:#d7d7d7">{{ownerPhone}}</p>
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
            }
        },

        created() {
            this.saleContractId = this.$route.query.id;
            //this.saleContractId = '113a7c43-9d14-460c-9642-d89940e25dbb';//接收上个页面的合同id
            this.post('RentContractController/getRentContractDetail',{
                'saleContractId':this.saleContractId
            }).then((res) =>{
                console.log(1111111111);
                console.log(res.data.picImage);
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
				console.log(this.AndroidOrIos());
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
