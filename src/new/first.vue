<template>
	<div class="fixContent">
      <IosorAndroid></IosorAndroid>
	    <div  style="padding-bottom:1.5rem">
	      <!-- 头部 -->
	        <!--轮播图  -->
	        <!-- <swipers></swipers> -->
          <!-- <div class="topTest"><span>国安家首页</span></div> -->
          <div class="topImgdiv">
            <!-- 搜索 -->
            <div class="topSearchInput" @click="toHouseList">
              <x-input class='topSearch' title="" placeholder="">
                <img style="width:20px;margin-left:.3rem;" slot="label" src='../../static/new/reversionimg/search.png' />
                <img @click.stop='mapSearchroom' style="width:20px;margin-right:.3rem;" slot="right" src='../../static/new/reversionimg/location.png' />
              </x-input>
            </div>
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide><img src='.././../static/new/reversionimg/newIndexTop.png' style="width:100%; height:4rem" /></swiper-slide>
                <swiper-slide><img src='.././../static/new/reversionimg/firstTop.png' style="width:100%; height:4rem" /></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <!--导航栏  -->
          <div class="navigation">
            <flexbox>
              <flexbox-item  @click.native="TabOneClick">
                <div class="flex-demo">
                  <img src='../../static/new/reversionimg/newHouse.png' />
                  <span>新房</span>
                </div>
              </flexbox-item>
              <flexbox-item @click.native="TabTwoClick">
                <div class="flex-demo">
                  <img src='../../static/new/reversionimg/rentHouse.png' />
                  <span>租房</span>
                </div>
              </flexbox-item>
              <flexbox-item @click.native="TabThreeClick">
                <div class="flex-demo">
                  <img src='../../static/new/reversionimg/housePictuere.png' />
                  <span>房价</span>
                </div>
              </flexbox-item>
              <flexbox-item @click.native="TabFourClcik">
                <div class="flex-demo">
                  <img src='../../static/new/reversionimg/Entrust.png' />
                  <span>业主委托</span>
                </div>
              </flexbox-item>
              <flexbox-item @click.native="TabFiveClcik">
                <div class="flex-demo">
                  <img src='../../static/new/reversionimg/lookCenter.png' />
                   <span>展示中心</span>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
          <!-- 横线 -->
          <div class="Division"></div>
          <!-- 全景看房 -->
          <div class='panorama'><span><span style="font-family:font01">360°</span>全景看房</span></div>
          <!-- 全景看房图片展示 -->
          <div class='panoramaImg' @click='PanoramicViewClick'></div>
	        <!-- <navigation></navigation> -->
          <!-- 精彩活动部分 -->
          <div class='panorama' style='margin-top:.4rem;'>
            <span>精彩活动</span>
            <span @click="ActiveListClick"></span>
          </div>
          <activity></activity>
          <!-- 横线 -->
          <div class="Division"></div>
           <!-- 租房部分 -->
	       	<div class='addCustomer'>
             <span>高品质服务公寓</span>
	            <span>国安家公寓</span>
              <span @click="apartmentClick"></span>
	        </div>
          <!-- 国安家公寓 -->
          <hometemplate></hometemplate>
          <!-- 分割线 -->
          <div style='margin-left:.3rem;margin-right:.3rem;height:1px;background:#ccc'></div>
	        <!--新房部分-->
	        <div class='addCustomer'>
              <span>超低价优选房源</span>
	            <span>热门楼盘</span>
	            <span @click="TabOneClick"></span>
	        </div>
	        <!-- 跳转链接 -->
	        <div class="housTypeImgScroll">
	            <ul class="bigul">
	                <li class="bigli" :key="index" v-for="(item,index) in list" @click="newHouseClick(item.id)">
	                    <div class="HousTypeBottomImg">
	                        <!-- <div class="filters"></div> -->
	                        <!-- <div class="buildName">{{item.buildname}}</div> -->
	                        <!-- <div class="tag">
	                          <span style="display:inline-block" :key="index1" v-for="(items,index1) in item.buildtagnameList">{{items}}</span>
	                        </div> -->
	                        <img :src='item.firstpicture'>
	                    </div>
	                    <div class="HousTypeTop">
                        <span style="margin-top:.8rem;font-size:.32rem;color:#666666;display:inline-block;width:100%;text-align:left;">{{item.buildname}}</span>
	                      <span style="height:.3rem;margin-top:10px;" v-if="item.averageprice !=='售价待定'">均价</span>
	                      <span style="height:.3rem;margin-top:10px;font-weight:600;">{{item.averageprice}}</span>
	                      <span style="height:.3rem;margin-top:10px;" v-if="item.averageprice !=='售价待定'">起</span>
	                    </div>
	                </li>
	            </ul>
	            </div>
	        <!-- 横线 -->
          <div class="Division"></div>
	        <!--宣传语 -->
          <div class="Propaganda"></div>
          <!-- 预约看房 -->
          <div class="Reservations">
            <div @click="yuyuekanfang">
              <span class="yuyueImg"></span>
              <span class="describe">
                <p>预约看房</p>
                <p>看好看准在住</p>
              </span>
            </div>
            <div></div>
            <div @click='searchHouse'>
              <span class="yuyueImg"></span>
              <span class="describe">
                <p>搜索房源</p>
                <p>省时省心放心</p>
              </span>
            </div>
          </div>
          <!-- 横线 -->
          <div class="Division"></div>

          <!-- 最新上架 -->
          <div class='panorama' style='margin-top:.4rem;'>
            <span>最新上架</span>
            <span @click="apartmentClick"></span>
          </div>
          <newuploade></newuploade>
	      
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
import IosorAndroid from './components/IosorAndroid'
import swipers from "./components/Swiper"; //引入轮播图组件
import downLoad from "../rent/components/home/downLoad";
import activity from '../rent/components/home/activity';//精彩活动
import hometemplate from '../rent/components/home/HomeTemplate';//国安家公寓
import newuploade from '../rent/components/home/newupload';//最新上架

