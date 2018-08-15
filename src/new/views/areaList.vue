<template>
    <div class="fixContent" >
      <!-- <div :class="{'topSwiper':IosTop,'topSwiper1':AndroidTop,'topSwiper2':WxTop}"> -->
        <div class="arealist" :class="{'topSwiper':IosTop,'topSwiper1':AndroidTop,'topSwiper2':WxTop}">
            <div  class="areatabs" style="margin-top:.1rem;padding-left:3rem">
              <div class="redbor"></div>
                <!-- <tab :line-width=2 active-color='#e34b3e' default-color="#999" v-model="index">
                    <tab-item @on-item-click='tabClick(item, index)' class="vux-center01"  v-for="(item, index) in listOne" :key="index">{{item}}</tab-item>
                </tab> -->
                <swiper :options="swiperOption01" ref="mySwiper01">
                  <!-- @click.native='tabClick(item, i)' -->
                    <swiper-slide v-for="(item, i) in listOne" :key="i">
                        <span class="swipetab vux-center01">
                                {{item}}
                        </span>
                    </swiper-slide>
                </swiper>
            </div>
                <div>
                    <div class="areacontent">
                    <div class="areatitle">{{areaTitle}}</div>
                    <div class="englishing">{{listTwo[desc].Ename}}</div>
                    <div class="remark">{{listTwo[desc].desc}}</div>
                </div>
                <div class='slideImg'>
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide @click.native='slideImgClickFn(item)' v-for="(item, i) in buildList" :key="i">
                            <div class="swipediv" style="width:5.48rem;height:4.1rem;">
                                <div class="swipeimg">
                                     <img style="width:100%;height:100%;border-radius:.1rem;" :src='item.firstpicture'  alt=""/>
                                </div>
                                <div class="buildEngName" v-if="item.englishName">{{item.englishName}}</div>
                                <div class="buildName">{{item.buildname}} <span></span> </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
