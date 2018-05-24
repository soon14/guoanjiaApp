<style scoped lang="scss">
@import "../../style/theme.scss";
	.box{
		width:100%;
		height: 100%;
		position: relative;
		background:#fff;
		.top{
			width:100%;
			background:$baseColor;
			position: relative;
			.top-img1{
				width: 0.4rem;
				height: 80%;
				position: absolute;
				z-index: 100;
				right: 0.2rem;
				bottom: 0.06rem;
			}
			.top-img2{
				width: 0.4rem;
				height: 40%;
				position: absolute;
				z-index: 100;
				right: 1rem;
				bottom: 0.2rem;
			}
		}
		.center{
			width:100%;
			height: 80%;
			background:#fff;
			.center-top{
				width:100%;
				height:30%;
				position: relative;
				img{
					width:100%;
					height:100%;
				}
				div{
					width:55%;
					height:0.6rem;
					position: absolute;
					bottom:0.15rem;
					right:0;
					p{
						font-size:$mostFontSize;
						float:left;
						line-height:0.6rem;
					}
					a{
						font-size:$littleFontSize;
						float:left;
						line-height:0.5rem;
					}
				}
			}
			.center-center{
				width:100%;
				height:50%;
				background:#e8e8e8;
				position: relative;
				img{
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom:0;
					margin:auto;
					width:2rem;
					height:2.5rem;
				}
			}
			.center-bottom{
				width:100%;
				height: 20%;
				position: relative;
				.btn{
					width: 80%;
					height: 0.7rem;
					background: #e24e59;
					border-radius: 5px;
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0;
					top: 0;
					margin: auto;
					text-align: center;
					color: #fff;
					font-size: 0.4rem;
					line-height: 0.7rem;
				}
			}
		}
		.bottom{
			width:100%;
			height:0.8rem;
			position: absolute;
			bottom:0;
		}
	}
	.emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
</style>
<template>
	<div class="box fixContent">
		<div class="top">
			<!--<PageHeader title="约看成功"></PageHeader>-->
			<img class="top-img1" src="../../../../static/rent/yk/location.png" alt="">
			<img @click="homeList" class="top-img2" src="../../../../static/rent/yk/menu.png">
			<div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
		</div>
		<div class="center">
			<div class="center-top">
				<img src="../../../assets/home/appointSuccess-wancheng.png"/>
				<div>
					<p>投诉电话:</p>
					<a href="tel:4009002225">400-900-2225</a>
				</div>
			</div>
			<div class="center-center">
				<img src="../../../assets/home/appointSuccess-chenggong.png"/>
			</div>
			<div class="center-bottom">
				<div class="btn" @click=" topHomepageHouseListOne">完成</div>
			</div>
		</div>
		<div class="bottom">
			<ga-page-bottom></ga-page-bottom>
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/public/PageHeader';//导航
	export default {
        data() {
            return {
				androidOrIos:true,	//默认为安卓登录
            }
        },

        created() {
			this.isIosAndroid();
        },

        mounted() {

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
				console.log(this.AndroidOrIos());
			},
			back(){
                this.$router.go(-1);
           },
           toAppointList(){
           		this.$router.push({path:"/appointList"})
           },
           topHomepageHouseListOne(){
           		this.$router.replace({path:"/appointList"})
		   },
		   homeList(){
			this.$router.replace({path:"/homepage/HouseList"})
		   }
        },

        components: {
			PageHeader
		}
    }
</script>

