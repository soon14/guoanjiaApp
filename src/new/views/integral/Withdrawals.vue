<style lang="less" scoped>
.user_set {
  position: fixed;
  top: 1.3rem;
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
  .myIntegral {
    height: 1rem;
    padding: 0 5px;
    font: 400 16px/1rem "微软雅黑";
    .integral_msg {
      padding-left: 5px;
    }
    &.Canused {
      background-color: #fff;
      width: 50%;
      float: left;
    }
  }
  .myIntegral_box {
    height: 1.1rem;
  }
  .inp_box {
    background-color: #fff;
    height: 3rem;
    padding: 0 30px;
    // padding-top:0.8rem;
    .inp_line {
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #333;
      span {
        font: 400 1.5rem/3rem "微软雅黑";
      }
      input {
        height: 1.4rem;
        width: 70%;
        border: none;
        outline: none;
        font: 400 0.9rem/1.4rem "微软雅黑";
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
  .myIntegral {
    height: 1rem;
    padding: 0 5px;
    font: 400 16px/1rem "微软雅黑";
    .integral_msg {
      padding-left: 5px;
    }
    &.Canused {
      background-color: #fff;
      width: 50%;
      float: left;
    }
  }
  .myIntegral_box {
    height: 1.1rem;
  }
  .inp_box {
    background-color: #fff;
    height: 3rem;
    padding: 0 30px;
    // padding-top:0.8rem;
    .inp_line {
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #333;
      span {
        font: 400 1.5rem/3rem "微软雅黑";
      }
      input {
        height: 1.4rem;
        width: 70%;
        border: none;
        outline: none;
        font: 400 0.9rem/1.4rem "微软雅黑";
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
}
</style>

<template>
    <div :class="{'user_set':IosTop,'user_set1':wxTop}">
        
        <div class="myIntegral">
            我的积分：
            <span class="integral_msg">{{myPoints}}</span>
        </div>  
        <div class="myIntegral_box"> 
            <div class="myIntegral Canused">
                可提积分：
                <span class="integral_msg">{{depositpoint}}</span>
            </div>
            <div class="myIntegral Canused">
            每次最多提现：{{maxMoney}}元
            </div>
        </div>
            
        <div class="inp_box">
            <div class="inp_line">
                <span>￥</span>
                <input v-model="totalpoint" type="text">
            </div>
        </div>
        <div class="other_msg">
            10个工作日到账
        </div>

        <div class="btn_box_2">
            <x-button type="warn"  class="btn_style" @click.native="toWithdrawal" :disabled="iscanwithdraw=='不可提'">确认提现</x-button>
        </div>
         <div class="btn_box_2">
            <x-button  plain  class="btn_Explain" @click.native="integralExplan">提现说明</x-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      totalpoint: "", //提现积分
      myPoints: "", //我的积分
      depositpoint: "", //可提积分，
      iscanwithdraw: "不可提", //是否可提现
      maxMoney: "", //每次做的最多提现
      IosTop: false,
      wxTop: false
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

