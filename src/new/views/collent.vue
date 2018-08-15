<template>
       <div  class="fixContent" >
        <div :class="{'collentTop':IosTop,'collentTop1':AndroidTop,'collentWxTop':this.$store.state.showWxTitle}">
            <div class="collent" :class="{collentBuild:flag1}" @click="consoleIndex"><span>收藏的楼盘</span></div>
            <div class="collent" :class="{collentHouseType:flag2}" @click="consoleIndex1">
                <span :class="{'topCenter':lineFlag == 1, 'topCenterRight': lineFlag == 3, 'topCenterLeft': lineFlag == 2}" >
                  收藏的户型
                </span>
              </div>
            <div class="collent" :class="{collentRentHouse:flag3}" @click="consoleIndex3"><span>收藏的租房</span></div>
        </div>
        <div :class="{'houseResourceList':!this.$store.state.showWxTitle,'houseResourceList1':this.$store.state.showWxTitle}">
            <!--房源列表  -->
            <div class="market1" v-show="marked"></div>
            <ul v-show="housTypelist" class="listUl">
                <li class="listHouseoLi" :key="index" v-for="(item,index) in houseList" @click="housListClick(item.collectUrl,index)">
                    <div class="exitCollect" @click.stop="buildExitCollect(item.collectUrl,index)"></div>
                    <div class='listHouseLeftImg'>
                        <img :src='item.imageName' />
                    </div>
                    <div class="listHouseRightDiv">
                        <div class='listHouseRightName'>
                            <span>{{item.collectTitle}}</span>
                        </div>
                        <div class="listHousearearegion">
                            <span>{{item.collectResume}}</span>
                            <!-- <span>元/㎡</span> -->
                        </div>
                        <div class="HouseaddressLocation">
                            <div class="listHouseaddress">
                                建筑面积: {{item.adjunctContent}}
                            </div>
                        </div>
                        <div class="listHouseaverage" style="color:#999999;font-size:.24rem;font-weight:400;">
                            <span>{{item.collectContent}}</span>
                        </div>

                        <div class="HouseaddressLocation">
                            <div class="listHouseaddress">
                                {{item.collectAddress}}
                            </div>
                        </div>

                    </div>
                </li>
            </ul>
            <!--户型列表  -->
            <ul v-show="apartMentList" class="listUl">
                <li class="listHouseoLi" :key="index" v-for="(item,index) in apartMent" @click="apartMentListClick(item.collectUrl,index)">
                    <div class="exitCollect" @click.stop="houseTypeExitcollect(item.collectUrl,index)"></div>
                    <div class='listHouseLeftImg'>
                        <img :src='item.imageName' />
                    </div>
                    <div class="listHouseRightDiv">
                        <div class='listHouseRightName'>
                            <span>户型</span>
                            <span>{{item.collectTitle}}</span>
                        </div>
                        <div class="listHouseaverage">
                            <span>{{item.collectResume}}</span>
                            <span>/月</span>
                        </div>
                        <div class="HouseaddressLocation">
                            <div class="listHouseaddress">
                                {{item.collectContent}}
                            </div>
                        </div>
                        <div class="HouseaddressLocation">
                            <div class="listHouseaddress">
                                朝向：{{item.adjunctContent}}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <!--租房列表  -->
            <ul v-show="rent" class="listUl">
                <li class="listHouseoLi" :key="index" v-for="(item,index) in rentHouseList" @click="rentListClick(item.collectUrl,index)">
                    <div class="exitCollect" @click.stop="rentExitcollect(item.collectUrl,index)"></div>
                    <div class='listHouseLeftImg'>
                        <img :src='item.imageName' />
                    </div>
                    <div class="listHouseRightDiv">
                        <div class='listHouseRightName'>
                            <span>户型</span>
                            <span>{{item.collectTitle}}</span>
                        </div>
                        <div class="listHouseaverage">
                            <span>{{item.collectResume}}</span>
                            <span>/月</span>
                        </div>
                        <div class="HouseaddressLocation">
                            <div class="listHouseaddress">
                                {{item.collectContent}}
                            </div>
                        </div>
                        <!-- <div class="HouseaddressLocation">
                                            <div class="listHouseaddress">
                                                朝向：{{item.adjunctContent}}
                                            </div>
                                        </div> -->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// import { ButtonTab, ButtonTabItem } from 'vux'
