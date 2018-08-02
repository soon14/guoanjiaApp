<style scoped lang="scss">
	@import "../../style/theme.scss";
	/*@import "../../style/public.scss";*/
	$k:1;
    $ColorClass: $labelOne, $labelTwo, $labelThree;
	.collect{
		box-sizing: border-box;
		padding: 0.24rem 0.31rem 0;
		background:white;
		font-size: $mostFontSize;
		.collect-title{
			height: 0.65rem;
			img{
				margin-bottom: 0.05rem;
				display: inline-block;
			}
			.priceShow{
				font-weight: bold;
				float: left;
				color: #df4d4e;
				font-size: 0.42rem;
			}
			.collectBtn{
				width: 0.7rem;
				float: right;
				text-align: center;
				font-size: 0.3rem;
				img{
					width: 0.28rem;
					height: 0.28rem;
				}
			}
			.shareBtn{
				margin-top: 0.01rem;
			}
			.line-share-collect{
				float: right;
				height: 0.7rem;
				width: 0.02rem;
				background: #f2f2f2;
				margin: 0 0.2rem;
			}
		}
		.collect>p{
			height: 0.63rem;
			color: #525252;
			border-bottom:0.01rem solid #e6e6e6 ;
			
		}
		.collect-message{
			/*height: 0.76rem;*/
			padding-bottom:0.1rem ;
			box-sizing: border-box;
			padding: 0.19rem 0 0 0.28rem;
			border-top: 0.01rem solid #eeeeee;
			margin-top:0.2rem ;
			.recommend1{
				
			}
			@mixin color($bgColor){
                border: 1px solid $bgColor;
                color: $bgColor;
            }
            @for $i from 1 through 3{
				.recommend1:nth-child(3n+#{$i}){
					@include color(nth($ColorClass,$i));
				}
			}
		}
		.collect-message>span{
			display: block;
			float: left;
			height: 0.46rem;
			line-height: 0.46rem;
			color: #f9ffff;
			border-radius: 0.05rem;
			text-align: center;
			margin-right: 0.16rem;
			padding: 0.05rem 0.1rem 0;
			margin-bottom: 0.2rem;
		}
	}

	/*户型 层数 面积*/
	.houseType{
		box-sizing: border-box;
		padding: 0.2rem 0.3rem 0;
		height: 2.2rem;
		background: white;
		.houseType-row{
			height: 0.54rem;
			.row-col {
				width: 50%;
				height: 0.54rem;
				float: left;
			}
		}

		.houseType-phone{
			height: 0.74rem;
			box-sizing: border-box;
			padding:0.2rem 0 0 0 ;
			text-align: center;
			line-height:0.5rem;
			.phone-name{
				font-size: $titleFontSize;
				color: #2a2a2a;
				text-align: center;
				box-sizing: border-box;
				padding-left: 0.4rem;
				background:url(../../../../static/rent/fyxq/phoneicon.png) no-repeat ;
				background-size:0.45rem 0.45rem ;
				background-position:1.15rem 0.05rem ;
			}
			.phone-num{
				font-size: 0.4rem;
				color: #e94e5c;
			}
		}

	}
	.row-col>span{
		display: inline-block;
		float: left;
		line-height: 0.58rem;
	}
	.row-col span:nth-child(1) {
		font-size: 0.28rem;
		color: #939393;
	}
	.row-col span:nth-child(2) {
		font-size: 0.29rem;
		color: #484848;
	}
	.row-col span:nth-child(3) {
		font-size: $fewFontSize;
		color: #484848;
	}
	span{
		display:inline;
	}

	/*房源房间详细信息*/
	.houseRoomDetail{
		box-sizing: border-box;
		padding: 0.15rem 0.15rem ;
		font-size: $reminderFontSize;
		background: #f2f2f2;
		.houseRoomDetail-title {
			height: 0.55rem;
			box-sizing: border-box;
			padding-top: 0.1rem;
			background: white;

		}
		.house-content{
			background: white;
			text-indent: 2em;
			padding: 0.34rem 0.2rem;
			font-size: 0.24rem;
			text-align: left;
		}
		.facility{
			background: white;
			box-sizing: border-box;
			padding: 0.18rem 0.08rem;
		}
	}
	.houseRoomDetail-title span:nth-child(1) {
		display: block;
		float: left;
		width: 0.05rem;
		height: 0.4rem;
		background: #ff9439;
		margin-right: 0.2rem;
		margin-top: -0.02rem
	}
	.houseRoomDetail-title span:nth-child(2) {
		display: inline-block;
		float: left;
		font-size: 0.28rem;
		line-height: 0.4rem;
	}
	.facility-title{
		width:3.6rem;
		height: 0.46rem;
		line-height: 0.46rem;
		text-indent: 1.5em;
		box-sizing: border-box;
		padding-top:0.04rem ;
		text-align: left;
		/*background: url(../../../../static/fyxq/icon/orange.png) ;*/

	}
	.facility-title1{
		background-image: url(../../../../static/rent/fyxq/icon/orange.png) ;
	}
	.facility-title2{
		background-image: url(../../../../static/rent/fyxq/icon/blue.png) ;
	}
	.facility-title3{
		background-image: url(../../../../static/rent/fyxq/icon/green.png) ;
	}
	.facility-title4{
		background-image: url(../../../../static/rent/fyxq/icon/red.png) ;
	}
	.background0{
		background: #ff943a;
	}
	.background1{
		background: #e2614c;
	}
	.background2{
		background: #3cc4dc;
	}
	.background3{
		background: #49c891;
	}

	.facility span{
		color: white;
		font-size: $reminderFontSize;
	}
	.facility span:nth-child(1){
		font-weight: 700;
		font-size: 0.28rem;
	}
	.facility span:nth-child(2){

		font-size: 0.24rem;
	}
	.facility-content{
		box-sizing: border-box;
		padding: 0.2rem 0.19rem;
		.facility-content-row{
			height: 0.67rem;
			.facility-col{
				width: 33.33%;
				height: 0.57rem;
				float: left;
				font-size: 0.24rem;
				/*overflow:hidden;
	      		text-overflow:ellipsis;
				white-space:nowrap;*/
				text-align: left;
				.facility-col-img{
					width: 0.25rem;
					height: 0.25rem;
					float: left;
					margin: 0.03rem 0.1rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	/*室友信息*/
	.roommate{
		font-size: $reminderFontSize;
		background: white;
		ul{
			height: 0.77rem;
			border-bottom:0.01rem solid #e6e6e6;
			li{
				float: left;
				/*width: 25%;*/
				height: 0.77rem;
				line-height: 0.77rem;
				box-sizing: border-box;
				padding-top: 0.06rem;
				/*text-align: center;*/
				.roommate-col1{
					display: block;
					width: 0.6rem;
					height: 0.6rem;
					text-align: center;
					line-height: 0.6rem;
					/*background:#ff943a;*/
					color: white;
					border-radius: 50%;
					font-weight: 700;
					margin: 0.04rem 0 0 0.45rem;
					font-size: $reminderFontSize;
					box-sizing:border-box ;
					padding-top: 0.02rem;
				}
				p{
					float: left;
				}
				img{
					width: 0.4rem;
					height: 0.4rem;
					float: left;
					margin-top: 0.16rem;
					margin-left: 0rem;
				}
			}
			li:last-child{
				float: right;
			}
			.yesCheck{
				color: #606060;
				text-align: center;
				font-size: 0.24rem;
			}
			.noCheck{
				color: #15be49;
				text-align: center;
				font-size: 0.24rem;
				font-weight: bold;
			}
			.roomrent{
				color: #d31a20;
				font-size: 0.24rem;
				text-align: left;
			}
			.content-li-last{
				font-size: 0.24rem;
			}
			.thisHouse{
				text-align: center;
				color: #e75667;
				font-weight: bold;
			}
			.lookroom{
				color: #289cc3;
				text-decoration: underline;
			}
		}
	}
	.roommate ul:last-child{
		border: 0;
	}
	/*服务介绍*/
	.serve{
		height: 2.13rem;
		background: white;
		box-sizing: border-box;
		padding: 0.09rem 0.24rem  0 ;
		li{
			height: 0.65rem;
			line-height: 0.65rem;
		 	border-bottom:0.01rem solid #e6e6e6;
		 	font-size: 0.24rem;
		 	overflow:hidden;
	        text-overflow:ellipsis;
			white-space:nowrap;
			text-align: left;
			span{
				color: #ff9233;
				font-size: 0.24rem;
			}
			.serve-img{
				width: 0.25rem;
				height: 0.25rem;
				margin: 0.2rem 0.05rem 0 0 ;
				float: left;
			}
		}
	}
	.serve li:last-child{
		border: 0;
	}
	/*付款方式*/
	.payway{
		/*height: 3rem;*/
		.payway-title{
			height: 0.5rem;
			font-size: 0.25rem;
			background: white;
			li{
				width: 25%;
				float: left;
				text-align: center;
				line-height: 0.55rem;
			}
		}
		.payway-content{
			height: 0.7rem;
			background: white;
			li{
				width: 25%;
				text-align: center;
				line-height: 0.7rem;
				color: #0d0005;
				font-size: 0.23rem;
				float: left;
				span{
					display: inline-block;
					width: 0.9rem;
					height: 0.35rem;
					background: #5299db;
					color: white;
					text-align: center;
					line-height: 0.3rem;
					border-radius: 3px;
					box-sizing: border-box;
					padding-top: 2px;
				}
			}
		}
		
		
		
	}
	/*周边交通*/
	.round{
		background: white;
		box-sizing: border-box;
		padding:0 0.18rem 0.21rem 0.18rem;
		overflow: hidden;
		.round-location {
			padding: 0.18rem 0 0.18rem 0;
			text-align: left;
			.round-img{
				width: 0.35rem;
				height: 0.35rem;
				float: left;
				margin: 0.01rem 0.1rem 0 0;
				img{
					width: 100%;
					height: 100%;

				}
			}
		}
		.surround{
			border-bottom:0.01rem solid #e6e6e6 ;
		}
		.round-location span:nth-of-type(2){
			display: block;
			font-size: 0.24rem;
			text-indent: 2em;
			
		}
	}
	/*小区*/
	.community{
		background: white;
		box-sizing: border-box;
		padding: 0.27rem 0 0.27rem 0.2rem;
		.community-scroll {
			position: relative;
			/*width: 3.39rem*3;*/
		}
		.community-item {
			width: 3.31rem;
			height: 2.8rem;
			display: inline-block;
			margin-left: 0.1rem;
			margin-right: 0.1rem;
			float: left;
			/*scroll中的图片*/
			.communityImg {
				width: 3.31rem;
				height: 2.59rem;
				img{
					width: 100%;
					height: 100%;
					border-radius: 0.1rem;
				}
			}
		}
		.community-item:first-child {
		 	margin-left: 0;
		}
		p{
			box-sizing: border-box;
			/*padding-top:0.22rem ;*/
			/*border-top: 0.01rem solid #e6e6e6;*/
			text-indent: 2em;
			font-size: 0.24rem;
		}
	}
	/*国安家推荐*/
	.recommend{
		background: white;
		font-size: $titleFontSize;
		box-sizing: border-box;
		padding: 0.4rem 0 0 0;

	}
	.recommend-title {
			text-align: center;
			line-height: 0.35rem;
			color: #e24e59;
			height: 0.35rem;
			font-size: 0.45rem;
		}
		.isHaveGajClass{
			padding-bottom: 0.35rem;
		}
		.recommend-title>p {
			display: inline-block;
			height: 0.03rem;
			width: 1.3rem;
			background: #e8495b;
			margin-bottom: 0.08rem;
		}
	.ga-recommend {

		box-sizing: border-box;
		position: relative;
		margin-top: 0.3rem;
		.scroll-swiper{
			background: white;
			box-sizing: border-box;
			padding: 0.2rem 0 0 0.15rem;
		}
		.box1-item {
			width: 3.31rem;
			/*height: 3.9rem;*/
			display: inline-block;
			margin-left: 0.2rem;
			float: left;
			.active5{
				width: 0.8rem;
				height:0.8rem;
				position: absolute;
				top: 0.2rem;
				left: 0.2rem;
				background: url("../../../../static/rent/house-list/active418.png") no-repeat;
				background-size: 100%;
			}
			.gaImg {
				width: 3.3rem;
				height: 2.6rem;
				img{
					width: 100%;
					height: 100%;
					border-radius: 0.1rem;
				}
			}
			.gatitle {
				box-sizing: border-box;
				padding: 0.12rem 0 0 0.1rem;
				font-size: $mostFontSize;
				text-align: left;
				.recommend-firstline{
					font-size: 0.28rem;
					color: #313131;
					overflow:hidden;
	       			text-overflow:ellipsis;
					white-space:nowrap;
				}
				.recommend-secondline{
					font-size: 0.28rem;
					color: #e84e56;
					margin-top: 0.1rem;
				}
			}
		}
	}
	.recommend-bottom{
		width: 100%;
		background: white;
		border-top: 0.01rem solid #efefef;
		height: 1.2rem;
		box-sizing: border-box;
		padding: 0.1rem 0.43rem;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 888;
		li{
			width: 33.33%;
			height: 1rem;
			float: left;
			text-align: center;
		}
		.recommend-li1{
			margin-left: 0;
			line-height: 1.1rem;
		}
		/*.recommend-li1 p:nth-child(1){
			font-size: 0.3rem;
			color: #8b8b8b;
		}*/
		.recommend-li1 p:nth-child(1){
			font-size: 0.42rem;
			color: #df4d4e;
			font-weight: bold;
		}
		.recommend-li2,.recommend-li2{
			/*line-height: 1.2rem;*/
			/*line-height: 0;*/
			font-size: $mostFontSize;
		}
		.recommend-li2>span{
			display: inline-block;
			width: 1.6rem;
			height: 0.6rem;
			background: #f6b14c;
			border-radius: 0.1rem;
			margin-top: 0.2rem;
			line-height: 0.6rem;
			color: white;
			box-sizing: border-box;
			padding-top: 0.04rem;
		}
		.recommend-li3>span{
			background: #e2614c;
		}
	}
/*轮播图样式*/
.ImgHeader {
    width: 100%;
    height: 0.7rem;
    background: rgba(51, 51, 51, 0.5);
    position: absolute;
    top: 3.45rem;
    left: 0;
    .EffectImg {
        width: 50%;
        height: 100%;
        float: left;
        position: relative;
        float:left;
        font-size: $reminderFontSize;
        color: #ffffff;
        text-align: center;
		vertical-align: middle;
		line-height: 0.7rem;
		box-sizing: border-box;

		img {
	        width: 0.4rem;
	        display: inline-block;
	        margin-top: -0.08rem;
	    }
    }

    span {
        margin-bottom: 0.1rem;
        display: inline-block;
    }
}
.pageNum{
	background: rgba(0,0,0,0.3);
	font-size: $mostFontSize;
	color: white;
	width: 0.9rem;
	height: 0.45rem;
	text-align: center;
	line-height: 0.45rem;
	border-radius: 0.225rem;
	position: absolute;
	right: 0.2rem;
	top:4.55rem;
	box-sizing: border-box;
	padding-top: 0.03rem;
	z-index: 999;
}
.threeShow{
	width: 1rem;height: 1rem; position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;
}
.active4{
		width: 1rem;
		height:1rem;
		position: absolute;
		top: 0.5rem;
		left: 0.3rem;
		background: url("../../../../static/rent/house-list/active418.png") no-repeat;
		background-size: 100%;
	}
.surface1,.surface2{
	width: 7.5rem;
	height: 4rem;
	position: absolute;
	top: 0;
	left: 0;
	text-align: center;
	line-height: 3.15rem;
	font-weight: 700;
	color: #c5c5c5;
	font-size: 0.8rem;
	background: rgba(0,0,0,0.2);
	z-index: 999;
}

// tab样式
.bottomTab {
    width: 100%;
    height:44px;
    background: #333333;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100005 !important;
}
.tab-swiper {
    background-color: #333333;
    color: #ffffff;
    height: 100px;
}

.vux-tab {
    background: #333333; // color: #ffffff;
    width: 120%;
}

.vux-tab .vux-tab-item {
    color: white;
    /*font-size: .6rem;*/

    text-align: center;
}

.previewerTitle{
	display: flex;
	width: 110%;
	li{
		float: left;
		text-align: center;
		line-height: 44px;
		color: white;
		flex: 1;
		font-size: $titleFontSize;

	}
	.vux-tab-selected{
		color: #e94e5c;
	}

}
/*百度地图*/
.map-out{
	position: relative;
	.drawdown{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		canvas { 
			opacity: 0.5; 
		}
	}
	.houseMap{
		width: 100%;
		height: 4.6rem;
		background: white;
		box-sizing: border-box;
		border-left:0.17rem solid white ;
		border-right:0.17rem solid white ;
		border-bottom:0.27rem solid white ;
	}
	.map-in{
		position: absolute;
		top: 0.2rem;
		left: 0.4rem;
		width: 30px;
		height: 30px;
		background: url(../../../../static/rent/fyxq/maoLocation.png);
		box-shadow: 0 0 0.05rem #888888;
	}
	.map-line{
		position: absolute;
		top: 0.3rem;
		right: 0.4rem;
		width: 297*0.3px;
		height: 94*0.3px;
		font-size: 0.3rem;
		border-radius:5px;
		animation: show 2s infinite ease-out 1.5s;
		background:url(../../../../static/rent/fyxq/getmapline.png) no-repeat center;
		background-size:100% 100%; 
		z-index: 101;
	}
	@keyframes show {
		0% {
		transform: translateY(0px);
		/*opacity: 0;*/
		}
		25% {
		transform: translateY(8px);
		/*opacity: 0.3;*/
		}
		50% {
		transform: translateY(2px);
		/*opacity: 0.6;*/
		}
		75% {
		transform: translateY(8px);
		/*opacity: 1;*/
		}
		100% {
		transform: translateY(0px);
		/*opacity: 1;*/
		}
	}
	@keyframes show1 {
		0%{
			transform: rotateY(0);
		}
		25%{
			transform: rotateY(-60deg);
		}
		50%{
			transform: rotateY(0);
		}
		75%{
			transform: rotateY(60deg);
		}
		100%{
			transform: rotateY(0);
		}
	}
}


/*loding样式*/
.loding{
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.5);
	z-index: 999;
	text-align: center;
	line-height: 200px;
	font-size: 30px;
	transition: .5s;
	.spinner {
	  width: 120px;
	  height: 120px;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  margin: -60px 0 0 -60px;
	}
}
.emptyios{
	height: 1.1rem;
}
.emptyandroid{
	height: 1.1rem;
}
.page-content{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	overflow-y: scroll;
	padding-top: 0;
}
.market {
  width: 100%;
  height: 100%;
  background: transparent;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: 998;
}
// 微信分享样式
.shareAlert{
    width:100%;
    height: 0rem;
    position: fixed;
    transition: .9s;
    bottom: 0;
    background:#fff;
    border-top: 2px solid #f2f2f2;
    z-index: 999;
   .shareIcon{
       width:100%;
       height: 1.5rem;
       div{
           float: left;
           width:1.5rem;
           height: 1.5rem;
           background:red;
           margin-left: .3rem;
           position: relative;
       }
       div:nth-child(1){
           background:url(../../../../static/new/img/Wx.png) no-repeat;
           background-size: 60%;
           background-position: 50% 26%;
           span{
               display: block;
               width:100%;
               font-size:.3rem;
               position: absolute;
               bottom: 0;
           }
       }
       div:nth-child(2){
           background:url(../../../../static/new/img/friends.png) no-repeat;
           background-size: 60%;
           background-position: 50% 26%;
           span{
               display: block;
               width:100%;
               font-size:.3rem;
               position: absolute;
               bottom: 0;
           }
       }
   }
   .exitShare{
       padding-top:5px;
       font-size: .4rem;
        border-top:1px solid #e6e6e6;
        margin-top: .6rem;
        bottom: 0;
        text-align: center;
        width:100%;

   }
}
.shareAlert1{
    transition: .9s;
    height: 3rem;
}
// 分享提示文字样式
.righthorn {
  width: 100%;
  height: 100%;
  font-size: 0.75rem;
  text-align: center;
  background: rgba(0,0,0,.5);
  color: #ffffff;
  position: fixed;
  z-index: 20000;
  line-height: 6.5rem;
  font-weight: 500;
}
</style>
<template>
	<div class="fixContent">
		<!--loding-->
		<div class="loding" ref="load">
			<div class="spinner">
			  	<img :src="loading"/>
			</div>
		</div>
		<!--页面内部的头部-->
		<div v-show="!this.$store.state.showWxTitle">
            <ga-page-header slot="header" title="房源详情"></ga-page-header>
        </div>
		<!--跳转至应用宝下载；国安家APP-->
		<div><downLoad></downLoad></div>
		<!--头部-->
		<!--<ga-page-header title="房源详情"></ga-page-header>-->
		<div class="page-content" id="pageBody">
			<div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>

			<div style="position: relative;height: 4rem;">
				<swiper 
					:options="swiperOption" 
					style="height: 4rem;"
					v-if="imgUrl.length > 0"
					@click.native = show(awesomeIndex)
					>
			        <swiper-slide v-for="(item,index) in imgUrl" :key = "index">
			        	<!--3D展示按钮-->
						<div class="threeShow" v-if="index == 0 && lookUrl" @click="goToShow($event)"><img src="https://media.guoanfamily.com/www/3dlogos.png" alt="" /></div>
			        	<img :src="item.img" style="width: 100%;" alt="" />	
						<!--<div class="active4" v-if="active418"></div>-->
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
			   	</swiper>
			   	
				<!--<div class="pageNum">{{(awesomeIndex+1)}}/{{imgLength}}</div>-->
				<div class="surface1" v-if="isAppointment "> 已预约 </div>
				<div class="surface2" v-if="isRent "> 已出租 </div>
			</div>
			
		   	<!--缩略图-->
		   	<div>
				<div v-transfer-dom>
					<previewer :list="previewerList" ref="previewer"  @on-close='close' @on-change="previewerChange"></previewer>
					<!--缩略图底部文字-->
					<div class="bottomTab" v-show="bottomShows">
						<div style="width: 100%;overflow-x:scroll;-webkit-overflow-scrolling:touch;">	
							<ul class="previewerTitle">
								<li
							    	:class=" (previewerIndex == 0 || previewerIndex == 1 || previewerIndex == 2) ? 'vux-tab-selected' : ' ' "
							    	v-for="(item,index) in everyName"
							    	:key="index"
							    	@click="onItemRoom(index)"
							    	v-if="index == 0">{{item}}(3)</li>
							    <li
							    	:class=" (previewerIndex-2) == index ? 'vux-tab-selected' : ' ' "
							    	v-for="(item,index) in everyName"
							    	:key="index"
							    	@click="onItemElse((index+2))"
							    	v-if="index !== 0">{{item}}</li>
							</ul>
						</div>
			       </div>	
				</div>
			</div>
		   	
			
			<!--房间信息与收藏-->
			<div class="collect">
				<div class="collect-title">
					<div class="priceShow">￥{{Price == null?0:Price}}/月</div>
					
					<div class="collectBtn" @click="collectFunc" :style=" isCollect ? collectYes : collectNo ">
						<img v-if="isCollect" src="../../../../static/rent/fyxq/icon/starSolid.png" alt="" />
						<img v-if="!isCollect" src="../../../../static/rent/fyxq/icon/starRed.png" alt="" />
						<p style="margin-top: 0.5px; font-size: 0.3rem;">收藏</p>
					</div>
					<div class="line-share-collect"></div>
					<!--分享按钮-->
					<div class="collectBtn shareBtn" @click="buildShare" v-if="!this.$store.state.showWxTitle">
						<img src="../../../../static/rent/fyxq/icon/fenxiang.png" alt="" />						
						<p style="font-size: 0.3rem;">分享</p>
					</div>
				</div>
				<p style="font-size: 0.28rem;text-align: left;">{{areaName}} <span v-if="isRoomOrHouse">{{houseName}}</span> {{houseName == '东大桥店'?roomFloor:colledtName}}{{roomNumber}}</p>
				<div class="collect-message">
					<span v-for="(item,index) in advantageTagsArr" class="recommend1">{{item}}</span>
					<div style="clear: both;"></div>
				</div>
			</div>
			<div style="height: 0.15rem; background: #f2f2f2;"></div>
			<!--户型 层数 面积-->
			<div class="houseType">
				<div class="houseType-row">
					<div class="row-col">
						<span>户型：</span>
						<span >{{afterRoom}}室{{afterLiving}}厅</span>
						<!--<span>（主卧）</span>-->
					</div>
					<div class="row-col">
						<span>层数：</span>
						<span >{{houseName == '东大桥店'?roomFloor:buildFloor}}</span>
					</div>
				</div>
				<div class="houseType-row" style=" border-bottom:0.01rem solid #e6e6e6;">
					<div class="row-col">
						<span>面积：</span>
						<span>{{Area}}㎡</span>
	
					</div>
					<div class="row-col">
						<span>朝向：</span>
						<span >{{Orientation}}</span>
					</div>
				</div>
				<div class="houseType-phone">
					<p class="phone-name">客服热线<a href="tel:400-900-2225"><span class="phone-num">&nbsp;&nbsp;400-900-2225</span></a></p>
				</div>
			</div>
	
			<!--房源房间详细信息-->
			<div class="houseRoomDetail">
				<!--房源介绍-->
				<div v-if="isHaveEnvironment">
					<div class="houseRoomDetail-title">
						<span></span>
						<span>房源介绍</span>
					</div>
					<div style="height: 0.05rem; background: #f2f2f2;"></div>
					<div class="house-content">
						{{advantageEnvironment}}
					</div>
					<div style="height: 0.15rem; background: #f2f2f2;"></div>
				</div>
	
	
				<!--房屋配套-->
				<div class="houseRoomDetail-title">
					<span style="background: #e36348;"></span>
					<span>房屋配套</span>
				</div>
				<div style="height: 0.05rem; background: #f2f2f2;"></div>
				<div class="facility">
					<div class="roomItems"  v-for="(item,index) in roomItems" v-if="!(item.typeCode == '0014006' || item.typeCode == '0014007')">
						<div class="facility-title" :class="itemStyle[item.typeCode]" style="background-size:100% 100% ;">
							<span v-if="item.typeCode == '0014001'">{{item.roomItemName+roomNumber}}</span>
							<span v-else>{{ productType == '0019003' && item.typeCode == '0014004' ? '独立卫生间' : item.roomItemName}}</span>
							<span>({{item.usedArea}}㎡ )</span>
						</div>
						<div class="facility-content">
							<div class="facility-content-row">
								<!--<div class="facility-col" v-for="goods in item.items">现在屋内配置写死，之前的代码注释
									<div class="facility-col-img">
										<img :src="goods.icon"/>
									</div>
									{{goods.itemName}}
								</div>-->
								<div v-if="item.typeCode === '0014001'">
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/bed.png"/>
										</div>
										双人床
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/chuangdian.png"/>
										</div>
										双人床垫
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/threedoor.png"/>
										</div>
										三门衣柜
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/guizi.png"/>
										</div>
										床头柜
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/desk.png"/>
										</div>
										写字桌
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/yizi.png"/>
										</div>
										写字椅
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/wifi.png"/>
										</div>
										Wifi
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/kongtiao.png"/>
										</div>
										空调
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/lock.png"/>
										</div>
										智能锁
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/chazuo.png"/>
										</div>
										智能插座
									</div>
								</div>
								<div v-else-if="item.typeCode === '0014002'">
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/luyou.png"/>
										</div>
										路由器
									</div>
								</div>
								<div v-else-if="item.typeCode === '0014003'">
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/bingxiang.png"/>
										</div>
										冰箱
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/youyanji.png"/>
										</div>
										抽油烟机
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/weibolu.png"/>
										</div>
										微波炉
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/ranqizao.png"/>
										</div>
										燃气灶
									</div>
	
								</div>
								<div v-else-if="item.typeCode === '0014004'">
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/xiyiji.png"/>
										</div>
										洗衣机
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/hotwater.png"/>
										</div>
										热水器
									</div>
								</div>
								<div v-else-if="item.typeCode === '0014005'">
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/xiyiji.png"/>
										</div>
										暂无
									</div>
									<div class="facility-col">
										<div class="facility-col-img">
											<img src="../../../../static/rent/fyxq/icon/hotwater.png"/>
										</div>
										暂无
									</div>
								</div>
								<div style="border-bottom:0.01rem solid #e6e6e6;float: left;width: 100%;margin-top: 0.05rem;"></div>
							</div>
							<div style="clear: both;"></div>
						</div>
					</div>
				</div>
				<div style="height: 0.15rem; background: #f2f2f2;"></div>
				<!--房间室友信息-->
				<div v-if="isHaveroomList">
					<div class="houseRoomDetail-title" >
						<span style="background: #3ac7db;"></span>
						<span>房间室友信息</span>
					</div>
					<div style="height: 0.05rem; background: #f2f2f2;"></div>
					<div class="roommate">
						<ul v-for="(item,index) in roomList">
							<li style="width: 15%;"><span class="roommate-col1" :class="backgroundStyle[index]">{{houseName == '东大桥店'?item.roomFloor:item.roomName}}{{item.roomNumber}}</span></li>
							<li style="width: 30%;" :class="!item.isIntakeState ? 'yesCheck' : 'noCheck' ">
								<p style="width: 100%; text-align: center;">{{item.intakeState}}</p>
								<!--<img v-if="item.isIntakeState" :src="item.icon"/>-->
							</li>
							<li style="width: 30%;" class="roomrent">
								<p v-if="!item.isIntakeState">￥{{item.price}}元/月</p>
								<div style="color: #535353;" v-if="item.isIntakeState">
									<img :src="item.icon"/>
									&nbsp;{{item.constellation}}
								</div>
								<!--<p v-if="item.isIntakeState">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.constellation}}</p>-->
							</li>
							<li style="text-align: center; width: 25%;" class="content-li-last">
								<span class="thisHouse" v-if="!item.isIntakeState && item.isthisHouse">当前房源</span>
								<span class="lookroom" @click="toOthersRoom(item)" v-if="!item.isIntakeState && !item.isthisHouse">
									查看房间
								</span>
								<span v-if="item.isIntakeState">{{item.job || "保密"}}</span>
							</li>
						</ul>
					</div>
				</div>
				<div style="height: 0.15rem; background: #f2f2f2;"></div>
				<!--服务介绍-->
				<div>
					<div class="houseRoomDetail-title">
						<span style="background: #47cb8f;"></span>
						<span>服务介绍</span>
					</div>
					<div style="height: 0.05rem; background: #f2f2f2;"></div>
					<div class="serve">
						<ul>
							<li ><div class="serve-img"><img src="../../../../static/rent/fyxq/icon/pinzhi.png"/></div><span>品质</span> &nbsp;&nbsp;&nbsp;真实房源、环保家具、智能门锁</li>
							<li ><div class="serve-img"><img src="../../../../static/rent/fyxq/icon/serve.png"/></div><span style="color: #e66253;">服务</span> &nbsp;&nbsp;&nbsp;月度保洁、及时维修</li>
							<li ><div class="serve-img"><img src="../../../../static/rent/fyxq/icon/pay.png"/></div><span style="color: #3dcae8;">支付</span> &nbsp;&nbsp;&nbsp;多种支付方式灵活选择</li>
						</ul>
					</div>
				</div>
				<div style="height: 0.15rem; background: #f2f2f2;"></div>
				<!--付款方式-->
				<div>
					<div class="houseRoomDetail-title">
						<span style="background: #e2614c;"></span>
						<span>付款方式</span>
					</div>
					<div style="height: 0.05rem; background: #f2f2f2;"></div>
					<div class="payway">
						<!--表头-->
		    			<ul class="payway-title">
		    				<li>方式</li>
		    				<li>租金</li>
		    				<li>押金</li>
		    				<li>服务费</li>
		    			</ul>
		    			<div style="height: 0.02rem; background: #f2f2f2;"></div>
		    			<ul class="payway-content">
		    				<li><span>季付</span></li>
		    				<li>￥{{Price}}/月</li>
		    				<li>￥{{Price}}/月</li>
		    				<li>￥{{Math.round(Price*12*0.08)}}/年</li>
		    			</ul>
		    			<ul class="payway-content">
		    				<li><span style="background: #e96464;">半年付</span></li>
		    				<li>￥{{Price}}/月</li>
		    				<li>￥{{Price}}/月</li>
		    				<li>￥{{Math.round(Price*12*0.07)}}/年</li>
		    			</ul>
		    			<ul class="payway-content">
		    				<li><span style="background: #f6b14c;">年付</span></li>
		    				<li>￥{{Price}}/月</li>
		    				<li>￥{{Price}}/月</li>
		    				<li>￥{{Math.round(Price*12*0.06)}}/年</li>
		    			</ul>
		    			
		    			
		    			
					</div>
				</div>
				
				<!--周边交通-->
				<div>
					<div style="height: 0.15rem; background: #f2f2f2;"></div>
					<div class="houseRoomDetail-title">
						<span style="background: #76a7cf;"></span>
						<span>周边交通</span>
					</div>
					<div style="height: 0.05rem; background: #f2f2f2;"></div>
					<div class="round" >
						<div class="round-location surround" v-if="isHaveSurrounding">
							<div class="round-img"><img src="../../../../static/rent/fyxq/icon/round.png"/></div>
							<span style="color: #f19741;font-size: 0.28rem;">周边</span>
							<div style="clear: both;margin-bottom: 0.1rem;"></div>
							<span >{{surrounding}}</span>
						</div>
						<div style="clear: both;"></div>
						<div class="round-location" v-if="ishaveTraffic">
							<div class="round-img"><img src="../../../../static/rent/fyxq/icon/traffic.png"/></div>
							<span style="color:#e36161;font-size: 0.28rem;">交通</span>
							<div style="clear: both;margin-bottom: 0.1rem;"></div>
							<span >{{circumjacentTraffic}}</span>
						</div>
						<div style="clear: both;"></div>
	
					</div>
					<!--房源地图-->
					<div class="map-out">
						<div class="houseMap" id="houseMap"></div>
						<!--<div class="map-in" @click="theLocation"></div>-->
						<div class="map-line" @click="houseDetailMap"></div>
						<div class="drawdown">
							<canvas id="snow">不支持canvas</canvas>
						</div>
					</div>
					
				</div>
	
				<!--小区-->
				<div v-if="isHaveRecommend">
					<div style="height: 0.15rem; background: #f2f2f2;"></div>
					<div class="houseRoomDetail-title">
						<span style="background: #f98ab4;"></span>
						<span>小区</span>
					</div>
					<div style="height: 0.05rem; background: #f2f2f2;"></div>
					<div class="community">
						<swiper 
							v-if="isHaveCommunityImages"
					    	:options="swiperOptionCommunity"
					    	style="height: 2.61rem;">
					        <swiper-slide class="scroll-swiper" v-for="(item,index) in communityList" :key="index">
								<div class="community-item" v-for="(itemImg,indexCommunity) in item" :key="indexCommunity">
									<div class="communityImg">
										<img :src="itemImg"/>
									</div>
								</div>
					      	</swiper-slide>
				    	</swiper>
						<div v-if="isHaveCommunityImages" style="height: 0.12rem; border-top: 0.01rem solid #f2f2f2;margin-top: 0.2rem;width: 98%;"></div>
						<div style="padding-right: 0.2rem;text-align: left;" v-if="isHaveRecommend"><p >{{recommend}}</p></div>
	
					</div>
				</div>
			</div>
			<!--国安家推荐-->
			<div class="recommend">
				<div class="recommend-title" :class="!isHaveGaj ? 'isHaveGajClass' : '' ">
					<p></p>&nbsp;&nbsp;&nbsp;&nbsp;国安家推荐&nbsp;&nbsp;&nbsp;&nbsp;<p></p>
				</div>
				<div class="ga-recommend" v-if="isHaveGaj">
				    <swiper 
				    	:options="swiperOptionRecommed"
				    	style="height: 4rem;">
				        <swiper-slide class="scroll-swiper" v-for="(roomItems,index) in roomArr" :key="index">
							<div class="box1-item" style="position: relative;" v-for="(item,index) in roomItems"  @click="recommendDetali(item)">
								<div class="gaImg">
									<img :src="item.image" />
								</div>
								<div class="gatitle">
									<p class="recommend-firstline">{{item.houseName}} {{item.houseName == '东大桥店'?item.roomFloor:item.roomName}}{{item.roomNumber}}</p>
									<p class="recommend-secondline">￥{{item.price == null?0:item.price}}/月 </p>
								</div>
								<!--<div class="active5" v-if="item.active418"></div>-->
							</div>
				      	</swiper-slide>
				    </swiper>
				</div>
				<div style="height: 1.2rem;background: #f2f2f2;"></div>			
			</div>
		</div>
		<!--遮罩层-->
		<div class="market" v-show="market" @click.stop="markedClick"></div>
		<!-- 分享时候的底部弹出框 -->
        <div class="shareAlert" :class="{'shareAlert1':shareAlert}">
            <div style="width:100%;height:100%;positon:releative;">
                <div class="shareIcon">
                     <div class="weixin" @click="weixinhaoyoufenxiangClick">
                        <span>微信</span>
                    </div>
                    <div class="pengyou" @click="weixinFriendsClick">
                        <span>朋友圈</span>
                    </div>
                </div>
                <div class="exitShare" @click="exitShareClick">取消</div>
            </div>
        </div>	
		<div class="recommend-bottom">
			<ul>
				<li class="recommend-li1"><p>￥{{Price == null?0:Price}}/月</p></li>
				<li class="recommend-li2" @click="appointLookRoom"><span>预约看房</span></li>
				<li class="recommend-li2 recommend-li3" @click="nowReserve"><span>立即下定</span></li>
			</ul>
		</div>
		<!-- 拨打电话 -->
		<button @click="callphone" style="visibility:hidden ;">400-900-2225</button>
	</div>
</template>

<script>
	import { TransferDom } from 'vux'
	import Previewer from "../../components/swiper"
	/*引入vue-awesome-swiper*/
	//import 'swiper/dist/css/swiper.css'
	//import { swiper, swiperSlide } from 'vue-awesome-swiper'
	/*标题背景色*/
	import orange from"../../../../static/rent/fyxq/icon/orange.png"
	import blue from"../../../../static/rent/fyxq/icon/blue.png"
	import green from"../../../../static/rent/fyxq/icon/green.png"
	import red from"../../../../static/rent/fyxq/icon/red.png"

	/*引入图标*/
	import icon_boy from '../../../../static/rent/fyxq/icon/boy.png'
	import icon_girl from '../../../../static/rent/fyxq/icon/girl.png'
	import icon_none from '../../../../static/rent/fyxq/icon/unkonw.png'
	import icon_bed from '../../../../static/rent/fyxq/icon/bed.png'
	import icon_desk from '../../../../static/rent/fyxq/icon/desk.png'
	import icon_tree from '../../../../static/rent/fyxq/icon/tree.png'
	import icon_kongtiao from '../../../../static/rent/fyxq/icon/kongtiao.png'
	import icon_ditu2 from '../../../../static/rent/fyxq/icon/ditu2.gif'
	
	import maoLocation from '../../../../static/rent/fyxq/maoLocation.png'

	import loading from '../../../../static/rent/fyxq/loading.gif'
	import downLoad from '../../components/home/downLoad'
	
	export default {
		
		data() {
			var swiperThis = this;
			return {
				swiperOption: {
					autoplay : true,
					pagination: {
						el: '.swiper-pagination'
					},
//					onTransitionStart(swiper){
//		             	var index = document.getElementsByClassName("swiper-slide-active")[0].getAttribute("data-swiper-slide-index");
//		             	swiperThis.awesomeIndex = index*1;
//		             	console.log("!23");
//		           	},
					on:{
						slideChangeTransitionStart: function(){ 
							swiperThis.awesomeIndex = this.activeIndex;
						},
					}
		       	},
		       	awesomeIndex:0,		//	vue-awesome-swiper的下标
		       	swiperOptionRecommed:{
          			//spaceBetween: 10,
		       	},
		       	swiperOptionCommunity:{
		       		freeMode : true,
		       	},
				//轮播图数据
				demo01_list: this.imgUrl,//轮播图图片列表
				demo02_index: 0,//轮播图下标
				bottomShows: false,//底部文字
				previewerIndex:'',//previewer的下标
				imgUrl:[],//从轮播图数组中拼接房间img
				imgLength:0,//imgUrl数组的长度
				everyName:[],//每个房间的名字
				previewerList:[],//缩略图img的src
				everyNamelength:0,
				isHaveDraw:false,//是否有客厅
				collectUrl:'',//

				id:'',//该房间|房源的id
				productType:'',
				images:'',//收藏的图片入参
				type:'',//收藏传入的参数
				isthisHouse:'',//是否为本房间
				islookroom:false,//查看其它放房间

				collectNo:'color:#535353',
				collectYes:'color:#ff5f31',
				isCollect:false,//是否收藏
				Price:'',//租金
				advantageTagsArr:[],//房源、房间标签
				communityName:'',//小区名字
				houseName:'',//房源名字
				roomName:'',//房间名字
				roomNumber:'',//房间序号
				Orientation:'',//朝向
				Area:'',//面积
				buildFloor:'',//层数
				roomNo:'',//几室
				livingNo:'',//几厅
				afterRoom:'',//优化后几厅
				afterLiving:'',//优化后几厅
				advantageEnvironment:'',//房源介绍
				isHaveEnvironment:true,//是否有房源介绍
				recommend:'',//小区介绍
				isHaveRecommend:true,//是否有小区介绍
				isHaveCommunityImages:true,//是否有小区图片

				surrounding:'',//周边
				isHaveSurrounding:true,//是否有周边信息
				circumjacentTraffic:'',//交通
				ishaveTraffic:true,
				roomId:'',//当前房间id
				houseId:'',//当前房源id
				roomItems:[],//房屋配套
				roomList:[],//房屋室友信息
				isHaveroomList:true,//是否有室友房间信息
				communityList:[],//小区
				communityLength:'',//小区图片的长度
				recommendList:[],//推荐
				recommendLength:'',//推荐的长度
				address:'11',
				itemStyle: {
					"0014001": "facility-title1",
					"0014002": "facility-title4",
					"0014003": "facility-title3",
					"0014004": "facility-title2",
					"0014005": "facility-title2",
					"0014006": "facility-title2",
					"0014007": "facility-title2"
				},
				backgroundStyle:{
					"0":"background0",
					"1":"background1",
					"2":"background2",
					"3":"background3",
					"4":"background0",
					"5":"background1",
					"6":"background2",
					"7":"background3",
					"8":"background0",
					"9":"background1",
					"10":"background2",
					"11":"background3",
					"12":"background0",
					"13":"background1",
					"14":"background2",
					"15":"background3",
					"16":"background2",
					"17":"background3",
					"18":"background0",
					"19":"background1",
					"20":"background2",
					"21":"background3",
					"22":"background0",
					"23":"background1",
					"24":"background2",
					"25":"background3",
					"26":"background0",
					"27":"background1",
					"28":"background2",
					"29":"background3",
					"30":"background0",
					"31":"background1",
					"32":"background2",
					"33":"background3",
					"34":"background0",
					"35":"background1",
					"36":"background2",
					"37":"background3",
					"38":"background2",
					"39":"background3",
					"40":"background0",
					"41":"background1",
					"42":"background2",
					"43":"background3",
					"44":"background0",
					"45":"background1",
					"46":"background2",
					"47":"background3",
					"48":"background0",
					"49":"background1",
					"50":"background2",
					"51":"background3",
					"52":"background0",
					"53":"background1",
					"54":"background2",
					"55":"background3",
					"56":"background0",
					"57":"background1",
					"58":"background2",
					"59":"background3",
					"60":"background0",
					"61":"background1",
					"62":"background2",
					"63":"background3",
					"64":"background0",
					"65":"background1",
					"66":"background2",
					"67":"background3",
					"68":"background0",
					"69":"background1",
					"70":"background2",
					"71":"background3",
					"72":"background0",
					"73":"background1",
					"74":"background2",
					"75":"background3"
				},
				colledtName:'',//房间显示的名字和收藏的名字
				areaName:'',//区域名字
				isRoomOrHouse:'',//是合租还是整租
				depositImg:'',
				hasDepositContract:'',
				roomArr:[],//推荐数组
				isHaveGaj:true,
				isAppointment:false,
				isRent:false,
				shareName:'',
				longitude:116.404,
				latitude:39.915,
				userId:'',//当前登录者的userId
				hasAppoint:false,//当前登陆者是否约看该房间
				newCollectUrl:'',//收藏路径后半部分
				isLoding:true,//loding页面是否显示
				advantageTagsCollect:'',//收藏房间标签
				loading:loading,
				androidOrIos : true ,
				market: false,
				shareAlert:false,
				UserPhoneNum:'',
				lookUrl:"",
				collectHashUrl:"",	//3-16.收藏改成传入hash值给后台
				supernatantTel:"",//接收的电话号
				active418:false,
				roomFloor:''
			}
		},
		created() {
			
			this.callphone();//判断是否是扫描二维码拨打电话
			this.id=this.$route.query.id;
			this.productType=this.$route.query.productType;
			this.collectUrl=window.location.href;
			this.newCollectUrl = 'productType='+this.productType+'&id='+this.id;
			this.collectHashUrl = window.location.hash;
			this.isIosAndroid();

			//mxx获取微信扫码路径，自动拨打电话
			
			
		},
		mounted(){
            //判断是否有token，有则执行getUserInfo获得userid，再获取房源详情
            if(!this.LoToken() && !this.UserPhone()){
				this.post('common/getUserInfo',{//调取获取个人信息接口
	            }).then((res) => {
	            	if(res.code == 0){
	            		this.userId = res.data.userId;
						this.getHouseDetaile();
	            	}
	            });
			}else{
				this.getHouseDetaile();
			}
			this.getRecommendHouse();//获取推荐房源

            //遍历本地localStorage收藏数组
            var user = JSON.parse(localStorage.getItem('userInfroMap'));
	        if (!this.notEmpty(user)) {
	            let userArr = user.collectList;
	            let hres = window.location.hash;
	            for (let i = 0; i < userArr.length; i++) {
	                if (hres == userArr[i]) {
	                    this.isCollect = true;//收藏按钮变红
	                    return;
	                }
	            }
	        }
	     	var time_this = this;
	        setTimeout(function(){
	        	if(time_this.imgUrl.length == 0){
	        		//console.log("轮播图数组长度为0，则没有请求详情接口，判断后再次请求详情接口")
	        		time_this.getHouseDetaile();
	        	}else{
	        		time_this.$refs.load.style.display = 'none';
	        		time_this.isLoding = false;
	        	}
	        },1000)
	        this.getweather();
			
		},
		methods: {
			//天气预报
			getweather(){
				fetch("https://free-api.heweather.com/s6/weather/now?location=beijing&key=9e027a426bfa4318b606f4abbd77d93a",{
					method:'post',			
				}).then(function(response) {
		            return response.json();
		       }).then((res) => {
		       		if(res.HeWeather6[0].now.cond_code >= 300 && res.HeWeather6[0].now.cond_code <= 399){
		       			this.rainCanvas();
		       		}
				})
			},
			
			
			rainCanvas(){
				  var canvasEl = document.getElementById("snow");
				  var ctx = canvasEl.getContext('2d');
				  var backgroundColor = 'rgba(0,0,0, 0.2)';
				  canvasEl.width = document.getElementsByClassName("houseMap")[0].offsetWidth;
			  	  canvasEl.height = document.getElementsByClassName("houseMap")[0].offsetHeight;
				  var dropList = [];
				  var gravity = 0.5;
				  var linelist = [];
				  var mousePos = [0, 0];
				  var mouseDis = 35;
				  var lineNum = 2;
				  var speedx = 0;
				  var maxspeedx = 0;
				  window.onresize = function() {
				    canvasEl.width = document.getElementsByClassName("houseMap")[0].offsetWidth;
			  		canvasEl.height = document.getElementsByClassName("houseMap")[0].offsetHeight;
				    maxspeedx = (e.clientX - canvasEl.clientWidth / 2) / (canvasEl.clientWidth / 2);
				  }
				
				  function getRgb(r, g, b) {
				    return "rgb(" + r + "," + g + "," + b + ")";
				  }
				
				  function createLine(e) {
				    var temp = 0.1 * (10 + Math.random() * 100);
				    var line = {
				      speed: 8 * (Math.random() * 5 + 1),
				      die: false,
				      posx: e,
				      posy: -1,
				      h: temp,
				      color: getRgb(Math.floor(temp * 255 / 35), Math.floor(temp * 255 / 35), Math.floor(temp * 255 / 35))
				    };
				    linelist.push(line);
				  }
				
				  function createDrop(x, y) {
				    var drop = {
				      die: false,
				      posx: x,
				      posy: y,
				      vx: (Math.random() - 0.5) * 4,
				      vy: Math.random() * (-6),
				      radius: Math.random() * 0.01+1
				    };
				    return drop;
				  }
				
				  function madedrops(x, y) {
				    var maxi = Math.floor(Math.random() * 3);
				    for (var i = 0; i < maxi; i++) {
//				      dropList.push(createDrop(x, y));
				    }
				  }
				  window.requestAnimationFrame(update);
				
				  function update() {
				    if (dropList.length > 0) {
				      dropList.forEach(function(e) {
				        e.vx = e.vx + (speedx / 2);
				        e.posx = e.posx + e.vx;
				        e.vy = e.vy + gravity;
				        e.posy = e.posy + e.vy;
				        if (e.posy > canvasEl.clientHeight) {
				          e.die = true;
				        }
				      });
				    }
				    for (var i = dropList.length - 1; i >= 0; i--) {
				      if (dropList[i].die) {
				        dropList.splice(i, 1);
				      }
				    }
				    speedx = speedx + (maxspeedx - speedx) / 100;
				    for (var i = 0; i < lineNum; i++) {
				      createLine(Math.random() * 2 * canvasEl.width - (0.5 * canvasEl.width));
				    }
				    var endLine = canvasEl.clientHeight - Math.random() * canvasEl.clientHeight / 5;
				    linelist.forEach(function(e) {
				      var dis = Math.sqrt(((e.posx + speedx * e.h) - mousePos[0]) * ((e.posx + speedx * e.h) - mousePos[0]) + (e.posy + e.h - mousePos[1]) * (e.posy + e.h - mousePos[1]));
				      if (dis < mouseDis) {
				        e.die = true;
				        madedrops(e.posx + speedx * e.h, e.posy + e.h);
				      }
				      if ((e.posy + e.h) > endLine) {
				        e.die = true;
				        madedrops(e.posx + speedx * e.h, e.posy + e.h);
				      }
				      if (e.posy >= canvasEl.clientHeight) {
				        e.die = true;
				      } else {
				        e.posy = e.posy + e.speed;
				        e.posx = e.posx + e.speed * speedx;
				      }
				    });
				    for (var i = linelist.length - 1; i >= 0; i--) {
				      if (linelist[i].die) {
				        linelist.splice(i, 1);
				      }
				    }
				
				    render();
				    window.requestAnimationFrame(update);
				  }
				
				  function render() {
				    ctx.fillStyle = "rgba(0,0,0,0.1)";
				    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
				    ctx.lineWidth = 1;
				    linelist.forEach(function(line) {
				      ctx.strokeStyle = line.color;
				      ctx.beginPath();
				      ctx.moveTo(line.posx, line.posy);
				      ctx.lineTo(line.posx + line.h * speedx, line.posy + line.h);
				      ctx.stroke();
				    });
				
				    ctx.lineWidth = 1;
				    ctx.strokeStyle = "#fff";
				    dropList.forEach(function(e) {
				      ctx.beginPath();
				      ctx.arc(e.posx, e.posy, e.radius, Math.random() * Math.PI * 2, 1 * Math.PI);
				      ctx.stroke();
				    });
				  }
			},
			//判断是否是扫码过来的，拨打电话
			callphone(){
				// 获取url后面的参数
				function getUrlParam (k) {
					var regExp = new RegExp('([?]|&)' + k + '=([^&]*)(&|$)')
					var result = window.location.href.match(regExp)
					if (result) {
						return decodeURIComponent(result[2])
					} else {
						return null
					}
				}
				this.supernatantTel = getUrlParam('supernatant');
				if(getUrlParam('supernatant')){
					window.location.href = "tel:"+this.supernatantTel;
				}
			},
        			
			//跳转到3d看房页
			goToShow(e){
            	e.cancelBubble = true;
				this.$router.push({path:"/framePage",query:{src:this.lookUrl,title:this.shareName}});            	
           	},
			//判断是否有电话的方法
			UserPhone(){
				let UserPhone = localStorage.getItem('userPhone');
				if (UserPhone === null || UserPhone === undefined || UserPhone === "null" || UserPhone === "undefined" || UserPhone === "") {
					return true;
				} else {
					return false;
				}
			},
			buildShare(){
				this.market = true;
 				this.shareAlert = true;
			},
			// 遮罩层的点击事件
		    markedClick() {
		      	this.market = false;
		      	this.shareAlert =  false;
		    },
		    // 微信好友分享
		    weixinhaoyoufenxiangClick(){
		        this.wxShare();
		    },
		    // 分享到微信朋友方法
		    wxShare(){
		        let self = this;
		        Wechat.share({
		            message: {
		                title:"国安家公寓-" + self.shareName, //标题
		                description:self.advantageEnvironment, //描述
		                thumb: "https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
		                media: {
		                    type: Wechat.Type.WEBPAGE,
		                    webpageUrl: "https://www.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?id=" + self.id + "&productType=" + self.productType+"&from=true", //连接地址指打开分享时页面地址
		                }
		            },
		            scene: Wechat.Scene.SESSION   // share to Timeline
		        }, function () {
		            this.msgalert('已成功分享给朋友');
		        }, function (reason) {
		        //    this.msgalert('已取消分享');
		        });
		    },
		     // 微信朋友圈分享
		    weixinFriendsClick(){
		      	this.friendShare();
		    },
		    //分享到朋友圈方法
		    friendShare(){
		        let self = this;
		        Wechat.share({
		            message: {
		                title:"国安家公寓-" + self.shareName, //标题
		                description:self.advantageEnvironment, //描述
		                thumb: "https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
		                media: {
		                    type: Wechat.Type.WEBPAGE,
		                    webpageUrl: "https://www.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?id=" + self.id + "&productType=" + self.productType+"&from=true", //连接地址指打开分享时页面地址
		                }
		            },
		            scene: Wechat.Scene.TIMELINE   // share to Timeline
		        }, function () {
		            this.msgalert('已成功分享到朋友圈');
		        }, function (reason) {
		            // this.msgalert('已取消分享');
		        });
		    },
		    
		    // 取消分享的点击事件
	        exitShareClick(){
	            let setTime = setTimeout(()=>{
	               this.market = false;
	            },900)
	            this.shareAlert = false;
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
			// 验证值是否为空，undefined 或者为字符串空值
			notEmpty (value) {
				if (value === null || value === undefined || value === "null" || value === "undefined" || value === "") {
					return true;
				} else {
					return false;
				}

			},
			//收藏房间
			collectFunc(){
				if(!this.LoToken() && !this.UserPhone()){
					this.collect();
				}else{
					this.$store.state.loginShow = true;
				}
			},
			collect(){
				switch(this.productType){
					case "0019001":
					this.type = 3;
					break;
					case "0019003":
					this.type = 3;
					break;
					case "0019002":
					this.type = 3;
					break;
				}
				if(!this.isCollect){
					this.post("CollectController/saveCollectInfo",{
						"collectTitle":this.shareName,//名称
						"collectResume":this.Price,//价格
						"collectContent":this.address,//地址
						"imageName":this.images,//如123.png
						"collectUrl":this.collectHashUrl,//当前url
						"type":this.type,//收藏类型
						"adjunctContent":this.Area,//面积
						"afterRoom":this.afterRoom+"室",//几室
						"afterLiving":this.afterLiving+"厅",//几厅
						"productType":this.productType,
						"productId":this.id,
						"advantageTagsArr":this.advantageTagsCollect,//标签
						"buildFloor":this.buildFloor+"层",//楼层
						"source":'1'
				 	},{
				 		interfaceType:"collect"
				 	}).then((res)=>{
				 		//console.log('收藏参数中拼接的id和type为',this.newCollectUrl);
				 		if(res.code === 200){
				 			this.isCollect = true;
				 			let user = this.getStorage(this.KEYS.USER_INFO_MAP);//获取localstorage
				 			user.collectList.push(this.collectHashUrl);//将当前页面的hash值存到数组
				 			this.setStorage(this.KEYS.USER_INFO_MAP,user);//设置localstorge
				 		}else if(res.code === 10033){
				 			this.$vux.confirm.show({
		                        content:"您已收藏过该房间",
		                        onCancel () {//取消执行
		                        },
		                        onConfirm () {//确定执行
		                        }
		                    })
		                    return false;
				 		}
				 	});
				}else{//取消收藏
					let that = this;
					this.$vux.confirm.show({

		                content:"确定取消收藏吗？",
		                    onCancel () {//取消执行
		                    },
		                    onConfirm () {//确定执行
		                    	that.post("CollectController/delCollectInfo",{
									"collectUrl":that.collectHashUrl,//当前url的后半部分
							 	},{
							 		interfaceType:"collect"
							 	}).then((res) => {
							 		that.isCollect = false;
							 		var self = that;
							 		 //遍历本地localStorage收藏数组
						            var deleteUser = JSON.parse(localStorage.getItem('userInfroMap'));
								        let deleteUserArr = deleteUser.collectList;
								        let href = window.location.hash;
								        for (let i = 0; i < deleteUserArr.length; i++) {
								            if (href == deleteUserArr[i]) {
								                deleteUserArr.splice(i,1);
								                self.setStorage(self.KEYS.USER_INFO_MAP,deleteUser);
								                return;
								            }
								        }
							 	})
		                    }
		                })
		            return false;

				}
			},
			//获取房间信息
			getHouseDetaile(){
				this.post("HouseInfoController/getHouseDetail",{
						"productType":this.productType,
						"id":this.id,
						"userId":this.userId
				}).then((res) => {
					if(this.productType == "0019001" || this.productType == "0019003"){//判断是整租-合租
						//console.log("合租")
						this.roomFloor = res.data.roomFloor;
						this.colledtName=res.data.roomName;
						this.Price = res.data.price;
						this.Orientation=res.data.roomOrientation;
						this.Area = res.data.usedArea;
						this.roomId=res.data.roomId;
						this.isRoomOrHouse = true;
						if(res.data.houseName == '东大桥店'){
							this.shareName = res.data.houseName + res.data.roomFloor + res.data.roomNumber;
						}else{
							this.shareName = res.data.houseName + res.data.roomName + res.data.roomNumber;	
						}
						switch(res.data.intakeState){
							case "0015001"://已预约
							this.isAppointment = true;
							break;
							case "0015004"://已出租
							this.isRent = true;
							break;
							default:
							this.isAppointment = false;
							this.isRent = false;
							break;
						}
						if(res.data.assessmentRoom){//房间描述
							this.advantageEnvironment = res.data.assessmentRoom;
						} else {
							this.isHaveEnvironment = false;
						}
						if(res.data.roomAdvantageTags ){//房间标签
							this.advantageTagsCollect = res.data.roomAdvantageTags;
							this.advantageTagsArr = res.data.roomAdvantageTags.split(",",6);
						}

					} else if(this.productType == "0019002"){
						//console.log("整租")
						this.colledtName = res.data.houseName;
						this.shareName = res.data.houseName;
						this.Price = res.data.rentPrice;
						this.Orientation=res.data.orientation;
						this.Area = res.data.coveredArea;
						this.roomId="";
						this.isRoomOrHouse = false;
						switch(res.data.rentStatusCode){
							case "0026002"://已预约
							this.isAppointment = true;
							break;
							case "0026004"://已出租
							this.isRent = true;
							break;
							default:
							this.isAppointment = false;
							this.isRent = false;
							break;
						}
						if(res.data.advantageEnvironment ){//房源描述
							this.advantageEnvironment = res.data.advantageEnvironment;
						} else {
							this.isHaveEnvironment = false;
						}
						if(res.data.advantageTags ){//房源标签
							this.advantageTagsCollect = res.data.advantageTags;
							this.advantageTagsArr = res.data.advantageTags.split(",",6)
						}
					}
					this.hasDepositContract=res.data.hasDepositContract;//房间是否被预定
					this.images=res.data.roomBanners[0].roomFirst;
					this.houseId=res.data.houseId;
					this.address= res.data.buildAddress;

					this.communityName = res.data.communityName;
					this.houseName = res.data.houseName;
					this.roomName = res.data.roomName;
					this.areaName = res.data.areaName;
					this.afterRoom =res.data.changeRoomNo;
					this.afterLiving =res.data.changeLivingNo;
					this.buildFloor =res.data.buildFloor;
					this.roomNo =res.data.roomNo;
					this.livingNo =res.data.livingNo;
					this.hasAppoint = res.data.hasAppoint;//当前登陆者是否约看该房间
					this.roomNumber = res.data.roomNumber;
					if(res.data.recommend ){//是否有小区介绍
						this.recommend = res.data.recommend;
					}else{
						this.isHaveRecommend = false;
					}

					if(res.data.surrounding == null || res.data.surrounding == ""){
						this.isHaveSurrounding =false;
						//console.log(this.isHaveSurrounding)
					} else{
						this.surrounding = res.data.surrounding;

					}


					if(res.data.circumjacentTraffic == null || res.data.circumjacentTraffic == ""){
						this.ishaveTraffic = false;
					}else{
						this.circumjacentTraffic = res.data.circumjacentTraffic;

					}

					/**********轮播图数据开始************/
					//取到每个房间的名字,添加每个房间的第一张图片
					for(let i=0; i<res.data.roomBanners.length;i++){
						this.everyName[i]=res.data.roomBanners[i].roomName//循环获取到每个房间的名字
						//添加每个房间的roomFirst
						if(res.data.roomBanners[i].roomFirst == null || res.data.roomBanners[i].roomFirst == ""){
							//如果没有图片，用暂无图片代替
							this.imgUrl.push({img:'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg'})
							this.previewerList.push({src:'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg'})
						} else{
							this.imgUrl.push({img:this.concatFileUrl(res.data.roomBanners[i].roomFirst,750,415)})//所有房间的第一张照片
							this.previewerList.push({src:this.concatFileUrl(res.data.roomBanners[i].roomFirst,750,415)})//所有房间的第一张照片

						}
					}
					//卧室第二张图片
					if(res.data.roomBanners[0].roomSecond == null || res.data.roomBanners[0].roomSecond == ""){
						//如果没有图片，用暂无图片代替
						this.imgUrl.splice(1,0,{img:'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg'})
						this.previewerList.splice(1,0,{src:'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg'})
					} else {
						this.imgUrl.splice(1,0,{img:this.concatFileUrl(res.data.roomBanners[0].roomSecond,750,415)})//卧室第1张
						this.previewerList.splice(1,0,{src:this.concatFileUrl(res.data.roomBanners[0].roomSecond,750,415)})//卧室第1张
					}
					//卧室第三张
					if(res.data.roomBanners[0].roomThird == null || res.data.roomBanners[0].roomThird == ""){
						//如果没有图片，用暂无图片代替
						this.imgUrl.splice(2,0,{img:'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg'})
						this.previewerList.splice(2,0,{src:'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg'})
					} else {
						this.imgUrl.splice(2,0,{img:this.concatFileUrl(res.data.roomBanners[0].roomThird,750,415)})//卧室第2张
						this.previewerList.splice(2,0,{src:this.concatFileUrl(res.data.roomBanners[0].roomThird,750,415)})//卧室第2张
					}

					//最后添加一张户型图
					for(let i=0; i<res.data.roomBanners.length;i++){
						if(res.data.roomBanners[i].typeCode == "0014002"){
							this.everyName.push("户型图");//当存在客厅时，添加底部导航文字户型图
							if(res.data.roomBanners[i].layoutImage == null || res.data.roomBanners[i].layoutImage == ""){
								//如果没有图片，用暂无图片代替
								this.imgUrl.push({img:'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg'})
								this.previewerList.push({src:'https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg'})
							} else {
								this.imgUrl.push({img:this.concatFileUrl(res.data.roomBanners[i].layoutImage,750,415)})
								this.previewerList.push({src:this.concatFileUrl(res.data.roomBanners[i].layoutImage,750,415)})
							}
						}
					}

					this.depositImg = this.imgUrl[0].img;
					this.imgLength = this.imgUrl.length;
					this.everyNamelength = this.everyName.length;
					/**********轮播图数据结束************/
					//其他房间室友入住信息
					if(res.data.roomList){
							this.roomList = res.data.roomList.map((item,index) => {
							if(item.intakeStateCode == "0015004"){
								//已入住
								item.isIntakeState = true;
								switch(item.ownerSex){
									case "1":
									item.icon = icon_boy;
									item.sexChinese = "男";
									break;
									case "0":
									item.icon = icon_girl;
									item.sexChinese = "女";
									break;
									case null:
									item.icon = icon_none;
									item.sexChinese = "未知";
									break;
								}
							} else { 
								item.isIntakeState = false;
								if(this.roomId == item.roomId){
									item.isthisHouse = true
								} else{
									item.isthisHouse = false
								}

							}
							if(item.job === "无"){
								item.job = "保密";
							}
							return item;
						})
					} else{
						this.isHaveroomList = false
					}

					//房间物品配套信息
					this.roomItems = res.data.roomItems;

					//小区图片展示
					if(res.data.communityImages){
						//this.communityList= res.data.communityImages.split(",",6);

						let partArr = res.data.communityImages.split(",",6);
						partArr = partArr.map((item) => {
							item = !item ||this.concatFileUrl(item,320,260);
							return item;
						})
						let imglength=partArr.length/2;
		                for(let i=0; i<imglength;i++){//将小区图片数据转换为二维数组
		                 	this.communityList.push(partArr.splice(0,2))
		                }
		                //console.log(this.communityList);
					}else{
						this.isHaveCommunityImages = false;
					}
					this.communityLength = this.communityList.length;
					
					this.longitude = res.data.longitude;
					this.latitude = res.data.latitude;
					this.baiduMap();//初始化百度地图
					this.lookUrl = res.data.lookUrl;
					this.isLoding = false;
					this.$refs.load.style.display = 'none';
					//判断是否是微信浏览器
					if(this.isECTouch()){
						//调用微信config
						this.wxconfig();
					}
				})
			},
			
     	wxconfig() {
				// encodeURIComponent(window.location.href)
				// console.log(location.href.split('?')[0])
             this.post("jsapi/getJsapiSignature?local_url=" + encodeURIComponent(window.location.href.split('#')[0]),
                 {},{
                     interfaceType: "weichat"
                 }).then(response => {
                 // alert('初始化微信,配置config');
                 this.$wechat.config({
                     debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                     appId: response.appid, // 必填，公众号的唯一标识
                     timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
                     nonceStr: response.noncestr, // 必填，生成签名的随机串
                     signature: response.signature, // 必填，签名，见附录1
                     jsApiList: [
                             'onMenuShareTimeline',
                             'onMenuShareAppMessage',
                             'onMenuShareQQ',
                             'onMenuShareWeibo',
                             'onMenuShareQZone']// 必填，需要使用的JS接口列表
                 });
                 this.$wechat.ready(() =>{
                     this.wechatStationShare();
                 })
             });
         },
            wechatStationShare() {
                // 分享给朋友
                //console.log(this.shareName,this.advantageEnvironment);
                this.$wechat.onMenuShareAppMessage({
                    title: "国安家公寓-" + this.shareName, //标题
                    desc: this.advantageEnvironment, //描述
                    //连接地址指打开分享时页面地址
                    link:"https://www.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?id=" + this.id + "&productType=" + this.productType+"&from=true", 
                    imgUrl: "https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
                    trigger: (res) => {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                },
                success: (res) =>{
                    this.market = false;
                    // this.shareImg = false;
                },
                cancel: (res) =>{
                    this.$vux.confirm.show({
                         content:"已取消",
                        onCancel () {//取消执行
                      },
                       onConfirm () {//确定执行
                       }
                     })
                    this.market = false;
                    // this.shareImg = false;
                },
                fail: (res) => {
                     this.$vux.confirm.show({
                         content:"分享失败",
                        onCancel () {//取消执行
                      },
                       onConfirm () {//确定执行
                       }
                     })
                }
            });
                // 分享到朋友圈
            this.$wechat.onMenuShareTimeline({
                title: "国安家公寓-" + this.shareName, //标题
                desc: this.advantageEnvironment, //描述
                link:"https://www.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?" + "id=" + this.id + "&" + "productType=" + this.productType+"&from=true", 
                imgUrl: "https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
                trigger: (res) => {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },
                success: (res) => {
                    this.market = false;
                    // this.shareImg = false;
            },
                cancel: (res) => {
                    this.$vux.confirm.show({
                         content:"已取消",
                        onCancel () {//取消执行
                      },
                       onConfirm () {//确定执行
                       }
                     })
                    this.market = false;
                    // this.shareImg = false;
                },
                fail: (res) => {
                   this.$vux.confirm.show({
                         content:"分享失败",
                         onCancel () {//取消执行
                   },
                        onConfirm () {//确定执行
                       }
                  })
                }
                });
                    this.$wechat.error(function(res) {
            });

            },
			//获取previewer的index
            previewerChange(index){
            	this.previewerIndex= index;
                //console.log(this.previewerIndex);
            },
			// 关闭图片放大事件
	        close() {
	            this.bottomShows = false;
	        },
	        // 效果图放大事件--效果图
			show(index) {
				this.bottomShows = true;
				this.$refs.previewer.show(index);
				this.previewerIndex = index;
			},
			 // 效果图放大事件--户型图
			showImg(index) {
	            this.bottomShows = true;
	            this.$refs.previewer.show((this.imgLength-1))
	        },
			//轮播图
			demo01_onIndexChange (index) {
		      	this.demo01_index = index
		    },
			//tab点击事件
		    onItemRoom (index) {//卧室
				 this.$refs.previewer.goto(index);
		    },
		    onItemElse(num){
		    	this.$refs.previewer.goto(num);
		    },
			//获取推荐房源房间
			getRecommendHouse(){
				this.post("HouseInfoController/recommendHouse",{
						"productType":this.productType,
						"id":this.id
				}).then((res) => {
					if(res.data.length == 0){
						this.isHaveGaj = false;
					}
					this.recommendList = res.data.map((item) => {
						if(item.image == null || item.image == ""){
							item.image = 'https://media.guoanfamily.com/rent/static/HomePage/noneImg1.jpg';
						} else {
							item.image = !item.image ||this.concatFileUrl(item.image,320,260);
						}
						return item;
					})
					this.recommendLength = this.recommendList.length;
					let roomlength=this.recommendList.length/2;
	                for(let i=0; i<roomlength;i++){//将合租数据转换为二维数组
	                 	this.roomArr.push(this.recommendList.splice(0,2))
	                }
				})
			},
			toOthersRoom(item){//跳转到该房源的其他房间
				this.$router.push({path:"/HouseList/houseDetail",query:{id:item.roomId,productType:this.productType}});
				// window.location.reload();
			},
			recommendDetali(item){//跳转到国安家推荐房间详情
				this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}});
				// window.location.reload();
			},
			//转向预约看房
			appointLookRoom(){
				if(!this.LoToken() && !this.UserPhone()){
					if(this.hasDepositContract){//hasDepositContract为false，该房间没有被预定
						let that = this;
						this.$vux.confirm.show({
							content:"该房源已被预订",
							onCancel () {//取消执行
							},
							onConfirm () {//确定执行
								that.$router.push({path:"/HouseList",query:{name:this.productType}})
							}
						})
						return false;
					} else if(this.hasAppoint){//hasAppoint为false，当前登陆者没有约看过该房间
						let that = this;
						this.$vux.confirm.show({
							content:"您已约看过了该房间哦！再看看其他房间吧~~",
							onCancel () {//取消执行
							},
							onConfirm () {//确定执行
								that.$router.push({path:"/HouseList",query:{name:this.productType}})
							}
						})
						return false;
					} else {
						this.$router.push({path:"/appointList/submitAppoint",query:{roomId:this.roomId,houseId:this.houseId,shareName:this.shareName,userId:this.userId}})
					}
					
				}else{
					this.$store.state.loginShow = true;
				}
			},
			//转向支付定金
			nowReserve(){
				if(!this.LoToken() && !this.UserPhone()){
					//判断该房间是否被预定
					if(this.hasDepositContract){
						let that = this;
						this.$vux.confirm.show({
							content:"该房源已被预订",
							onCancel () {//取消执行
							},
							onConfirm () {//确定执行
								that.$router.push({path:"/HouseList",query:{name:this.productType}})
							}
						})
						return false;
					} else {
						//未被预定则转向定金支付页面
						this.$router.push({path:"/payDeposit",query:{roomId:this.roomId,houseId:this.houseId,productType:this.productType,depositImg:this.depositImg,roomNumber:this.roomNumber,shareName:this.shareName}})
					}
				}else{
					this.$store.state.loginShow = true;
				}
			},
			//百度地图
			baiduMap(){
					// 百度地图API功能
					var map = new BMap.Map("houseMap");    // 创建Map实例
					map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 16);  // 初始化地图,设置中心点坐标和地图级别
//					var top_right_navigation = new BMap.NavigationControl({type: BMAP_NAVIGATION_CONTROL_SMALL}); //仅包含缩放按钮
//					map.addControl(top_right_navigation);
					
					map.disableDragging();     //禁止拖拽
					//创建自定义覆盖物
					var pt = new BMap.Point(this.longitude, this.latitude);
					var myIcon = new BMap.Icon(icon_ditu2, new BMap.Size(45,70));
					var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
					map.addOverlay(marker2);              // 将标注添加到地图中

			},
			theLocation(){
				// 百度地图API功能
				var map = new BMap.Map("houseMap");    // 创建Map实例
				map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 16);  // 初始化地图,设置中心点坐标和地图级别
//				var top_right_navigation = new BMap.NavigationControl({type: BMAP_NAVIGATION_CONTROL_SMALL}); //仅包含缩放按钮
//				map.addControl(top_right_navigation);
				map.disableDragging();     //禁止拖拽
				//创建自定义覆盖物
				var pt = new BMap.Point(this.longitude, this.latitude);
				var myIcon = new BMap.Icon(icon_ditu2, new BMap.Size(45,70));
				var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
				map.addOverlay(marker2);              // 将标注添加到地图中
			},
			houseDetailMap(){
				this.$router.push({path:"/houseDetailMap",query:{longitude:this.longitude,latitude:this.latitude,areaName:this.areaName}})
			}
		},
		watch: {
			'$route' (to, from) {
				// this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}});
				document.getElementById("pageBody").scrollTop = 0;
				this.id = this.$route.query.id;
				this.productType=this.$route.query.productType;
				this.previewerList = [];
				this.roomArr = [];
				this.imgUrl=[];
				this.everyName=[];
				this.getHouseDetaile();
				this.getRecommendHouse();
				this.$refs.load.style.display = 'block';
			}
		},
		components: {
			Previewer,
			downLoad
		},
		directives: {
			TransferDom
		},
	}
</script>
