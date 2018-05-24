<template>
       <div  class="fixContent" >
        <div :class="{'collentTop':IosTop,'collentTop1':AndroidTop,'collentWxTop':this.$store.state.showWxTitle}">
            <div class="collent" :class="{collentBuild:flag1}" @click="consoleIndex">收藏的楼盘</div>
            <div class="collent" :class="{collentHouseType:flag2}" @click="consoleIndex1">收藏的户型</div>
            <div class="collent" :class="{collentRentHouse:flag3}" @click="consoleIndex3">收藏的租房</div>
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
                        <div class="listHouseaverage" style="color:#666666;font-weight:400;">
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
                            <span style="font-size:normal;">户型</span>
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
                            <span style="font-size:normal;">户型</span>
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
      // let buildID =   href.split('=')[1];
      // this.$router.push({ path: "building_detial", query: { buildID: buildID } });
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
      // let onece = href.split('=');
      // let typeid =  onece[1];
      // typeid = typeid.substring(0,typeid.indexOf("&buildid"))
      // let buildid = onece[2];
      // this.$router.push({
      //   path: "houseType",
      //   query: { typeid: typeid, buildid: buildid }
      // });
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
      //   console.log(href);
      //   console.log(this.getStr(href, "productType"));
      // this.$router.push('/HouseList/houseDetail');
      // let productType = this.getStr(href, "productType");
      // let id = this.getStr(href, "id");
      // this.$router.push({
      //   path: "/HouseList/houseDetail",
      //   query: { id: id, productType: productType }
      // });
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
@import "~vux/src/styles/1px.less";
.collentTop {
  width: 100%; // margin-left: 2%; // margin-top: 0.5rem;
  // padding-top: 10px;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 11;
  height: 1.125rem;
  background: #f5f5f5;
  div {
    margin-top: 0.06rem;
    width: 33%;
    float: left;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.35rem;
  }
  .collent {
    background: #f5f5f5;
  }
  .collentBuild {
    background: url("../../../static/new/img/collentTopleft.png") no-repeat;
    background-size: 95%;
    background-position: center;
    color: red;
  }
  .collentHouseType {
    background: url("../../../static/new/img/collentTopCenter.png") no-repeat;
    background-size: 100%;
    background-position: center;
    color: red;
  }
  .collentRentHouse {
    background: url("../../../static/new/img/collentTopRight.png") no-repeat;
    background-size: 95%;
    background-position: center;
    color: red;
  }
}
.collentTop1 {
  width: 100%; // margin-left: 2%; // margin-top: 0.5rem;
  // padding-top: 10px;
  position: fixed;
  top: 47px;
  left: 0;
  z-index: 11;
  height: 1.125rem;
  background: #f5f5f5;
  div {
    margin-top: 0.06rem;
    width: 33%;
    float: left;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.35rem;
  }
  .collent {
    background: #f5f5f5;
  }
  .collentBuild {
    background: url("../../../static/new/img/collentTopleft.png") no-repeat;
    background-size: 95%;
    background-position: center;
    color: red;
  }
  .collentHouseType {
    background: url("../../../static/new/img/collentTopCenter.png") no-repeat;
    background-size: 100%;
    background-position: center;
    color: red;
  }
  .collentRentHouse {
    background: url("../../../static/new/img/collentTopRight.png") no-repeat;
    background-size: 95%;
    background-position: center;
    color: red;
  }
}
.collentWxTop {
  width: 100%; // margin-left: 2%; // margin-top: 0.5rem;
  // padding-top: 10px;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 11;
  height: 1.125rem;
  background: #f5f5f5;
  div {
    margin-top: 0.06rem;
    width: 33%;
    float: left;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.35rem;
  }
  .collent {
    background: #f5f5f5;
  }
  .collentBuild {
    background: url("../../../static/new/img/collentTopleft.png") no-repeat;
    background-size: 95%;
    background-position: center;
    color: red;
  }
  .collentHouseType {
    background: url("../../../static/new/img/collentTopCenter.png") no-repeat;
    background-size: 100%;
    background-position: center;
    color: red;
  }
  .collentRentHouse {
    background: url("../../../static/new/img/collentTopRight.png") no-repeat;
    background-size: 95%;
    background-position: center;
    color: red;
  }
}
.listUl {
  background: #eee;
}

.houseResourceList {
  width: 100%;
  margin-top: 2.3rem;
}
.houseResourceList1 {
  width: 100%;
  margin-top: 1.3rem;
}
.listHouseoLi {
  padding-top: 0.25rem;
  width: 100%;
  height: 2rem;
  margin-bottom: 0.25rem;
  background: #fff;
  position: relative;
  .exitCollect {
    position: absolute;
    width: 20%;
    height: 1rem;
    background: url("../../../static/new/img/collent.png") no-repeat;
    background-size: 50%;
    right: 0;
    top: 0.25rem;
    z-index: 10;
  }
}

.listHouseLeftImg {
  float: left;
  width: 35%;
}

.listHouseLeftImg img {
  width: 2.125rem;
  height: 1.7rem;
  border-radius: 5px;
  margin-left: 0.3rem;
}

.listHouseRightDiv {
  width: 62%;
  float: right;
  text-align: left;
  position: relative;
}

.listHouseRightName {
  font-size: 0.4rem;
  font-weight: 400;
  line-height: 0.5rem;
  font-size: 0.325rem;
  font-weight: bold;
  width: 70%;
}

.listHouseaverage {
  bottom: 0;
  color: red;
  font-size: 0.3rem;
  font-weight: bold;
  overflow: hidden;
  width: 70%;
  height: 0.575rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.listHousearearegion {
  font-size: 0.3rem;
  width: 70%; // height: 1rem;
  // line-height: 1rem;
  text-align: left;
  font-size: 0.25rem;
  color: red;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.HouseaddressLocation {
  .listHouseaddress {
    font-size: 0.3rem;
    float: left;
    width: 70%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: left;
    font-size: 0.3rem;
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
