<style scoped lang="scss">
	@import "../../style/theme.scss";
	img{
		width:100%;
		height: 100%;
	}
	.banner{
		border-bottom: 5px solid #e8e8e8;
	}
	/*未完成约看、已完成约看选项卡*/
	.switch-title{
		font-family: "微软雅黑";
		height: 0.6rem;
		background: white;
		font-size: $reminderFontSize;
		ul{
			width: 100%;
			li{
				width: 50%;
				height: 0.6rem;
				text-align: center;
				line-height: 0.6rem;
				color: #b3b3b3;
				float: left;
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
			padding:0.3rem 0.3rem 0.4rem;
			background:#e8e8e8;
			position: relative;
			.triangle,.triangleTwo{
				position:absolute;
				top:0;
				left:25%;
				border:0.1rem solid white;
				border-bottom:0.1rem solid transparent;
				border-right:0.1rem solid transparent;
				border-left: 0.1rem solid transparent;
			}
			.triangleTwo{
				left:75%;
			}
			.noneItem{
				margin-bottom: 0.2rem;
				background: white;
				box-sizing: border-box;
				padding:0.32rem 0.27rem;
				border-bottom: 5px solid #bbbbbb;

				.noneItem-title{
					color: #555555;
					p {
						float: right;
						color: #e89166;
					}
				}
				.noneItem-content{
					margin-top: 0.2rem;
					.left-img{
						width:1.8rem;
						height: 1.52rem;
						float: left;
					}
					.right-msg {
						float: right;
						width: 4.2rem;
						height: 1.52rem;


						.collect-message{
							height: 0.66rem;
							box-sizing: border-box;
							padding: 0.19rem 0 0 0;
							margin-top: 0.07rem;
						}
						.collect-message>span{
							display: inline-block;
							float: left;
							background: #e99064;
							color: #f9ffff;
							border-radius: 5px;
							text-align: center;
							margin-right: 0.16rem;
							padding: 0.03rem 0.2rem;
						}
					}
				}
				.noneItem-bottom{
					margin-top:0.2rem;
					border-top:1px solid #e8e8e8;
					box-sizing: border-box;
					padding-top: 0.15rem;
					.clear{
						width: 0.5rem;
						height: 0.5rem;
						float: right;
					}
				}

			}

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
	.noneItem-bottom span:last-child{
		float: right;
		color: #659ed3;
		border: 2px solid #659ed3;
		box-sizing: border-box;
		padding: 0.03rem;
		border-radius: 0.05rem;
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
</style>

<template>
<div>
	<!--标题-->
	<ga-page-header title="约看清单"></ga-page-header>
	<div style="height: 0.8rem; background: $baseColor;"></div>
	<!--banner图-->
	<div class="banner">
		<img src="../../../../static/rent/yk/banner.png" alt="" />
	</div>

	<!--未完成约看、已完成约看选项卡-->
	<div class="switch-title">
		<ul>
			<li @click="none" v-bind:class="{ select: isAppoint }">未完成的约看</li>
			<li @click="already" v-bind:class="{ select: !isAppoint }" style="border-left: 1px solid #b3b3b3;">已完成的约看</li>
		</ul>
		<div style="clear: both;"></div>
		<!--未完成约看列表-->
		<div class="noneList" v-if="isAppoint">
			<div class="triangle"></div>
			<div class="noneItem">
				<div class="noneItem-title">约看时间：2016-03-29 17:31
					<p>等待管家约看</p>
				</div>

				<div class="noneItem-content">
					<div class="left-img">
						<img src="../../../../static/rent/yk/deposit.png"/>
					</div>
					<div class="right-msg">
						<p>中星张杨苑</p>
						<p>1号楼-南卧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21㎡ | 22层</p>
						<div class="collect-message">
							<span>独卫</span>
							<span>15号线</span>
							<span>朝南</span>
						</div>
					</div>
					<div style="clear: both;"></div>
				</div>

				<div class="noneItem-bottom">
					<span>2130</span>
					<span>元/月</span>
					<span>取消约看</span>
				</div>
			</div>
			<div class="noneItem">
				<div class="noneItem-title">约看时间：2016-03-29 17:31
					<p>等待管家约看</p>
				</div>

				<div class="noneItem-content">
					<div class="left-img">
						<img src="../../../../static/rent/yk/deposit.png"/>
					</div>
					<div class="right-msg">
						<p>中星张杨苑</p>
						<p>1号楼-南卧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21㎡ | 22层</p>
						<div class="collect-message">
							<span>独卫</span>
							<span>15号线</span>
							<span>朝南</span>
						</div>
					</div>
					<div style="clear: both;"></div>
				</div>

				<div class="noneItem-bottom">
					<span>2130</span>
					<span>元/月</span>
					<span>取消约看</span>
				</div>
			</div>
			<div class="noneItem">
				<div class="noneItem-title">约看时间：2016-03-29 17:31
					<p>等待管家约看</p>
				</div>

				<div class="noneItem-content">
					<div class="left-img">
						<img src="../../../../static/rent/yk/deposit.png"/>
					</div>
					<div class="right-msg">
						<p>中星张杨苑</p>
						<p>1号楼-南卧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21㎡ | 22层</p>
						<div class="collect-message">
							<span>独卫</span>
							<span>15号线</span>
							<span>朝南</span>
						</div>
					</div>
					<div style="clear: both;"></div>
				</div>

				<div class="noneItem-bottom">
					<span>2130</span>
					<span>元/月</span>
					<span>取消约看</span>
				</div>
			</div>

		</div>

		<!--已约看列表-->
		<div class="noneList" v-if="!isAppoint">
			<div class="triangleTwo"></div>

			<div class="noneItem">
				<div class="noneItem-title">约看时间：2016-03-29 17:31
					<p>等待管家约看</p>
				</div>

				<div class="noneItem-content">
					<div class="left-img">
						<img src="../../../../static/rent/yk/deposit.png"/>
					</div>
					<div class="right-msg">
						<p>中星张杨苑</p>
						<p>1号楼-南卧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21㎡ | 22层</p>
						<div class="collect-message">
							<span>独卫</span>
							<span>15号线</span>
							<span>朝南</span>
						</div>
					</div>
					<div style="clear: both;"></div>
				</div>

				<div class="noneItem-bottom">
					<span>2130</span>
					<span>元/月</span>
					<div class="clear"><img src="../../../../static/rent/yk/clear.png" alt="" /></div>

					<div style="clear: both;"></div>
				</div>
			</div>
		</div>
		<div style="height: 0.45rem;"></div>
	</div>
	<div style="clear: both;"></div>
	<div class="appoint-tottom">
		<div class="findHouse">找房</div>
		<div class="appointList">约看清单</div>
		<div class="mine">我的</div>
		<div style="clear: both;"></div>
	</div>
</div>
</template>

<script>
	export default {
        data() {
            return {
            	isAppoint:true
            }
        },

        created() {

        },

        mounted() {

        },

        methods: {
//      	未完成的约看
        	none(){
        		this.isAppoint=true
        	},
//      	已完成的约看
        	already(){
        		this.isAppoint=false
        	}
        },

        components: {}
    }
</script>

