<style scoped lang="scss">
     @import "../../style/theme.scss";
     $height: 0.7rem;
    .top{
         height:0.8rem;
    }
    .house-list {
         background-color: #e8e8e8;
    }
    .houseContent {
        width:100%;
        height: 5.5rem;
        background-color: #fff;
        position: relative;
        .houseId {
            height: 0.72rem;
            line-height: 0.72rem;
            width: 85%;
            margin: 0 auto;
            padding-top: 0.2rem;
            .left {
                float:left;
                font-size:0.3rem;
            }
            .right{
                float:right;
                font-size:0.37rem;
                color: #999;
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
            }
        }
        .chd .paycolor {
          color:$partColor;
          font-weight:bold;
        }
    }
    .stage {
        width:100%;
        height:0.78rem;
        line-height:0.78rem;
        background-color:#fff;
        margin: 0.4rem auto 0;
        .left {
            float:left;
            font-size:0.35rem;
            margin-left:0.3rem;
        }
        .right{
            float:right;
            font-size:0.33rem;
            color: $labelThree;
            margin-right:0.3rem;
            font-weight: bold;
        }
    }
    .number{
        width:92%;
        height:auto;
        line-height:1.3rem;
        background-color:#fff;
        margin: 0.4rem auto 0;
        padding:0.3rem 0;
        .content {
          width:90%;
          margin:0 auto;
          border:1px solid #666;
          border-bottom:0 solid #666;

          .ulname {
            height:0.8rem;
            line-height:0.8rem;
            border-bottom:1px solid #666;
            padding:0.06rem;
            li {
              float:left;
              width:25%;
              box-sizing:border-box;
              height:0.8rem;
              background-color:#F3A654;
              text-align:center;
              border-right:1px solid #fff;
              color:#fff;
              font-size:0.25rem;
            }
            li:last-child {
              border:none;
            }
          }
          .ullist {
            height:0.8rem;
            line-height:0.8rem;
            border-bottom:1px solid #666;
            li {
              float:left;
              width:25%;
              box-sizing:border-box;
              height:0.8rem;
              text-align:center;
              border-right:1px solid #ccc;
              color:#666;
              font-size:0.25rem;
            }
            li:last-child {
              border:none;
            }
          }
        }
    }
    .rentMoney {
        width:100%;
        height:3rem;
        background-color:#fff;
        margin: 0.5rem auto 0;
        .top{
          width:100%;
          height:1.5rem;
          line-height:1.5rem;
          .zujin {
            font-size:0.35rem;
            float:left;
            margin-left:10%;
          }
          .yuan {
            margin-left:2%;
            font-size:0.25rem;
            float:left;
            color:#A6A6A6;
          }
        }
        .bottom {
          width:100%;
          height:1.5rem;
          .left {
            float:left;
            width:30%;
            text-align:center;
            box-sizing:border-box;
            div{
              width:0.6rem;
              height:0.6rem;
              line-height:0.6rem;
              font-size:0.5rem;
              border:1px solid #69C2E2;
              color:#69C2E2;
              margin:0 auto;
              margin-left:65%;
              margin-top:5%;
              border-radius:3px;
            }
          }
          .middle {
            width:40%;
            margin:0 auto;
            text-align:center;
            box-sizing:border-box;
            font-size:0.6rem;
            color:#E24F57;
            display: block;
            border: 3px solid #fff;
          }
          .right {
            width:30%;
            float:right;
            text-align:center;
            box-sizing:border-box;
            font-size:0.3rem;
            div{
              width:0.6rem;
              height:0.6rem;
              line-height:0.6rem;
              font-size:0.5rem;
              border:1px solid #69C2E2;
              color:#69C2E2;
              margin:0 auto;
              margin-right:65%;
              margin-top:5%;
              border-radius:3px;
            }
          }
        }
    }
    .sumbit {
      margin:0.4rem auto;
      width:75%;
      height:0.9rem;
      line-height:0.9rem;
      font-size:0.35rem;
      text-align:center;
      background-color:$baseColor;
      color:#fff;
      border-radius:5px;
    }
    .clear{
      clear:both;
    }
    .wechat-pay {
        width:100%;
        position:relative;
        height:1.1rem;
        line-height:1.1rem;
        background-color:#fff;
        margin: 0.1rem auto 0;
        overflow: hidden;
        .left {
            float:left;
            font-size:0.35rem;
            margin-left: 1rem;
        }
        .imgg{
            float: left;
            width: 0.6rem;
            position: absolute;
            margin-left:.3rem;
            top: 50%;
            margin-top: -0.3rem;
        }
//         input[type=radio] {
//     background-image: url($UI/agenthouseApp/image/radiobtn2.png);
//     -webkit-appearance: none;
//     width: 13px;
//     height: 13px;
// }

// input[type=radio]:checked {
// 	background-image: url($UI/agenthouseApp/image/radiobtn1.png);
// }
        input[type=radio]{
            -webkit-appearance: none;
            width: 0.5rem;
            height: 0.5rem;
            margin-top:0.3rem;
            float: right;
            margin-right:0.2rem;
            border:none;
            background-image:url('../../../../static/rent/img/collection/weixuanzhong.png');
            background-size: 100%;
        }
        input[type=radio]:checked{
            width: 0.5rem;
            height: 0.5rem;
            margin-top:0.3rem;
            float: right;
            margin-right:0.2rem;
            border:none;
            background:url('../../../../static/rent/img/collection/xuanzhong.png');
            background-size: 100%;
        }
    }
    .own-pay {
        // display:none;
        width:100%;
        height:1.1rem;
        line-height:1.1rem;
        background-color:#fff;
        border-top:1px solid #ccc;
        margin: 0 auto;
        overflow: hidden;
        position:relative;
        .left {
            float:left;
            font-size:0.35rem;
            margin-left: 1rem;
        }
        .imgg{
            float: left;
            width: 0.6rem;
            position: absolute;
            margin-left:.3rem;
            top: 50%;
            margin-top: -0.3rem;
        }
        input[type=radio]{
            -webkit-appearance: none;
            width: 0.5rem;
            height: 0.5rem;
            margin-top:0.3rem;
            float: right;
            margin-right:0.2rem;
            border:none;
            background-image:url('../../../../static/rent/img/collection/weixuanzhong.png');
            background-size: 100%;
        }
        input[type=radio]:checked{
            width: 0.5rem;
            height: 0.5rem;
            margin-top:0.3rem;
            float: right;
            margin-right:0.2rem;
            border:none;
            background:url('../../../../static/rent/img/collection/xuanzhong.png');
            background-size: 100%;
        }
    }
    .msg{
        width:95%;
        height: 1rem;
        line-height:0.5rem;
        margin:0.2rem auto;
        background-color:#fff;
        color: #e24e59;
        font-size:0.3rem;
        text-indent: 24px;
        font-weight:bold;
    }
    .emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
