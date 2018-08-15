<style lang="less" scoped>
.user_set {
  position: fixed;
  top: 1.3rem;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  padding: .32rem 0 0;
  text-align: left;
  * {
    box-sizing: border-box;
    font-size: 16px;
  }
 
}
 .user_bg{
    box-sizing: border-box;
    height: 3rem;
    margin: 0 .3rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .integrals{
    padding: .3rem 0 0 .4rem;
  }
  .myIntegral {
    height: 1.8rem;
    width: 2.6rem;
    text-align: left;
    float: left;
    font-size: .28rem;
    color: #fff;
    .myIntetitle{
      font-size: .28rem;
      line-height: .28rem;
    }
    .integral_msg {
      line-height: 1.4rem;
      font-size: .8rem;
    }
  }
  .myIntegral_box {
    height: 1.1rem;
  }
  .inp_box {
    background-color: #fff;
    height: 1.35rem;
    padding: 0 .3rem;
    // padding-top:0.8rem;
    .inp_line {
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #ccc;
      span {
        font: 400 1rem/1.2rem "微软雅黑";
        
      }
      input {
        height: .6rem;
        width: 80%;
        border: none;
        outline: none;
        font: 400 0.28rem/1.4rem "微软雅黑";
        display: block;
        float: right;
        margin-top: .4rem;
        // font-size: .28rem;
      }
    }
  }
  .other_msg {
    height: 1rem;
    background-color: #fff;
    padding: 0 10px;
    font: 400 16px/1rem "微软雅黑";
  }
  .btn_box_2 {
    margin: 1rem 0 0;
    position: absolute;
    bottom: .3rem;
    left: 0;
    width: 100%;
  }
  .btn_style {
    width: 80%;
    height: 1rem;
    border-radius: 5px;
    font-size: 20px;
  }
  .btn_Explain {
    width: 80%;
    height: 1rem;
    font-size: 20px;
    border: none;
  }
  .Canused{
    position: absolute;
    bottom: .3rem;
    left: .4rem;
    font-size: .24rem;
    color: #fff;
  }
.user_set1 {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #efefef;
  z-index: 999;
  padding: 0;
  text-align: left;
  * {
    box-sizing: border-box;
    font-size: 16px;
  }
}
</style>
<style lang="less">
  .btn_box_2 .btn_style{
    width: 90%;
  }
  .btn_box_2 .weui-btn_warn{
    background-color: #e34b3e;
  }
  .btn_box_2 .weui-btn_disabled.weui-btn_warn{
    background-color: #EC8B89;
  }
</style>

<template>
    <div :class="{'user_set':IosTop,'user_set1':wxTop}">
        <div class="user_bg" :style="{backgroundImage: 'url(' +imgWithdraw+ ')'}">
          <div class="integrals">
            <div class="myIntegral">
              <div class="myIntetitle">
                目前共有积分
              </div>
              <div class="integral_msg">{{myPoints}}</div>
            </div>  
            <div class="myIntegral">
              <div class="myIntetitle">
                可提现积分
              </div>
              <div class="integral_msg">{{depositpoint}}</div>
            </div>
            <div class="Canused">
                一次提现最多：{{maxMoney}}元
              </div>
          </div>
        </div>

            
        <div class="inp_box">
            <div class="inp_line">
                <span>￥</span>
                <input v-model="totalpoint" placeholder="请输入提现金额" type="text">
            </div>
        </div>
        <!-- <div class="other_msg">
            10个工作日到账
        </div> -->

        <div class="btn_box_2">
            <x-button type="warn"  class="btn_style" @click.native="toWithdrawal" :disabled="iscanwithdraw=='不可提'">提取现金</x-button>
        </div>
         <!-- <div class="btn_box_2">
            <x-button  plain  class="btn_Explain" @click.native="integralExplan">提现说明</x-button>
        </div> -->
    </div>
</template>
<script>
import withdraw from "../../../assets/home/withdraw01.png";
export default {
  data() {
    return {
      totalpoint: "", //提现积分
      myPoints: "", //我的积分
      depositpoint: "", //可提积分，
      iscanwithdraw: "不可提", //是否可提现
      maxMoney: "", //每次做的最多提现
      IosTop: false,
      wxTop: false,
      imgWithdraw: withdraw,
    };
  },
  mounted() {
    // 初始化数据
    let toupdated = {
      agenttype: "1",
      userid: ""
    };
    this.post(
      "commonPoint/pointAccountController/getInfoPointAccount",
      toupdated,
      { interfaceType: "intergral" }
    ).then(res => {
      if(res.code==2002){
        this.myPoints = res.obj.totalpoint;
        this.depositpoint = res.obj.depositpoint;
        this.iscanwithdraw = res.obj.iscanwithdraw;
        this.maxMoney = res.data.data;
      }
     
    });
    // 判断类型
    if (!this.$store.state.showWxTitle) {
      if (!this.AndroidOrIos()) {
        this.IosTop = true;
        this.wxTop = false;
      } else {
        this.IosTop = false;
        this.wxTop = false;
      }
    } else {
      this.wxTop = true;
      this.IosTop = false;
    }
  },
  methods: {
    // 说明
    integralExplan() {
      this.$router.push({ name: "integralExplan" });
    },
    // 提现
    toWithdrawal() {
      let upData = {
        agenttype: "1",
        totalpoint: this.totalpoint,
        userid: ""
      };
      this.requireData(
        "ntest.guoanfamily.com/pointCommon/pointAccountController/confirmWithdraw",
        upData
      ).then(res => {
        this.showalert(res.msg);
      });
    },
    //ajax封装
    requireData(url, data = {}) {
      let token = localStorage.getItem("token");
      return fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      });
    },
    showalert(msg) {
      // 显示
      this.$vux.alert.show({
        title: "提示信息",
        content: msg
      });
    }
  }
};
</script>

