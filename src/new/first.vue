<template>
	<div class="fixContent">
	    <div class="fixContent">
	      <!-- 头部 -->
	        <!--轮播图  -->
	        <swipers></swipers>
	        <!--导航栏  -->
	        <navigation></navigation>
	        <!--新房部分-->
	        <div class='addCustomer' v-on:click="addNewHouse">
	            <!-- <span>
	                <img src='../../static/new/img/smallBuild.png' style="height:70%;margin-top:5px;margin-left:.3rem;" />
	            </span> -->
	            <span style="font-size:0.35rem;line-height:40px;margin-left:0.2rem;font-weight:500;">热销楼盘</span>
	        </div>
	        <!-- 跳转链接 -->
	        <div class="housTypeImgScroll">
	            <ul class="bigul">
	                <li class="bigli" :key="index" v-for="(item,index) in list" @click="newHouseClick(item.id)">
	                    <div class="HousTypeBottomImg">
	                        <div class="filters"></div>
	                        <div class="buildName">{{item.buildname}}</div>
	                        <div class="tag">
	                          <!-- <ul>
	                            <li :key="index1" v-for="(items,index1) in item.buildtagnameList">{{items}}</li>
	                            <div style="clear:both;height:0;line-height:0;"></div>
	                          </ul> -->
	                          <span style="display:inline-block" :key="index1" v-for="(items,index1) in item.buildtagnameList">{{items}}</span>
	                        </div>
	                        <img :src='item.firstpicture'>
	                    </div>
	                    <div class="HousTypeTop">
	                      <span v-if="item.averageprice !=='售价待定'">均价</span>
	                      <span>{{item.averageprice}}</span>
	                      <span v-if="item.averageprice !=='售价待定'">起</span>
	                      </div>
	                </li>
	            </ul>
	            </div>
	        <div style="width:100%;height:0.15rem;background:#f8f8f8;"></div>
	        <flexbox>
	            <flexbox-item>
	                <img src="../../static/new/img/rentadver.jpg" alt="">
	            </flexbox-item>
	        </flexbox> 
	        <!-- 租房部分 -->
	       	<div class='addCustomer' v-on:click="addNewHouse">
	            <span style="font-size:0.35rem;line-height:40px;margin-left:0.3rem;font-weight:500;">国安家公寓</span>
	        </div>
	       
	        <div class="bottom-margin">
	        	<div class="earnestShow">
				    <div class="earnestShow-slide">
				    	<div class="earnestShow-item" v-for="(item,index) in roomList" :key="index" @click="toRoomDetail(item)">
				    		<img class="background-img" :src="item.image" />
				    		<div class="shadow"></div>
				    		<div class="earnestShow-item-top">
				    			<div class="item-top">
				    				<p class="earnestShow-item-top-title">{{item.houseName}}{{item.roomName}}{{item.roomNumber}}</p>
					    			<div class="earnestShow-item-top-tags">
					    				<span v-for="(tag,tagindex) in item.tagsArr" :key="tagindex">{{tag}}</span>
					    			</div>
				    			</div>
				    			<div class="item-bottom">
					    			￥{{item.price}}/月
					    		</div>
				    		</div>
				    		<!--<div class="active5" v-if="item.active418"></div>-->
				   		</div>
				    </div>
		        </div>
		        <div style="text-align: left;"><span style="font-size:0.35rem;line-height:40px;margin-left:0.3rem;font-weight:500;">最新上架</span> </div>
		    
		        <div class="earnestShow">
				    <div class="earnestShow-slide">
				    	<div class="earnestShow-item" v-for="(item,index) in newRoomList" :key="index" @click="toRoomDetail(item)">
				    		<img class="background-img" :src="item.image" />
				    		<div class="shadow"></div>
				    		<div class="earnestShow-item-top">
				    			<div class="item-top">
				    				<p class="earnestShow-item-top-title">{{item.houseName}}{{item.roomName}}{{item.roomNumber}}</p>
					    			<div class="earnestShow-item-top-tags">
					    				<span v-for="(tag,tagindex) in item.tagsArr" :key="tagindex">{{tag}}</span>
					    			</div>
				    			</div>
				    			<div class="item-bottom">
					    			￥{{item.price}}/月
					    		</div>
				    		</div>
				    		<!--<div class="active5" v-if="item.active418"></div>-->
				   		</div>
				    </div>
		        </div>
	        </div>
	        <!-- 抽奖活动 -->
	        <div :class="{'luckDraw':!hideSigno,'singoNone':hideSigno}" v-show="luckdraw" v-transfer-dom  @click="toluckDraw"></div>
	        <!-- 邀请注册部分 -->
	        <!-- 遮罩层 -->
	        <div class="market" style="opacity:.8;" v-transfer-dom v-show="this.$store.state.IndexMarketShow" @click="market1Click"></div>
	        <div class="bankNum" v-transfer-dom v-show="this.$store.state.IndexMarketShow">
	            <div class="bank">
	              <div class="close" @click="market1Click"></div>
	               <div class="chakan" @click="chakanClick">
	                 立即查看
	               </div>
	            </div>
	        </div>
	    </div>
	    <div><downLoad></downLoad></div>
    </div>
