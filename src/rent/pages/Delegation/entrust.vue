<style scoped lang="scss">
	.banner{
		width: 6.9rem;
		height: 3rem;
		margin: auto;
		border-radius: 0.1rem;
		background: url(https://media.guoanfamily.com/rent/static/HomePage/entrustImg.png) no-repeat center;
		background-size:100% 100%;
	} 
	.entrust-box{
		width: 7.1rem;
		margin:0.4rem auto 0.5rem;
		box-sizing: border-box;
		padding-left: 0.2rem;
		
		.phone-entrust{
			display: block;
			width: 3.2rem;
			height: 0.8rem;
			float: left;
			line-height: 0.8rem;
			font-size: 0.32rem;
			text-align: center;
			color: #e34b3e;
			border:1px solid #e34b3e;
			margin-right: 0.3rem;
			border-radius: 0.08rem;
		}
		.online-entrust{
			color: white;
			background: #e34b3e;
			border:1px solid #e34b3e;
			margin-right: 0;
		}
	}
	.entrust-list{
		width: 6.9rem;
		height: 2.2rem;
		margin:0 auto 0.4rem;
		box-shadow: 0 0 10px #CCCCCC;
		border-radius: 0.1rem;
		.left-img{
			width: 1.1rem;
			height: 1.1rem;
			float: left;
			margin: 0.6rem 0 0 0.5rem;
			background: url(../../../../static/rent/yk/time.png) no-repeat center;
			background-size:100%;
		}
		.left-img1{
			background: url(../../../../static/rent/yk/baozhi.png) no-repeat center;
			background-size:100%;
		}
		.left-img2{
			background: url(../../../../static/rent/yk/shouyi.png) no-repeat center;
			background-size:100%;
		}
		.left-img3{
			background: url(../../../../static/rent/yk/zhuangxiu.png) no-repeat center;
			background-size:100%;
		}
		.right-word{
			float: right;
			width: 5rem;
			height: 100%;
			.p1{
				color: black;
				font-size: 0.32rem;
				text-align: left;
				margin-top: 0.4rem;
			}
			.p2{
				color: #666666;
				font-size: 0.24rem;
				text-align: left;
				margin-top: 0.1rem;
			}
			.p3{
				color: #999999;
				font-size: 0.2rem;
				text-align: left;
				margin-top: 0.1rem;
			}
		}
	}
	
</style>

<template>
	<div style="padding-bottom: 0.3rem;">
		<IosorAndroid></IosorAndroid>
		<div style="height: 1rem;" v-if="!this.$store.state.showWxTitle"></div>
		<div class="banner"></div>
		<div class="entrust-box">
			<a class="phone-entrust" href="tel:400-900-2225">
				<span>电话委托</span>
			</a>
			<div class="phone-entrust online-entrust" @click="toSubmituntrust">
				在线委托
			</div>
			<div style="clear: both;"></div>
		</div>
		<div class="entrust-list">
			<div class="left-img">
				
			</div>
			<div class="right-word">
				<p class="p1">
					省时省心
				</p>
				<p class="p2">
					出租零费心生活更安逸
				</p>
				<p class="p3">
					为您代劳所有出租过程中的琐碎事务，您唯一需要做的是只有定期查收租金
				</p>
			</div>
		</div>
		<div class="entrust-list">
			<div class="left-img left-img1">
				
			</div>
			<div class="right-word">
				<p class="p1">
					房产保值
				</p>
				<p class="p2">
					专业养护服务 降低资产折旧率
				</p>
				<p class="p3">
					引入“房屋保洁和定期维修”两项资产保养服务确保您的房产得到周全的善待
				</p>
			</div>
		</div>
		<div class="entrust-list">
			<div class="left-img left-img2">
				
			</div>
			<div class="right-word">
				<p class="p1">
					丰厚收益
				</p>
				<p class="p2">
					收益稳定丰厚 生活怡然自得
				</p>
				<p class="p3">
					向您缴纳押金，并以季度为单位支付租金，保障您获得持续稳定的收益
				</p>
			</div>
		</div>
		<div class="entrust-list">
			<div class="left-img left-img3">
				
			</div>
			<div class="right-word">
				<p class="p1">
					装修0投入
				</p>
				<p class="p2">
					装修零投入省心又安心
				</p>
				<p class="p3">
					采用环保材料精装，提升房产价值，房屋托管到期后把维护良好的装修赠与您。实现回报最大化。
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import IosorAndroid from '../../../new/components/IosorAndroid'
	export default{
		components :{
			IosorAndroid
		},
		data(){
			return{
				
			}
		},
		methods:{
			toSubmituntrust(){
				this.$router.push({path:"/Submituntrust"});
			}
		}
	}
</script>

