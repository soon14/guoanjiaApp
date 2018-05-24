<style lang="less" scoped>
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
  font-weight: bold;
}
.thirty {
  // 1rem = 16
  font-size: 0.47rem;
}
.twentySix {
  font-size: 0.405rem;
}
.twelve {
  font-size: 0.325rem;
}
.colorThree {
  color: #333;
}
.colorSix {
  color: #666;
}
.colorNine {
  color: #999;
}
.info {
  padding: 0.25rem 0 0.25rem 0.2rem;
  text-align: left;
  position: relative;
  .phone {
    position: absolute;
    bottom: 0.2rem;
    left: 4rem;
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
  height: 0.15rem;
  background: #f0f0f0;
}
.reference {
  padding: 0.25rem 0;
  margin: 0 0.5rem;
  border-bottom: 1px solid #f0f0f0;
}
.priceTrend {
  text-align: left;
  padding: 0.25rem 0.05rem 0.25rem;
  padding-left: 0.2rem;
  .TrendTitle {
    line-height: 1rem;
    border-bottom: 1px solid #f0f0f0;
  }
  #ecBox {
    width: 100%;
    height: 300px;
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
  }
}
</style>

<template>
       <div  class="fixContent" >
        <div :class="{'body_top':IosTop,'body_tops':AndroidTop,'wx_tops':wxTop}" >
        <!-- <swiper loop auto :show-dots='true' :list="imgList" :index="0" dots-position="center" height="4.7rem"></swiper> -->
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide :key='index' v-for="(item,index) in imgList"><img style="width:100%; height:4rem" :src='item.img' /></swiper-slide>
       </swiper>
        <div class="info">
            <div>
                <span class="overstriking thirty colorThree">{{ buildName }}</span>
                <span
                    class="tag"
                    v-for="(tag,index) in buildTag"
                    :key='index'>
                    {{ tag }}
                </span>
            </div>
            <div class="twentySix colorSix overstriking">{{ averagePrice }}元/㎡</div>
            <div class="twelve colorNine">交房时间：{{ launchTime }}</div>
            <div class="twelve colorNine">
                咨询电话：{{ consult }}
            </div>
            <a class="phone" :href="'tel:' + consult"><img src="../../../static/new/img/phone.png" alt="" style="width:.5rem"></a>
            <!-- <img class="service" src="../../static/img/service.png" alt="" style="width:1.3rem"> -->
        </div>
        <div class="interval"></div>
        <div class="reference">
            <span class="twentySix colorSix">参考均价</span>
            <div class="thirty colorThree">{{ referenceAverageprice }}元/㎡</div>
        </div>
        <div class="priceTrend">
            <p class="TrendTitle twentySix colorThree">价格及走势</p>
            <div id="ecBox">

            </div>
            <div class="twelve colorThree">
                近{{recentYears}}年：
                <span
                    :class="{
                        yearYes: classYearTab,
                        yearNo: !classYearTab
                    }"
                    @click="yearOne">
                    1年
                </span>
                <span
                    :class="{
                        yearNo: classYearTab,
                        yearYes: !classYearTab
                    }"
                    @click="yearThree">
                    3年
                </span>
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
      AndroidTop: false,
      IosTop: false,
      wxTop: false,
      swiperOption: {
        loop: true,
        autoplay: true
      },
      consult: "400-900-2225", // 咨询电话
      buildID: "",
      imgList: [],
      buildName: "",
      buildTag: "",
      averagePrice: "",
      launchTime: "", // 交房时间
      referenceAverageprice: "", // 参考均价
      ecOption: "",
      classYearTab: true,
      recentYears:"1",//近几年
      starts:30,
      ends:70,
    };
  },
  mounted() {
    this.buildID = this.$route.query.buildID;
    this.dataLoad();
    this.ecLoad();
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
    var that = this
    var timer = setInterval(function(){
   		that.setupdata()
   		if(that.ecOption.baseOption.dataZoom[0].end ==90){
   			clearInterval(timer)
   		}
    },150)
},
  created() {},
  methods: {
    dataLoad: function() {
      this.get(
        "palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=" + this.buildID,
        { interfaceType: "newHouse" }
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
        }
      });
    },
    ecLoad: function() {
    	var that = this
      // utils.ajaxFn(utils.prefix + "/api/v1/buildfloorbook/BuildBaseFloorBookController/buildPriceMovements","get",{buildid:this.params.id},priceTrendFn);
      this.get(
        "palmsaleapp/api/v1/buildfloorbook/BuildBaseFloorBookController/buildPriceMovements?buildid=" +
          this.buildID,
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
        var mI = null;
        currentMonth !== 12 ? (currentYear -= 1) : (currentMonth = 0);
        for (var i = currentMonth + 1; i <= currentMonth + 12; i++) {
          mI = i;
          if (i === 13 && currentMonth !== 12) {
            currentYear += 1;
          }
          if (i >= 13 && currentMonth !== 12) {
            mI -= 12;
          }
          oneYearX.push(currentYear + "-" + mI);
        }
				for(var p=0;p<15;p++){
					sanMonth.push(data.data["三年"]["区域走势"][p].month)
				}
				//console.log(sanMonth);
        if (data.data) {
          if (data.data["一年"]) {
            if (data.data["一年"]["房价走势"]) {
              var fjTrend = data.data["一年"]["房价走势"];
              for (var i = 0; i < fjTrend.length; i++) {
              		xqTrend.push(fjTrend[i].buildprice);
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
              var RASwitch = true;
              var invertedOrder = null;
              for (var k = 0; k < qyTrend.length; k++) {
                areaTrend.push(qyTrend[k].buildprice);
                invertedOrder = qyTrend.length - 1 - k;
                if (RASwitch && qyTrend[invertedOrder].buildprice != 0) {
                  RASwitch = false;
                  this.referenceAverageprice =
                    qyTrend[invertedOrder].buildprice;
                }
              }
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
					  function trimSpace(array){  
     					for(var i = 0 ;i<array.length;i++){  
		             if(array[i] == "" || typeof(array[i]) == "undefined"){  
                      array.splice(i,1);  
                      i= i-1;  
				          }  
						  }  
						   return array;  
						}  
						xqTrend	 = trimSpace(xqTrend)
						areaTrend = trimSpace(areaTrend)
						businessArea =	trimSpace(businessArea)
            var xqMax = Math.max.apply(null, xqTrend);
            var areaMax = Math.max.apply(null, areaTrend);
            var businessMax = Math.max.apply(null, businessArea);
            
            var xqMin = Math.min.apply(null, xqTrend);
            var areaMin = Math.min.apply(null, areaTrend);
            var businessMin = Math.min.apply(null, businessArea);
            
            if(businessMin =="-Infinity"){
            	 oneYearMin = getMin(xqMin,areaMin,businessMax);
            	 //console.log(xqMin,areaMin,businessMin);
            }else{
            	oneYearMin = getMin(xqMin,areaMin);
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

            if (data.data["三年"]["区域走势"]) {
              var qyTrend3 = data.data["三年"]["区域走势"];
              for (var i = 0; i < qyTrend3.length; i++) {
              		areaTrend3.push(qyTrend3[i].buildprice);
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
							var tempgetmin = 0;
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
            function trimSpace(array){  
     					for(var i = 0 ;i<array.length;i++){  
		             if(array[i] == "" || typeof(array[i]) == "undefined"){  
                      array.splice(i,1);  
                      i= i-1;  
				          }  
						  }  
						   return array;  
						} 
						
            xqTrend3	 = trimSpace(xqTrend3)
						areaTrend3 = trimSpace(areaTrend3)
						businessArea3 =	trimSpace(businessArea3)
            var xqMax3 = Math.max.apply(null, xqTrend3);
            var areaMax3 = Math.max.apply(null, areaTrend3);
            var businessMax3 = Math.min.apply(null, businessArea3);
            
            var xqMin3 = Math.min.apply(null, xqTrend3);
            var areaMin3 = Math.min.apply(null, areaTrend3);
            var businessMin3 = Math.min.apply(null, businessArea3);
            
            //console.log(xqMin3,areaMin3,businessMin3)
            if(businessMin3=="-Infinity"){
            	 threeYearMax = getMax(xqMax3,areaMax3);
            }else{
            	
            	 threeYearMin = getMin(xqMin3,areaMin3,businessMin3);
            }
            
            
            if(businessMax3 == "Infinity"){
            	threeYearMax = getMin(xqMin3,areaMin3);
            }else{
            	threeYearMax = getMin(xqMin3,areaMin3,businessMax3);
            }
            
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
            
            var xqMin3 = Math.min.apply(null, xqTrend3);
            var areaMin3 = Math.min.apply(null, areaTrend3);
            var businessMin3 = Math.min.apply(null, businessArea3);
            
            xqMax3 > areaMax3
              ? (threeYearMax = xqMax3)
              : (threeYearMax = areaMax3);
            (xqMin < areaMin)&& (xqMin!=0)&& (xqMin>0.1)? (threeYearMin = xqMin) : ((areaMin>0.1)?(threeYearMin = areaMin-0.1):(threeYearMin = areaMin+0.2));
            //console.log(threeYearMin)
          }
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
				            end: 60,
				            filterMode:"empty",
				        }
					    ],
            xAxis: {
              data: [],
              name: "",
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
                data: ["小区价格", "区域价格","商圈价格"]
              },
              xAxis: {
              	type : 'category',
                data: oneYearX,
                name: "月份",
                boundaryGap: false,
                nameGap: 5,
                interval: 1,
                minInterval: 1,
                axisTick: {
                  //坐标轴刻度相关设置
                  inside: true, //刻度朝内
                  alignWithLabel: true //刻度对齐
                },
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
                }
                //	        	axisLine:{
                //			          lineStyle:{
                //			              color:'yellow',
                //			          }
                //			    }
              },
              series: [
                {
                  name: "小区价格",
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
                  name: "区域价格",
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
		                name: '商圈价格',
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
                data: ["小区价格", "区域价格","商圈价格"]
              },
              xAxis: {
                data: sanMonth, //暂时定为三年，可能需要改为月份
                name: "月份",
                nameGap: 5,
                axisTick: {
                  inside: true, //刻度朝内
                  alignWithLabel: true
                }
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
                  name: "小区价格",
                  type: "line",
                  data: xqTrend3
                },
                {
                  name: "区域价格",
                  type: "line",
                  data: areaTrend3
                },{
                    name: '商圈价格',
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
      });
    },
    yearThree: function() {
    		this.ecOption.baseOption.timeline.currentIndex = 1;
	      var myChart = this.$echarts.init(document.getElementById("ecBox"));
	      myChart.setOption(this.ecOption);
	      this.classYearTab = false;
	      this.recentYears = "3"
    },
    yearOne: function() {
	      this.ecOption.baseOption.timeline.currentIndex = 0;
	      var myChart = this.$echarts.init(document.getElementById("ecBox"));
	      myChart.setOption(this.ecOption);
	      this.classYearTab = true;
	      this.recentYears = "1"
	      
    },
    setupdata:function(){
    	var myChart = this.$echarts.init(document.getElementById("ecBox"));
	    	console.log(this.ecOption.baseOption.dataZoom[0].start++)
	    	this.ecOption.baseOption.dataZoom[0].start = this.ecOption.baseOption.dataZoom[0].start+1;
	    	this.ecOption.baseOption.dataZoom[0].end = this.ecOption.baseOption.dataZoom[0].end+2
	    	myChart.setOption(this.ecOption)
    }
  }
};
</script>

