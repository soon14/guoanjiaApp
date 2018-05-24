<template>
    <div >
        <!--<tab class="box-top-tab" :line-width="3" custom-bar-width="2rem" active-color='#e24e59'>
            <tab-item selected v-on:click="greet"  @on-item-click="showClick">初心系列产品</tab-item>
            <tab-item  @on-item-click="hideClick">初见系列产品</tab-item>
        </tab>-->
        <div class="apartment">
        	<div class="apartment-left" @click="chuxin">
        		<span v-bind:class="{ changeSpan: chuxinChange }">初心系列产品</span>
        	</div>
        	<div class="apartment-right"  @click="chujian">
        		<span v-bind:class="{ changeSpan: !chuxinChange }">初见系列产品</span>
        	</div>
        </div>
        <div style="height: 0.2rem;"></div>
            <div class="earnestShow" v-if="chuxinChange"> 
                <swiper 
			    	:options="swiperOptiontemplate1"
			    	style="height: 2.61rem;">
			        <swiper-slide class="scroll-swiper" v-for="(i,index) in src"  :key="index">
						<div class="box1" style="float: left;width: 50%;" v-for="item in i">
		                    <div class="box1-item" @click="turnHouseList"><img :src="item.imgUrl"></div>
		                </div>
			      	</swiper-slide>
			    </swiper>
            </div>
          <div class="earnestHide" v-if="!chuxinChange"> 
              <swiper 
			    	:options="swiperOptiontemplate1"
			    	style="height: 2.61rem;">
			        <swiper-slide class="scroll-swiper" v-for="(i,index) in src1" :key="index">
						<div class="box1" style="float: left;width: 50%;" v-for="item in i">
		                    <div class="box1-item"  @click="turnHouseList" ><img :src="item.imgUrl"></div>
		                </div>
			      	</swiper-slide>
			    </swiper>
          </div>
        
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


const list = () => ['', '']

export default {
  components: {
   	swiper, swiperSlide
  },
  data () {
    return {
		swiperOptiontemplate1:{
			freeMode : true,
		},
      chuxinChange:true,
      src:[
        [{
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/model1.png'
        },
        {
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/model2.png'
        }],
        [{
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/model3.png'
        },
        {
           imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/model4.png'
        }],
        [{
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/model5.png'
        },{
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/chuxin06.jpg'
        }]
      ],
      src1:[
     	[{
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png'
        },
        {
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/chuxin02.png'
        }],
        [{
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/chuxin03.png'
        },
        {
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/chuxin04.png'
        }],
        [{
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/chuxin05.png'
        },{
            imgUrl:'https://media.guoanfamily.com/rent/static/HomePage/chujian06.jpg'
        }]
      ],
    }
  },
  mounted () {
  },
  methods: {
  	turnHouseList(){
  		this.$router.push({path:"/HouseList",query:{name:"0019001"}})
  	},
  	turnRoomList(){
  		this.$router.push({path:"/HouseList",query:{name:"0019001"}})
  	},
    chuxin(){
	    	this.chuxinChange = true;
	},
    chujian(){
	    	this.chuxinChange = false;
	},
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.apartment{
        	width: 100%;
        	height: 0.44rem;
        	font-size: 0.24rem;
        	color:#343434;
        	.apartment-left{
        		width: 50%;
        		height: 100%;
        		
        		float: left;
        		text-align: center;
        		span{
        			display: inline-block;
        			height: 0.44rem;
        			box-sizing: border-box;
        		}
        		.changeSpan{
        			border-bottom: 3px solid #e24e59;
        			color: #e14e56;
        		}
        	}
        	.apartment-right{
        		width: 50%;
        		height: 100%;
        		
        		float: left;
        		text-align: center;
        		span{
        			display: inline-block;
        			height: 0.44rem;
        			box-sizing: border-box;
        		}
        		.changeSpan{
        			border-bottom: 3px solid #e24e59;
        			color: #e14e56;
        		}
        	}
        }


.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.banner{
    font-size: 12px !important;
}
.tab-swiper {
  background-color: #fff;
  height: 2.62rem;
}
.box1 {
  height: 2.62rem;
  position: relative;
  width: 18rem;
}
.box1-item {
  width: 3.3rem;
  height: 2.62rem;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 2.62rem;
  img{
    height:100%;
  }
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 100%;
  overflow: hidden;
}
.earnestShow{ //初心
    width: 96%;
    height: 70%;
    margin-left: 4%;
}
.earnestHide{ //初见
    width: 96%;
    height: 70%;
    margin-left: 4%;
}
.vux-tab-ink-bar,.vux-tab-ink-bar-transition-backward{
    height: 3px !important;
}
//自定义动画
.fade-enter-active, .fade-leave-active {
  transition: opacity 
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.box-top-tab{
	width:90%;
	margin-left:5%;
	border-bottom:0 !important;
}
.vux-tab-item{
	background-size:100% 0 !important;
}
</style>