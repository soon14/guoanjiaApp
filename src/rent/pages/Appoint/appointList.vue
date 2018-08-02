<style scoped lang="scss">
	@import "../../style/theme.scss";
	$k:1;
    $ColorClass: $labelOne, $labelTwo, $labelThree;
    $height: 0.4rem;
	$font:0.14rem;
	/* 向上箭头动画 */
	#bounceUp {
	-moz-animation: bounceUp 2s infinite;
	-webkit-animation: bounceUp 2s infinite;
	animation: bounceUp 2s infinite;
	}
	@-moz-keyframes bounceUp {
	0%, 20%, 50%, 80%, 100% {
		-moz-transform: translateX(0);
		transform: translateX(0);
	}
	40% {
		-moz-transform: translateX(-20px);
		transform: translateX(-20px);
	}
	60% {
		-moz-transform: translateX(-5px);
		transform: translateX(-5px);
	}
	}
	@-webkit-keyframes bounceUp {
	0%, 20%, 50%, 80%, 100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
	40% {
		-webkit-transform: translateX(-20px);
		transform: translateX(-20px);
	}
	60% {
		-webkit-transform: translateX(-5px);
		transform: translateX(-5px);
	}
	}
	@keyframes bounceUp {
	0%, 20%, 50%, 80%, 100% {
		-moz-transform: translateX(0);
		-ms-transform: translateX(0);
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
	40% {
		-moz-transform: translateX(-20px);
		-ms-transform: translateX(-20px);
		-webkit-transform: translateX(-20px);
		transform: translateX(-20px);
	}
	60% {
		-moz-transform: translateX(-5px);
		-ms-transform: translateX(-5px);
		-webkit-transform: translateX(-5px);
		transform: translateX(-5px);
	}
	}
	.fixContent{
		width:100%;
		height:100%;
		overflow:hidden;
		position: relative;
	}
	.fixContentBox{
		width:100%;
		height:100%;
		overflow:scroll;
		position: absolute;
		top:0;
	}
	img{
		width:100%;
		height: 100%;
	}
	.banner{
		border-bottom: 1px solid #e8e8e8;
		height:22%;
		position: relative;
		div{
			width:55%;
			height: 0.6rem;
			position: absolute;
			right: 0;
			bottom:0.15rem;

			p:nth-child(1){
				font-size:$titleFontSize;
				float:left;
				line-height:0.6rem;
			}
			p:nth-child(2){
				font-size:$littleFontSize;
				line-height:0.6rem;
			}
		}
	}
	/*未完成约看、已完成约看选项卡*/
	.switch-title{
		font-family: "微软雅黑";
		background: #e8e8e8;
		overflow: hidden;
		font-size: $reminderFontSize;
		text-align: left;
		height:78%;
		ul{
			width: 100%;
			li{
				width: 50%;
				height: 0.62rem;
				text-align: center;
				line-height: 0.62rem;
				color: #b3b3b3;
				float: left;
				font-size: 0.28rem;
				box-sizing: border-box;
			}
			.select{
				color: #e14e58;
			}

		}
		/*未完成约看列表*/
		.noneList{
			font-size: $reminderFontSize;
			box-sizing: border-box;
			height:6.4rem;
			padding:0.3rem 0.3rem 0.4rem;
			background:#e8e8e8;
			position: relative;
			overflow: scroll;
			.noData{
				position: absolute;
				bottom:-45px;
				width:100%;
				height: 1.2rem;
				text-align: center;		
				a{
					color:#c9151d;
					font-size:0.32rem;
					font-weight: 600;
				}
				p{
					color:#666666;
					margin-top:8px;
					font-size:0.24rem;
				}

			}
			.noneList-box{
				width:90%;
				margin-left:5%;
			}
			.triangle,.triangleTwo{
				position:absolute;
				top:0;
				left:24%;
				border:0.1rem solid white;
				border-bottom:0.1rem solid transparent;
				border-right:0.1rem solid transparent;
				border-left: 0.1rem solid transparent;
			}
			.triangleTwo{
				left:74%;
			}
			.noneItem{
				width:90%;
				margin-left:5%;
				margin-top:5%;
				background: $titleColor;
				box-sizing: border-box;
				padding:0.32rem 0.27rem;
				box-shadow: 0px 2px 0px #bbbbbb;

				.noneItem-title{
					color: #555555;
					p {
						float: right;
						color: #e89166;
					}
				}
				.noneItem-content{
					margin-top: 0.2rem;
					position: relative;
					.left-img{
						width:25%;
						height: 1.52rem;
						float: left;
					}
					.right-msg {
						float: left;
						margin-left:2%;
						width: 60%;
						height: 1.52rem;
						p{
							width:100%;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;

						}
						.collect-message{
							width:100%;
							height: 0.66rem;
							box-sizing: border-box;
							padding: 0.19rem 0 0 0;
							margin-top: 0.07rem;
							overflow: hidden;
						}
						.collect-message>span{
							width:30%;
							margin-left:3%;
							display: inline-block;
							background: #e99064;
							color: #f9ffff;
							border-radius: 5px;
							text-align: center;
							padding: 0.03rem 0rem;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
							float:left;
						}
					}
					.center-img{
						width:1.2rem;
						height:1.2rem;
						position: absolute;
						top:10%;
						right:0;
						background:url('../../../assets/home/appointList-dzz.png') no-repeat;
						background-size:100% 100%;
						text-align: center;
						line-height: 1.2rem;
						p{
							transform:rotate(-20deg);
						}
					}
				}
				.noneItem-bottom{
					margin-top:0.2rem;
					border-top:1px solid #e8e8e8;
					box-sizing: border-box;
					padding-top: 0.15rem;
					position: relative;
					.clear{
						width: 0.5rem;
						height: 0.5rem;
						float: right;
					}
				}

			}

		}
		.noneList2{
			background:#e8e8e8;
			height:1rem;
			width:100%;
		}
		.noneItem{
			border-radius: 0.1rem;
		}
	}
	.right-msg:first-line{
		font-size: $titleFontSize;
		color: #343434;
	}
	.right-msg p:nth-of-type(2){
		margin-top: 0.08rem;
		font-size: $reminderFontSize;
		color: #545454;
	}
	.noneItem-bottom span:nth-of-type(1){
		color: #f16160;
		font-size: $mostFontSize;
	}
	.noneItem-bottom span:nth-of-type(2){
		color: #666666;
		font-size: $fewFontSize;
	}
	.noneItem-bottom span:nth-of-type(3){
		float: right;
		color: #d1cfd0;
		border: 2px solid #d1cfd0;
		box-sizing: border-box;
		padding: 0.03rem;
		border-radius: 0.05rem;
	}
	.noneItem-bottom span:nth-of-type(4){
		float: right;
		box-sizing: border-box;
		padding: 0.2rem;
		border-radius: 0.05rem;
	}
	.noneItem-bottom span:last-child{
		float: right;
		color: #eb1314;
		border: 2px solid #eb1314;
		box-sizing: border-box;
		padding: 0.03rem;
		border-radius: 0.05rem;
	}
	.noneItem-bottom .seek-box-top-img{
		width: 0.4rem;
		height: 0.5rem;
		position: absolute;
		right: 1.5rem;
		bottom: 0rem;
	}
	.appoint-tottom{
		width: 100%;
		background: white;
		padding-top:0.25rem;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		z-index: 100;
		.findHouse,.appointList,.mine{
			width: 1.82rem;
			height: 0.6rem;
			border-top-right-radius: 0.15rem;
			border-top-left-radius: 0.15rem;
			text-align: center;
			line-height: 0.6rem;
			color: white;
			font-size: $mostFontSize;
			float: left;
			margin-left: 0.48rem;
		}
		.findHouse{
			background: #6fcf76;
		}
		.appointList{
			background: #e2614c;
		}
		.mine{
			background: #f6b04e;
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
	<!-- 弹层 -->
	<!--标题-->
	<!--<ga-page-header title="约看清单"></ga-page-header>-->
	<div ref="topOne" :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
	<div class="fixContentBox">
		<div class="fixContentBoxTop" :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
		<!--banner图-->
		<div class="banner"  ref="topTwo">
			<img src="../../../assets/home/appointSuccess-wancheng.png" alt="" />
			<div>
				<p>客服电话:</p>
				<p><a href="tel:400-900-2225">400-900-2225</a></p>
			</div>
		</div>

		<!--未完成约看、已完成约看选项卡-->
		<div class="switch-title">
			<ul>
				<li style="background:#fff;" @click="none" v-bind:class="{ select: isAppoint }">未完成的约看</li>
				<li @click="already" v-bind:class="{ select: !isAppoint }" style="border-left: 1px solid #b3b3b3;background:#fff;">已完成的约看</li>
			</ul>
			<div style="clear: both;"></div>
			<!--未完成约看列表-->
			<div class="noneList" v-show="isAppoint">
				<img @click="bgNewHome" style="width:60%;height:90%;margin:0 auto;" src="../../../assets/home/bg.png" alt="" v-if="bgimg1">
				<div class="triangle" v-if="bgimg2"></div>
				<div class="housing-resource" v-if="bgimg2">
					<scroller class="scroller"
						:on-refresh="refresh"
						:on-infinite="infinite"
						noDataText="------已经到最后了------"
						ref="myList"
					>
						<div class="noneItem"  v-for="item in HouseLists" :key="item.id">
								<div class="noneItem-box">
									<div class="noneItem-title" @click="goHouseDetail"><span>约看时间:</span>{{item.appointTime|date-time-filter}}
										<p></p>
									</div>
									<div class="noneItem-content" @click="goHouseDetail">
										<div class="left-img">
											<img :src='item.Image'/>
										</div>
										<div class="right-msg">
											<p><span>{{item.houseName}}</span></p>
											<p><span></span><span v-if="item.roomName">{{item.roomName}}</span>&nbsp;&nbsp;<span v-if="item.usedArea">{{item.usedArea}}</span>㎡ | <span v-if="item.buildFloor">{{item.buildFloor}}</span>层</p>
											<div class="collect-message">
												<span v-for="items in item.advantageTags" :key="items">{{items}}</span>
											</div>
										</div>
										<div class="center-img">
											<p style="color:#e24e59">{{item.appointName}}</p>
										</div>
										<div style="clear: both;"></div>
									</div>

									<div class="noneItem-bottom">
										<span>{{item.priceAll}}</span>
										<span>元/月</span>
										<span  @click="onShow(item.id)">取消约看</span>
										<span></span>
										<span class="mapLink"  @click="mapLink(item)">查看路线</span>										
									</div>
								</div>
							</div>
							<div class="noData" v-if="noDataShow">
								<a href="tel:400-900-2225">400-900-2225</a>
								<p>拨打热线告诉我们您的租房需求</p>
							</div>
					</scroller>
				</div>
			</div>
			
			<!--已约看列表-->
			<div class="noneList" v-show="!isAppoint">
				<img @click="bgNewHome" style="width:60%;height:90%;margin:0 auto;" src="../../../assets/home/bg.png" alt="" v-if="bgimg1">
				<div class="triangleTwo" v-if="bgimg2"></div>
				<div class="housing-resource" v-if="bgimg2">
					<scroller class="scroller"
						:on-refresh="refreshs"
						:on-infinite="infinites"
						noDataText="------已经到最后了------"
						ref="myLists"
					>
							<div class="noneItem"  v-for="item in HouseLists" :key="item.id">
								<div class="noneItem-box">
									<div class="noneItem-title" @click="goHouseDetail"><span>带看时间:</span>{{item.appointTime|date-time-filter}}
										<p></p>
									</div>
									<div class="noneItem-content" @click="goHouseDetail">
										<div class="left-img">
											<img :src='item.Image || noDataimg'/>
										</div>
										<div class="right-msg">
											<p><span>{{item.houseName}}</span></p>
											<p><span></span><span v-if="item.roomName">-{{item.roomName}}</span>&nbsp;&nbsp;<span v-if="item.usedArea">{{item.usedArea}}</span>㎡ | <span v-if="item.buildFloor">{{item.buildFloor}}</span>层</p>
											<div class="collect-message">
												<span v-for="items in item.advantageTags" :key="items">{{items}}</span>
											</div>
										</div>
										<div class="center-img">
											<p style="color:#e24e59">{{item.appointName}}</p>
										</div>
										<div style="clear: both;"></div>
									</div>

									<div class="noneItem-bottom">
										<span>{{item.priceAll}}</span>
										<span>元/月</span>
										<!-- <div class="clear" @click="onShow(item.id,item)"><img src="../../../../static/yk/clear.png" alt="" /></div> -->

										<div style="clear: both;"></div>
									</div>
								</div>
							</div>
							<div class="noData" v-if="noDataShow">
								<a href="tel:400-900-2225">400-900-2225</a>
								<p>拨打热线告诉我们您的租房需求</p>
							</div>
					</scroller>
				</div>
			</div>
			<div style="height: 0.45rem;"></div>
		</div>
		<!-- <ga-page-bottom></ga-page-bottom> -->
	</div>
</div>
</template>

<script>
import houseList from "../../../../static/rent/img/house-list.png";
import trash    from "../../../../static/rent/img/clear.png";
// import noDataimg from "https://media.guoanfamily.com/rent/static/HomePage/noneImg1.png";
	export default {
		props: {
            selectType:{
                type:String,
                default:""
            },
            isSearch:{
                type:Boolean,
                default:false,
            },
            isSecordHeight:{
                type:Boolean,
                default:false,
            },
        },
        data() {
            return {
            	androidOrIos:true,	//默认为安卓登录
				bgimg1:true,//判断没有数据显示背景图片
				bgimg2:false,//判读有数据显示
				isAppoint:true,//判断显示哪个tab true未完成   false已完成
				isFinished:0,
				tab:true,//判断tab是否请求
				noDataShow:false,//是否显示加载更多字段
				flag:true,//判断是否为最后一页
				currentPageNo:1,//请求页数
				HouseLists: [],
				forbid:true,//禁止上拉
				priceAll:"",//价格
				trash:trash,
				content:"",//弹出框的显示内容
				placeholder:true,
                listPosition: null,
				preventLoad: false,
				advantageTags:'',//独卫
				appointTime:'',//预约时间
				appointName:'',//预约状态
				buildFloor:'',//楼层
				houseId:'',//房源id
				id:'',//约看id
				houseName:'',//房源名称
				intakeState:'',//房间入住状态
				intakeStateName:'',//房间入住状态名称
				price:'',//房间出售价格
				rentPrice:'',//房源出售价格
				rentStatusCode:'',//房源出租状态
				rentStatusName:'',//房源出租状态名称
				roomFirstImage:'',//图片
				roomId:'',//房间id
				roomName:'',//房间名称
				usedArea:'',//使用面积
				yesno:false,//第一次加载时禁止上拉
				Image:'',//保存图片
				noDataimg:"https://media.guoanfamily.com/rent/static/HomePage/noneImg1.png",
            }
        },

		created() {//请求数据--初始化加载
			//let isLogin = this.verifyLogin();
                //true-已登录，false-未登录
           // if(isLogin){
                //this.id = this.getStorage(this.KEYS.USER_INFO).id;
			this.getHouseList();
           // }else{
                //this.$router.push({path:"/login"})
           // }
			//this.id = this.getStorage(this.KEYS.USER_INFO).id;
			//this.id = '99dacbbd-2722-420a-b232-6ee0bd4a0714';
            //this.id = this.$route.query.Id;
            this.isIosAndroid();

		},
        mounted() {
			// let windowHeght = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			// let topOneH = this.$refs.topOne.clientHeight;
			// alert(windowHeght);
        },

        methods: {
			//当没有约看的时候，点击背景图跳转到租房首页
			bgNewHome(){
				this.$router.push("/HomePage");
			},
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
//      	未完成的约看
        	none(){
				if(this.tab == true){
					this.bgimg1 = true;
					this.bgimg2 = false;
					this.currentPageNo = 1;//页码
					//this.$refs.myList.scrollTo(0, 0, false);
					this.yesno=false;
					this.HouseLists = [];
					this.isFinished = 0;
					this.isAppoint=true;
					this.tab = false;
					this.getHouseList();
				}

        	},
//      	已完成的约看
        	already(){
				if(this.tab == true){
					this.bgimg1 = true;
					this.bgimg2 = false;
					this.currentPageNo = 1;//页码
					this.noDataShow = true;
					this.yesno=false;
					//this.$refs.myLists.scrollTo(0, 0, false);
					this.HouseLists = [];
					this.isFinished = 1;
					this.isAppoint=false;
					this.tab = false;
					this.getHouseList();
				}
			},
			//获取约看列表
            getHouseList(){
                return this.post('CAppointController/getCAppointList',{
					'isFinished':this.isFinished,//0是未完成  1 是已完成
					'currentPageNo':this.currentPageNo
				}).then((res) =>{
					console.log("未完成约看");
					console.log(res);					
					if(res.content.length == 0){
						this.bgimg1 = true;
						this.bgimg2 = false;
					}else{
						this.bgimg1 = false;
						this.bgimg2 = true;
						res.content.forEach(item =>{
							this.yesno = true;
							this.HouseLists.push(item);
							// item.latitude = item.latitude;
							// item.longitude = item.longitude;
							// item.communityName = item.communityName;
							if(item.roomId){
								if(item.roomFirst){
									item.Image = this.concatFileUrl(item.roomFirst,200,200);
								}else{
									item.Image = "https://media.guoanfamily.com/rent/static/HomePage/noneImg1.png";
								}
							}else if(item.houseFirst){
								item.Image = this.concatFileUrl(item.houseFirst,200,200);
							}else{
								item.Image = "https://media.guoanfamily.com/rent/static/HomePage/noneImg1.png";
							}
							//item.Image= item.roomId ? (this.concatFileUrl(item.roomFirst)) : this.concatFileUrl(item.houseFirst);
							item.advantageTags= item.advantageTags ? item.advantageTags.split(",").slice(0,3): "";
							if(item.roomId == "" || item.roomId == null || item.roomId == undefined){
								item.priceAll = item.rentPrice;
							}else{
								item.priceAll = item.price;
							}
						})
						this.currentPageNo = res.currentPageNo;
						this.flag = res.flag;
						if(res.flag == false){ //true有数据  false没有数据
							//this.flag = false;
							return true;//没有数据
							this.noDataShow = true;
						}else{
							//this.flag = true;
							this.currentPageNo += 1;
							return false;//有数据
						}
					}
				}).then((res)=>{
					this.tab = true;
				});
            },
            //跳到房源详情
            goHouseDetail(){
                //this.$router.push({path:'/HouseList/houseDetail', query:{id:item.id}})
                // this.listPosition = this.$refs.myList.getPosition();
            },

			//弹出层
			onShow(e){
				const ev = e;
				if(this.isAppoint == true){//判断弹出层显示的内容
						this.content="是否取消约看"
				}else{
						this.content="是否删除约看"
				};
				const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
				this.$vux.confirm.show({
					//title:"是否取消",
					content:_this.content,
					onCancel () {//取消执行
					},
					onConfirm (e) {//确定执行
						if(_this.isAppoint == true){//判断弹出层显示的内容
							_this.abolish(ev);
						}else{
							_this.TrashClick(ev);
						};
					}
				})
			},
			//跳转到地图路线
			mapLink(e){
				console.log(e);
				console.log(e.latitude);
				console.log(e.longitude);
				console.log(e.communityName);
				this.$router.push({path:'/MapRouteLine', query:{latitude:e.latitude,longitude:e.longitude,areaName:e.communityName}})
			},
			//垃圾桶按钮
            TrashClick(ev){
				//this.getHouseList();//刷新列表
				//this.already();//保持tab不被切换
				this.HouseLists = this.HouseLists.filter(item => item.id != ev);
				this.post('CAppointController/deleteCAppoint',{
					appointId:ev
				}).then((res) =>{
					if(res.code == 0){
						var that = this;
						this.$vux.confirm.show({
							content:'删除成功',
							onCancel () {//取消执行
								//this.$refs.myList.scrollTo(0, 0, false);
								//this.$refs.myLists.scrollTo(0, 0, false);
								that.yesno=false;
								that.currentPageNo = 1;
								that.HouseLists = [];
								that.getHouseList();
							},
							onConfirm () {//确定执行
								//this.$refs.myList.scrollTo(0, 0, false);
								//this.$refs.myLists.scrollTo(0, 0, false);
								that.yesno=false;
								that.currentPageNo = 1;
								that.HouseLists = [];
								that.getHouseList();
							}
						})
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
			},
			//取消约看
			abolish(ev){
				this.HouseLists = this.HouseLists.filter(item => item.id != ev);
				//this.none();//保持tab不被切换
				//this.getHouseList();//刷新列表
				this.post('CAppointController/cancelCAppoint',{
					appointId:ev
				}).then((res) =>{
					if(res.code == 0){
						var thats = this;
						this.$vux.confirm.show({
							content:'取消成功',
							onCancel () {//取消执行
								//this.$refs.myList.scrollTo(0, 0, false);
								//this.$refs.myLists.scrollTo(0, 0, false);
								thats.yesno=false;
								thats.currentPageNo = 1;
								thats.HouseLists = [];
								thats.getHouseList();
							},
							onConfirm () {//确定执行
								//this.$refs.myList.scrollTo(0, 0, false);
								//this.$refs.myLists.scrollTo(0, 0, false);
								thats.yesno=false;
								thats.currentPageNo = 1;
								thats.HouseLists = [];
								thats.getHouseList();
							}
						})
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
			},
			//下拉
            refresh(done){
				this.yesno=false;
				this.currentPageNo = 1;
				this.HouseLists = [];
                this.getHouseList().then((res)=>{
                    done(res)
				})
				this.forbid = true;
            },
			//上拉
            infinite(done){
				if(this.yesno == true){
					if(this.flag == false){
						done(true);
						this.yesno == false;
						return;
					}
					this.getHouseList().then((res)=>{
						done(res)
					})
				}else{
					done(true);
					return;
				}
			},
			//下拉s
            refreshs(done){
				this.yesno=false;
				this.currentPageNo = 1;
				this.HouseLists = [];
                this.getHouseList().then((res)=>{
					done(res)
					this.noDataShow = true;
				})
				this.noDataShow = false;
				this.forbid = true;
            },
			//上拉2
            infinites(done){
				if(this.yesno == true){
					if(this.flag == false){
						done(true);
						this.yesno == false;
						this.noDataShow = true;
						return;
					}
					this.getHouseList().then((res)=>{
						done(res)
					})
				}else{
					done(true);
					this.noDataShow = false;
					return;
				}
			},
        },
		watch:{

        },
        components: {
		}
    }
</script>

