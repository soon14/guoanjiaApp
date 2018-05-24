<template>
    <div class="box">
        
        <!--跳转至应用宝下载；国安家APP-->
		<div><downLoad></downLoad></div>
		
        <div class="headerHomeAndro"  v-bind:class="{ 'headerHome': this.$store.state.showWxTitle }">
        	<div style="height: 0.2rem;" v-if="!this.$store.state.showWxTitle"></div>
       		<div style="width: 1.3rem;height: 1.1rem;float: left;" v-if="!this.$store.state.showWxTitle">
       			<div class="back-btn" @click="goBack"></div>
       		</div>
       		<div class="middle-input" @click="toHouseList" v-bind:class="{'middle-input-wechat': !isWechat}">
       			<input type="text" class="input-inner" placeholder="请输入您想住的小区或区域" />
       			<div class="searchLogo"><x-icon type="ios-search" size="23" ></x-icon></div>
       		</div>
       		<div :class="[this.isIosAndroid() ? 'header-right' : 'header-right-ios']" @click="toMapSearch">
       			<!--<x-icon type="ios-search" size="30" ></x-icon>-->
       			<img style="width: 0.5rem;height: 0.5rem;" src="../../../../static/rent/HomePage/mapsearchhouse.png" alt="" />
       		</div>
        </div>
        <!--<div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']"></div>-->
       
	    <div :class="[this.$store.state.showWxTitle ? 'HomeContentndroid' : 'HomeContent']">   
	        <div class="banner" style="height: 3.8rem;width: 100%;"><!--轮播图-->
	            <swiper :options="swiperOption" style="height: 3.8rem;" v-if="baseList.length > 0">
			        <swiper-slide v-for="(item,index) in baseList" :key="index">
			        	<img :src="item.img" alt="" @click="transformOut(index)" style="height:100%;width:100%;"/>
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
			    </swiper>
	        </div>
	        <!--国安好房-->
			<div style="background: white;" v-if="roomListLength !== 0">
	
				<div class="title-box">
	                <div class="box-title-box">
	                    <img src="../../../../static/rent/HomePage/titlelogo_03.png" class="img1">
	                    <p>国安家公寓</p>
	                    <div class="middle-line"><span></span></div>
	                	<p class="lookMore" @click="goodRoom">查看更多>></p>
	                </div>
	            </div>
			    <swiper :options="swiperOptionRoom" style="height: 3.8rem;">
			        <swiper-slide class="scroll-swiper" v-for="(roomItems,index) in roomArr" :key="index">
						<div class="box1-item" style="position: relative;" v-for="(item,index) in roomItems" @click="toRoomDetail(item)">
							<div class="gaImg">
								<img :src="item.image" />
							</div>
							<div class="gatitle">
								<p class="gatitle-one">{{item.houseName}}&nbsp;{{item.roomName}}{{item.roomNumber}}</p>
								<p>￥{{item.price}}/月 </p>
							</div>
							<!--<div class="active5" v-if="item.active418"></div>-->
						</div>
			      	</swiper-slide>
			    </swiper>
			</div>
			<!--国安整租-->
			<div style="background: white;" v-if="houseListLength !== 0">
				<div style="height: 0.15rem; background: #f2f2f2;"></div>
				<div class="title-box">
	                <div class="box-title-box">
	                    <img src="../../../../static/rent/HomePage/house.png" class="img1">
	                    <p>最新上架</p>
	                    <div class="middle-line"><span></span></div>
	                	<p class="lookMore" @click="goodHouse">查看更多>></p>
	                </div>
	            </div>
			    <swiper :options="swiperOptionRoom" style="height: 3.8rem;">
			        <swiper-slide class="scroll-swiper" v-for="(houseItems,index) in houseArr" :key="index">
						<div class="box1-item" v-for="item in houseItems" @click="toRoomDetail(item)">
							<div class="gaImg" style="position: relative;">
								<img :src="item.image" />
								<!--<div class="active-gaImg" v-if="item.active418"></div>-->
							</div>
							<div class="gatitle">
								<p class="gatitle-one">{{item.houseName}}&nbsp;{{item.roomName}}{{item.roomNumber}}</p>
								<p>￥{{item.price}}/月</p>
							</div>
							
						</div>
			      	</swiper-slide>
			    </swiper>
			</div>
			<div style="height: 0.15rem; background: #f2f2f2;"></div>
	        <div class="GuoanLive"><!--国安寓-->
	        	<div class="title-box">
	                <div class="box-title-box">
	                    <img src="../../../../static/rent/HomePage/guoanyu.png" class="img1">
	                    <p>国安Home</p>
	                    <div class="long-line" style="width: 4.2rem;"><span></span></div>
	                </div>
	            </div>
	            <div class="guoanHome">
	            	<div class="templet-box" @click="listTurn">
		                <img  src="https://media.guoanfamily.com/rent/static/HomePage/guoanyutu.png" />
		            </div>
	            </div>
	        </div>
	        <div class="activity" v-if="!this.$store.state.showWxTitle"><!--精彩活动-->
	            <div class="title-box">
	                <div class="box-title-box">
	                    <img src="../../../assets/home/activity.png" class="img1">
	                    <p>精彩活动</p>
	                    <div class="middle-line"><span></span></div>
	                    <p class="lookMore" @click="ActiveList">查看更多>></p>
				
	                </div>
	            </div>
	            <div class="activity-box" @click="activity2">
	                <div class="activity-top">
	                    <div class="activity-left">
	                    	<img src="https://media.guoanfamily.com/rent/static/HomePage/article01.jpg" alt="" />
	                    </div>
	                    <div class="activity-right">
	                        <h3>点亮北京</h3>
	                        <p>在这个日渐寒冷的深秋时刻，为这座古老又崭新的城市，与在这城市漂泊的每一个认真生活的年轻人，点亮等你回家的灯火~</p>
	                    </div>
	                </div>
	            </div>
	
	            <div style="height: 0.03rem; background: #f2f2f2; margin-bottom: 0.27rem;"></div>
	            <div class="activity-box" @click="activity1">
	                <div class="activity-top">
	                    <div class="activity-left">
	                    	<img src="https://media.guoanfamily.com/rent/static/activeList/active01.png" alt="" />
	
	                    </div>
	                    <div class="activity-right" >
	                        <h3>百万房租免费送</h3>
	                        <p>今年十一让我们来个改变之旅参加国安家品质租住节领取价值3500元礼包为自己找一个理想家~</p>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="templet"><!--业主委托-->
	            <div class="title-box">
	                <div class="box-title-box">
	                    <img src="../../../../static/rent/HomePage/weituo.png" class="img1">
	                    <p>业主委托</p>
	                    <div class="long-line"><span></span></div>
	                </div>
	            </div>
	            <div class="templet-box" @click="ownerEntrust">
	                <img src="https://media.guoanfamily.com/rent/static/HomePage/homeweituo.png" />
	            </div>
	        </div>
	        <div class="Templet"><!--样板间-->
	          	<div class="title-box">
	                <div class="box-title-box">
	                    <img src="../../../../static/rent/HomePage/yangbanjian.png" class="img1">
	                    <p>国安家高品质服务公寓</p>
	                    <div class="long-line" style="width: 2.8rem;"><span></span></div>
	                </div>
	            </div>
	            <div class="myself">
	            	<img src="../../../../static/rent/HomePage/myself.png" alt="" />
	            </div>
	           <Templets></Templets>
	
	        </div>
			<!--备案信息-->
	        <!-- <div class="copy-right" style="font-size: 0.16rem; background: #fff; text-align: center; padding: .2rem 10% 0.6rem 10%;line-height: .4rem">
	            <p>Copyright&copy;2013-2018</p>
	            <p>西藏中信国安房地产项目管理有限公司北京分公司</p>
	            <p style="color: #cccccc">京ICP备16058357号</p>
	            <p style="color: #cccccc">客服电话：400-900-2225 010-85757521</p>
	        </div> -->
	    </div>
    </div>
