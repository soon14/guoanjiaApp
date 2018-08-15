<template>
    <div >
        <div class="earnestShow">
		    <div class="earnestShow-slide">
		    	<div class="earnestShow-item" v-for="(item,index) in roomList" :key="index" @click="toRoomDetail(item)">
		    		<img class="background-img" :src="item.image" />
		    		<div class="earnestShow-item-top">
		    			<div class="item-top">
		    				<!--<p class="earnestShow-item-top-title">{{item.houseName}}{{item.roomName}}{{item.roomNumber}}</p>
			    			<div class="earnestShow-item-top-tags">
			    				<span v-for="(tag,tagindex) in item.tagsArr" :key="tagindex">{{tag}}</span>
			    			</div>-->
		    			</div>
		    			<div class="item-bottom">
		    				<p class="houseRoomName">{{item.houseName}}{{item.roomName}}{{item.roomNumber}}</p>
			    			<p class="house-room-price">
			    				<span class="house-room-price-one">{{item.price ? item.price :'敬请关注'}}</span>
			    				<span class="house-room-price-two" v-if="item.price">/月</span>
			    			</p>
			    		</div>
		    		</div>
		   		</div>
		    </div>
        </div>
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  	components: {
   		swiper, swiperSlide
  	},
  	data () {
	    return {
			swiperOptiontemplate1:{
				freeMode : true,
			},
	      	roomList:[],
	      	isVerse:true,
	      	isAgainLoad:0
	    }
  	},
  	props:{
  		verse: {
            type: Boolean,
            default: false,
        },
  	},
  	mounted(){
  		this.getHomePageDetail();
  	},
  	methods: {
		//获取首页数据
		getHomePageDetail(){
	        this.post('common/homePage',{
	        	"size":'5'
	        })
	        .then((res) =>{
                this.roomList = res.data.roomList.filter(item => {
                	//console.log(item.houseName.length);
                	return item.houseName.length <= 8;
                }).map((item,index) => {
                	if(!item.image){
                		item.image = 'https://media.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
                	}else{
                		item.image = !item.image ||this.concatFileUrl(item.image,331,259);
                	}
                    item.tagsArr = item.tags.split(",",2);
                    return item;
                })
				this.roomList = this.roomList.slice(0,5);
                if(this.verse){
	        		this.roomList = this.roomList.reverse();
	        	}
	        })
		},
		toRoomDetail(item){//跳转到该房间详情
	        this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}})
	    },
  	}
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
@font-face{
	font-family:font01;
	src:url("../../../fonts/BEBASNEUE.otf");
}


.earnestShow{
	// width: 100%;
	// padding-left:3%;
	margin-left:.3rem;
	margin-right:.3rem;
   	height:3.7rem;
    overflow-x: scroll;
    box-sizing:border-box;
    background:white;
    .earnestShow-slide{
    	width:13.2rem;
		height: 3.45rem;
		background:white;
		padding:0.1rem 0;
    	.earnestShow-item{
	    	width:2.4rem;
	    	height:3.45rem;
	    	background:#ffffff;
	    	margin-left: 0.3rem;
	    	float: left;
	    	position: relative;
	    	border-radius: 0.1rem;
			.earnestShow-item-top{
			  	width: 100%;
			  	height: 100%;
	    		position: relative;
	    		z-index:2;
	    		.item-top{
	    			width:100%;
	    			height:2.6rem;
				  	box-sizing: border-box;
				  	padding-top: 0.6rem;
	    			.earnestShow-item-top-title{
				  		text-align:center;
				  		font-size: 0.34rem;
				  		color: #FEFEFF;
				  		font-weight: 700;
				  		margin-bottom: 0.38rem;
				  	}
				  	.earnestShow-item-top-tags{
				  		width: 100%;
				  		height: 0.3rem;
				  		text-align: center;
				  		line-height: 0.01rem;
				  		margin-top: -0.11rem;
				  		span{
				  			display: inline-block;
				  			height: 0.3rem;
				  			padding: 0 0.1rem 0 0.1rem;
				  			font-size:0.22rem;
				  			color: #5A5A5A;
				  			line-height: 0.3rem;
				  			background: #f0f0f0;
				  			border-radius: 0.08rem;
				  			margin-right: 0.1rem;
				  			box-sizing: border-box;
				  			padding-top: 0.02rem;
				  		}
				  	}
				  	.earnestShow-item-top-wash{
				  		font-size: 0.24rem;
				  		color: #FFFEFE;
				  		text-align: center;
				  		margin-top: 0.48rem;
				  	}
	    		}
			  	.item-bottom{
			  		width: 100%;
				    height: 0.85rem;
				    font-size: 0.24rem;
				    color: #D7000F;
				    text-align: center;
				    line-height: 0.85rem;
				    vertical-align: middle;
			  		.houseRoomName{
			  			font-size: 0.2rem;
			  			color: #999999;
			  			height: 0.3rem;
			  			line-height: 0.3rem;
			  			text-align: left;
			  		}
			  		.house-room-price{
			  			height: 0.5rem;
			  			text-align: left;
			  			line-height:0.5rem ;
			  		}
			  		.house-room-price-one{
			  			font-size: 0.3rem;
			  			color: black;
			  			font-size:.3rem;
						font-family:font01;	
						font-weight: 600;	
			  		}
			  		.house-room-price-two{
			  			font-size: 0.2rem;
						  color: #999999;
						  font-family:'Source Han Sans CN';
			  		}
			  	}
			  	
			}
	    	.background-img{
	    		width: 2.40rem;
	    		height: 2.4rem;
	    		display: block;
	    		position: absolute;
	    		border-radius: 0.1rem;
	    		top: 0;
	    		left: 0;
	    		z-index:1;
	    	}
	    	.shadow{
	    		width: 3.28rem;
	    		height: 2.86rem;
	    		position: absolute;
	    		border-top-left-radius: 0.1rem;
	    		border-top-right-radius: 0.1rem;
	    		top: 0;
	    		left: 0;
	    		z-index:1;
	    		background: rgba(0,0,0,.3);
	    	}
	    }
    }
    .earnestShow-slide .earnestShow-item:nth-of-type(1){
    	margin-left: 0 !important;
    }
}

</style>