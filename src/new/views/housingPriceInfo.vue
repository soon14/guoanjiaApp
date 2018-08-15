<style lang="less" scoped>
.housingPriceInfo{
  *{
    font-family: 'Source Han Sans CN';
  }
  .swiper_box{
    padding: 0.3rem 0.2rem 0.2rem;
    height: 4.4rem;

    .swipers{
      height: 100%;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
    }
  }
}
.body_top {
  margin-top: 60px;
}
.body_tops {
  margin-top: 60px;
}
.wx_tops {
  margin-top: 0;
}
.overstriking {
  &.buildName{
    font-size: 0.5rem;
    color: #000;
    height: 1rem;
    line-height: 1rem;

  }
}
.thirty {
  // 1rem = 16
  font-size: 0.4rem;
}
.twentySix {

  &.priceThree{
    font-family: 'Source Han Sans CN';
    font-size: 0.4rem;
    line-height: 0.8rem;
    color: #000;
  }
}
.twelve {
  font-size: 0.325rem;
  &.average_price{
    padding-left: 0.2rem;
    text-align: left;
    height: 1.2rem;
    line-height: 1.2rem;
    color: #000;
     font-size: 0.4rem;
     span{
       color: #000;
       font-size: 0.32rem;
      &.numbers{
        font-size: 0.4rem;
        font-family: "Century Gothic"
       }
     }
  }
}
.colorThree {
  color: #333;
  &.chouseBtn{
    height: 40px;
    width: 3.6rem;
    margin: 0.1rem auto;

  }
  span{
    height: 100%;
    width: 50%;
    float: left;
    background-color: #eee;
    line-height: 40px;
    text-align: center;
    color: #999;
    &.actived{
      color: #fff;
      background-color: #e45044;
    }
  }
}
.colorSix {
  color: #666;
}
.colorNine {
  color: #999;
  height: 0.8rem;
  line-height:0.8rem;
  span{
    color: #000;
    &.numbers{
      font-family: "Century Gothic"
    }
  }
}
.info {
  padding: 0.25rem 0 0.25rem 0.2rem;
  text-align: left;
  position: relative;
  .Tels{
    margin-top: 0.1rem;
    color: #e45044;
    font-size: 0.5rem;
    height: 0.8rem;
    font-family:  "Century Gothic";
    line-height: 0.8rem;
    position: relative;
  }
  .phone {
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: -0.3rem;
    right: 0.35rem;
  }
  .telInfo{
    color: #999;
    height: 0.4rem;
    font-size: 0.3rem;
    line-height: 0.4rem;
  }
  .service {
    position: absolute;
    bottom: 0.285rem;
    left: 6rem;
  }
  .tag {
    font-size: 0.25rem;
    display: inline-block;
    text-align: center;
    border: 1px solid #edd6ae;
    color: #d19729;
    vertical-align: middle;
    border-radius: 4px;
    margin-left: 0.25rem;
    padding: 0 0.1rem;
    // line-height: 1rem;
  }
}
.interval {
  width: 96%;
  margin: 0 auto;
  height: 0;
 border-bottom: 1px solid #f0f0f0;
}
.reference {
  padding: 0.25rem 0;
  margin: 0 0.5rem;
  border-bottom: 1px solid #f0f0f0;
}
.priceTrend {
  text-align: left;
  padding-left: 0.2rem;
  position: relative;
  .TrendTitle {
    line-height: 1rem;
  }
  .dabox{
  	width: 6rem;
  	overflow: hidden;
  	position: absolute!important;
    top: 2.3rem;
    left: 0.83rem;
    overflow: hidden;
    height: 300px;
    z-index: 100;
  }
  #ecBox {
    width: 100%;
    height: 300px;
    padding-top: 0.4rem
  }
  #ecBox1 {
    width: 200%;
    height: 300px;
    position: absolute;
    left: 0;
    z-index: 999;
    transition: all .2s
  }
  .yearYes {
    display: inline-block;
    width: 1.25rem;
    line-height: 0.7rem;
    box-shadow: 0 0 3px;
    border-radius: 0.5rem;
    text-align: center;
    margin-left: 0.5rem;
    color: #333;
  }
  .yearNo {
    display: inline-block;
    width: 1.25rem;
    line-height: 0.7rem;
    border-radius: 0.5rem;
    text-align: center;
    margin-left: 0.5rem;
    color: #666;
    background: #e6e6e6;
    -webkit-transform:transition3d(0,0,0)
  }
}
</style>

