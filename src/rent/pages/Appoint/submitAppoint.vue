<style scoped lang="scss">
	@import "../../style/theme.scss";
	@import "../../style/public.scss";
	.vux-x-icon {
		fill: white;
	}
		::-webkit-input-placeholder { /* WebKit browsers */
		    color:   #8b8b8b;
		}
		:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
		    color:    #8b8b8b;
		}
		::-moz-placeholder { /* Mozilla Firefox 19+ */
		    color:    #8b8b8b;
		}
		:-ms-input-placeholder { /* Internet Explorer 10+ */
		    color:    #8b8b8b;
		}
	.input-search {
		display: block;
		margin-top: 0.16rem;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.content {
		font-size: $titleFontSize;
		background: #e8e8e8;
		box-sizing: border-box;
		text-align: left;
		.content-room {
			background: white;
			box-sizing: border-box;
			padding: 0.28rem 0.42rem 0.2rem 0.23rem;
			position: relative;
		}
		.content-room p {
			margin-top: 0.1rem;
		}
		.content-img {
			width: 1.8rem;
			height: 1.5rem;
			float: left;
			margin-right: 0.34rem;
		}
		.content-room p:nth-of-type(3) {
			font-size: $reminderFontSize;
		}
		.status {
			position: absolute;
			width: 1.06rem;
			height: 0.43rem;
			border-radius: 5px;
			text-align: center;
			line-height: 0.43rem;
			font-size: $mostFontSize;
			background: #e55054;
			color: #fff6ef;
			right: 0.5rem;
			bottom:0.2rem;
		}
		.content-person {
			background: white;
			box-sizing: border-box;
			margin-top: 0.05rem;
			.content-person-name{
				box-sizing: border-box;
				padding-left: 0.27rem;
				margin-top: 0.25rem;
			}
			.content-person-name>span {
				float: left;
				 font-size: 0.3rem;
			}
			.content-person-name>span:nth-of-type(1) {
				color: #ec4d63;
				margin-right: 0.28rem;
			}
			.content-person-name>span:nth-of-type(2) {
				margin-right: 0.5rem;
			}
			.person-input {
				float: left;
				width: 4rem;
				height: 0.5rem;
				border-bottom: 1px solid black;
				margin-left: 4%;
			}
			.person-input>input {
				outline: none;
				width: 2.5rem;
				border: 0;
				font-size: 0.32rem;

			}
			.person-input>p {
				width: 1.5rem;
				float: right;
				color: #ec4d63;
			}
		}
		.content-person>div {
			height: 0.9rem;
		}
		.content-message {
			background: white;
			margin-top: 0.21rem;
			box-sizing: border-box;
			padding: 0.35rem 0.35rem;
			p{
				text-indent:2px;
			}
		}

		.content-date{
			width:100%;
			height:1rem;
			background: white;
			margin-top:0.2rem;
		}
		.content-date>span{
			width:2%;
			display: block;
			float:left;
			color: #ec4d63;
			line-height: 1rem;
			margin-left:4%;
		}
		.content-date>div{
			width:85%;
			height:1rem;
			float:left;
			line-height: 1rem;
			margin-left:3%;
			overflow:hidden;
		}
		.vux-cell-placeholder{
			overflow: hidden !important;
		}
		.content-message>textarea {
			outline: none;
			border: 0;
			width: 100%;
			height: 1.9rem;
			background: #f5f5f5;
			margin-top: 0.3rem;
			border-radius: 3px;
			font-size: $mostFontSize;
			box-sizing: border-box;
			padding-top: 0.15rem;
			text-indent: 1em;
			resize:none;
		}
	}

	.payBottom {
		background: white;
		box-sizing: border-box;
		padding: 0.45rem 0.6rem;
		span {
			display: block;
			float: left;
		}
	}

	.payBottom>span:nth-of-type(1) {
		font-size: $titleFontSize;
		color: #2e2e2e;
	}

	.payBottom>span:nth-of-type(2) {
		font-size: $mostFontSize;
		color: #a0a0a0;
		margin-top: 0.05rem;
	}

	.addMinus {
		width: 100%;
		box-sizing: border-box;
		padding: 0 0 0.4rem 20%;
		font-size: 0.45rem;
	}

	.money-minus,
	.money-num {
		float: left;
	}

	.money-minus {
		border: 2px solid #52afd8;
		height: 0.45rem;
		width: 0.45rem;
		line-height: 0.45rem;
		text-align: center;
		border-radius: 7px;
		color: #52afd8;
		margin-top: 0.09rem;
	}

	.money-num {
		color: #e74f5e;
		font-size: 0.6rem;
		width: 3.5rem;
		text-align: center;
	}
	.btn-bottom{
		overflow: hidden;
		margin-top:0.5rem;
		height:2.2rem;
	}
	.payBtn {
		width: 5.17rem;
		height: 0.7rem;
		background: #e24e59;
		color: #feffff;
		font-size: $titleFontSize;
		line-height: 0.7rem;
		text-align: center;
		border-radius: 5px;
		margin-left: 15.53%;
		margin-top:0.8rem;
	}

	.person-msg {
		background: white;
		box-sizing: border-box;
		padding: 0.15rem 0.17rem;
		margin-top: 0.21rem;
		.person-img {
			width: 0.36rem;
			height: 0.3rem;
			float: left;
			margin-top: 0.06rem;
		}
	}
	.delegation-center-name{
                height: 2.2rem;
                background:#fff;


                overflow: hidden;
                .delegation-center-name-top{
                    width:100%;
                    height: 0.7rem;
                    margin-top:0.2rem;
                    span{
                        display: block;
                        height: 100%;
                        width:10%;
                        line-height: 0.75rem;
                        color:$partColor;
                        text-align: center;
                        font-size: 0.3rem;
                        float:left;
                    }
                    p{
                        width:20%;
                        height: 100%;
                        line-height: 0.7rem;
                        font-size: 0.3rem;
                        float: left;
                    }
                    div{
                        float: left;
                        width:65%;
                        height: 80%;
                        border:0;
                        background-image: url("../../../assets/home/Delegation-bage.png");
                        background-size:100% 100%;
                        input{
                            display: block;
                            width:70%;
                            margin-top: 2%;
                            height:100%;
                            float:left;
                            margin-left:4%;
                            font-size:$fewFontSize;
                            outline:none;
                            background:transparent;
                            border:none;
                            outline:medium;
                             *:focus {
                                 outline: none;
                                 background-color: transparent;
                             }
                             ::selection{background:transparent; }
                             ::-moz-selection{background:transparent; }
                        }
                        p{
                            width:25%;
                            float: left;
                            color:$partColor;

                        }
                    }
                }
                .delegation-center-name-bottom{
                    width:100%;
                    height: 0.7rem;
                    margin-top:0.2rem;
                    span{
                        display: block;
                        height: 100%;
                        width:10%;
                        line-height: 0.75rem;
                        color:$partColor;
                        text-align: center;
                        font-size: 0.3rem;
                        float:left;
                    }
                    p{
                        width:20%;
                        height: 100%;
                        line-height: 0.7rem;
                        font-size: 0.3rem;
                        float: left;
                    }
                    div{
                        float: left;
                        width:65%;
                        height: 80%;
                        border:0;
                        background-image: url("../../../assets/home/Delegation-bage.png");
                        background-size:100% 100%;
                        input{
                            display: block;
                            width:70%;
                            margin-top: 2%;
                            height:100%;
                            float:left;
                            margin-left:4%;
                            font-size:$fewFontSize;
                            outline:none;
                            background:transparent;
                            border:none;
                            outline:medium;
                             *:focus {
                                 outline: none;
                                 background-color: transparent;
                             }
                             ::selection{background:transparent; }
                             ::-moz-selection{background:transparent; }
                        }
                        p{
                            width:25%;
                            float: left;
                            color:$partColor;

                        }
                    }
                }
            }
		.switchBox{
		width: 1.1rem;
		height: 0.45rem;
		border: 0.02rem solid #e94a5e;
		border-radius: 0.225rem;
		box-sizing: border-box;
		background:#e94a5e;
		padding: 0.02rem;
		position: relative;
		float: left;
		margin-left: 0.3rem;
		.switchText{
			font-size: $reminderFontSize;
			color: white;
			position: absolute;
			top: 0.04rem;
		}
		.switchMan{
			right: 0.1rem;
		}
		.switchWomen{
			left: 0.1rem;
		}
		.switchSlide {
			display: block;
			width: 0.37rem;
			height: 0.37rem;
			border-radius: 50%;
			background: white;
			position: absolute;
			top:0.02rem;
			box-shadow: 0 0 0.1rem #888;
			transition: all 1s;
		}
	}
	.emptyios{
		height: 1.1rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
</style>
<template>
	<div class="fixContent" >
		<!--头部-->
		<!--<ga-page-header title="预约看房">
		</ga-page-header>-->
		<div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
		<!--内容-->
		<div class="content">
			<div class="content-room">
				<div class="content-img">
					<img :src="picImage" alt="" />
				</div>
				<p><span v-if="this.houseName">{{houseName}}</span><span v-if="this.roomName">{{roomName}}</span></p>
				<p> <span style="color: #f4605e;" v-if="this.rentPrice">{{rentPrice}}</span>
					<span style="font-size: 0.22rem;">元/月</span> </p>
				<p><span v-if="this.area">{{area}}㎡ |</span>  <span v-if="this.houseBuildNo">{{houseBuildNo}}层</span></p>
				<div class="status">
					{{houseStatus}}
				</div>
				<div style="clear: both;"></div>
			</div>
			<div class="person-msg">
				<div class="person-img">
					<img src="../../../../static/rent/yk/people.png" alt="" />
				</div>
				&nbsp;
				联系人信息
			</div>

			<div class="content-person">
				<div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <span>*</span>
	                    <p class="p1">手机号</p>
	                    <div class="delegation-center-name-top-bage">
	                        <input type="text" placeholder="请输入您的手机号" v-model="userPhone" maxlength="11">
	                        <p>(必填)</p>
	                    </div>
	                </div>
	            </div>
	            <div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <span>*</span>
	                    <p class="p1">姓名</p>
	                    <div class="delegation-center-name-top-bage">
	                        <input type="text" placeholder="请输入您的姓名" v-model="userName" maxlength="11">
	                        <p>(必填)</p>
	                    </div>
	                </div>
	            </div>
				<div class="content-person-name">
					<span>*</span>
					<span>称&nbsp;&nbsp;&nbsp;呼</span>
					<!-- <gaSwitch :isMan="isNow" @sendData="sendData" style="float: left; margin-left: 0.3rem;"></gaSwitch> -->
					<div class="switchBox" @click="switchToggle">
						<p v-show="!isMan" class="switchText switchWomen" >女士</p >
						<span type="button"  class="switchSlide" v-bind:style="[isMan ? switchLeft : switchRight]"></span>
						<p v-show="isMan" class="switchText switchMan">先生</p >
					</div>
				</div>
			</div>
			<!--入住时间-->
			<div class="content-date">
				<span>*</span>
				<div>
					<datetime v-model="contentDate" format="YYYY-MM-DD HH:mm" :placeholder="selectTime" @on-change="change" :title="hope"></datetime>
				</div>
			</div>
			<!--留言-->
			<div class="content-message">
				<p>留言</p>
				<textarea v-model="message" cols="30" rows="10" placeholder="更多看房或找房需求（选填）"></textarea>
			</div>
		</div>
		<div class="btn-bottom" style="background: #e8e8e8;">
			<div class="payBtn" @click="toAppointSuccess">提交约看</div>
		</div>
	</div>
</template>

<script>
	import gaSwitch from "../../components/switch/switch.vue"
	export default {
		data() {
			return {
					noDataimg : "https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png",

				userName:'',//姓名
				userPhone:'',//手机号
				contentDate: '', //期待入住时间
				contentDates: '', //期待入住时间
				hope: '期待看房时间 ',
				selectTime: '选择看房时间',
				message: '', //留言
				moneyNum: 500, //租金
				isMan:true,
				renterSex:'1',
				switchLeft:{
					left: '0.02rem'
				},
				switchRight:{
					right: '0.02rem'
				},
				houseId:'',//房源id
				roomId:'',//房间id
                houseName:"",//房源名称
                roomName:"",//房间名称
                rentPrice:"",//出房价格
                area:"",//房间面积
                houseBuildNo:"",//房间楼层
				houseStatus:"",//房间状态
				picImage:"",//top图片
				customerSourceCode:"",//约看来源
				androidOrIos:true,	//默认为安卓登录
			}
		},
		created() {
			this.post('common/getUserInfo',{
			}).then((res) =>{
				if(res.code != 0){
					//this.$router.push({path:"http://ntest.guoanfamily.com/newHouseTest/#/login"})
					//("http://ntest.guoanfamily.com/newHouseTest/#/login")
//					window.location.href="https://www.guoanfamily.com/guoanjia/#/personalCenter"
//					return;
				}else{
					this.userName = res.data.name;
					this.userPhone = res.data.phone;
					this.renterSex = res.data.sex;
					this.isNow = false;
					if(res.data.sex == 0){
						this.isMan = false;
					}else{
						this.isMan = true;
					}
					this.houseId = this.$route.query.houseId;
					this.roomId = this.$route.query.roomId;
					this.Echo();
				}
			})
			this.isIosAndroid();
		},

		mounted() {

		},

		methods: {
			isIosAndroid(){
				//判断是安卓还是ios登录，定义到变量中
				// alert(this.isECTouch());
				if(this.isECTouch()){//微信
					this.customerSourceCode = "0020004";//微信
				}else{
					let u = navigator.userAgent;
					let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
					let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
					if (isAndroid === true && isiOS === false) {
						this.androidOrIos = true; 
						this.customerSourceCode = "0020015";//安卓 APP
					}
					if (isAndroid === false && isiOS === true) {
						this.customerSourceCode = "0020016";//IOS APP
						this.androidOrIos = false; 
					}
				}
			},
			switchToggle () {//switch转换事件
				this.isMan = !this.isMan;
				if(this.isMan == true){
					this.renterSex = 1;
					console.log(this.renterSex)
				}else{
					this.renterSex = 0;
					console.log(this.renterSex)
				};
			},
			sendData(data){
				this.sexData = data;
			},
			change(value) {
				console.log('change', value)
			},
			minus() {
				if(this.moneyNum > 500) {
					this.moneyNum = this.moneyNum - 100
				}
			},
			add() {
				if(this.moneyNum < 1000) {
					this.moneyNum = this.moneyNum + 100
				}
			},
			Echo(){//获取房间信息接口
				this.post('RentContractController/makeDepositInfo',{
					houseId:this.houseId,//房源id
					roomId:this.roomId,//房间id
				}).then((res) =>{
					if(res.code == 0){
						this.houseId = res.data.houseId;//房源id
						this.houseName = res.data.houseName;//房源名称
						this.roomName = res.data.roomName;//房间名称
						this.roomId = res.data.roomId;//房间id
						this.rentPrice = res.data.rent;//出房价格
						this.area = res.data.houseArea;//房间面积
						this.houseBuildNo = res.data.buildFloor;//房间楼层
						this.houseStatus = res.data.houseStatus;//房间状态
						this.renterSex = res.data.renterSex;//性别
						if(this.renterSex == 0){
							this.isMan = false;
						}else if(this.renterSex == 1){
							this.isMan = true;
						};
						this.picImage = res.data.picImage?this.concatFileUrl(res.data.picImage,200,200):noDataimg;
					}else{

					};
				});
			},
			toAppointSuccess(){//保存
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if(this.userPhone == ""){
                   this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入手机号",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
                }
                if(this.userName ==""){
                   this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入姓名",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
				}
				if(this.contentDate ==""){
                   this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请选择预约时间",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
                }
                if(!myreg.test(this.userPhone)){
                    this.$vux.confirm.show({
                        content:"请输入有效手机号码",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
				}
				this.contentDate = this.contentDate.replace(/-/g, '/');
				this.contentDates = new Date(this.contentDate);
				this.post('CAppointController/saveCAppoint',{
					id:'',//id
					sourceCode:this.customerSourceCode,
					houseId:this.houseId,//房源id
					roomId:this.roomId,//房间id
					appointTime:this.contentDates,// 
					remark:this.message,//留言
					userName:this.userName,//姓名
					phone:this.userPhone,//电话
					sex:this.renterSex//性别0男1女
				}).then((res) =>{
					if(res.code == 0){
						this.$router.replace({path:"/appointList/appointSuccess"})
					}else{
						this.$vux.confirm.show({
							content:res.msg,
							onCancel () {//取消执行
							},
							onConfirm () {//确定执行
							}
						})
					}
				});

			}

		},
		components: {
			gaSwitch
		}
	}
</script>