</style>

<template>
    <div class="house-list fixContent">
        <!--<ga-page-header >
            <p slot="middle">
                <input type="text">
            </p>
            <p slot="right-btn">哈哈</p>
        </ga-page-header>-->

        <!--<ga-page-header title="支付确认">
            <p slot="right-btn"></p>
        </ga-page-header>-->
        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>

        <!-- 支付详情 -->
        <div class="houseContent">
            <div class="houseId">
                <div class="left">合同编号</div>
                <div class="right">{{saleContractId}}</div>
            </div>
            <div class="address chd">
                <div class="left">物业地址</div>
                <div class="right"><marquee>{{houseAddress}}</marquee></div>
            </div>
            <div class="term chd">
                <div class="left">租金期数</div>
                <div class="right">{{number}}</div>
            </div>
            <div class="rent chd">
                <div class="left">已交次数</div>
                <div class="right">{{submitCount}}次</div>
            </div>
            <div class="payMent chd">
                <div class="left">应缴金额</div>
                <div class="right paycolor">￥ {{planRent}}</div>
            </div>
            <div class="rent chd">
                <div class="left">已抵扣</div>
                <div class="right paycolor">￥ {{discount||0}}</div>
            </div>
            <div class="payMent chd">
                <div class="left">已使用红包</div>
                <div class="right paycolor">￥ {{couponsDiscount||0}}</div>
            </div>
        </div>
        <!-- 已交金额 -->
        <div class="stage">
            <div class="left">已交金额</div>
            <div class="right">￥ {{realRent}}</div>
            <div class="clear"></div>
        </div>
        <!-- 本期租金 -->
        <div class="rentMoney">
            <div class="top">
              <div class="zujin">本期支付租金</div>
              <div class="yuan">(元)</div>
            </div>
            <div class="bottom">
              <div class="left">
                <div @click="left">-</div>
              </div>
              <div class="right">
                <div @click="right">+</div>
              </div>
              <!-- <div class="middle">{{rentMoney}}</div> -->
              <input class="middle" onkeyup="this.value=this.value.replace(^\\d+(\\.\\d{2})?$,'')" @contextmenu.prevent type="number" maxlength="7" v-model="rentMoney">
            </div>
        </div>
        <!-- 支付方式 -->
        <div class="stage">
            <div class="left">支付方式</div>
        </div>
        <div class="own-pay">
            <img  class="imgg"  src="../../../../static/rent/fyxq/zhifubao.png"  />
            <div class="left">支付宝支付</div>
            <input ref="ali" type="radio" checked name="pay">
        </div>
        
        <div style="background-color: #fff;width:100%;" v-if="false">
        	<div class="msg" v-if="">温馨提示：如果您的租金超过3000元，请换卡分次支付，或隔日继续支付！</div>

        </div>
        <div class="wechat-pay" v-if="false">
            <img class="imgg" src="../../../../static/rent/fyxq/wx.png"  />
            <div class="left">微信支付</div>
            <input ref="wx" type="radio" checked name="pay">
        </div>
        
         <div class="own-pay" v-if="false">
            <img class="imgg" src="../../../../static/rent/fyxq/icon/yifutong.png"  />
            <div class="left">易付通支付</div>
            <input ref="xpay" type="radio" name="pay">
        </div>
        <!-- 确认提交 -->
        <div class="sumbit" @click="sumbitClick">
            确认支付
        </div>
        <div style="height:3px;width:100%;">

        </div>
    </div>
