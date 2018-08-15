
<style lang="less">
  .MyIntegral{
     padding: 0.3rem;
    .vux-tab{
       .vux-tab-item{
         font-size: 18px;
         line-height: 1rem;
       }
    }
  }

</style>

<style lang="less" scoped>

.MyIntegral{
  box-sizing:border-box;
  padding: 0.3rem;
  &.user_set1 {
  // position: fixed;
  // top: 0px;
  // right: 0;
  // left: 0;
  // bottom: 0;
  .msg_box{
    position: absolute;
    bottom: 0;
    left: 0;
    top:4.7rem;
    right: 0;
  }
  height: 100%;
  background-color: #fff;
  z-index: 999;
  // padding: 0;
  transform: translate3d(0,0,0);

}
  * {
    box-sizing: border-box;
    font-size: 14px;
    color:#000;
    font-family: 'Source Han Sans CN Normal';
  }
  .infoName{
    height: 0.82rem;
    line-height: 1.02rem;
    text-align:left;
    font-size:16px;
  }

  .integral_title {
    width: 100%;
    height: 3.4rem;
    background: url("../../../../static/new/img/jifenBG.png") center no-repeat;
    background-size: 100% 100%;
    padding: 0.2rem;
    .infoName{
      height: 0.82rem;
      line-height: 0.82rem;
    }
    .my_integral {
      font-size: 20px;
      color: #fff;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      position: relative;
      .my_integral_msg {
        width: 22px;
        height: 22px;
        font-size: 18px;
        text-align: center;
        line-height: 22px;
        position: absolute;
        bottom: 0.3rem;
        right: 0;
        border: 1px solid #fff;
        border-radius: 50%;
      }
    }
    .integral_num {
      width: 100%;
      margin-top: 0.1rem;
      height: 1rem;
      font-size: 0.8rem;
      font-family:'Bebas Neue';
      text-align: center;
      color: #fff;
    }
    .btn_box_Integral {
      height: 1rem;
      margin-top: 0.4rem;
      position: relative;
      .btn_style {
        position: absolute;
        font-family: 'Source Han Sans CN Regular';
        left: 30%;
        height: 0.6rem;
        line-height: 0.61rem;
        color: #e34b3e;
        width: 32%;
        background-color: #fff;
        transform: translateX(-50%);
        font-size: 18px;
        // border: 1px solid #fff;
        border-radius: 3px;
      }
      .right_btn {
        left: 70%;
      }
    }
  }
  .integral_list {
    //  position: fixed;
    //   top: 4rem;
      height:1rem;
      width: 100%;
      border-bottom: 1px solid #ccc;
    .tab_box {
      height:1rem;
      line-height:1rem;
      width: 100%;
      overflow: hidden;
      background-color: #f8f8f8;
      .tab_box_btn{
        line-height:1rem;
      }
    }
  }
  .msg_box {
    position: absolute;
    bottom: 0;
    left: 0;
    top: 5.9rem;
    right: 0;
    overflow: auto;
    // background-color:#f8f8f8;
    background-color: #fff;
    padding:0 0.3rem;
    .hasnodeDate{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: url(../../../../static/new/img/noData.png) center no-repeat;
      background-size: 60%;
      background-color: #fff;
    }
    .tab_mag {
      background-color: #f8f8f8;
      height: 0.7rem;
      border-radius:3px;
      overflow: hidden;
      .msg_title {
        height:  0.7rem;
        padding: 0 0.3rem;

        .monte_box {
          float: left;
          font: 400 14px/ 0.7rem "Source Han Sans CN Normal";
          color:#000;
        }
        .consumption_box {

          float: right;
          text-align:right;
          color:#757575;
          font: 400 14px/0.7rem "微软雅黑";
           &:nth-child(2){
             padding-left:.3rem;
          }
        }
      }
    }
    .list_box {
      padding: 0 0.3rem;
      background-color: #fff;
      li {
        width: 100%;
        height: 1rem;
        padding:0 10px;
        border-bottom: 1px solid #f0f0f0;

        &:last-child{
           border-bottom: none;
        }
        .list_msg {
          width: 33%;
          height: 1rem;
          float: left;
          overflow: hidden;
          font: 400 .3rem/1rem "Source Han Sans CN Normal";
          &.date_msg {
            text-align: left;
          }
          &.money_mag {
            text-align: right;
            color:#e34b3e;
            &.pointClolr{
              color:#85d11c;
            }
          }

        }
      }
    }
  }
}
.user_set {
  padding-top:1.5rem;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  // padding: 0;


  transform: translate3d(0,0,0);

}

