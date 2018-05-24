<style scoped lang="scss">
	@import "../../style/theme.scss";
	@import "../../style/public.scss";
	.vux-x-icon {
		fill: white;
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
		padding: 0.3rem 0.3rem 0.5rem;
		.content-room {
			background: white;
			box-sizing: border-box;
			padding: 0.28rem 0.42rem 0.2rem 0.23rem;
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
			float: right;
			width: 1.06rem;
			height: 0.43rem;
			border-radius: 5px;
			text-align: center;
			line-height: 0.43rem;
			font-size: $mostFontSize;
			background: #e55054;
			color: #fff6ef;
			/*padding-top: 0.03rem;*/
			padding-right: 0.04rem;
		}
		.content-person {
			background: white;
			box-sizing: border-box;
			padding: 0.55rem 0 0 0.35rem;
			margin-top: 0.05rem;
			.content-person-name>span {
				float: left;
			}
			.content-person-name>span:nth-of-type(1) {
				color: #ec4d63;
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
		.content-date,
		.message {
			background: white;
			margin-top: 0.21rem;
			box-sizing: border-box;
			padding: 0.35rem 0.35rem;
		}
		.message>textarea {
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

</style>
<template>
	<div>
		<!--头部-->
		<ga-page-header title="预约看房">
			<p slot="right-btn">
				<x-icon type="ios-search" size="0.5rem" class="input-search"></x-icon>
			</p>
		</ga-page-header>
		<div style="height: 0.8rem; background: $baseColor;"></div>
		<!--内容-->
		<div class="content">
			<div class="content-room">
				<div class="content-img">
					<img src="../../../../static/rent/fyxq/deposit.png" alt="" />
				</div>
				<p>中星张杨苑 3居室 A</p>
				<p> <span style="color: #f4605e;">2130</span>
					<span style="font-size: 0.22rem;">元/月</span> </p>
				<p>21㎡ | 22层</p>
				<div class="status">
					待入住
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
				<div class="content-person-name">
					<span>*</span>
					<span>手机号</span>
					<div class="person-input">
						<input type="text" v-model="userPhone" placeholder="请输入您的手机号" />
						<p>（必填）</p>
					</div>
				</div>
				<div class="content-person-name">
					<span>*</span>
					<span>姓&nbsp;&nbsp;	名</span>
					<div class="person-input">
						<input type="text" v-model="userName" placeholder="请输入您的姓名" />
						<p>（必填）</p>
					</div>
				</div>
				<div class="content-person-name">
					<span>*</span>
					<span>称&nbsp;&nbsp;&nbsp;呼</span>
					<gaSwitch :isMan="isNow" style="float: left; margin-left: 0.3rem;"></gaSwitch>
				</div>
			</div>
			<!--入住时间-->
			<div class="content-date">
				<datetime v-model="contentDate" default-selected-value="2017-06-18 13" format="YYYY-MM-DD HH" :placeholder="selectTime" @on-change="change" :title="hope"></datetime>
			</div>
			<!--留言-->
			<div class="message">
				<p>留言</p>
				<textarea v-model="message" cols="30" rows="10" placeholder="更多看房或找房需求（选填）"></textarea>
			</div>
		</div>
		<div style="padding-bottom: 0.4rem; background: #e8e8e8;">
			<div class="payBtn">提交约看</div>
		</div>

	</div>
</template>

<script>
	import gaSwitch from "../../components/switch/switch.vue"
	export default {
		data() {
			return {
				userName:'',
				contentDate: '', //期待入住时间
				hope: '期待看房时间 ',
				selectTime: '选择入住时间',
				message: '', //留言
				moneyNum: 500, //租金
				isNow:true
			}
		},
		created() {},

		mounted() {

		},

		methods: {
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
//			新增约看记录
//			this.post("CAppointController/saveCAppoint",{
//				  	"id":"",
//				    "houseId":"BJGAJFY1502678089192",
//				    "roomId":"BJGAJZF1502678460793",
//				    "appointTime":this.contentDate,
//				    "remark":this.message,
//				    "userName":this.userName,
//				    "phone":this.userPhone,
//				    "sex" :"1"
//			})
		},
		components: {
			gaSwitch
		}
	}
</script>