</template>

<script>
import { TransferDom } from "vux";
import swipers from "./components/Swiper"; //引入轮播图组件
import navigation from "./components/navigation"; //引入导航栏
import downLoad from "../rent/components/home/downLoad";
// import{ViewBox} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    swipers,
    navigation,
    downLoad
  },
  data() {
    return {
      defaultValue: "",
      list: [], //楼盘数据
      showSuccess: false,
      showMarket: false,
      showText: "",
      showNum:"",
      luckdraw:false,
      hideSigno:false,
      roomList:[],
      newRoomList:[],
    };
  },
  methods: {
  	//获取租房国安家公寓数据
	getHomePageDetail(){
        this.post('common/homePage',{
        	"size":'20'
        })
        .then((res) =>{
            this.roomList = res.data.roomList.filter(item => {
            	return item.houseName.length <= 8;
            }).map((item,index) => {
            	if(!item.image){
            		item.image = 'https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
            	}else{
            		item.image = !item.image ||this.concatFileUrl(item.image,331,259);
            	}
                item.tagsArr = item.tags.split(",",2);
                return item;
            })
			this.roomList = this.roomList.slice(0,5);
			
			this.newRoomList = res.data.roomList.filter(item => {
            	return item.houseName.length <= 8;
          	})
            this.newRoomList = (this.newRoomList.slice(0,5)).reverse();
        })
	},
	//跳转到该房间详情
	toRoomDetail(item){
        this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}})
    },
    //推荐楼盘的点击事件
    addNewHouse() {},
    newHouseClick(item) {
      this.$router.push({
        path: "building_detial",
        query: { buildID: item }
      });
    },
    rentHouse() {
      // window.location.href = "https://www.guoanfamily.com/rentHouse/wap/#/";
      this.$router.push("HomePage");
    },
    //  调用登录接口，传入openid
    onLogin() {
      var openid = localStorage.getItem("openid");
      if (!this.notEmpty(openid)) {
        let post_data = {
          phoneNum: "",
          authCode: "",
          headimgurl: "",
          // "openId": "o8awnwtP8efh2X1mTblRj_x5FGVs",
          openId: localStorage.getItem("openid")
        };
        this.post("userLoginController/unionlogin", post_data, {
          interfaceType: "collect"
        }).then(
          response => {
            // console.log(response);
            if (response.code == 200) {
              localStorage.setItem("headImg", response.data.headImg);
              localStorage.setItem("userPhone", response.data.phoneNum); //将用户电话存入本地
              localStorage.setItem("token", response.data.token); //将用户token存入本地
              localStorage.setItem("standbyToken", response.data.standbyToken); //将用户备用token存入本地
              localStorage.setItem("userName", response.data.realName); //如果有姓名，则存入localStorage
              localStorage.setItem(
                "userInfroMap",
                JSON.stringify(response.data.userInfo)
              ); //将客户的基本信息，收藏的楼盘放入localstorage
              // history.go(-1);
            } 
          },
          response => {
            this.showalert(response.msg);
          }
        );
      }
    },

    // 列表数据加载方法
    // 页面数据加载
    onLoade() {
      this.get(
        "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",
        {
          interfaceType: "newHouse"
        }
      ).then(
        response => {
          if (response.status == 200) {
            // 进行图片路径的拼接
            for (let i = 0; i < response.data.length; i++) {
              // response.data[i].firstpicture = this.ImgSrc + response.data[i].firstpicture;
              response.data[i].firstpicture = this.concatFileUrl(
                response.data[i].firstpicture
              );
              this.$store.state.buildListLocation.push(
                response.data[i].address
              );
              //  console.log(this.$store.state.buildListLocation);
              if (response.data[i].averageprice !== null) {
                if (response.data[i].averageprice == "售价待定") {
                  response.data[i].averageprice = "售价待定";
                } else if (
                  response.data[i].averageprice.substr(
                    response.data[i].averageprice.length - 2
                  ) == "/㎡"
                ) {
                  response.data[i].averageprice =
                    "¥" + response.data[i].averageprice;
                } else if (response.data[i].averageprice == "") {
                  response.data[i].averageprice = "售价待定";
                } else {
                  response.data[i].averageprice =
                    "¥" + response.data[i].averageprice + "/㎡";
                }
              }
            }
            this.list = response.data;
            var arr = [];
            for (let i = 0; i < this.list.length; i++) {
              if (this.list[i].buildtagnameList.length > 0) {
                var obj = {};
                if (this.list[i].buildtagnameList[0].length > 7) {
                  var a = this.list[i].buildtagnameList
                    .toString()
                    .split(",", 1);
                } else {
                  var a = this.list[i].buildtagnameList
                    .toString()
                    .split(",", 2);
                  this.list[i].buildtagnameList = a;
                }
              }
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    //抽奖的点击事件
    toluckDraw() {
      if (this.$store.state.showWxTitle) {
        this.$router.push("luckdraw");
      } else {
        if (this.LoToken()) {
          this.$store.state.loginShow = true;
        }else{
          this.$router.push("luckdraw");
        }
      }
    },

     // 邀请遮罩层的点击事件
    market1Click(){
      // this.showMarket =  fals
      this.$store.state.IndexMarketShow =  false;
    },
     // 产看卡券的点击事件
    chakanClick(){
      this.$router.push('cardCoupons');
      this.$store.state.IndexMarketShow =  false;
    },
   
    showalert(msg) {
      // 显示
      this.$vux.alert.show({
        title: "提示信息",
        content: msg
      });
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    }
  },

  mounted() {
  	//执行家家国安家公寓数据的接口
  	this.getHomePageDetail();
    this.$store.state.buttonGroup = 0;
    if(!this.LoToken() && !this.UserPhone()){
      this.$store.state.userName = localStorage.getItem('userName');
      this.$store.state.userPhone = localStorage.getItem('userPhone');
    }
    this.onLogin();
    this.onLoade();
    // // 控制抽奖图片显示隐藏
    let time = setInterval(()=>{
      this.hideSigno =  true;
      clearInterval(time)
    },10000)
    let time1 = 1518537600000;//开始时间

    let time3 = 1519747200000;//结束
    
    let time2 = new Date().getTime()
    if(time2 < time1){
      this.luckdraw =  false;
    }else if((time2 >= time1) && (time2 <= time3)){
      this.luckdraw = true;
    }else if(time2 > time3){
      this.luckdraw = false;
      // this.msgalert('活动已结束');
    }
  }
};
</script>

<style lang='less' scoped>
.luckDraw {
  width: 1.5rem;
  height: 1.8rem;
  position: fixed;
  top: 60%;
  right: 0;
  background: url("../assets/luck/hongbao.png") center no-repeat;
  background-size: 65%;
  z-index: 10;
  transform: 0.9s;
}
.signo {
  position: fixed;
  z-index: 10;
  top: 50%;
  right: 0;
  width: 1.5rem;
  height: 0.9rem;
  background: url("../../static/new/img/sign.png") no-repeat;
  background-position: center;
  background-size: 100%;
  transition: 0.9s;
}
.singoNone{
  width:0;
  position: fixed;
  height: 0.9rem;
  top: 60%;
  right: 0;
  transition: 0.9s;
  background: url("../../static/new/img/sign.png") no-repeat;
  background-position: center;
  background-size: 100%;
}
.singnSuccess {
  width: 80%;
  height: 8rem;
  background: url("../../static/new/img/qdSuccess.png") no-repeat center;
  background-size: 100%;
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 151;
}
.qdBtn {
  display: block;
  // margin: 0 atuo;
  background-size: 50%;
  font-size: 0.4rem;
  width: 5rem;
  // border-radius: 0.5rem;
  background: url(../../static/new/img/qdlook.png) no-repeat center;
  background-size: 100%;
  color: #fe5137;
  margin-left: 25%;
  width: 50%;
  line-height: 0.9rem;
  height: 1rem;
  margin-top: 0.1rem;
  border-radius: 1.5rem;
  text-align: center;
}
@import "~vux/src/styles/1px.less";
.flex-demo {
  text-align: center;
  color: #333333;
  background-color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
}
.housTypeImgScroll {
  width: 96%;
  margin-left: 2%;
  overflow: hidden;
  height: 4rem;
  .bigul {
    width: 100%;
    overflow-x: scroll;
    display: flex;
    height: 4rem;
    .bigli {
      margin-right: 0.25rem;
    }
  }
  .HousTypeTop {
    width: 3.28rem;
    height: 0.8rem;
    background: #ffffff;
    border-radius: 0 0 0.05rem 0.05rem;
    box-shadow: 0.05rem 0.05rem 0.05rem #f4f4f4;
    font-size: 0.24rem;
    color: #d80010;
    line-height: 0.8rem;
    text-align: center;
  }
  .HousTypeBottomImg {
    clear: left;
    text-align: center;
    width: 100%;
    height: 70%;
    padding-top: 0.6rem;
    box-sizing: border-box;
    position: relative;
    .filters {
      width: 3.28rem;
      height: 2.86rem;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 9;
      border-radius: 0.05rem 0.05rem 0 0;
    }
    .tag {
      height: 0.3rem;
      position: relative;
      z-index: 10;
      text-align: center;
      line-height: 0.2rem;
      span {
        display: inline-block;
        color: #5a5a5a;
        background: rgb(249, 249, 249);
        border-radius: 0.05rem;
        font-size: 0.22rem;
        margin-left: 0.1rem;
        height: 0.3rem;
        line-height: 0.32rem;
        padding: 0 0.1rem 0 0.1rem;
      }
    }
    img {
      width: 3.28rem;
      height: 2.86rem;
      border-radius: 0.05rem 0.05rem 0 0;
      position: absolute;
      left: 0;
      top: 0;
    }
    .buildName {
      width: 100%;
      position: relative;
      // left: 15%;
      // top: 0.5rem;
      font-size: 0.34rem;
      font-weight: bold;
      text-align: center;
      color: #fff;
      z-index: 10;
    }
  }
}
.addCustomer {
  width: 100%;
  background: #fff;
  height: 0.8rem;
  // margin-top: .3rem;
  line-height: 0.8rem;
  // border-bottom: 1px solid #e6e6e6;
}

.addCustomer span {
  display: block;
  float: left;
  height: 100%;
  line-height: 1.3rem;
}
.searchDiv {
  position: absolute;
  top: 0.2rem;
  width: 100%;
  height: 1.5rem; // background:red;
}

.selectOptions {
  width: 25%;
  background: #fff;
  height: 100%;
  font-size: 0.7rem;
  margin-left: 1rem;
  float: left;
}

.bottom-margin {
  margin-top: 0.3rem;
  padding-bottom: 80px;
	.earnestShow{
		width: 96%;
		margin-left:2%;
	    height: 4.01rem;
	    overflow-x: scroll;
	    .earnestShow-slide{
	    	width:17.4rem;
			height: 3.92rem;
	    	.earnestShow-item{
		    	width:3.28rem;
		    	height:3.92rem;
		    	background:#ffffff;
		    	margin-left: 0.25rem;
		    	float: left;
		    	position: relative;
		    	border-radius: 0.1rem;
	   			box-shadow: 5px 5px 5px #f4f4f4;
	   			.active5{
					width: 0.8rem;
					height:0.8rem;
					position: absolute;
					bottom: 1.2rem;
					left: 0.2rem;
					z-index: 2000;
					background: url("../../static/rent/house-list/active418.png") no-repeat;
					background-size: 100%;
				}
				.earnestShow-item-top{
				  	width: 100%;
				  	height: 100%;
		    		position: relative;
		    		z-index:2;
		    		.item-top{
		    			width:100%;
		    			height:2.86rem;
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
				  		height: 1.06rem;
				  		font-size: 0.24rem;
				  		color: #D7000F;
				  		text-align: center;
				  		line-height: 1.06rem;
				  		vertical-align:middle;
				  		.bottom-img{
				  			height: 0.24rem;
				  			display: inline-block;
				  			margin-left: 0.1rem;
				  		}
				  	}
				  	
				}
		    	.background-img{
		    		width: 3.28rem;
		    		height: 2.86rem;
		    		display: block;
		    		position: absolute;
		    		border-top-left-radius: 0.1rem;
		    		border-top-right-radius: 0.1rem;
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
		    		background: rgba(0,0,0,.1);
		    	}
		    }
	    }
	    .earnestShow-slide .earnestShow-item:nth-of-type(1){
	    	margin-left: 0 !important;
	    }
	}
}
.bankNum{
  width: 80%;
  height: 300px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 20%;
  z-index: 151;
  .bank{
    position: relative;
    width:100%;
    height: 100%;
    background: url("../../static/new/img/successImg.png") no-repeat top;
    background-size: 90%;
    .close{
      width:.75rem;
      height: .75rem;
      position: absolute;
      right: 0;
      top: -.5rem;
      background: url("../../static/new/img/close.png") no-repeat;
      background-size: 90%;
    }
    .chakan{
      position: absolute;
      width:50%;
      height: 1rem;
      background:url(../../static/new/img/firstbtnbj.png) no-repeat;
      background-size: 100% 100%;
      left: 25%;
      bottom: 0px;
      font-size: .35rem;
      line-height: 1rem;
      color: #ffffff;
      text-align: center;
    }
    .chakan:active{
      transform: translateY(5px);
    }
  }
  
}
</style>
<style>
.vux-swiper-desc {
  display: none;
}
</style>