</template>

<script>
// import onRadio from '../../../../static/img/collection/xuanzhong.png';
// import unRadio from '../../../../static/img/collection/weixuanzhong.png';
    export default {
        name: 'Collection',
        data() {
            return {
            	androidOrIos:true,	//默认为安卓登录
                username: "",
                password: "",
                rentMoney:0,                                  //租金
                receiptPlanId:this.$route.query.receiptPlanId,   //收款计划id
                saleContractId:this.$route.query.saleContractId,//合同编号
                houseAddress:"",
                number : "",
                submitCount : "",
                planRent : "",
                realRent : "",
                houseName:"",
                isWechat:true,
                urlId:8885,
                userId:"",
                payAmount:'',	//传给宗泽支付金额
                couponsDiscount:"",
                discount:""
            }
        },
        components: {

        },
        created(){
            // debugger;
            this.getPayReceiptList();
            this.isWechat = this.isECTouch();//判断是否是微信浏览器
			if(this.isWechat){
				this.receiptWayCode = "0058005",//收款渠道，默认为微信
	      		this.sourceCode = "0020004",//客户来源，默认为微信
	      		this.urlId = 8885
			}else{
				this.receiptWayCode = "0058003",//收款渠道，网站
	      		this.sourceCode = "0020003",//客户来源，网站
	      		this.urlId = 8901
			}
			this.isIosAndroid();
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
			},

            //获取支付信息
            getPayReceiptList(){
                this.post("RentContractController/getPayReceiptList",{
                    "receiptPlanId":this.receiptPlanId,
                    "saleContractId":this.saleContractId,
                }).then((res)=>{
                    var res = res.data;
                    this.rentMoney = res.receiptPlan.differencesRent < 0 ? 0 : res.receiptPlan.differencesRent;
                    this.saleContractId = res.contractInfo.saleContractId;
                    this.houseAddress = res.contractInfo.houseAddress;
                    this.number = res.receiptPlan.number;
                    this.submitCount = res.receiptPlan.submitCount;
                    this.planRent = res.receiptPlan.planRent;
                    this.realRent = res.receiptPlan.realRent;
                    this.houseName = res.contractInfo.houseName;
                    this.couponsDiscount = res.receiptPlan.couponsDiscount,
                    this.discount = res.receiptPlan.discount
                })
            },
            left() {
                if(parseInt(this.rentMoney) <= 500){
                    this.rentMoney = parseInt(this.rentMoney);
                }else{
                    this.rentMoney = parseInt(this.rentMoney) - 100;
                }
            },
            right() {
              this.rentMoney = parseInt(this.rentMoney) + 100;
            //   if(this.rentMoney > this.planRent){
            //     this.rentMoney = this.planRent;
            //   }
            },
            //选择微信支付
            sumbitClick(){
            	if(this.$refs.ali.checked){//选中支付宝
                    this.depositPayOrderAli();//支付宝支付接口
                }
            	//屏蔽微信和易富通支付
//	         	else if(this.$refs.wx.checked){//选中微信
//	                 this.depositPayOrderWechat();//微信支付接口
//	            } 
//              else if (this.$refs.xpay.checked){
//                  this.depositPayXpay();//易付通支付接口
//              }

            },
            //微信支付
            depositPayOrderWechat(){
                // let openId = this.getStorage(this.KEYS.openid);
                let openId = "";
                this.post("PayController/rentChargePayOrder",{
                    // "userId":"113a7c43-9d14-460c-9642-d89940e25dbb",
                    "receiptPlanId":this.receiptPlanId,
                    "planRent":this.planRent,
                    "realReceipt":this.rentMoney,
                    "openId":openId,
                    "receiptSubjectCode":"0057001",
                    "receiptWayCode":this.receiptWayCode,
                    "receiptTypeCode":"0053003",
                }).then((res)=>{
                    if(res.code == 0){
                        if(this.isWechat){
                            // let openId = this.getStorage(this.KEYS.openid);
                            // alert(openId)
                            let openId = this.getStorage(this.KEYS.OPENID);
                            window.location.href="http://act.guoanfamily.com/commonPlatform/pay/wxpay.html?tradeNo="+res.data.receiptId+"&payMoney="+res.data.realReceipt+"&userID="+res.data.userId+"&nameGoods="+this.houseName+"&urlId=8885&openid="+ openId+"&receiptPlanId="+this.receiptPlanId+"&saleContractId="+this.saleContractId; //测试
                            // window.location.href="http://act.guoanfamily.com/commonPlatform/pay/wxpay.html?tradeNo="+res.data.receiptId+"&payMoney="+res.data.realReceipt+"&userID="+res.data.userId+"&nameGoods="+this.houseName+"&urlId=8884&openid=openId;
                        }else{
                            var ip =returnCitySN['cip'];//获取ip地址，勿动
                            var url = "https://www.guoanfamily.com/commonPlatform/pay/mwxpay.html";//支付路径，固定
                            var urlId = 8901;//urlId为以后通知的id 定金 8884 租金8885
                            var notifyURL = 'https://www.guoanfamily.com/common/wxPay/wxOrderNotify/' + urlId;//通知地址，勿动
                            var nameGoods =this.houseName ;//商品名称
                            var tradeNo = res.data.receiptId;//订单号
                            var receiptPlanId = this.receiptPlanId;
                            var saleContractId = this.saleContractId;
                            var userId = res.data.userId;//用户id
                            var payMoney = this.rentMoney;//支付金额
                            var redirectUrl=encodeURIComponent("https://www.guoanfamily.com/commonPlatform/pay/returnWap.html?receiptPlanId="+receiptPlanId+"&saleContractId="+saleContractId)
                            window.location.href=url+"?userId="+userId+"&body="+encodeURIComponent(nameGoods)+"&notifyURL="+ encodeURIComponent(notifyURL)+"&outTradeNo="+ tradeNo+"&totalFee="+payMoney * 100+"&spbillCreateIp="+ip+"&tradeType=MWEB&sceneInfo="+encodeURIComponent(JSON.stringify({"h5_info": {"type":"Wap","wap_url": "https://www.guoanfamily.com","wap_name": "国安家租房"}}))+"&redirectUrl="+redirectUrl

                        }
                    }else{
                        this.$vux.alert.show({
                            title: '温馨提示',
                            content: "您的租金超过3000元，请换卡分次支付，或隔日继续支付！",
                            onShow () {
                            // console.log('Plugin: I\'m showing')
                            },
                            onHide () {
                            // console.log('Plugin: I\'m hiding')
                            }
                        })
                    }

                })
            },
            //支付宝支付
            depositPayOrderAli(){//下定生成订单号，调用支付宝支付
				var self = this;
                this.post("PayController/rentChargePayOrder",{
                    "receiptPlanId":this.receiptPlanId,             
                    "planRent":this.planRent,               
                    "realReceipt":this.rentMoney,            
                    "openId":"",                  
                    "receiptSubjectCode":"0057001",                 
                    "receiptWayCode":this.receiptWayCode,  //收款渠道               
                    "receiptTypeCode":"0053004",   
                }).then((res => {
                    if(res.code == 0){
                        self.receiptId = res.data.receiptId;
                        self.payAmount = res.data.realReceipt;
                        
                        //let otherParams = escape("&receiptId="+self.receiptId+"&saleContractId="+self.saleContractId+"&receiptPlanId="+self.receiptPlanId);
                        //window.location.href="http://act.guoanfamily.com/common/AlipayController/toWebPay/8901?tradeNo="+self.receiptId+"&payMoney="+res.data.realReceipt+"&nameGoods=PC租房&userId="+res.data.userId+"&otherParams="+otherParams;
                        // window.location.href="http://act.guoanfamily.com/common/AlipayController/toPay/8884?tradeNo="+res.data.depositId+"&payMoney="+self.amount+"&nameGoods="+self.depositName+"&userId="+res.data.userId;
                    	
                    	//核对订单号与金额接口
                    	
						this.post('PayController/checkOrder',{
							"orderType":"1",
		            		"urlId":'8901',
		            		"userId":res.data.userId,
		            		"outTradeNo":res.data.receiptId,
		            		"subject":self.houseName,
		            		"totalAmount":res.data.realReceipt
		            	}).then((response) => {
		            		if(response.code === 0){
		            			//订单号校验成功,执行cordova支付宝支付接口
                                let payInfo= response.data.data;
                                let platform =  localStorage.getItem('platform');
								if(platform == null || platform =='null' || platform == undefined){
                                    // this.wxSummitMstation();
                                    let otherParams = escape("&receiptId="+res.data.receiptId+"&saleContractId="+this.saleContractId+"&receiptPlanId="+this.receiptPlanId);
                                    window.location.href="http://act.guoanfamily.com/common/AlipayController/toPay/8901?tradeNo="+res.data.receiptId+"&payMoney="+res.data.realReceipt+"&nameGoods="+self.houseName+"&userId="+res.data.userId+"&otherParams="+otherParams;
								}else{
                                    cordova.plugins.alipay.payment(payInfo,function success(e){
	                                    if(e.resultStatus == '9000'){
	                                        self.msgalert('支付成功');
	                                        self.$router.push({path:"/PaymentDetails",query:{saleContractId:self.saleContractId,receiptPlanId:self.receiptPlanId}})
	                                    }else if(e.resultStatus == "8000"){
	                                        self.msgalert('处理中');
	                                    }else if(e.resultStatus == "4000"){
	                                        self.msgalert('订单支付失败');
	                                    }else if(e.resultStatus == "6001"){
	                                        self.msgalert('用户中途取消');
	                                    }else if(e.resultStatus == "6002"){
	                                        self.msgalert('网络连接出错');
	                                    }
                                    },function error(e){
                                   	 	self.msgalert('失败');
                                    });
                                }
                                }
                            })
                    }

                }))
            },
            msgalert(msg) {
				this.$vux.toast.show({
					text: msg,
					type: "text"
				});
			},
            //易付通
            depositPayXpay(){
                var self = this;
                this.post("PayController/rentChargePayOrder",{
                    "receiptPlanId":this.receiptPlanId,             
                    "planRent":this.planRent,               
                    "realReceipt":this.rentMoney,            
                    "openId":"",                  
                    "receiptSubjectCode":"0057001",                 
                    "receiptWayCode":this.receiptWayCode,  //收款渠道               
                    "receiptTypeCode":"0053008"
                }).then((res => {
                    self.userId = res.data.userId;
                    if(res.code == 0){
                        self.receiptId = res.data.receiptId;
                        var otherParams = "&receiptId="+self.receiptId+"&saleContractId="+self.saleContractId+"&receiptPlanId="+self.receiptPlanId;

                        var data={
                          "tradeNo":self.receiptId,//订单号
                          "payMoney":self.rentMoney,//支付金额
                          "nameGoods":'正式环境测试支付',//商品名称
                          // "infoOrder":'客户',//支付信息(可不传)
                          // "userName":"刘树雨",//用户名（可不传）
                          "urlId":"8886",//支付渠道id 定金8884 租金8885
                          "platform":'agenthouse',//支付平台
                          // "receiptPlanId":self.receiptPlanId,//待定
                          "userID":self.userId,
                          "otherParams":otherParams
                        };
                        this.post("YFWebController/toYFPay",data,{interfaceType: "pay"}).then((res)=>{
                            window.location.href=res.data;
                        })
                    }
                }));
            },
            loadData(){

            },
        }
    }
</script>
