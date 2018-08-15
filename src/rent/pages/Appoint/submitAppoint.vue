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
			padding: 0.48rem 0.42rem 0.2rem 0.23rem;
			position: relative;
		}
		
		.content-img {
			width: 2.8rem;
			height: 2.1rem;
			float: left;
			margin-right: 0.34rem;
			img{
				width: 100%;
				height: 100%;
				border-radius: 0.1rem;
			}
		}
		.content-room-title1{
			font-size: 0.32rem;
			color: black;
		}
		.content-room-title2{
			font-size: 0.26rem;
			color: #666666;
			margin-top: 0.2rem;
		}
		.content-room-title3{
			font-size: 0.28rem;
			color: black;
			margin-top: 0.1rem;
		}
		.content-tabs{
			overflow: hidden;
			padding-top: 0.1rem;
			.content-tabs-item {
				padding: 0.1rem 0.2rem;
				float: left;
				margin-right: 0.2rem;
				font-size: 0.24rem;
				color: #999999;
				background: #F5F5F5;
			}
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
			margin-top: 0.2rem;
			.content-person-name{
				box-sizing: border-box;
				padding-left: 0.27rem;
				margin-top: 0.25rem;
			}
			.content-person-name>span {
				float: left;
				 font-size: 0.3rem;
			}
		}
		.content-message {
			background: white;
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
			
			.content-data-inner{
				width: 6.9rem;
				border-bottom: 1px solid #EEEEEE;
				margin-left: 0.3rem;
			}
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
			height: 2.4rem;
			background: #f5f5f5;
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
		height:2.2rem;
	}
	.payBtn {
		width: 6.9rem;
		height: 0.9rem;
		background: #e34b3e;
		color: #feffff;
		font-size: $titleFontSize;
		line-height: 0.9rem;
		text-align: center;
		border-radius: 5px;
		margin:0.8rem auto 0;
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
                height: 1.2rem;
                background:#fff;
                overflow: hidden;
                border-bottom:1px solid #EEEEEE;
                width: 6.9rem;
                margin: auto;
                box-sizing: border-box;
    			padding-top: 0.05rem;
                .delegation-center-name-top{
                    width:100%;
                    height: 0.7rem;
                    margin-top:0.2rem;
                    p{
                        width:20%;
                        height: 100%;
                        line-height: 0.7rem;
                        font-size: 0.3rem;
                        float: left;
                        text-align: center;
                        color: black;
                        font-size: 0.32rem;
                    }
                    div{
                        float: left;
                        width:65%;
                        height: 80%;
                        border:0;
                        background-size:100% 100%;
                        input{
                            display: block;
                            width:70%;
                            margin-top: 2%;
                            height:100%;
                            float:left;
                            margin-left:4%;
                            outline:none;
                            background:transparent;
                            border:none;
                            outline:medium;
                            font-size: 0.28rem;
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
                    .sexSelect{
                    	.gonggongde{
                    		width: 1.5rem;
                    		height: 0.5rem;
                    		float: left;
                    		line-height: 0.64rem;
                    		margin-top: 0.05rem;
                    	}
                    	.nande{
                    		background: url(../../../../static/rent/yk/selected.png) no-repeat center;
                    		background-size:23% ;
                    		background-position: 0.13rem 0.12rem;
                    		text-indent: 0.55rem;
                    	}
                    	.nvde{
                    		background: url(../../../../static/rent/yk/noselect.png) no-repeat center;
                    		background-size:23% ;
                    		background-position: 0.13rem 0.12rem;
                    		text-indent: 0.55rem;
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
				<p class="content-room-title1">{{shareName}}</span></p>
				<p class="content-room-title2">{{buildNo}}号楼 {{buildUnitNo}}单元&nbsp;&nbsp;{{houseBuildNo}}层/{{area}}㎡</p>
				<p class="content-room-title3">{{rentPrice}}元/月</p>
				<div class="content-tabs">
					<div class="content-tabs-item" v-for="item in advantageTags">{{item}}</div>
				</div>
				<!--<div class="status">
					{{houseStatus}}
				</div>-->
				<div style="clear: both;"></div>
			</div>

			<div class="content-person">
				<div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <p class="p1">手机</p>
	                    <div class="delegation-center-name-top-bage">
	                        <input type="text" placeholder="请输入您的手机号" v-model="userPhone" maxlength="11">
	                    </div>
	                </div>
	            </div>
	            <div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <p class="p1">姓名</p>
	                    <div class="delegation-center-name-top-bage">
	                        <input type="text" placeholder="请输入您的姓名" v-model="userName" maxlength="11">
	                    </div>
	                </div>
	            </div>
	            <div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <p class="p1">称呼</p>
	                    <div class="sexSelect">
	                    	<div class="gonggongde" :class="[isMan?'nande':'nvde']" @click="switchman">先生</div>
	                    	<div class="gonggongde" :class="[!isMan?'nande':'nvde']"  @click="switchwoman" >女士</div>
	                    </div>
	                </div>
	            </div>
			</div>
			<!--入住时间-->
			<div class="content-date">
				<div class="content-data-inner">
					<div style="width: 0.45rem;height: 1rem;float: left;"></div>
					<datetime v-model="contentDate" format="YYYY-MM-DD HH:mm" :placeholder="selectTime" @on-change="change" :title="hope"></datetime>
				</div>
			</div>
			<!--留言-->
			<div class="content-message">
				<textarea v-model="message" cols="30" rows="10" placeholder="请输入您的留言"></textarea>
			</div>
		</div>
		<div class="btn-bottom" style="background: white;">
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
				shareName:this.$route.query.shareName,
				userId:this.$route.query.userId,
				buildNo:"",
				buildUnitNo:"",
				advantageTags:"",
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
			switchman(){
				this.isMan = true;
				this.renterSex = 1;
			},
			switchwoman(){
				this.isMan = false;
				this.renterSex = 0;
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
						this.buildNo = res.data.buildNo;
						this.buildUnitNo = res.data.buildUnitNo;
						this.advantageTags = res.data.advantageTags.split(',',2);
						
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
					sex:this.renterSex,//性别0男1女
					userId:this.userId//用户id
				}).then((res) =>{
					var that = this;
					if(res.code == 0){
						this.$router.replace({path:"/appointList/appointSuccess"})
					}else{
						this.$vux.confirm.show({
							content:res.msg,
							onCancel () {//取消执行
							},
							onConfirm () {//确定执行
								that.$router.push({path:"/HouseList",query:{name:"0019001"}});
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
