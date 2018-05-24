<template>
	<div>
		<div class="screenshot-shadow">
			<div class="screenBox" >
				<div class="screentop">
					<div class="screenimg-box">
						<div class="screenBox-img">
							<img id="imgScreen" src="" />
						</div>
						<div class="screenBox-word">分享截屏给好友</div>
					</div>
					<div class="screen-share">
						<div class="share-item" @click="shareWechat">
							<div class="share-item-img"></div>
							<p>微信朋友</p>
						</div>
						<div class="share-item" @click="shareWechatZone">
							<div class="share-item-img imgFriends"></div>
							<p>微信朋友圈</p>
						</div>
					</div>
				</div>
				<div class="screenbottom" >
					<img src="../../../../static/rent/HomePage/shareClose.png"  @click="closeShareFun"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { TransferDom, Tab, TabItem } from "vux";
	export default {
// 		directives: {
//     TransferDom
//   },
		data(){
			return {
				closeShareBox:true,
				closeScreenshot:false,
				ScreenshotPath:''
			}
		},
		mounted(){
			window.receiveScreenShotCallback = (data) =>{
		  		document.getElementsByClassName("screenshot-shadow")[0].style.top = "0";
				document.getElementById("imgScreen").setAttribute("src","file://" + data);
				this.ScreenshotPath = data;
				console.log(data);
			}
		},
		updated(){
			
		},
		methods:{
			closeShareFun(){
				document.getElementsByClassName("screenshot-shadow")[0].style.top = "100%";
			},
			//分享到微信朋友
			shareWechat(){
				let _this = this;
				Wechat.share({
				    message: {
				        title:"", 
		                description:"",
		                thumb: "",
		                media: {
		                    type: Wechat.Type.IMAGE,
		                    image: _this.ScreenshotPath
		                }
				    },
				    scene: Wechat.Scene.SESSION   // share to Timeline
				}, function () {
				    //alert("Success");
				}, function (reason) {
				    //alert("Failed: " + reason);
				});
			},
			//分享到微信朋友圈
			shareWechatZone(){
				let _this = this;
				Wechat.share({
				    message: {
				        title:"", 
		                description:"",
		                thumb: "", 
		                media: {
		                    type: Wechat.Type.IMAGE,
		                    image: _this.ScreenshotPath
		                }
				    },
				    scene: Wechat.Scene.TIMELINE   // share to Timeline
				}, function () {
				    //alert("Success");
				}, function (reason) {
				    //alert("Failed: " + reason);
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.screenshot-shadow{
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		transition: .3s;
		overflow: hidden;
		top:100%;
		left: 0;
		z-index: 30000;
		.screenBox{
			z-index: 30000;
			width:5rem;
			height: 9rem;
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			margin: auto;
			.screentop{
				height: 7rem;
				background: #f1f2f4;
				border-radius:10px ;
				overflow:hidden;
				.screenimg-box {
					height: 4.1rem;
					border-bottom: 1px solid gray;
					.screenBox-img {
						width: 1.9rem;
						height: 3rem;
						
						margin: 0.7rem auto 0;
						img{
							width: 100%;
							height: 100%;
							
						}
					}
					.screenBox-word{
						height: 0.5rem;
						font-size:0.28rem;
						text-align: center;
						line-height: 1.2rem;
					}
				}
				.screen-share{
					height: 2rem;
					.share-item{
						width: 1.4rem;
						height: 1.8rem;
						float: left;
						margin:0.2rem 0 0 0.2rem;
						.share-item-img{
							width: 1rem;
							height: 1rem;
							background-image: url(../../../../static/new/img/Wx.png);
							background-size:100% 100%;
							margin-left: 0.2rem;
						}
						.imgFriends{
							background-image: url(../../../../static/new/img/friends.png);
						}
						p{
							font-size: 0.23rem;
							margin-top: 0.15rem;
						}
					}
				}
			}
			.screenbottom{
				text-align: center;
				img{
					display: inline-block;
					width: 0.5rem;
					height: 0.5rem;
				}
			}
			
		}
	}
</style>