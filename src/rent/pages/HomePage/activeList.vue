<template>
	<div class="fixContent" >
		<!--导航栏-->
		<div class="top">
            <!--<ga-page-header>
	            <p slot="middle" @click="toHouseList">
	                <input :class="[androidOrIos ? 'searchandroid' : 'search']" type="text" placeholder="请输入您想住的区域或小区">
	            </p>
	            <p slot="right-btn" :class="[androidOrIos ? 'btnandroid' : 'btnios']"  @click="toHouseList" >
	                <x-icon type="ios-search" size="30" ></x-icon>
	            </p>
	        </ga-page-header>-->
	        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
        </div>
        <!--公众号列表-->
        <div class="all-list">
        	<ul>
        		<li class="list" @click="li6">
        			<div class="list-in">
        				<div class="list-img">
        						<img src="https://media.guoanfamily.com/rent/static/HomePage/article01.jpg"/>
        				</div>
	        			<div class="right-word">
	        				<p class="first-line">点亮北京</p>
	        				<p class="second-line">在这个日渐寒冷的深秋时刻，为这座古老又崭新的城市，与在这城市漂泊的每一个认真生活的年轻人，点亮等你回家的灯火。</p>
	        			</div>
        			</div>
        		</li>
        		<li class="list" @click="li5">
        			<div class="list-in">
        				<div class="list-img">
		        			<img src="https://media.guoanfamily.com/rent/static/activeList/active01.png" alt="" />
        				</div>
	        			<div class="right-word">
	        				<p class="first-line">百万房租免费送</p>
	        				<p class="second-line">今年十一让我们来个改变之旅参加国安家品质租住节领取价值3500元礼包为自己找一个理想家~</p>
	        			</div>
        			</div>
        		</li>

        			<li class="list" @click="li1">
	        			<div class="list-in">
	        				<div class="list-img">
		        				<img src="https://media.guoanfamily.com/rent/static/HomePage/gongzhonghao04.png" alt="" />
		        			</div>
		        			<div class="right-word">
		        				<p class="first-line">有温暖的地方才是家</p>
		        				<p class="second-line">品质不好，没有温度，不够美与人性化的东西，绝不可能出现在我们的作品中。</p>
		        			</div>
	        			</div>
	        		</li>

        		<li class="list" @click="li2">
        			<div class="list-in">
        				<div class="list-img">
		        				<img src="https://media.guoanfamily.com/rent/static/HomePage/gongzhonghao05.png" alt="" />
	        			</div>
	        			<div class="right-word">
	        				<p class="first-line">从要求品质到追求品牌</p>
	        				<p class="second-line">用稳定、安全、高颜值承包你的租房痛点。</p>
	        			</div>
        			</div>
        		</li>
        		<li class="list" @click="li3">
        			<div class="list-in">
        				<div class="list-img">
		        				<img src="https://media.guoanfamily.com/rent/static/HomePage/gongzhonghao06.png" alt="" />
	        			</div>
	        			<div class="right-word">
	        				<p class="first-line">这家央企请了50个人</p>
	        				<p class="second-line">这家央企请了50个人免费吃大餐，现在还要请你去看国安球赛。</p>
	        			</div>
        			</div>
        		</li>
        		<li class="list" @click="li4">
        			<div class="list-in">
        				<div class="list-img">
		        				<img src="https://media.guoanfamily.com/rent/static/HomePage/gongzhonghao01.png" alt="" />
	        			</div>
	        			<div class="right-word">
	        				<p class="first-line">在北京如何不假装生活？</p>
	        				<p class="second-line">遇上国安家，我的运气确实不太差。希望在北京的他乡朋友都能被生活温柔以待。</p>
	        			</div>
        			</div>
        		</li>



        	</ul>
        	<div style="height: 1rem;"></div>
        </div>
        <!--底部导航菜单-->
        <ga-page-bottom></ga-page-bottom>

	</div>
</template>