</template>
<script>
import PageHeader from '../../components/public/PageHeader';//导航
import Guoan from '../../components/home/GuoanLive';//国安寓
import Templets from '../../components/home/templet';

import downLoad from '../../components/home/downLoad'

export default {
  	components: {
	    PageHeader,
	    Guoan,
        Templets,
        downLoad
  	},
  	data () {
		var self = this;
	    return {
	    	baseList : [ 
			{
			  url: 'https://www.guoanfamily.com/staticWeb/guoanshequ/index.html',
			  img: 'https://media.guoanfamily.com/rent/static/HomePage/dt.png',
			
			}, 
			{
			  url: '',
			  img: 'https://media.guoanfamily.com/rent/static/HomePage/redPerson.png',
			
			}, 
			{
			  url: 'https://www.wjx.top/jq/21015457.aspx',
			  img: 'https://media.guoanfamily.com/rent/static/HomePage/banner1020.jpg',
			
			},{
			  url: '/HouseLis',
			  img: 'https://media.guoanfamily.com/rent/static/HomePage/banner05.png',
			
			}, {
			  url: '/Delegation',
			  img: 'https://media.guoanfamily.com/rent/static/HomePage/banner03.png',
			}],
	    	swiperOption: {
		        autoplay: true,
		        pagination: {
		          el: ".swiper-pagination"
		        }
		    },
		    swiperOptionRoom:{
		    	
		    },
		   	//demo06_list: baseList,
		    demo06_index: 0,
		    BspotP1Class:true,
		    BspotP2Class:false,
		    BspotP3Class:false,
		    BspotP4Class:false,
		    BspotP5Class:false,
		    roomList:[],
		    newHouseList:[],//整租列表采用倒序的合租数据
		    roomListLength:'',
		    roomArr:[],
			houseList:[],
			houseListLength:'',
			houseArr:[],
            chuxinChange:true,
            isPersonal:false,
            androidOrIos:true,	//默认为安卓登录
            isWechat:!this.$store.state.showWxTitle
            
		}
  	},
  	created() {
		this.getHomePageDetail()
		this.collectUrl = window.location.href;
        this.isIosAndroid();
        if(this.isECTouch()){//判断是否是微信浏览器
			this.wxconfig();
		}
	},
	
	methods: {
		isIosAndroid(){
			if(this.isECTouch()){
				//weixin
				this.androidOrIos = false;
				return false;
			}else{
				//判断是安卓还是ios登录，定义到变量中
				let u = navigator.userAgent;
	            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	            if (isAndroid === true && isiOS === false) {
	                this.androidOrIos = true;
	                return true;
	            }
	            if (isAndroid === false && isiOS === true) {
	                this.androidOrIos = false;
	                return false;
	            }				
				
				
			}
		},
		transformOut(index){
			let locationHref = window.location.href;
			let locationvalue = locationHref.substr(0,locationHref.indexOf("#")+1);
			switch(index){
				case 0:
				this.$router.push({path:"framePage",query:{src:'https://www.guoanfamily.com/staticWeb/guoanshequ/index.html',title:'一荐倾心',num:'1'}});
				break;
				case 1:
				this.$router.push({path:"/HouseList"});
				break;
				case 2:
				this.$router.push({path:"framePage",query:{src:'https://www.wjx.top/jq/21015457.aspx',title:'签约登记'}});
				break;
				case 3:
				this.$router.push({path:"/HouseList"});
				break;
				case 4:
				this.$router.push({path:"/Delegation"});
				break;
				default:
				this.$router.push({path:"/Delegation"});
				break;
			}
		},
        goBack(){  //跳转个人中心
            this.$router.back(-1);
        },
        toMapSearch(){//跳转到地图找房
        	//地图找房新页面还没提交
        	//console.log("等页面提交了才有链接跳转");
        	this.$router.push({path:"/MapSearch"});
        },
	  	toHouseList(){//点击搜索框跳转到搜索页面
	  		this.$router.push({path:"HouseList/HotSearch"})
	  	},
	  	goodRoom(){//跳转到合租房源列表
	  		this.$router.push({path:"/HouseList",query:{name:"0019001"}})
	  	},
	    goodHouse(type){  //跳转整租房源列表
	        this.$router.push({path:"/HouseList",query:{name:"0019001"}})
	    },
	    listTurn(){
	    	this.$router.push({path:"/HouseList",query:{name:"0019003"}})
	    },
		ownerEntrust(){//跳转到业主委托
		 	this.broadcast(this.EVENTS.PAGE_LOADING_START, "HomePage", {}, ()=>{});
	        this.$router.push({path:"/Delegation"})
	    },
		toRoomDetail(item){//跳转到该房间详情
	        this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}})
	    },
	    toHouseDetail(item){//跳转到该房源详情
	        this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}})
	    },
	    ActiveList(){//跳转到精彩活动列表页
	    	this.$router.push({path:"/ActiveList"})
	    },
	    activity1(){
	    	this.$router.push({path:"framePage",query:{src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484447&idx=1&sn=5742f69dbacf8664df9cab90c712c043&chksm=ea191f81dd6e969713ea45ba70a9837cef94ed37f2dd6f93837ce509ac7704fd3ce9c2140afe#rd',title:'百万房租免费送'}});
	    },
	    activity2(){
	    	this.$router.push({path:"framePage",query:{src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484478&idx=1&sn=dd7412962e6c1fa477d9c821e8d04205&chksm=ea191fa0dd6e96b674e15a0edd3b8fa6f7ffc9d117519bbaea8592a65454ab75ec99f0199fb6#rd',title:'点亮北京'}});
	    },
	    getHomePageDetail(){//获取首页数据
	        this.post('common/homePage',{
	        	"size":'6'
	        })
	        .then((res) =>{
	                this.roomList = res.data.roomList.map((item,index) => {
	                	if(!item.image){
	                		item.image = 'https://media.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
	                	}else{
	                		item.image = !item.image ||this.concatFileUrl(item.image,331,259);
	                	}
	                    return item;
	                })

	                let roomlength=this.roomList.length/2;
	                for(let i=0; i<roomlength;i++){//将合租数据转换为二维数组
	                 	this.roomArr.push(this.roomList.splice(0,2))
	                }
	                //console.log(this.roomArr)
	                //整租数据
//	                this.houseList = res.data.houseList.map((item,index) => {
//	                	if(!item.image){
//	                		item.image = 'https://media.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
//	                	}else{
//	                		item.image = !item.image ||this.concatFileUrl(item.image,331,259);
//	                	}
//	                    return item;
//	                })
//	                let houselength=this.houseList.length/2;
//	                for(let i=0; i<houselength;i++){//将整租数据转换为二维数组
//	                 	this.houseArr.push(this.houseList.splice(0,2))
//	                }
					//假的整租数据
					this.newHouseList = res.data.roomList;
					this.newHouseList.reverse();//将合租的数组倒序
					//console.log(this.newHouseList.length)
	                let houselength=this.newHouseList.length/2;
	                for(let i=0; i<houselength;i++){//将整租数据转换为二维数组
	                 	this.houseArr.push(this.newHouseList.splice(0,2))
	                }
	                //console.log(this.houseArr)

	            })
	   	},
	   	//调用微信接口
    	wxconfig() {
            this.post("jsapi/getJsapiSignature?local_url=" + encodeURIComponent(location.href.split('#')[0]),
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
                    this.wxShare();
                })
            });
        },
        wxShare() {
            // 分享给朋友
            let self = this;
            this.$wechat.onMenuShareAppMessage({
                title: "国安家-高品质公寓运营商", //标题
                desc: "拎包入住，智能门锁，品牌家电、家居，专业保洁、维修、专属管家为您贴心服务!", //描述
                link:"https://www.guoanfamily.com/guoanjiaApp/#/HomePage?from=true", //连接地址指打开分享时页面地址
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
                title: "国安家-高品质公寓运营商", //标题
                desc: "拎包入住，智能门锁，品牌家电、家居，专业保洁、维修、专属管家为您贴心服务!", //描述
                link: "https://www.guoanfamily.com/guoanjiaApp/#/HomePage?from=true", //连接地址指打开分享时页面地址
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
	    demo06_onIndexChange (index) {
		    if(index == 0){
		        this.BspotP1Class = true;
		        this.BspotP2Class = false;
		        this.BspotP3Class = false;
		        this.BspotP4Class = false;
		    }
		    if(index == 1){
		        this.BspotP1Class = false;
		        this.BspotP2Class = true;
		        this.BspotP3Class = false;
		        this.BspotP4Class = false;
		    }
		    if(index == 2){
		        this.BspotP1Class = false;
		        this.BspotP2Class = false;
		        this.BspotP3Class = true;
		        this.BspotP4Class = false;
		    }
		    if(index == 3){
		        this.BspotP1Class = false;
		        this.BspotP2Class = false;
		        this.BspotP3Class = false;
		        this.BspotP4Class = true;
		    }
	    },

	},
}
</script>

<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
$imgheight:0.4rem;
.box{
	transform: translate3d(0,0,0);
    background:#f4f4f4;
    height: 100%;
    .HomeContent{
    	overflow-y: scroll;
    	position:fixed;
    	top:1.3rem;
    	bottom:0;
    	width:100%;
    }
    .HomeContentndroid{
    	overflow-y: scroll;
    	position:fixed;
    	top:1.1rem;
    	bottom:0;
    	width:100%;
    }
    
	.headerHomeAndro{
		width:100%;
		height:1.3rem;
		background:#e24e59;
		position:absolute;
		top:0;
		left:0;
		z-index:999;
	}
	.headerHome{
		width:100%;
		height:1.1rem;
		background:#e24e59;
		position:absolute;
		top:0;
		left:0;
		z-index:999;
	}
	.back-btn{
        height: 1.1rem;
        width: 1.3rem;
        background: url("../../../../static/rent/icon-back-btn.png") no-repeat center;
        background-size:0.42rem ;
	}
	.middle-input{
		width: 4.9rem;
		height: 1.1rem;
		float: left;
		line-height: 0.001rem;
		position: relative;
	}
	.searchLogo{
		position: absolute;
		width: 0.6rem;
		height: 0.6rem;
		left: 0.05rem;
		top: 0.34rem;
	}
	.middle-input-wechat{
		width: 5.9rem;
		height: 1.1rem;
		float: left;
		margin-left: 0.3rem;
		line-height: 0.001rem;
	}
	.input-inner{
		width: 100%;
		height: 0.5rem;
		outline: none;
		border: 1px solid white;
		background: transparent;
		border-radius: 0.05rem;
		margin-top: 0.31rem;
		color: white;
		text-indent: 0.6rem;
	}
 	::-webkit-input-placeholder {
        color: white;
    }

    :-moz-placeholder {
        color: white;
    }

    ::-moz-placeholder {
        color: white;
    }

    :-ms-input-placeholder {
        color: white;
    }
	.header-right{
		width: 1.3rem;
		height: 1.1rem;
		float: right;
		margin-top: 0.07rem;
		box-sizing: border-box;
		padding: 0.18rem 0 0 0.4rem;
		/*background: url("../../../../static/rent/HomePage/mapLink.png") no-repeat center;*/
	}
	.header-right-ios{
		width: 1.3rem;
		height: 1.1rem;
		float: right;
		margin-top: -0.09rem;
		box-sizing: border-box;
		padding: 0.36rem 0 0 0.4rem;
		/*background: url("../../../../static/rent/HomePage/mapLink.png") no-repeat ;*/
		/*background-size:42%;*/
		/*background-position: 0.4rem 0.36rem;*/
	}
    .banner{
        position: relative;
        .vux-slider{
            .vux-swiper{
            }
        }
        .vux-indicator{
            bottom:0px !important;
        }
        .banner-spot{
            width:1.5rem;
            position: absolute;
            bottom:0.3rem;
            right:0.2rem;
            height: 0.2rem;
            box-sizing: border-box;
            padding-left: 0.1rem;
            margin-right: 0.1rem;
            z-index: 999;
            p{
                width:0.18rem;
                height: 0.18rem;
                background:#cfcfcd;
                border-radius: 50%;
                float: left;
                margin-left:0.1rem;
            }
            .BspotP1{
                background:#f25067;
            }
            .BspotP2{
                background:#f25067;
            }
            .BspotP3{
                background:#f25067;
            }
            .BspotP4{
                background:#f25067;
            }
        }
    }
    .activity{ 
        background:#fff;
        margin-top:0.15rem;
        .activity-box{
            width:90%;
            margin-left:5%;
            .activity-top{
                width:100%;
                height: 2rem;
                .activity-left{
                    width:2.8rem;
                    height:1.75rem;
                    float: left;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .activity-right{
                    width:3.9rem;
                    height:1.75rem;
                    float: right;
                    box-sizing: border-box;
                    padding-right: 0.15rem;
                    h3{
                        font-size:0.3rem;
                        margin-left:0.3rem;
                        font-weight: bold;
                        color: #131313;
                       	overflow:hidden;
	       				text-overflow:ellipsis;
						white-space:nowrap;
                    }
                    p{
                    	width: 100%;
                    	color: #666666;
                        font-size: 0.23rem;
                        margin-top:0.1rem;
                        margin-left:0.3rem;
                        text-align: left;
                        text-indent: 2em;
                    }
                }
            }

        }
    }
    .templet{   
        width:100%;
        height: 4.5rem;
        background:#fff;
        margin-top:0.15rem;
        padding-bottom:0.45rem;
        .templet-box{
            width:90%;
            height:3.42rem;
            margin-left:5%;
            img{
            	width:100%;
                height:100%;
            }
            .templet-top{
                width:100%;
                height: 2.8rem;
                margin-top:0.2rem;
                .templet-left{
                    width:40%;
                    height:100%;
                    float: left;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .templet-right{
                    width:60%;
                    height:100%;
                    float: left;
                    h3{
                        font-size:$littleFontSize;
                        margin-top: 0.5rem;
                        margin-left:10px;
                        font-weight: 600;
                    }
                    p{
                        font-size: $mostFontSize;
                        margin-top:0.1rem;
                        margin-left:10px;
                    }
                    span{
                        display: inline-block;
                        font-size:$mostFontSize;
                        font-weight:600;
                        margin-left:6px;
                        color:$partColor;
                    }
                }
            }
        }
    }
    .GuoanLive{ 
      width:100%;
      height: 3.7rem;
      background:#fff;
      /*margin-top:0.5rem;*/
     .guoanHome{
     	box-sizing: border-box;
     	padding: 0 5%;
     }
      .Guoan{
        width:90%;
        margin-left:5%;
        .vux-swiper-desc{
            font-size:12px !important;
            background:tan !important;
        }
      }
    }
    .Templet{
        width:100%;
        background:#fff;
        margin-top:0.15rem;
        box-sizing: border-box;
        padding-bottom: 0.5rem;
    }
}
.banner{
    //margin-top:$height;
}
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
.MarginTop{
  margin-top:0.01rem;
}
.title-box{//标题栏样式
    width:100%;
    height:1rem;
    box-sizing: border-box;
    padding-top: 0.1rem;
    .box-title-box{
    height:$height;
    width:90%;
    margin-left:5%;
        .img1,p,div{
            float: left;
        }
        .img1{
            width:0.3rem;
            height:0.3rem;
            margin-top:0.2rem;
        }
        p{
            font-size: 0.28rem;
            line-height: $height;
            margin-left:0.1rem;
        }
        .middle-line{
	        height:$height;
	        width:3.2rem;
	        margin:0 0 0 0.23rem;
	        line-height:0.1rem;
	            span{
	                display:inline-block;
	                height: 1px;
	                background:#f1f1f1;
	                width:100%;
	            }
        }
        .long-line{
	        height:$height;
	        width:4.5rem;
	        margin:0 0 0 0.23rem;
	        line-height:0.1rem;
	            span{
	                display:inline-block;
	                height: 1px;
	                background:#f1f1f1;
	                width:100%;
	            }
        }

        .img2{
            height: $imgheight;
            width:0.8rem;
            margin-top:0.16rem;
            float:right;
        }
        .lookMore{
        	float: right;
        	color: #333333;
        	font-size: 0.24rem;
        	margin: 0;
        }
    }
}

/*修改头部标题栏样式*/
 $topheight: 0.92rem;
 $btnSize: 0.42rem;

	.title {
		height: 0.8rem;
		box-sizing: border-box;
		padding: 0.2rem 0.3rem 0 0.3rem;
		font-size:$titleFontSize;
		.title-logo {
			width: 0.32rem;
			height: 0.26rem;
			float: left;
			margin-right: 0.12rem;
			margin-top: 0.1rem;
		}
		.title-more {
			float: right;
			width: 0.64rem;
			height: 0.33rem;
			margin-top: 0.07rem;
		}
	}

	.gaHome {
		/*height: 3.52rem;*/
		box-sizing: border-box;
		position: relative;
		padding-left: 0.3rem;

	}

	.box1 {
		/*height: 100px;*/
		position: relative;
		/*width: 16.95rem;*/
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
			left: 0.4rem;
			background: url("../../../../static/rent/house-list/active418.png") no-repeat;
			background-size: 100%;
		}
	}
	/*scroll中的图片*/

	.gaImg {
		width: 100%;
		height: 2.59rem;
		.active-gaImg{
			width: 0.8rem;
			height:0.8rem;
			position: absolute;
			top: 0.2rem;
			left: 0.2rem;
			background: url("../../../../static/rent/house-list/active418.png") no-repeat;
			background-size: 100%;
		}
		img{
			width: 100%;
			height: 100%;
		}
	}

	.gatitle {
		box-sizing: border-box;
		padding: 0.12rem 0 0 0.1rem;
		font-size: 0.24rem;
		text-align: left;
		.gatitle-one{
			overflow:hidden;
	       	text-overflow:ellipsis;
			white-space:nowrap;
		}
	}

	.gatitle p:nth-child(2) {
		color: #e84e56;
		margin-top: 0.06rem
	}

	.box1-item:first-child {
		margin-left: 0;
	}
	.entrust{
		/*margin-top: 0.4rem;*/
		box-sizing: border-box;
		padding:0 0.3rem ;
		.entrust-leftImg{
			width: 2.8rem;
			height: 2.8rem;
			float: left;
		}
		.entrust-rightTitle{
			float: right;
			width:3.89rem;
			height: 2.8rem;
			box-sizing: border-box;
			padding-top: 0.32rem;
		}
		.entrust-rightTitle p:nth-child(1){
			font-size: $titleFontSize;
		}
		.entrust-rightTitle p:nth-child(2){
			font-size: $reminderFontSize;
			margin-top:0.32rem;
			color: #676767;
		}
		.entrust-rightTitle p:nth-child(3){
			font-size: $reminderFontSize;
			margin-top:0.32rem;
			color: #e14d5b;
			font-weight: bold;
		}
	}
	.vux-x-icon {
	  fill: white;
	}
	.myself{
		widows: 100%;
		height: 1.5rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.btnandroid{
		margin-top: -0.05rem;
	}
	.btnios{
		/*margin-top: 0.1rem;*/
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
	.scroll-swiper{
		background: white;
		box-sizing: border-box;
		padding: 0 0 0 0.3rem;
	}
</style>