<template>
  <div  class="fixContent housingPriceInfo" >
    <div :class="{'body_top':IosTop,'body_tops':AndroidTop,'wx_tops':wxTop}" >
    <div class="swiper_box">
      <swiper class="swipers" :options="swiperOption" ref="mySwiper1">
        <swiper-slide :key='index' v-for="(item,index) in imgList">
          <img style="width:100%; height:100%" :src='item.img' />
        </swiper-slide>
        <div class="swiper-pagination swiper-head" slot="pagination"></div>
      </swiper>

    </div>

    <div class="info">

        <div class="overstriking buildName">
          {{ buildName }}
        </div>
        <div class="twelve colorNine">楼盘均价：<span class="numbers">{{ averagePrice }}元/平米</span></div>
        <div class="twelve colorNine">开盘时间：<span class="numbers">{{ openquotationtime }}</span></div>
        <div class="twelve colorNine">交房时间：<span class="numbers">{{ launchTime }}</span></div>

        <div class="twelve colorNine">楼盘地址：<span >{{ address }}</span></div>
        <div class="Tels">
          {{ consult }}
          <a class="phone" :href="'tel:' + consult"><img src="../../../static/new/img/redTel.png" alt="" style="width:1rem"></a>
        </div>
        <div class="telInfo">
          最新政策，更多优惠信息，请致电展示中心
        </div>
        <!-- <img class="service" src="../../static/img/service.png" alt="" style="width:1.3rem"> -->
    </div>
    <div class="interval"></div>
    <div class="twelve average_price">参考均价：<span class="numbers">{{ referenceAverageprice }}</span><span>元/㎡</span></div>
    <div class="interval"></div>
    <!-- <div class="reference">
        <span class="twentySix colorSix">参考均价</span>
        <div class="thirty colorThree">{{ referenceAverageprice }}元/㎡</div>
    </div> -->
    <div class="priceTrend">
        <p class="TrendTitle twentySix colorThree priceThree">价格及走势</p>
        <div class="twelve colorThree chouseBtn">
            <span
                :class="{actived:recentYears=='1'}"
                @click="yearOne">
                近1年
            </span>
            <span
              :class="{actived:recentYears=='3'}"
                @click="yearThree">
                近3年
            </span>
        </div>
        <div class="dabox">
            <div id="ecBox1" ref="davox">

            </div>
        </div>
        <div id="ecBox">

        </div>

    </div>
    </div>
  </div>
</template>