</style>

<template>
  <div class="fixContent">
      <div class="MyIntegral" :class="{'user_set1':this.$store.state.showWxTitle,'user_set':!this.$store.state.showWxTitle}">
         <!-- 头部 -->
        <div class="integral_title">
            <div class="my_integral" >
                现有积分
                <!-- <span class="my_integral_msg" @click="ToShowMsg">?</span> -->
            </div>
            <div class="integral_num">{{showData.totalPoint}}</div>
            <div class="btn_box_Integral ">
                <div class="btn_style" @click="ToShowMsg">积分说明</div>
                <div class="btn_style right_btn" @click="Withdrawals">我要提现</div>
            </div>
        </div>
        <!-- 提示 -->
        <div class="infoName">
          积分记录
        </div>
        <!-- tab栏 -->
        <!-- <div class="integral_list">

              <tab class="tab_box">
                <tab-item class="tab_box_btn" selected  @on-item-click="TabAtive(0)">全部</tab-item>
                <tab-item   @on-item-click="TabAtive(1)">获取记录</tab-item>
                <tab-item   @on-item-click="TabAtive(2)">消费记录</tab-item>

              </tab>

        </div> -->
        <!-- 内容 -->
        <div class="msg_box">
            <!-- 一组数据 -->
            <div v-for="item in showData.pointDailyMonthModelList" :key='item.getPoint'>
                <div class="tab_mag" v-if="item.lists.length>0">
                    <div class="msg_title" >
                        <div class="monte_box"> {{item.month}}</div>
                        <div class="consumption_box" v-if="activedNum!=1"> 消费:{{item.payPoint}}</div>
                        <div class="consumption_box"  v-if="activedNum!=2"> 获取:{{item.getPoint}}</div>
                    </div>
                </div>
                <div>
                    <ul class="list_box">
                        <li v-for="objs in item.lists" :key="objs.id">
                            <div class="list_msg date_msg"> {{objs.createtime}}</div>
                            <div class="list_msg">{{objs.pointtype}}</div>
                            <div class="list_msg money_mag" v-if="objs.point<0" >{{objs.point}}</div>
                            <div class="list_msg money_mag" v-if="objs.point>0" :class="{pointClolr:objs.point>0}">+{{objs.point}}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hasnodeDate" v-if="isNull"></div>
        </div>

    </div>
  </div>

</template>
<script>
import {Tab,TabItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem
  },

    // directives: {
    //     TransferDom
    // },
  data() {
    return {
      isNull:false,
      showDataArr: [],
      activedNum: 0,

      showData: {
        totalPoint: "",
        month: "",
        payPoint: "",
        pointDailyMonthModelList: []
      }
    };
  },
  mounted() {
    this.changeData(0);
  },
  methods: {
    // 初始化数据
    changeData(num) {
      for (let n = 0; n < 3; n++) {
        let upData = {
          getPointRecord: n + "",
          agenttype: "1",
          userid: ""
        };
        this.post("commonPoint/pointDailController/getAllPoint", upData, {
          interfaceType: "intergral"
        }).then(res => {
          if (res.code == 200) {

            res.obj.index = n;
             res.obj.pointDailyMonthModelList.forEach(item=>{
               if( item.month !="本月"){

                 item.month = item.month.split('.')[0]+'年'+item.month.split('.')[1]+'月'
               }
               item.lists.forEach(its=>{
                 its.createtime = its.createtime.substring(0,10);

                 its.createtime  = its.createtime.split('-')[1]+"."+its.createtime.split('-')[2]


               })

             });
            this.showDataArr.push(res.obj);
            if (num == 0 && n == 0) {

              this.showData = res.obj;
              this.activedNum = 0;
            }
            if(this.showData.pointDailyMonthModelList.length==0){
              this.isNull = true;
            }else{
              this.isNull = false;
            }
          }
        });
      }
    },

    // 查看介绍
    ToShowMsg() {
      this.$router.push({ name: "integralExplan" });
    },
    //tab切换
    TabAtive(n) {
      this.activedNum = n;
    },
    // 提现
    Withdrawals() {
      this.$router.push({ name: "Withdrawals" });
    }
  },
  watch: {
    activedNum() {
      let num = this.activedNum;
      this.showDataArr.forEach(element => {
        if (element.index == num) {
          this.showData = element;
        }

      }, this);

      this.isNull = true;
      this.showData.pointDailyMonthModelList.forEach(item=>{
        if(item.lists.length>0){
          this.isNull = false;
        }
      })

    }
  }
};
</script>