// import{ViewBox} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    IosorAndroid,
    swipers,
    downLoad,
    activity,
    hometemplate,
    newuploade
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        disableOnInteraction:false,
        pagination: {
          el: ".swiper-pagination"
        }
      },
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
    /**
   * 新房改版部分
   * 
   */
  //  搜索框的点击事件
  toHouseList(){//点击搜索框跳转到搜索页面
      this.$router.push({path:"HouseList/HotSearch"})
  },
  // 地图找房的点击事件
    mapSearchroom(){
      this.$router.push({path:"/MapSearch"});
    },
  // 全景看房的点击事件
    PanoramicViewClick(){
      this.$router.push({path:"VrLook"});
    },
  // 新房的点击事件
    TabOneClick(){
      // this.$router.push('buildList');
      this.$router.push("newHouseIndex");
      this.$store.state.buttonGroup = 1;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = true;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
    },
   // 租房的点击事件  
    TabTwoClick(){
      this.$router.push("HomePage");
      this.$store.state.buttonGroup = 3;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = true;
    },
    // 房价的点击事件
    TabThreeClick(){
      this.$router.push("housingPrice");
    },
    // 业主委托的点击事件
    TabFourClcik(){
      this.$router.push("Delegation");
    },
    // 展示中心的点击事件
    TabFiveClcik(){
      let src = "https://beyond.3dnest.cn/play/?m=zhq_gaj_83";
      let title = "展示中心";
      this.$router.push({
        path: "framePage",
        query: { src: src, title: title }
      });
    },
    // 国安家公寓更多的点击事件
    apartmentClick(){
      this.$router.push({path:"/HouseList"});
    },
    // 更多精彩活动的点击事件
    ActiveListClick(){
       	this.$router.push({path:"/ActiveList"})
    },
    // 预约看房的点击事件
    yuyuekanfang() {
      this.$router.push("HouseList");
    },
    // 搜索房源的点击事件
    searchHouse(){
       this.$router.push({
        path: "/HouseList/HotSearch"
      });
    },
 
	//跳转到该房间详情
	toRoomDetail(item){
        this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}})
    },
   
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
                } else if (response.data[i].averageprice == "") {
                  response.data[i].averageprice = "售价待定";
                } else {
                  response.data[i].averageprice =
                    "¥" + response.data[i].averageprice + "元/㎡";
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
    
    // fetch("https://nt.guoanfamily.com/agenthouseCutomer/common/homePage",{
    // method: 'post',
    // headers: {
    //   "Content-Type": "application/json",
    //   "Authorization": ''
    // },
    // body: JSON.stringify({}),

    // }).then((res)=>{
    //     return res.json();
    // }).then((res)=>{
    //     console.log('125685895',res)
    // }).catch(function (e) {
    //     console.error(e);
    // })



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
@font-face{
	font-family:font01;
	src:url("../fonts/BEBASNEUE.otf");
}
.topTest{
  width:100%;
  height:.8rem;
  font-size:0.48rem;
  color:#000000;
  line-height:40px;
  text-align:left;
  font-weight:500;
  span{
     padding-left:.3rem;
  }
 
}
.topImgdiv{
  height:4rem;
  margin-top:.1rem;
  margin-left:.3rem;
  margin-right:.3rem;
  // background:url('.././../static/new/reversionimg/newIndexTop.png') no-repeat center;
  // background-size:100%;
  position:relative;
}
.topSearchInput{
  height: .8rem;
  border-radius: .08rem;
  background: #f5f5f5;
  width: 6.5rem;
  margin: auto;
  position: absolute;
  top: .25rem;
  left: 0.15rem;
  z-index:2;
}
.navigation{
  margin-top:.6rem;
  margin-left:.3rem;
  margin-right:.3rem;
  height:2rem;
  // background:red;
}
.Division{
  width:100%;
  height:.2rem;
  background:#eeeeee;
  margin-top:.2rem;
}
.panorama{
  margin-top:.64rem;
  width:100%;
  height:.8rem;
  font-size:0.38rem;
  color:#000000;
  line-height:38px;
  text-align:left;
  font-weight:500;
  span{
     padding-left:.3rem;
  }
  span:nth-child(2){
    display: block;
    float: right;
    height:35px;
    width:115px;
    margin-right:.3rem;
    margin-bottom:.1rem;
    background:url('../../static/new/reversionimg/more.png') no-repeat right;
    background-size:50%;
  }
}
.panoramaImg{
  height:2rem;
  margin-top:.1rem;
  margin-left:.3rem;
  margin-right:.3rem;
  background:url('.././../static/new/reversionimg/panoramaImg.png') no-repeat center;
  background-size:100%;
}
.Propaganda{
  margin:.6rem .3rem 0 .3rem;
  height:1.5rem;
  background:url('../../static/new/reversionimg/poster.png') no-repeat center;
  background-size:100%;
}
.Reservations{
  margin:0 .3rem 0 .3rem;
  height:1.84rem;
  // background:red;
  div{
    float:left;
  }
  div:nth-child(1){
    width:48%;
    margin-top:.27rem;
    height:1.3rem;
    // background:blue;
    .yuyueImg{
      margin-left:.35rem;
      display:inline-block;
      width:30%;
      height:100%;
      float:left;
      background:url('../../static/new/reversionimg/yuyue.png') no-repeat center;
      background-size:80%;
    }
    .describe{
      width:58%;
      height:100%;
      float:right;
      // background:yellow;
      p:nth-child(1){
        margin-top:.24rem;
        text-align:left;
        font-size:.30rem;
      }
      p:nth-child(2){
        text-align:left;
        font-size:.24rem;
      }
    }
  }
  div:nth-child(2){
    width:.02rem;
    height:0.64rem;
    background:#cccccc;
    margin:.6rem 5px auto;
  }
  div:nth-child(3){
    width:48%;
    margin-top:.27rem;
    height:1.3rem;
    // background:blue;
    float:right;
    .yuyueImg{
      margin-left:.35rem;
      display:inline-block;
      width:30%;
      height:100%;
      float:left;
      background:url('../../static/new/reversionimg/redSearch.png') no-repeat center;
      background-size:80%;
    }
    .describe{
      width:58%;
      height:100%;
      float:right;
      // background:yellow;
      p:nth-child(1){
        margin-top:.24rem;
        text-align:left;
        font-size:.30rem;
      }
      p:nth-child(2){
        text-align:left;
        font-size:.24rem;
      }
    }
  }
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
  img{
    width:80%;
    margin:0 auto;
  }
  span{
    font-size: .24rem;
    display: inherit;
    text-align: center;
    width: 100%;
    line-height:.7rem;
    color:#000000;
  }
}
.housTypeImgScroll {
  margin-left: .3rem;
  margin-right:.3rem;
  overflow: hidden;
  height: 3.5rem;
  .bigul {
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    height: 3.5rem;
    .bigli {
      margin-right: 0.2rem;
    }
  }
  .HousTypeTop {
    width: 2.5rem;
    height: 0.8rem;
    background: #ffffff;
    border-radius: 0 0 0.05rem 0.05rem;
    // box-shadow: 0.05rem 0.05rem 0.05rem #f4f4f4;
    font-size: 0.24rem;
    color: #d80010;
    line-height: 0.8rem;
    text-align: center;
    span{
      display:inline-block;
      float:left;
      line-height:30px;
      color:#000000;
      height:.3rem;
      font-size:.24rem;
      font-family:font01;
    }
  }
  .HousTypeBottomImg {
    clear: left;
    text-align: center;
    width: 100%;
    height: 50%;
    padding-top: 0.6rem;
    box-sizing: border-box;
    position: relative;
    img {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 0.1rem;
      position: absolute;
      left: 0;
      top: 0;
    }
    .buildName {
      width: 100%;
      position: relative;
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
  height: 1.3rem;
  // margin-top: .3rem;
  line-height: 0.8rem;
  margin-top:.6rem;
  // border-bottom: 1px solid #e6e6e6;
}
.addCustomer span:nth-child(1){
  display: block;
  height: .4rem;
  line-height:.7rem;
  color:#999999;
  margin-left: .3rem;
  margin-right: .3rem;
  font-size: .23rem;
  text-align: left;
}
.addCustomer span:nth-child(2) {
  display: block;
  float: left;
  line-height: 1.3rem;
  font-size:0.35rem;
  line-height:40px;
  margin-left:0.3rem;
  font-weight:500;
  color:#000000;
}
.addCustomer span:nth-child(3){ 
  display: block;
  float: right;
  height:35px;
  width:115px;
  margin-right:.3rem;
  margin-bottom:.1rem;
  background:url('../../static/new/reversionimg/more.png') no-repeat right;
  background-size:50%;
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
<style lang ='less'>
.swiper-pagination-bullet-active{
  background:#ffffff !important;
}
.vux-swiper-desc {
  display: none;
}
.topSearchInput{
  .topSearch{
    /* background: red; */
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding:0;
    font-size:.24rem;
    input{
      padding-left:10px;
      height:.8rem;
    }
  }
}
</style>