import { Tab, TabItem, Sticky } from "vux";
const list = () => ["海南", "北海", "峨眉山", "苏州"]; //"苏州", "苏州", "苏州"
export default {
  name: "arealist",
  components: {
    Tab,
    TabItem,
    Sticky
  },
  data() {
    var _self = this
    return {
      AndroidTop: false,
      WxTop: false,
      IosTop: false,
      swipeIndex: 0,
      desc: 0,
      marked: false,
      listOne: list(),
      listTwo: [
        {
          Ename: "HAINAN CITY",
          desc: "一线海景房与大海说早安"
        }, {
          Ename: "BEIHAI CITY",
          desc: "浪漫的城市，带来浪漫的生活"
        }, {
          Ename: "EMEISHAN CITY",
          desc: "享受国家级风景名胜的大自然生活"
        }, {
          Ename: "SUZHOU CITY",
          desc: "置身江南的小镇红砖黛瓦潺流涓溪"
        },
      ],
      areaTitle: "海南",
      // 楼盘图片展示
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 23,
        pagination: {
          el: ".swiper-number",
          clickable: true,
          type: "fraction",
        },
      },
      swiperOption01: {
        slidesPerView: "auto",
        spaceBetween: 0,
        slideToClickedSlide: true,
        pagination: {
          el: ".swiper-number",
          clickable: true,
          type: "fraction"
        },
        on: {
          slideChangeTransitionStart(){
            _self.swipeIndex = this.activeIndex
          },
        }
      },
      showBuildList: [],
      // 楼盘列表
      buildList: []
    };
  },
  methods: {
    // 切换tab
    tabClick(item, i) {
      var mySwiper01 = this.$refs['mySwiper01']
      this.areaTitle = item;
      this.desc = i;
      this.buildList = this.showBuildList[i]
    },
    slideImgClickFn(item) {
      // 轮播选择
      // console.log(item, 1111);
    },
    // 初始化
    initLoad() {
        this.get(
            "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList=&porttype",
            { interfaceType: "newHouse" }
        ).then(response=>{
            if(response.status == 200){
                var arr = [],
                arr1 = [],
                arr2 = [],
                arr3 = [];
                for (let i = 0; i < response.data.length; i++) {
                    response.data[i].firstpicture = this.concatFileUrl(
                        response.data[i].firstpicture
                    );
                    if(response.data[i].buildnamepy) {
                        response.data[i].buildnamepy = response.data[i].buildnamepy.toUpperCase();
                    }
                    // 筛选区域楼盘
                    if(response.data[i].address.indexOf('北海') != -1) {
                        arr1.push(response.data[i])
                    }else if(response.data[i].address.indexOf('峨眉山') != -1) {
                        arr2.push(response.data[i])
                    }else if(response.data[i].address.indexOf('太仓') != -1) {
                        arr3.push(response.data[i])
                    }else {
                        arr.push(response.data[i])
                    }
                }
                this.showBuildList.push(arr);
                this.showBuildList.push(arr1);
                this.showBuildList.push(arr2);
                this.showBuildList.push(arr3);
                this.buildList = this.showBuildList[0]
                // console.log(this.showBuildList,111)
            }   
        })
    },
    // 判断类型Phone(ios,Android)
    isTypePhone() {
      // 判断类型
    if (!this.$store.state.showWxTitle) {
      if (!this.AndroidOrIos()) {
        this.AndroidTop = false;
        this.IosTop = true;
        this.wxTop = false;
        this.orderListss = true;
      } else {
        this.AndroidTop = true;
        this.IosTop = false;
        this.wxTop = false;
        this.orderListss = false;
      }
    } else {
      this.wxTop = true;
      this.AndroidTop = false;
      this.IosTop = false;
      this.orderListss = false;
    }
    }
  },
  mounted() {
      this.initLoad()
      this.isTypePhone()
  },
  watch: {
    swipeIndex() {
      this.tabClick(this.listOne[this.swipeIndex], this.swipeIndex)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.topSwiper{
  padding-top: 1.3rem;
}
.topSwiper1{
  padding-top: 1.3rem;
}
.topSwiper2{
  padding-top: 0;
}
.arealist {
  box-sizing: border-box;
  padding-left: .45rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #fff;
  background: url("../../../static/new/img/arealistBg.png") no-repeat;
}
.areacontent {
  margin-top: 2.1rem;
  text-align: left;
}
.areatitle {
  font-size: 1.2rem;
  font-family: 'FZDBSJW--GB1-1', 'MicrosoftYaGHei';
  line-height: 1.2rem;
  color: #fff;
  text-align: left;
  height: 1.2rem;
}
.englishing {
  margin-top: 0.3rem;
  font-size: 0.48rem;
  line-height: 0.48rem;
  font-family: 'FZDBSJW--GB1-1', 'MicrosoftYaGHei';
}
.remark {
  margin-top: 0.15rem;
  font-size: 0.24rem;
  color: #bbb;
}
.slideImg {
  margin-top: 0.9rem;
}
.swipediv {
  width: 5.48rem;
  height: 4.1rem;
}
.swipeimg {
  box-sizing: border-box;
  height: 2.88rem;
  width: 5.48rem;
  border: 0.04rem solid #fff;
  border-radius: 0.1rem;
}
.buildEngName {
  margin-top: 0.3rem;
  font-size: 0.28rem;
  line-height: 0.28rem;
  padding-left: 0.15rem;
  color: #3edbf7;
  text-align: left;
}
.buildName {
  margin-top: 0.1rem;
  padding-left: 0.15rem;
  // padding-right: .4rem;
  float: left;
  font-size: 0.3rem;
  line-height: 0.3rem;
  color: #fff;
  text-align: left;
  span{
  display: inline-block;

  width: 0.2rem;
  height: 0.2rem;
  margin-left: .15rem;
  background: url("../../../static/new/img/areaAdd.png") no-repeat right center;
  background-size: 100%;
  }

}
.vux-center01{
  font-size: 0.3rem !important;
  color: #ffffff !important;
  float: left;
  line-height: .88rem;
}
.swipetab{
  padding: 0 .22rem;
}
.areatabs{
    width: 1rem;
    position: relative;
    margin-left: -.24rem;
}
.redbor{
  position: absolute;
  bottom: 1px;
  right: .32rem;
  width: .3rem;
  height: 2px;
  background: #d6000f
}
</style>
<style lang="less">
@import "~vux/src/styles/1px.less";
.arealist .vux-tab {
  background-color: rgba(255, 255, 255, 0);
  font-size: 0.3rem;
}
.arealist .swiper-slide {
  width: auto;
}
.arealist .slideImg .swiper-slide {
  margin-right: 23px;
}
.arealist .areatabs .swiper-container{
    overflow: visible;
}
</style>

