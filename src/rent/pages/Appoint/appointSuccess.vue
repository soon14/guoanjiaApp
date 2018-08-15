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
		}
		.center{
			margin-top:2.1rem;
			.center-center{
				width:1.2rem;
				height:1.2rem;
				margin: auto;
				img{
					width: 100%;
					height:100%;
				}
			}
			.center-bottom{
				width:100%;
				height: 20%;
				position: relative;
				margin-top: 5rem;
				.btn{
					width: 6.9rem;
					height: 0.9rem;
					background: #E34B3E;
					border-radius:0.1rem;
					font-size: 0.32rem;
					line-height: 0.9rem;
					color: white;
					margin: auto;
				}
			}
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
			<div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
		</div>
		<div class="center">
			<div class="center-center">
				<img src="../../../assets/home/yuekanchengkong.jpg"/>
			</div>
			<p style="font-size: 0.28rem;color: #b6b6b6;margin-top: 0.4rem;">您的约看已成功提交</p>
			<p style="font-size: 0.28rem;color: #b6b6b6;margin-top: 0.1rem;">系统将在{{number}}秒后自动跳转到首页</p>
			<div class="center-bottom">
				<div class="btn" @click=" topHomepageHouseListOne">确定</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/public/PageHeader';//导航
	export default {
        data() {
            return {
				androidOrIos:true,	//默认为安卓登录
				number:3,
				timer:null
            }
        },
		beforeRouteLeave (to, from, next) {
		    clearInterval(this.timer);
		    next();
		    
		},
        created() {
			this.isIosAndroid();
        },

        mounted() {
        	this.timer = setInterval(()=>{
					if(this.number>1){
						this.number--
					}else{
						this.$router.replace({path:"/HomePage"})
					}
				},1000)
			
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
			back(){
                this.$router.go(-1);
            },
            topHomepageHouseListOne(){
           		this.$router.replace({path:"/HomePage"})
		    },
        },

        components: {
			PageHeader
		}
    }
</script>