export default {
  name: "collent",
  components: {
    // ButtonTab, ButtonTabItem
  },
  data() {
    return {
      AndroidTop: false,
      IosTop: false,
      wxTop: false,
      userID: "",
      userPhone: "",
      demo01: 0,
      flag1: false,
      flag2: false,
      flag3: false,
      lineFlag:2,
      houseList: [], //收藏房源的集合
      housTypelist: false,
      apartMent: [], //收藏户型的集合
      apartMentList: false,
      rentHouseList: [], //收藏的租房
      rent: false,
      post_data: {
        startCount: "0",
        type: "1"
      },
      marked: false,
      startCount: 0,
      type: 1
    };
  },
  methods: {
    //收藏数据加载
    collent(post_data) {
      // console.log(post_data);
      this.get(
        "CollectController/getAllByUid?startCount=" +
          this.post_data.startCount +
          "&type=" +
          this.post_data.type,
        { interfaceType: "collect" }
      ).then(
        response => {
          if (response.code == 200) {
            if (response.data.collectList.length != 0) {
              // 遍历所有数据，为数据图片添加url地址
              this.marked = false;
              //处理数据的价格
              for (let i = 0; i < response.data.collectList.length; i++) {
                response.data.collectList[i].imageName =
                  response.data.collectList[i].imageName;
                if (response.data.collectList[i].collectResume !== null) {
                  if (
                    response.data.collectList[i].collectResume == "售价待定"
                  ) {
                    response.data.collectList[i].collectResume = "售价待定";
                  } else if (
                    response.data.collectList[i].collectResume.substr(
                      response.data.collectList[i].collectResume.length - 2
                    ) == "/㎡"
                  ) {
                    response.data.collectList[i].collectResume =
                      "¥" + response.data.collectList[i].collectResume;
                  } else if (response.data.collectList[i].collectResume == "") {
                    response.data.collectList[i].collectResume = "售价待定";
                  } else {
                    response.data.collectList[i].collectResume =
                      "¥" + response.data.collectList[i].collectResume + "㎡";
                  }
                }
              }
              if (post_data.type == 1) {
                if (response.data.collectList.length != 0) {
                  this.marked = false;
                  this.houseList = response.data.collectList;
                } else {
                  this.marked = true;
                  this.houseList = [];
                }
              } else if (post_data.type == 3) {
                if (response.data.collectList.length != 0) {
                  this.marked = false;
                  this.rentHouseList = response.data.collectList;
                  for (let i = 0; i < response.data.collectList.length; i++) {
                    // response.data.collectList[i].imageName = this.ImgSrc + response.data.collectList[i].imageName;
                    response.data.collectList[i].imageName = this.concatFileUrl(
                      response.data.collectList[i].imageName
                    );
                    // console.log(response.data.collectList[i].imageName);
                  }
                } else {
                  this.marked = true;
                  this.rentHouseList = [];
                }
              } else {
                if (response.data.collectList.length != 0) {
                  this.apartMent = response.data.collectList;
                  this.marked = false;
                } else {
                  this.marked = true;
                  this.apartMent = [];
                }
              }
              this.post_data.startCount = response.data.startCount;
            } else {
              this.marked = true;
              this.houseList = [];
              this.apartMent = [];
              this.rentHouseList = [];
            }
          } else {
            // this.showalert(response.code);
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },

    // 取消收藏的楼盘
    buildExitCollect(url, index) {
      let post_data = {
        collectUrl: url
      };
      this.post("CollectController/delCollectInfo", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          if (response.code == 200) {
            this.msgalert("取消收藏成功");
            this.post_data = {
              startCount: "0",
              type: "1"
            };
            this.collent(this.post_data);
            let a = JSON.parse(localStorage.getItem("userInfroMap"));
            let arr = a.collectList;
            let hrefs = url;
            arr.splice(arr.indexOf(hrefs), 1);
            a.collectList = arr;
            localStorage.setItem("userInfroMap", JSON.stringify(a));
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },

    // 楼盘列表的点击事件
    housListClick(href) {
      window.location.href = href;
    },

    // 取消收藏的户型
    houseTypeExitcollect(url, index) {
      let post_data = {
        collectUrl: url
      };
      this.post("CollectController/delCollectInfo", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          if (response.code == 200) {
            this.msgalert("取消收藏成功");
            this.post_data = {
              startCount: "0",
              type: "2"
            };
            this.collent(this.post_data);
            let a = JSON.parse(localStorage.getItem("userInfroMap"));
            let arr = a.collectList;
            let hrefs = url;
            arr.splice(arr.indexOf(hrefs), 1);
            a.collectList = arr;
            localStorage.setItem("userInfroMap", JSON.stringify(a));
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 户型列表的点击事件
    apartMentListClick(href) {
      window.location.href = href;
    },
    // 取消收藏的租房
    rentExitcollect(url, index) {
      let post_data = {
        collectUrl: url
      };
      this.post("/CollectController/delCollectInfo", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          if (response.code == 200) {
            this.msgalert("取消收藏成功");
            this.post_data = {
              startCount: "0",
              type: "3"
            };
            this.collent(this.post_data);
            let a = JSON.parse(localStorage.getItem("userInfroMap"));
            let arr = a.collectList;
            let hrefs = url;
            arr.splice(arr.indexOf(hrefs), 1);
            a.collectList = arr;
            localStorage.setItem("userInfroMap", JSON.stringify(a));
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },

    // 租房列表的点击事件
    rentListClick(href) {
      window.location.href = href;
    },
    getStr(string, strname) {
      var reg = new RegExp("(^|&)" + strname + "=([^&]*)(&|$)", "i");
      var r = string.match(reg);
      if (r != null) {
        return r[2];
      }
    },
    // 控制显示收藏的房源和收藏的户型
    consoleIndex() {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = false;
      this.lineFlag = 2;
      this.housTypelist = true;
      this.apartMentList = false;
      (this.rent = false),
        (this.post_data = {
          startCount: 0,
          type: 1
        });
      this.collent(this.post_data);
    },
    consoleIndex1() {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = false;
      this.lineFlag = 1;
      this.housTypelist = false;
      this.apartMentList = true;
      (this.rent = false),
        (this.post_data = {
          startCount: 0,
          type: 2
        });
      this.collent(this.post_data);
    },
    consoleIndex3() {
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = true;
      this.lineFlag = 3;
      (this.rent = true), (this.housTypelist = false);
      this.apartMentList = false;
      this.post_data = {
        startCount: 0,
        type: 3
      };
      this.collent(this.post_data);
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
    this.collent(this.post_data);
    this.consoleIndex();
    // this.$on('onLoading',()=>{
    //     alert('1234');
    // })
    //  判断类型
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
  }
};
</script>

<style lang='less' scoped>
@font-face{
	font-family:font01;
	src:url("../../fonts/BEBASNEUE.otf");
}
@import "~vux/src/styles/1px.less";
.collentTop {
  position: fixed;
  top: 80px;
  left: .3rem;
  right:.3rem;
  z-index: 11;
  height: 0.8rem;
  // border-top:1px solid #cccccc;
  border-bottom:1px solid #cccccc;
  .topCenterRight{
    padding-right: 12px;
    padding-left: 12px;
    border-right: none;
    border-left: 1px solid #cccccc;
  }
  .topCenterLeft{
    padding-right: 12px;
    padding-left: 12px;
    border-left:none;
    border-right: 1px solid #cccccc;
  }
  .topCenter{
    padding-right: 12px;
    padding-left: 12px;
  }
  div {
    margin-top: 0.06rem;
    width: 33%;
    float: left;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.32rem;
    background:#eeeeee;
    color:#999999;
  }
  .collent {
    // background: #f5f5f5;
  }
  .collentBuild {
    color: #e34b3e;
    background:#ffffff;
  }
  .collentHouseType {
    color: #e34b3e;
    background:#ffffff;
  }
  .collentRentHouse {
    color: #e34b3e;
    background:#ffffff;
  }
}
.collentTop1 {
  position: fixed;
  top: 47px;
  left: 0.3rem;
  right:0.3rem;
  z-index: 11;
  height: 0.8rem;
  // border-top:1px solid #cccccc;
  border-bottom:1px solid #cccccc;
  div {
    margin-top: 0.06rem;
    width: 33%;
    float: left;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.32rem;
    background:#eeeeee;
    color:#999999;
  }
  .collent {
    // background: #f5f5f5;
  }
  .collentBuild {
    color: #e34b3e;
    background:#ffffff;
  }
  .collentHouseType {
    color: #e34b3e;
    background:#ffffff;
  }
  .collentRentHouse {
    color: #e34b3e;
    background:#ffffff;
  }
}
.collentWxTop {
  position: fixed;
  top: 0px;
  right:.3rem;
  left: .3rem;
  z-index: 11;
  height: 0.8rem;
  // border-top:1px solid #cccccc;
  border-bottom:1px solid #cccccc;
  div {
    margin-top: 0.06rem;
    width: 33%;
    float: left;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.32rem;
    background:#eeeeee;
    color:#999999;
  }
  .collent {
    // background: #f5f5f5;
  }
  .collentBuild {
    color: #e34b3e;
    background:#ffffff;
  }
  .collentHouseType {
    color: #e34b3e;
    background:#ffffff;
  }
  .collentRentHouse {
    color: #e34b3e;
    background:#ffffff;
  }
}
.listUl {
  // background: #eee;
}

.houseResourceList {
  width: 100%;
  margin-top: 2.6rem;
}
.houseResourceList1 {
  width: 100%;
  margin-top: 1rem;
}
.listHouseoLi {
  // padding-top: 0.25rem;
  margin-left:.3rem;
  margin-right:.3rem;
  height: 2.3rem;
  margin-bottom: 0.25rem;
  background: #fff;
  position: relative;
  border-bottom:1px solid #eee;
  .exitCollect {
    position: absolute;
    width:.48rem;
    height:.48rem;
    background: url("../../../static/new/img/shoucang02.png") no-repeat;
    background-size: 100%;
    left:.4rem;
    top: 0.25rem;
    z-index: 10;
  }
}

.listHouseLeftImg {
  float: left;
  width: 35%;
}

.listHouseLeftImg img {
  width: 2.8rem;
  height: 2.1rem;
  border-radius: 5px;
  margin-left: 0.3rem;
}

.listHouseRightDiv {
  width: 58%;
  float: right;
  text-align: left;
  position: relative;
}

.listHouseRightName {
  font-weight: 400;
  line-height: 0.5rem;
  font-size: 0.32rem;
  font-weight: 500;
  color:#000000;
  width: 80%;
}

.listHouseaverage {
  bottom: 0;
  color: #000000;
  font-family:'font01';
  font-size: 0.3rem;
  overflow: hidden;
  width: 70%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.listHousearearegion {
  font-family:'font01';
  font-size: 0.32rem;
  width: 70%; 
  text-align: left;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.HouseaddressLocation {
  .listHouseaddress {
    font-size: 0.26rem;
    float: left;
    width: 70%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: left;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.market1 {
  width: 100%;
  height: 80%;
  background: url("../../../static/new/img/noData.png") no-repeat 50% 20%;
  background-size: 70%;
  opacity: 0.8;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 17%;
  right: 0;
  margin: auto;
  z-index: 11;
}
</style>
