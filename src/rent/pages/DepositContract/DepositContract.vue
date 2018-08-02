<style scoped lang="scss">//定金合同
@import "../../style/theme.scss";
$height: 0.8rem;
    .DepositContract-box{
        width:100%;
        height: 100%;
        background:$greyColor;
        overflow: scroll;
        border-top:1px solid #eee;
        .DepositContract-box-center{
            width:100%;
            height:100%;
            .DepositContract-box-center-details{
                width:100%;
                height: 2.9rem;
                background:#fff;
                .DepositContract-box-center-details-left{
                    width:2.8rem;
                    height:2.1rem;
                    float:left;
                    margin-left:0.3rem;
                    margin-top:0.3rem;
                    img{
                        width:100%;
                        height:100%;
                        border-radius: 0.1rem;
                    }
                }
                .DepositContract-box-center-details-right{
                    width:4rem;
                    height:100%;
                    float: left;
                    margin-left: 0.3rem;
                    margin-top:0.3rem;
                    .right-box{
                        width:100%;
                        height:82%;
                        margin-top:5%;
                        .right-div1{
                            width:100%;
                            height:0.32rem;
                            line-height: 0.32rem;
                            position: relative;
                            overflow: hidden;
                            .p1{
                                font-size: $titleFontSize;
                                float:left;
                                white-space:nowrap;
                                // position: absolute;
                                // left:0rem;
                                transform: translateX(0rem);
                                // animation: bounce-out 10s  linear infinite;
                            }
                        }
                        .right-div2{
                            width:100%;
                            height: 0.45rem;
                            line-height: 0.45rem;
                            // margin-top:0.2rem;
                            font-size: 0.28rem;
                            .p3{
                                // font-size: $reminderFontSize;
                                color:#000;
                                float: left;
                                font-size: 0.28rem;
                                // line-height: 0.2rem;
                            }
                            .p4{
                                // font-size: $fewFontSize;
                                float:left;
                                color:#000;
                                font-size: 0.28rem;
                                // line-height: 0.2rem;
                            }
                        }
                        .right-div3{
                            width:100%;
                            height: 0.45rem;
                            line-height: 0.45rem;
                            margin-top:0.2rem;
                            color: #666;
                            .p5,.p6,.p7,.p8,.p9{
                                font-size: 0.26rem;
                                // line-height:0.5rem;
                                float:left;
                            }
                            .span1{
                                font-size:10px;
                            }
                            span{
                                display: block;
                                float: left;
                                font-size:$fewFontSize;
                                margin:0 2px;
                            }
                            .span2{
                                height:100%;
                                font-size:0.3rem;
                            }
                            div{
                                width:35%;
                                height:80%;
                                float:right;
                                background:$partColor;
                                border-radius: 5px;
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
                            margin-top: 0.05rem;
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
            .DepositContract-box-center-contactsOne{
                width:100%;
                height:4.4rem;
                background:#fff;
                margin-top:0.2rem;
                color: #000;
                font-size: .32rem;
                .usercontant{
                    width: 100%;
                    padding: 0.2rem;
                    height: 1.1rem;
                    border-bottom: 1px solid #ccc;
                    box-sizing: border-box;
                    line-height: 0.7rem;
                    .p1{
                        float: left;
                    }
                    .p2{
                        float: right;
                        color:#999;
                    }
                }
                .userDeposit{
                    width: 100%;
                    padding: 0.2rem;
                    height: 1.1rem;
                    border-bottom: 1px solid #ccc;
                    box-sizing: border-box;
                    line-height: 0.7rem;
                    .p1{
                        float: left;
                    }
                    .p2{
                        float: right;
                        margin-right: 0.1rem;
                        color:#999;
                    }
                    .sumbitDeposit{
                        float: right;
                        width: 1.2rem;
                        height: 0.4rem;
                        display: inline-block;
                        line-height: 0.4rem;
                        text-align:center;
                        background-color: #e34b3e;
                        font-size: 0.24rem;
                        color: #fff;
                        margin-top: 0.1rem;
                    }
                    .iconDeal{
                        float: right;
                        width: 1rem;
                        height: 0.4rem;
                        display: inline-block;
                        line-height: 0.4rem;
                        text-align:center;
                        background-color: #85d11c;
                        font-size: 0.24rem;
                        color: #fff;
                        margin-top: 0.1rem;
                    }
                }
            }
            // .DepositContract-box-center-contactsTwo{
            //     width:100%;
            //     height:2.2rem;
            //     margin-top:0.1rem;
            //     background:#fff;
            //     .contactsTwo-left{
            //         width:40%;
            //         height: 100%;
            //         float:left;
            //         img{
            //             width:60%;
            //             height: 80%;
            //             margin-left:20%;
            //             margin-top:10%;
            //         }
            //     }
            //     .contactsTwo-right{
            //         width:60%;
            //         height:100%;
            //         float:left;
            //         text-align: left;
            //         .contactsTwo-right-div1{
            //             width:98%;
            //             height:0.5rem;
            //             margin-top:8%;
            //             p{
            //                 font-size: $reminderFontSize;
            //                 float:left;
            //                 line-height:0.5rem;
            //             }
            //             .p1{
            //                 width:40%;
            //                 height:100%;
            //                 overflow: hidden;
            //                 white-space: nowrap;
            //                 text-overflow: ellipsis;
            //             }
            //             .p2{
            //                 width:60%;
            //                 height:100%;
            //                 overflow: hidden;
            //                 white-space: nowrap;
            //                 text-overflow: ellipsis;
            //             }
            //         }
            //         .contactsTwo-right-div2{
            //             width:98%;
            //             height:0.5rem;
            //             margin-top:8%;
            //             p{
            //                 font-size: $reminderFontSize;
            //                 float:left;
            //                 line-height:0.5rem;
            //             }
            //             .p1{
            //                 width:40%;
            //                 height:100%;
            //                 overflow: hidden;
            //                 white-space: nowrap;
            //                 text-overflow: ellipsis;
            //             }
            //             .p2{
            //                 width:60%;
            //                 height:100%;
            //                 overflow: hidden;
            //                 white-space: nowrap;
            //                 text-overflow: ellipsis;
            //             }
            //         }
            //     }
            // }
            // .DepositContract-box-center-leaveWord{
            //     width:100%;
            //     height: 2.2rem;
            //     background:#fff;
            //     margin-top:0.1rem;
            //     textarea{
            //         width:90%;
            //         height: 80%;
            //         border:solid 1px $lineColor;
            //         border-radius: 5px;
            //         margin-left:5%;
            //         margin-top:3%;
            //         text-indent: 10px;
            //         resize:none;
            //         line-height:0.4rem;
            //     }
            // }
            // .DepositContract-box-center-earnest{
            //     width:100%;
            //     height:1.22rem;
            //     background:#fff;
            //     margin-top:0.2rem;
            //     overflow: hidden;
            //     text-align: left;
            //     .p1{
            //         width:30%;
            //         height:100%;
            //         font-size: $fewFontSize;
            //         float: left;
            //         line-height:1.22rem;
            //         text-indent:20px;
            //     }
            //     img{
            //         width: 1.2rem;
            //         height: 1rem;
            //         margin-top: 1.5%;
            //         float: right;
            //     }
            //     .p2{
            //         width:30%;
            //         height:100%;
            //         font-size: 16px;
            //         float: right;
            //         line-height:1.22rem;
            //         text-indent:20px;
            //         font-weight: 600;
            //         color:#999;
            //     }
            // }
            // .DepositContract-box-center-message{
            //     width:100%;
            //     height:1.22rem;
            //     background:#fff;
            //     margin-top:0.2rem;
            //     overflow: hidden;
            //     text-align: left;
            //     p{
            //         font-size: $fewFontSize;
            //         float:left;
            //         line-height:1.22rem;
            //     }
            //     .p1{
            //         text-indent: 20px;
            //         width:35%;
            //     }
            //     .p2{
            //         width:40%;
            //     }
            //     div{
            //         width:20%;
            //         height: 45%;
            //         margin-top:5%;
            //         margin-right:2%;
            //         float:right;
            //         background:url("../../../assets/home/DepositContract-lxz.png") no-repeat;
            //         background-size:100% 100%;
            //         overflow:hidden;
            //         span{
            //             display:block;
            //             width:100%;
            //             height:100%;
            //             line-height: 0.1rem;
            //             font-size:$fewFontSize;
            //             color:#fff;
            //             text-align: center;
            //             line-height:0.55rem;
            //         }
            //     }
            // }
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
    <div class="DepositContract-box fixContent">
        <!--<div class="DepositContract-box-top">
            <PageHeader :title="parentMsg"></PageHeader>
        </div>-->
        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
        <div class="DepositContract-box-center">
            <div class="DepositContract-box-center-details">
                <div class="DepositContract-box-center-details-left">
                    <img :src="picImage" alt="">
                </div>
                <div class="DepositContract-box-center-details-right">
                    <div class="right-box">
                        <div class="right-div1">
                            <p class="p1">{{houseName}}&nbsp;<span v-if="roomName">{{roomName}}房间&nbsp;</span></p>
                        </div>
                        <div class="right-div3">
                            <!-- <p class="p9">{{houseBuildNo}}</p> -->
                            <p class="p9"><span v-if="buildNo">{{buildNo}}号楼</span>&nbsp;<span v-if="buildUnitNo">{{buildUnitNo}}单元</span></p>
                            <p class="p7">&nbsp;&nbsp;{{houseBuildNo}}</p>
                            <p class="p8">层</p>
                            <span class="span2">/</span>
                            <p class="p5">{{area}}</p>
                            <p class="p6">㎡</p>
                            <!-- <span class="span1">2</span> -->
                            
                            <!-- <div>
                                <span>{{rentStatus}}</span>
                            </div> -->
                        </div>
                        <div class="right-div2">
                            <p class="p3">{{rentPrice}}</p>
                            <p class="p4">元/月</p>
                        </div>
                        <div class="bottom-label">
                            <span class="bottom-label-list" v-for="(label,index) in tags" :key="index">{{label}}</span>
                            <div style="clear: both;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="DepositContract-box-center-contactsOne">
                <div class="usercontant">
                    <p class="p1">{{ownerName}}</p>
                    <p class="p2">{{ownerPhone}}</p>
                </div>
                <div class="usercontant">
                    <p class="p1">入住时间</p>
                    <p class="p2">{{signDateTime}}</p>
                </div>
                <div class="userDeposit">
                    <p class="p1">定金</p>
                    <span class="sumbitDeposit">支付成功</span>
                    <p class="p2">{{"￥"+amount}}</p>
                    <!-- <img src="../../../assets/home/DepositContract-cg.png" alt=""> -->
                    <!-- <span class="sumbitDeposit">支付成功</span> -->
                </div>
                <div class="userDeposit">
                    <p class="p1">合同信息</p>
                    <div class="iconDeal">
                        <span>{{dealCodeName}}</span>
                    </div>
                    <p class="p2">{{depositId}}</p>
                    
                </div>
            </div>
            <div class="DepositContract-box-center-contactsOne">
                <div class="usercontant">
                    <p class="p1">留言</p>
                </div>
                <p style="color:#999; font-size:0.26rem; text-align:left; margin-left:0.3rem; margin-top:0.3rem;">{{remark}}</p>
            </div>
            <!-- <div class="DepositContract-box-center-contactsTwo">
                <div class="contactsTwo-left">
                    <img :src="headPortrait" alt="">
                </div>
                <div class="contactsTwo-right">
                    <div class="contactsTwo-right-div1">
                        <p class="p1">{{ownerName}}</p>
                        <p class="p2">{{ownerPhone}}</p>
                    </div>
                    <div class="contactsTwo-right-div2">
                        <p class="p1">预入住时间</p>
                        <p class="p2">{{signDateTime}}</p>
                    </div>
                </div>
            </div> -->
            <!-- <div class="DepositContract-box-center-contactsOne">
                <p>留言</p>
            </div>
            <div class="DepositContract-box-center-leaveWord">
                <textarea placeholder="这里是留言">{{remark}}</textarea>
            </div>
            <div class="DepositContract-box-center-earnest">
                <p class="p1">定金</p>
                <p class="p2">{{"￥"+amount}}</p>
                <img src="../../../assets/home/DepositContract-cg.png" alt="">
            </div>
            <div class="DepositContract-box-center-message">
                <p class="p1">定金合同信息</p>
                <p class="p2">{{depositId}}</p>
                <div>
                    <span>{{dealCodeName}}</span>
                </div>
            </div> -->
        </div>

    </div>
</template>

<script>
    import PageHeader from "../../components/public/PageHeader";
    import headPortraitWoman from "../../../assets/home/DepositContract-hader.png";//女
    import headPortraitMan from "../../../assets/home/DepositContract-hader2.png";//男
    export default {
        data() {
            return {
            	noDataimg : "https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png",
                parentMsg:"定金合同",
                depositId:"",//合同id
                houseId:"",//房源id
                houseName:"",//房源名称
                roomName:"",//房间名称
                roomId:"",//房间id
                amount:"",//定金金额
                dealCode:"",//定金处理code
                remark:"",//留言
                signDateTime:"",//签约日期
                rentPrice:"",//出房价格
                ownerName:"",//租客姓名
                ownerSex:"",//租客性别
                ownerPhone:"",//租客电话
                area:"",//房间面积
                houseBuildNo:"",//房间楼层
                dealCodeName:"",//定金处理名称
                rentStatus:"",//房间状态
                picImage:"",//top图片
                headPortrait:"",//头像
                androidOrIos:true,	//默认为安卓登录
                tags:"",
                changeRoomNo:"", //几居室
                buildNo:"",
                buildUnitNo:"",
            }
        },

        created() {
            this.depositId = this.$route.query.id;
            this.post('RentContractController/getDepositDetail',{
                'depositId':this.depositId
            }).then((res) =>{
                this.depositId = res.data.depositId;//合同id
                this.houseId = res.data.houseId;//房源id
                this.houseName = res.data.houseName;//房源名称
                this.roomName = res.data.roomName;//房间名称
                this.roomId = res.data.roomId;//房间id
                this.amount = res.data.amount;//定金金额
                this.dealCode = res.data.dealCode;//定金处理code
                this.remark = res.data.remark;//留言
                this.signDateTime = res.data.signDateTime;//签约日期
                this.rentPrice = res.data.rentPrice;//出房价格
                this.ownerName = res.data.ownerName;//租客姓名

                if(res.data.ownerSex == 0){
                    this.ownerSex = "女";//租客性别
                    this.headPortrait = headPortraitWoman;
                }else{
                    this.ownerSex = "男";//租客性别
                    this.headPortrait = headPortraitMan;
                };
                this.ownerPhone = res.data.ownerPhone;//租客电话
                this.area = res.data.area;//房间面积
                this.houseBuildNo = res.data.houseBuildNo;//房间楼层
                this.dealCodeName = res.data.dealCodeName;//定金处理名称
                this.rentStatus = res.data.rentStatus;//房间状态
                this.picImage = res.data.picImage?this.concatFileUrl(res.data.picImage,200,200):"https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png";
                this.tags= res.data.advantageTags ? res.data.advantageTags.split(",").slice(0,3) : "";
                // item.attachImageLength = item.attachImage.length-2;
                for( var i = 0; i < this.tags.length; i ++){
                    if(this.tags[i] == ""){
                        this.tags.splice(i,1)
                        i--;
                    }
                }
                this.changeRoomNo = res.data.changeRoomNo;
                this.buildNo = res.data.buildNo;
                this.buildUnitNo = res.data.buildUnitNo;
            });
            this.isIosAndroid();
        },

        mounted() {
            // var num = 0;
            // var box = document.getElementsByClassName("right-div1")[0];
            // var box1 = box.children[0];
            // console.log(box1)
            // function goLeft() {
            //     //750是根据你给的尺寸，可变的
            //     if (num == -(box.clientWidth)) {
            //         num = 0;
            //     }
            //     num -= 1;
            //     // console.log(num)
            //     box1.style.left = ""+num;
            //     // console.log(box1.style)
            // }
            // //设置滚动速度
            // var timer = setInterval(goLeft, 20);
            //设置鼠标经过时滚动停止
            // box.onmouseover(function() {
            //     clearInterval(timer);
            // },
            // function() {
            //     timer = setInterval(goLeft, 20);
            // })
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
        },

        components: {
            PageHeader
        }
    }
</script>
