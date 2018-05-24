<style lang="less" scoped>
.user_set {
  position: fixed;
  top: 1.3rem;
  right: 0;
  left: 0;
  bottom: 0;
  background: url("../../../assets/home/beijing.jpg") center no-repeat;
  background-size: 100% 100%;
  z-index: 999;
  padding: 0;
  .msg_box {
    position: fixed;
    width: 80%;

    left: 10%;
    bottom: 0.5rem;
    top: 3.6rem;

    overflow: auto;
    &.msg_box_liulanq{
       top: 4.5rem;
    }
    .msg_info {
      p {
        text-align: left;
        font-size: 14px;
        line-height: 22px;
      }
      .titles {
        height: 1rem;
        text-align: center;
        font: 400 0.4rem/1rem "微软雅黑";
        color: #e9574b;
      }
    }
    .bottomMsg {
      margin: 0.2rem auto;
      height: 10%;
      font: 400 16px/1rem "微软雅黑";
    }
  }
}
.user_set1 {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: url("../../../assets/home/beijing.jpg") center no-repeat;
  background-size: 100% 100%;
  z-index: 999;
  padding: 0;
  .msg_box {
    position: fixed;
    width: 80%;

    left: 10%;
    bottom: 0.5rem;
    top: 3.6rem;

    overflow: auto;
    &.msg_box_liulanq{
       top: 4.5rem;
    }
    .msg_info {
      p {
        text-align: left;
        font-size: 14px;
        line-height: 22px;
      }
      .titles {
        height: 1rem;
        text-align: center;
        font: 400 0.4rem/1rem "微软雅黑";
        color: #e9574b;
      }
    }
    .bottomMsg {
      margin: 0.2rem auto;
      height: 10%;
      font: 400 16px/1rem "微软雅黑";
    }
  }
}
</style>

<template>
    <div :class="{'user_set':IosTop,'user_set1':wxTop}">
        <div class="msg_box" :class="{msg_box_liulanq:IosTop}" v-if="DataShow">
            <div class="msg_info">
                <div >
                    <div>
                        <p class="titles">积分规则</p>
                        <p>{{showData.pointRule}}</p>
                    </div>
                     <div>
                        <p class="titles">积分获取</p>
                        <p>{{showData.pointTake}}</p>
                     </div>
                     <div>
                        <p class="titles">积分消费</p>
                        <p>{{showData.pointConsume}}</p>
                     </div>
                </div>
            </div>
            <div class="bottomMsg">最终解释权归国安家所有</div>
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      showData: {
        pointConsume: "",
        pointRule: "",
        pointTake: "",
      },
      IosTop: false,
      wxTop: false,
      DataShow:false,
    };
  },
  mounted() {
    this.post(
      "commonPoint/pointTypeController/getInfoRule",
      {"agenttype" :"1"},
      { interfaceType: "intergral" }
    ).then(res => {
      if(res.code==2002){
         this.showData = res.obj;
         this.DataShow = true;
      } else{
        this.DataShow = false;
      }
      //    console.log(res)
     
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
      
    // 初始化页面
    requireData(url, data = {}) {
      // let token = localStorage.getItem('token');
      return fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
          // "Authorization": token
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      });
    }
    
  }
};
</script>