<script>
// 加上标签
export default {
  name: "housingPriceInfo",
  components: {},
  data() {
    return {
    	scroll: '',
      AndroidTop: false,
      IosTop: false,
      wxTop: false,
      swiperOption: {

        loop : true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-head",
          type: "bullets",
          clickable: true,
        }
      },
      consult: "400-900-2225", // 咨询电话
      buildID: "",
      imgList: [],
      buildName: "",
      buildTag: "",
      averagePrice: "",
      launchTime: "", // 交房时间
      address:"",//楼盘地址
      openquotationtime:"",//开盘时间
      referenceAverageprice: "", // 参考均价
      ecOption: "",
      classYearTab: true,
      recentYears:"1",//近几年
      starts:30,
      ends:70,
      cityname:'',
      province:'',
    };
  },
  mounted() {
    this.buildID = this.$route.query.buildID;
    this.dataLoad();

    if (!this.$store.state.showWxTitle) {
      if (!this.AndroidOrIos()) {
        this.AndroidTop = false;
        this.IosTop = true;
        this.wxTop = false;
      } else {
        this.AndroidTop = true;
        this.IosTop = false;
        this.wxTop = false;
      }
    } else {
      this.wxTop = true;
      this.AndroidTop = false;
      this.IosTop = false;
    }

    //缓冲运动
    var that = this
    function sport(obj,target){
			clearInterval(timer);
			//设置速度
			timer = setInterval(function(){
				let speed = (target - obj.offsetLeft) / 4;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				//检测停止(匀速运动的停止条件 )
				if(obj.offsetLeft <-200){
					clearInterval(timer);
				}else{
					obj.style.left = obj.offsetLeft - speed + "px";
				}
				//console.log("cur:" + obj.offsetLeft + "\ntarget:" + target + "\nspeed:" + speed);
			},100)
		}
    let timer = null;

    var oDabox = document.getElementById("ecBox1")
    var client = 0
    document.getElementsByClassName("fixContent")[0].onscroll = function(){
			console.log(oDabox.offsetTop)
		}
    	sport(oDabox,2);
			oDabox.ontouchstart = function(evt){
			 	let e = evt || window.event;
				var disXs = e.zrX;
//				var disY = e.offsetY;

				document.ontouchmove = function(evt){
					let e = evt || window.event;
					var disXe = e.zrX;
					var temppxre = disXs - disXe ;
					var tempsource = 20
					if(Math.abs(temppxre) > 15){
						tempsource = 10;
					}

					if(Math.abs(temppxre) > tempsource){
						disXs = disXe;
						tempsource = 20;
						var movexpram = parseInt(oDabox.style.left.replace("px","")) - temppxre;
						if(movexpram > 0){
							movexpram = -2;
						}
						if(movexpram < -230){
							movexpram = -230;
						}
						oDabox.style.left = movexpram + "px";
					}



//					oDabox.style.top = e.pageY - disY + "px";
				}
			}
	},
  created() {},
  methods: {
  	menu:function(){
	    this.scroll = document.body.scrollTop || document.documentElement.scrollTop;
	    console.log(this.scroll)
   	},
    dataLoad: function() {
      this.get(
        "palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=" + this.buildID,{ interfaceType: "newHouse" }
      ).then(response => {
        if (response && response.status == 200) {
          let bannerImgList = response.data.buildPictureList || [];
          //   console.log(bannerImgList)
          for (let i = 0; i < bannerImgList.length; i++) {
            if (bannerImgList[i].picturetype == 0) {
              this.imgList.push({
                img: this.concatFileUrl(bannerImgList[i].picturename)
              });
            }
          }
          this.buildName = response.data.buildname || "";
          this.buildTag = (response.data.buildtag || "").split(",");
          this.averagePrice = response.data.averageprice || "";
          this.launchTime = response.data.launchtime || "";
          this.openquotationtime = response.data.openquotationtime || "";
          this.address = response.data.address|| "";
          this.cityname = response.data.city || "";
          this.province = response.data.province || "";
        }
      }).then(()=>{
      	this.ecLoad();
      });

    },
    ecLoad: function() {
    	var that = this
      // utils.ajaxFn(utils.prefix + "/api/v1/buildfloorbook/BuildBaseFloorBookController/buildPriceMovements","get",{buildid:this.params.id},priceTrendFn);
      this.get("palmsaleapp/api/v1/buildfloorbook/BuildBaseFloorBookController/buildPriceMovements?buildid=" +this.buildID,
        { interfaceType: "newHouse" }
      ).then(data => {
        var xqTrend = []; //房价走势
        var areaTrend = []; //区域走势
        var businessArea = []; //商圈走势
        var xqTrend3 = []; //房价走势
        var areaTrend3 = []; //区域走势
        var businessArea3 = []; //商圈走势
        var oneYearMax = 0; //一年最大值
        var threeYearMax = 0; //三年最大值
				var oneYearMin = 0; //一年最小值
        var threeYearMin = 0; //三年最小值

        var oneYearX = [];
        var currentTime = new Date();
        var currentYear = currentTime.getFullYear();
        var currentMonth = currentTime.getMonth() + 1;
        var sanMonth = []
        console.log(this.cityname,this.province)

//      var mI = null;
//      currentMonth !== 12 ? (currentYear -= 1) : (currentMonth = 0);
//      for (var i = currentMonth + 1; i <= currentMonth + 12; i++) {
//        mI = i;
//        if (i === 13 && currentMonth !== 12) {
//          currentYear += 1;
//        }
//        if (i >= 13 && currentMonth !== 12) {
//          mI -= 12;
//        }
//        oneYearX.push(currentYear + "-" + mI);
//      }


				//原来
//				var sanslics = data.data["三年"]["区域走势"].reverse().slice(0,34)
//				var sanRevers = sanslics.reverse()
//				for(var p=0;p<data.data["三年"]["区域走势"].length;p++){
//					sanMonth.push(sanRevers[p].month)
//				}
				for(var p=0;p<data.data["三年"]["区域走势"].length;p++){
					sanMonth.push(data.data["三年"]["区域走势"][p].month)
				}
				//console.log(sanMonth);
				//console.log(sanMonth[sanMonth.length-1].substr(0,4)-3);
				//console.log(sanMonth[sanMonth.length-1].substr(4,));
				//console.log(sanMonth[sanMonth.length-1].substr(0,4)-3 + sanMonth[sanMonth.length-1].substr(4,))
//				var falseMoth = sanMonth[sanMonth.length-1].substr(0,4)-3 + sanMonth[sanMonth.length-1].substr(4,)
//
//				var falseArray = ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12", "2016-01", "2016-02", "2016-03","2016-04", "2016-05","2016-07", "2016-08", "2016-09", "2016-10", "2016-11", "2016-12"]
//				//console.log(falseMoth)
//				var falseArrays = falseArray.indexOf(falseMoth,0)
//				var arrays = falseArray.splice(falseArrays+2,)
//				//console.log(arrays)
//				//console.log("这是第几个"+falseArrays)
//				sanMonth = arrays.concat(sanMonth)
//				//console.log(sanMonth)
				var arrpushs = []
				let sanMonths = sanMonth.reverse()
						for(var q=0;q<sanMonth.length/3;q++){
							var ass = 3*q;
							arrpushs.push(sanMonths[ass])
						}
//						console.log(arrpushs)
						sanMonth = arrpushs.reverse()
						console.log(sanMonth)
        if (data.data) {
          if (data.data["一年"]) {
            if (data.data["一年"]["房价走势"]) {
              var fjTrend = data.data["一年"]["房价走势"];
              var RASwitch = true;
              var invertedOrder = null;
              for (var i = 0; i < fjTrend.length; i++) {
              		xqTrend.push(fjTrend[i].buildprice);
              		invertedOrder = fjTrend.length - 1 - i;
                	if (RASwitch && fjTrend[invertedOrder].buildprice != 0) {
                  RASwitch = false;
                  this.referenceAverageprice =
                    fjTrend[invertedOrder].buildprice;
                }
              }
            }

            if (data.data["一年"]["商圈走势"]) {
              var fjTrends = data.data["一年"]["商圈走势"];
              for (var i = 0; i < fjTrends.length; i++) {
              		businessArea.push(fjTrends[i].buildprice);

              }
            }
            if (data.data["一年"]["区域走势"]) {
              var qyTrend = data.data["一年"]["区域走势"];
              for (var k = 0; k < qyTrend.length; k++) {
                areaTrend.push(qyTrend[k].buildprice);
                oneYearX.push(qyTrend[k].month)
              }
              oneYearX.push("")
            }
            var xqMax = Math.max.apply(null, xqTrend);
            var areaMax = Math.max.apply(null, areaTrend);

            var temp = 10000;
            if (xqMax.length > 6 || areaMax.length > 6) {
              temp = 1000000;
            }
            for (var i = 0; i < xqTrend.length; i++) {
            	if(xqTrend[i] =='0'){
            		xqTrend[i] = ""
            	}else{
            		 xqTrend[i] = xqTrend[i] / temp;
            	}
            }
            for (var i = 0; i < areaTrend.length; i++) {
            	if(areaTrend[i] == '0'){
            		areaTrend[i] =""
            	}else{
            		areaTrend[i] = areaTrend[i] / temp;
            	}
            }
            for (var i = 0; i < businessArea.length; i++) {
            	if(businessArea[i] == '0'){
            		businessArea[i] =""
            	}else{
            		businessArea[i] = businessArea[i] / temp;
            	}
            }
            function getMax(a,b,c)
						{
							var tempgetmax = 0;
							if(a>0){
								tempgetmax = tempgetmax>a?tempgetmax:a
							}
							if(b>0){
								tempgetmax = tempgetmax>b?tempgetmax:b
							}
							if(c>0){
								tempgetmax = tempgetmax>c?tempgetmax:c
							}
						return tempgetmax;

						}
						function getMin(a,b,c)
						{

							//console.log(a,b,c)
							if(a>0){
								var tempgetmin = a;
							}else if(b>0){
								var tempgetmin = b;
							}else if(c>0){
								var tempgetmin = c;
							}else{
								var tempgetmin = 0.4;
							}

							if(a>0){
								tempgetmin = tempgetmin<a?tempgetmin:a
							}
							if(b>0){
								tempgetmin = tempgetmin<b?tempgetmin:b
							}
							if(c>0){
								tempgetmin = tempgetmin<c?tempgetmin:c
							}

						return tempgetmin;
						}

						function delezero(arrs){
					  	var arrNew  =[]
					  	for(var  i in arrs){
									if(!(arrs[i] == "" || typeof(arrs[i]) == "undefined")){
									arrNew.push(arrs[i]);
								}
							}
								return arrNew
					  }

						//areaTrend = trimSpace(areaTrend)
						//businessArea =	trimSpace(businessArea)
            var xqMax = Math.max.apply(null, delezero(xqTrend));
            var areaMax = Math.max.apply(null, delezero(areaTrend));
            var businessMax = Math.max.apply(null, delezero(businessArea));

            var xqMin = Math.min.apply(null, delezero(xqTrend));
            var areaMin = Math.min.apply(null, delezero(areaTrend));
            var businessMin = Math.min.apply(null,delezero(businessArea));

            if(businessMin =="-Infinity"){
            	 oneYearMin = getMin(xqMin,areaMin,businessMax);
            	 //console.log(xqMin,areaMin,businessMin);
            }else{
            	oneYearMin = getMin(xqMin,areaMin,businessMin);
            	//console.log(xqMin,areaMin);
              //console.log(oneYearMin);

            }


            if(businessMax == "Infinity"){
            	oneYearMax = getMax(xqMax,areaMax,businessMax);
            	//console.log(xqMax,areaMax,businessMax);
            }else{
            	//console.log(xqMax,areaMax);
            	oneYearMax = getMax(xqMax,areaMax);
            	//console.log(oneYearMax);
            }


            //console.log(oneYearMin);
            //xqMin < areaMin ? (oneYearMin = xqMin) : (oneYearMin = areaMin);

            var temp1 = Math.floor(oneYearMin*10-1)/10;
            var temp2 = Math.round(((Math.round(oneYearMax*10)-Math.round(Math.floor(oneYearMin*10-1)))+2)/3)*3/10 + (Math.floor(oneYearMin*10-1)/10);
            //console.log(temp1);
            //console.log(temp2);

          }
          if (data.data["三年"]) {
            /* for (let i = 0; i < 12; i++) {
                            xqTrend3.push(0)
                            areaTrend3.push(0)
                        } */
   					if (data.data["三年"]["商圈走势"]) {
              var fjTrendsz = data.data["三年"]["商圈走势"];
              for (var i = 0; i < fjTrendsz.length; i++) {
              		businessArea3.push(fjTrendsz[i].buildprice);
              }
            }
            if (data.data["三年"]["房价走势"]) {
              var fjTrend3 = data.data["三年"]["房价走势"];
              for (var i = 0; i < fjTrend3.length; i++) {
              		xqTrend3.push(fjTrend3[i].buildprice);
              }
            }
						//console.log(xqTrend3)
//						var arrpush = []
//						for(var q=0;q<xqTrend3.length/3;q++){
//							var ass = 3*q;
//							arrpush.push(xqTrend3[ass])
//						}
						//console.log(arrpush)
//						xqTrend3 = arrpush
						var reversexqTrend3 = xqTrend3.reverse()
						var arrpush = []
						for(var q=0;q<reversexqTrend3.length/3;q++){
							var ass = 3*q;
							arrpush.push(reversexqTrend3[ass])
						}
						//console.log(arrpush)
						xqTrend3 = arrpush.reverse()
						//console.log(xqTrend3)
						var splitAttr = []
						for(var op=0;op<sanMonth.length;op++){
							splitAttr.push(sanMonth[op].substr(0,4))
						}
						//console.log(splitAttr.lastIndexOf("2016"))
						var quantity = splitAttr.lastIndexOf("2015")
						for(var po=0;po<quantity+1;po++){
							//xqTrend3.unshift("0")
						}

            if (data.data["三年"]["区域走势"]) {
              var qyTrend3 = data.data["三年"]["区域走势"];
              for (var i = 0; i < qyTrend3.length; i++) {
              		areaTrend3.push(qyTrend3[i].buildprice);
              }
              sanMonth.push("")
            }
            //区域走势分3段
            var reversexqTrend3 = areaTrend3.reverse()
						var arrpushz = []
						for(var qw=0;qw<reversexqTrend3.length/3;qw++){
							var assw = 3*qw;
							arrpushz.push(reversexqTrend3[assw])
						}
						//console.log(arrpushz)
						areaTrend3 = arrpushz.reverse()
						//console.log(areaTrend3)
						for(var pow=0;pow<quantity+1;pow++){
							//areaTrend3.unshift("0")
						}
						//商圈走势分3段
						var reversebusinessArea3 = businessArea3.reverse()
						var arrpushe = []
						for(var qe=0;qe<reversebusinessArea3.length/3;qe++){
							var asse = 3*qe;
							arrpushe.push(reversebusinessArea3[asse])
						}
						//console.log(arrpushz)
						businessArea3 = arrpushe.reverse()
						//console.log(businessArea3)
						for(var poe=0;poe<quantity+1;poe++){
							//businessArea3.unshift("0")
						}

            function getMax(a,b,c)
						{
							var tempgetmax = 0;
							if(a>0){
								tempgetmax = tempgetmax>a?tempgetmax:a
							}
							if(b>0){
								tempgetmax = tempgetmax>b?tempgetmax:b
							}
							if(c>0){
								tempgetmax = tempgetmax>c?tempgetmax:c
							}
						return tempgetmax;

						}
						function getMin(a,b,c)
						{
							var tempgetmin = a;
							if(a>0){
								tempgetmin = tempgetmin<a?tempgetmin:a
							}
							if(b>0){
								tempgetmin = tempgetmin<b?tempgetmin:b
							}
							if(c>0){
								tempgetmin = tempgetmin<c?tempgetmin:c
							}
						return tempgetmin;
						}
						function delezero(arrs){
					  	var arrNew  =[]
					  	for(var  i in arrs){
									if(!(arrs[i] == "" || typeof(arrs[i]) == "undefined")){
									arrNew.push(arrs[i]);
								}
							}
								return arrNew
					  }

            var xqMax3 = Math.max.apply(null, delezero(xqTrend3));
            var areaMax3 = Math.max.apply(null, delezero(areaTrend3));
            var businessMax3 = Math.min.apply(null, delezero(businessArea3));

            var xqMin3 = Math.min.apply(null, delezero(xqTrend3));
            var areaMin3 = Math.min.apply(null, delezero(areaTrend3));
            var businessMin3 = Math.min.apply(null, delezero(businessArea3));

            //console.log(xqMin3,areaMin3,businessMin3)
//          if(businessMin3=="-Infinity"){
//          	 threeYearMin = getMax(xqMin3,areaMin3);
//          }else{
//
//          	 threeYearMin = getMin(xqMin3,areaMin3,businessMin3);
//          }
//
//
//          if(businessMax3 == "Infinity"){
//          	threeYearMax = getMin(xqMin3,areaMin3);
//          }else{
//          	threeYearMax = getMin(xqMin3,areaMin3,businessMax3);
//          }

            var temp3 = 10000;
            if (xqMax3.length > 6 || areaMax3.length > 6) {
              temp3 = 1000000;
            }
            for (var i = 0; i < xqTrend3.length; i++) {
            	if(xqTrend3[i] == 0){
            		 xqTrend3[i] = ""
            	}else{
            		 xqTrend3[i] = xqTrend3[i] / temp;
            	}
            }
            for (var i = 0; i < areaTrend3.length; i++) {

              if(areaTrend3[i] == 0){
            		 areaTrend3[i] = ""
            	}else{
            		 areaTrend3[i] = areaTrend3[i] / temp;
            	}
            }
            for (var i = 0; i < businessArea3.length; i++) {

              if(businessArea3[i] == 0){
            		 businessArea3[i] = ""
            	}else{
            		 businessArea3[i] = businessArea3[i] / temp;
            	}
            }
            var xqMax3 = Math.max.apply(null, xqTrend3);
            var areaMax3 = Math.max.apply(null, areaTrend3);
            var businessMax3 = Math.min.apply(null, businessArea3);

//          var xqMin3 = Math.min.apply(null, xqTrend3);
//          var areaMin3 = Math.min.apply(null, areaTrend3);
//          var businessMin3 = Math.min.apply(null, businessArea3);
//
            var xqMin3 = getminvalue(xqTrend3);
            var areaMin3 = getminvalue(areaTrend3);
            var businessMin3 = getminvalue(businessArea3);
            var city
            xqMax3 > areaMax3
              ? (threeYearMax = xqMax3)
              : (threeYearMax = areaMax3);

            threeYearMin = 0;
            if(xqMin3 > 0){
            	threeYearMin = xqMin3;
            }
            if(areaMin3 > 0){
            	if(threeYearMin > 0){
            		threeYearMin = areaMin3<threeYearMin?areaMin3:threeYearMin;
            	}else{
            		threeYearMin = areaMin3;
            	}
            }
            if(businessMin3 > 0){
            	if(threeYearMin > 0){
            		threeYearMin = businessMin3<threeYearMin?businessMin3:threeYearMin;
            	}else{
            		threeYearMin = businessMin3;
            	}
            }
          }
        }
        //獲取數組的最小值
        function getminvalue(listgetminstr){
        	var minval = 0;
        	for(var rzi= 0; rzi<listgetminstr.length; rzi++){
        		if(listgetminstr[rzi] > 0 ){
        			var tempvalzri = parseFloat(listgetminstr[rzi]);
        			if(minval > 0 && tempvalzri > 0){
        				minval = minval< tempvalzri? minval:tempvalzri;
        			}else if (tempvalzri > 0){
        				minval = tempvalzri;
        			}
        		}
        	}
        	return minval;
        }
        function toDecimal2(x) {
          var f = parseFloat(x);
          if (isNaN(f)) {
            return false;
          }
          var f = Math.round(x * 10) / 10;
          var s = f.toString();
          var rs = s.indexOf(".");
          if (rs < 0) {
            rs = s.length;
            s += ".";
          }
          while (s.length <= rs + 1) {
            s += "0";
          }
          return Number(s);
        }

//      function exactDivision(number, copies) {
//        var number = number || 0;
//        var copies = copies || 0;
//        var single = number / copies;
//        var remainder = number % single;
//        if (remainder !== 0) {
//          number += remainder;
//        }
//        return number;
//      }
//      oneYearMax = toDecimal2(exactDivision(oneYearMax, 3));
//				console.log(oneYearMax)
//      threeYearMax = toDecimal2(exactDivision(threeYearMax, 3));
//      var yMaxLength = toDecimal2(oneYearMax / 3);
//      var oneYu = toDecimal2(Math.abs(oneYearMax - yMaxLength * 3));
//
//      oneYearMax = oneYearMax + oneYu;
//      // oneYearMax = oneYearMax - toDecimal2(oneYearMax-(yMaxLength * 3));
//      var yMaxLength3 = toDecimal2(threeYearMax / 3);
//      threeYearMax =
//        threeYearMax + toDecimal2(Math.abs(threeYearMax - yMaxLength3 * 3)); // 这列也加上了绝对值,暂时无错
        this.ecOption = {
          baseOption: {
            //共用配置写在baseOption里面，变量写在options里面  每一个对象是一组数据。可以认为options里面的数据会将baseOption里面的数据覆盖,且options里面的每一组配置都要一致，可以默认值但必须要有配置。
            timeline: {
              axisType: "category", //类目轴
              show: false,
              data: ["1年", "3年"],
              currentIndex: 0 //显示第几个
            },

            dataZoom: [
				        //可波动
				        {
				            type: 'inside',
				            realtime: true,
				            start: 0,
				            end: 30,
				            filterMode:"empty",
				           interval:5
				        }
					    ],
            xAxis: {
              data: [],
              name: "",
              interval:5
            }
            /*yAxis: {
        //		        	data:["1","2","3","4","5","6","7","8","9","10","11","12"],//['2','4','6','8','10','12'],
                            name:"成交参考单价(万元)",
                            nameGap:10,//轴标题距离
                            axisTick:{
                                inside:true,//刻度朝内
                                alignWithLabel:true//刻度对齐
                            },
                            type:'value',
                            minInterval: 4,//坐标轴最小间隔大小。
                            interval:4,
                            gridIndex: 0,
                            min: 0,
                            max: 12
            //	        	axisLine:{
            //			          lineStyle:{
            //			              color:'yellow',
            //			          }
            //			    }
                        }*/
          },
          options: [
            {
              title: {
                text: ""
              },
              tooltip: {
					        trigger: 'axis',
					    },
              grid: {
                left: 50
              },
              legend: {
                //图例,先去掉商圈价格
                data: ["本小区", this.cityname,this.province]
              },
              grid:{
              	left:30
              },
              xAxis: {
              	show:false,
              },
              yAxis: {
                //data:[(oneYearMax/3).toFixed(2),(oneYearMax/3*2).toFixed(2),(oneYearMax).toFixed(2)],
                name: "成交参考单价(万元/㎡)",
                nameGap: 10, //轴标题距离
                axisTick: {
                  inside: true, //刻度朝内
                  alignWithLabel: true //刻度对齐
                },
                type: "value",
                //				            minInterval: 3,//坐标轴最小间隔大小。
                interval: Math.round(((Math.round(oneYearMax*10)-Math.round(Math.floor(oneYearMin*10-1)))+2)/3)/10,
                //				            gridIndex: 0, Math.round(oneYearMax*10)
                min: Math.floor(oneYearMin*10-1)/10,
                max: Math.round(((Math.round(oneYearMax*10)-Math.round(Math.floor(oneYearMin*10-1)))+2)/3)*3/10 + (Math.floor(oneYearMin*10-1)/10),
                axisLabel: {
                  formatter: function(value, index) {
                    return toDecimal2(value);
                  }
                },

                //	        	axisLine:{
                //			          lineStyle:{
                //			              color:'yellow',
                //			          }
                //			    }
              },
              series: [
                {
                  name: "本小区",
                  type: "line",
                  symbolSize: 6,
                  smooth: true,
                  itemStyle :
                  {
		                normal : {
		                    lineStyle:{
		                       width:1,
		                    }
		                }
		           		},
                },
                {
                  name: this.province,
                  type: "line",
                  symbolSize: 6,
                  smooth: true,
                  itemStyle :
                  {
		                normal : {
		                    lineStyle:{
		                       width: 1,
		                    }
		                }
		           		},
                } ,{
		                name: this.cityname,
		                type: "line",
	                  symbolSize: 6,
	                  smooth: true,
	                  itemStyle :
                  {
		                normal : {
		                    lineStyle:{
		                       width: 1,
		                    }
		                }
		           		},
                   }
              ],
              textStyle: {
                //能控制全局的字体
                color: "#000",
                fontSize: 10
              }
            },
            {
              title: {
                text: ""
              },
              tooltip: { trigger: 'axis',},
              legend: {
                //先去掉商圈价格
                data: ["本小区", this.cityname,this.province]
              },
              xAxis: {
                data: sanMonth, //暂时定为三年，可能需要改为月份
                nameGap: 5,
                axisTick: {
                  inside: true, //刻度朝内
                  alignWithLabel: true
                },
                 interval:5
              },
              yAxis: {
               	//data:[(oneYearMax/3).toFixed(2),(oneYearMax/3*2).toFixed(2),(oneYearMax).toFixed(2)],
                name: "成交参考单价(万元/㎡)",
                nameGap: 10, //轴标题距离
                axisTick: {
                  inside: true, //刻度朝内
                  alignWithLabel: true //刻度对齐
                },
                type: "value",
                //				            minInterval: 3,//坐标轴最小间隔大小。
                interval:  Math.round(((Math.round(threeYearMax*10)-Math.round(Math.floor(threeYearMin*10-1)))+2)/3)/10,
                //				            gridIndex: 0,
                min: Math.floor(threeYearMin*10-1)/10,
                max: Math.round(((Math.round(threeYearMax*10)-Math.round(Math.floor(threeYearMin*10-1)))+2)/3)*3/10 + (Math.floor(threeYearMin*10-1)/10),
                axisLabel: {
                  formatter: function(value, index) {
                    return toDecimal2(value);
                  }
                }
                //	        	axisLine:{
                //			          lineStyle:{
                //			              color:'yellow',
                //			          }
                //			    }
              },
              series: [
                {
                  name: "本小区",
                  type: "line",
                },
                {
                  name: this.province,
                  type: "line",
                },{
                    name: this.cityname,
                    type: 'line',
                }
              ],
              textStyle: {
                color: "#000",
                fontSize: 10
              }
            }
          ]
        };



        //上层图
      this.ecOption1 = {
          baseOption: {
            //共用配置写在baseOption里面，变量写在options里面  每一个对象是一组数据。可以认为options里面的数据会将baseOption里面的数据覆盖,且options里面的每一组配置都要一致，可以默认值但必须要有配置。
            timeline: {
              axisType: "category", //类目轴
              show: false,
              data: ["1年", "3年"],
              currentIndex: 0 //显示第几个
            },



            /*yAxis: {
        //		        	data:["1","2","3","4","5","6","7","8","9","10","11","12"],//['2','4','6','8','10','12'],
                            name:"成交参考单价(万元)",
                            nameGap:10,//轴标题距离
                            axisTick:{
                                inside:true,//刻度朝内
                                alignWithLabel:true//刻度对齐
                            },
                            type:'value',
                            minInterval: 4,//坐标轴最小间隔大小。
                            interval:4,
                            gridIndex: 0,
                            min: 0,
                            max: 12
            //	        	axisLine:{
            //			          lineStyle:{
            //			              color:'yellow',
            //			          }
            //			    }
                        }*/
          },
          options: [
            {
              title: {
                text: ""
              },
              tooltip: {
					        trigger: 'axis',

					    },
              grid: {
                left: 50
              },
              legend: {
                //图例,先去掉商圈价格
              },
              grid:{
              	left:3
              },
              xAxis: {
              	type : 'category',
                data: oneYearX,
                boundaryGap: false,
                nameGap: 5,
                interval: 7,
                minInterval: 1,
                axisTick: {
                  //坐标轴刻度相关设置
                  inside: true, //刻度朝内
                  alignWithLabel: true //刻度对齐
                },
                axisLabel:{interval:0,rotate:-45,fontSize:9},
                interval:5
              },
              yAxis: {
              	show:false,
                //data:[(oneYearMax/3).toFixed(2),(oneYearMax/3*2).toFixed(2),(oneYearMax).toFixed(2)],
                name: "成交参考单价(万元/㎡)",
                nameGap: 10, //轴标题距离
                axisTick: {
                  inside: true, //刻度朝内
                  alignWithLabel: true //刻度对齐
                },
                type: "value",
                //				            minInterval: 3,//坐标轴最小间隔大小。
                interval: Math.round(((Math.round(oneYearMax*10)-Math.round(Math.floor(oneYearMin*10-1)))+2)/3)/10,
                //				            gridIndex: 0, Math.round(oneYearMax*10)
                min: Math.floor(oneYearMin*10-1)/10,
                max: Math.round(((Math.round(oneYearMax*10)-Math.round(Math.floor(oneYearMin*10-1)))+2)/3)*3/10 + (Math.floor(oneYearMin*10-1)/10),
                axisLabel: {
                  formatter: function(value, index) {
                    return toDecimal2(value);
                  }
                },

                //	        	axisLine:{
                //			          lineStyle:{
                //			              color:'yellow',
                //			          }
                //			    }
              },
              series: [
                {
                  name: "本小区",
                  type: "line",
                  symbolSize: 6,
                  data: xqTrend,
                  smooth: true,
                  itemStyle :
                  {
		                normal : {
		                    lineStyle:{
		                       width:1,
		                    }
		                }
		           		},
                },
                {
                  name: this.province,
                  type: "line",
                  symbolSize: 6,
                  data: areaTrend,
                  smooth: true,
                  itemStyle :
                  {
		                normal : {
		                    lineStyle:{
		                       width: 1,
		                    }
		                }
		           		},
                } ,{
		                name: this.cityname,
		                type: "line",
	                  symbolSize: 6,
	                  data: businessArea,
	                  smooth: true,
	                  itemStyle :
                  {
		                normal : {
		                    lineStyle:{
		                       width: 1,
		                    }
		                }
		           		},
                   }
              ],
              textStyle: {
                //能控制全局的字体
                color: "#000",
                fontSize: 10
              }
            },
            {
              title: {
                text: ""
              },
              tooltip: { trigger: 'axis',},
              legend: {
                //先去掉商圈价格
              },
              xAxis: {
                data: sanMonth, //暂时定为三年，可能需要改为月份
                nameGap: 5,
                axisTick: {
                  inside: true, //刻度朝内
                  alignWithLabel: true
                },
                 interval:5
              },
              yAxis: {
               	//data:[(oneYearMax/3).toFixed(2),(oneYearMax/3*2).toFixed(2),(oneYearMax).toFixed(2)],
                name: "成交参考单价(万元/㎡)",
                nameGap: 10, //轴标题距离
                axisTick: {
                  inside: true, //刻度朝内
                  alignWithLabel: true //刻度对齐
                },
                type: "value",
                //				            minInterval: 3,//坐标轴最小间隔大小。
                interval: Math.round(((Math.round(threeYearMax*10)-Math.round(Math.floor(threeYearMin*10-1)))+2)/3)/10,
                //				            gridIndex: 0,
                min: Math.floor(threeYearMin*10-1)/10,
                max: Math.round(((Math.round(threeYearMax*10)-Math.round(Math.floor(threeYearMin*10-1)))+2)/3)*3/10 + (Math.floor(threeYearMin*10-1)/10),
                axisLabel: {
                  formatter: function(value, index) {
                    return toDecimal2(value);
                  }
                }
                //	        	axisLine:{
                //			          lineStyle:{
                //			              color:'yellow',
                //			          }
                //			    }
              },
              series: [
                {
                  name: "本小区",
                  type: "line",
                  data: xqTrend3
                },
                {
                   name: this.province,
                  type: "line",
                  data: areaTrend3
                },{
                    name: this.cityname,
                    type: 'line',
                    data: businessArea3
                }
              ],
              textStyle: {
                color: "#000",
                fontSize: 10
              }
            }
          ]
        };


        var myChart = this.$echarts.init(document.getElementById("ecBox"));
        myChart.setOption(this.ecOption);

        var myChart1 = this.$echarts.init(document.getElementById("ecBox1"));
        myChart1.setOption(this.ecOption1);
      });
    },
    yearThree: function() {
    		this.ecOption.baseOption.timeline.currentIndex = 1;
    		this.ecOption1.baseOption.timeline.currentIndex = 1;
	      var myChart = this.$echarts.init(document.getElementById("ecBox"));
	      myChart.setOption(this.ecOption);

	      var myChart1 = this.$echarts.init(document.getElementById("ecBox1"));
	      myChart1.setOption(this.ecOption1);

	      this.classYearTab = false;
	      this.recentYears = "3"
    },
    yearOne: function() {
	      this.ecOption.baseOption.timeline.currentIndex = 0;
	      this.ecOption1.baseOption.timeline.currentIndex = 0;
	      var myChart = this.$echarts.init(document.getElementById("ecBox"));
	      myChart.setOption(this.ecOption);

	      var myChart1 = this.$echarts.init(document.getElementById("ecBox1"));
	      myChart1.setOption(this.ecOption1);
	      this.classYearTab = true;
	      this.recentYears = "1"

    },
    setupdata:function(){
    	var myChart = this.$echarts.init(document.getElementById("ecBox"));
	    	//console.log(this.ecOption.baseOption.dataZoom[0].start++)
	    	this.ecOption.baseOption.dataZoom[0].start = this.ecOption.baseOption.dataZoom[0].start+2;
	    	this.ecOption.baseOption.dataZoom[0].end = this.ecOption.baseOption.dataZoom[0].end+2
	    	myChart.setOption(this.ecOption)
    }
  }
};
</script>