<script>
	import PageHeader from '../../components/public/PageHeader';//导航

	export default {
		components: {
		    PageHeader
	  	},
	  	data(){
	  		return{
				androidOrIos:true,	//默认为安卓登录
	  		}
	  	},
	  	created(){
	  		this.isIosAndroid();
	  	},
	  	methods:{
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
	  		toHouseList(){//点击搜索框跳转到搜索页面
		  		this.$router.push({path:"HouseList/HotSearch"})
		  	},
		  	li1(){
		  		this.$router.push({path:"framePage",query:{title:'有温暖的地方才是家',src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&amp;mid=2247484366&amp;idx=1&amp;sn=ece2b438cd3a18ba0b8efe44e7165a4b&amp;chksm=ea191850dd6e91462d38197e72d842e08b3c2052013b7a297adfbb690f037fe26d80fb21a97c#rd'}});
		  	},
		  	li2(){
		  		this.$router.push({path:"framePage",query:{title:'从要求品质到追求品牌',src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&amp;mid=2247484345&amp;idx=1&amp;sn=271c9ca5e837a7506749f864ae7e4960&amp;chksm=ea191827dd6e91311b6eba03dcc7677a1a44480c262dacdb19020ccfb51af4ab61b7b32d41d5#rd'}});
		  	},
		  	li3(){
		  		this.$router.push({path:"framePage",query:{title:'这家央企请了50人',src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&amp;mid=2247484288&amp;idx=1&amp;sn=f2670bf85aba293834adf009450e8eeb&amp;chksm=ea19181edd6e9108ea1949381b74aa3570f8cba3ef1ce20c5536145a8245efee54adf4d36428#rd'}});
			},
		  	li4(){
		  		this.$router.push({path:"framePage",query:{title:'在北京如何不假装生活',src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484270&idx=1&sn=ae14f2fd2803952185e662a58bf3f966&chksm=ea1918f0dd6e91e633c93944c3910145be8147878b6f0127a9473f0e5230e4b401da854f6763#rd'}});
		  	},
		  	li5(){
		  		this.$router.push({path:"framePage",query:{title:'百万房租免费送',src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484447&idx=1&sn=5742f69dbacf8664df9cab90c712c043&chksm=ea191f81dd6e969713ea45ba70a9837cef94ed37f2dd6f93837ce509ac7704fd3ce9c2140afe#rd'}});
		  	},
		  	li6(){
		  		this.$router.push({path:"framePage",query:{title:'点亮北京',src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484478&idx=1&sn=dd7412962e6c1fa477d9c821e8d04205&chksm=ea191fa0dd6e96b674e15a0edd3b8fa6f7ffc9d117519bbaea8592a65454ab75ec99f0199fb6#rd'}});
		  	}
	  	}
	}
</script>

<style scoped lang="scss">
@import "../../style/theme.scss";
	.btnandroid{
		margin-top: -0.05rem;
	}
	.btnios{
		margin-top: 0.2rem;
	}
	.search{
		height: 0.5rem;
		width: 5.43rem;
		position: relative;
		left: -0.45rem;
		display: block;
		margin-top: 0.55rem;
		margin-right: 0.1rem;
		margin-left:0.2rem ;
		border: 1px solid #fcfff4;
		background: transparent;
		outline: none;
		color: white;
		border-radius: 2px;
		text-indent: 0.15rem;
		font-size: 0.24rem;
		box-sizing: border-box;
	}
	.searchandroid{
		height: 0.5rem;
		width: 5.43rem;
		position: relative;
		left: -0.45rem;
		display: block;
		margin-top: 0.3rem;
		margin-right: 0.1rem;
		margin-left:0.2rem ;
		border: 1px solid #fcfff4;
		background: transparent;
		outline: none;
		color: white;
		border-radius: 2px;
		text-indent: 0.15rem;
		font-size: 0.24rem;
		box-sizing: border-box;
	}
	.emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}

	.vux-x-icon {
	  fill: white;
	}
	.all-list{
		width:100%;
		height: 100%;
		overflow-y: scroll;
		.list{
			width: 7.5rem;
			background: #e8e8e8;
			height: 2.8rem;
			.list-in{
				height: 2.7rem;
				background: white;
				box-sizing: border-box;
				padding: 0.37rem 0 0 0.42rem;
				.list-img{
					width: 3.3rem;
					height: 2.08rem;
					float: left;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.right-word{
					width: 3.75rem;
					height: 2.08rem;
					float: right;
					box-sizing: border-box;
					padding: 0 0.37rem 0 0.26rem;
					.first-line{
						font-size: 0.3rem;
						color: #323232;
						font-weight: 500;
						overflow:hidden;
	       				text-overflow:ellipsis;
						white-space:nowrap;
					}
					.second-line{
						font-size: 0.24rem;
						color: #656565;
						margin-top: 0.1rem;
						text-align: left;
						text-indent: 2em;
					}
				}
			}

		}
	}
	.box{
		position: fixed;
	}
</style>
