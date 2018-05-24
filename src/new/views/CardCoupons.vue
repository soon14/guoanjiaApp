<template>
    <div class="CardCoupons" style="background:#f5f5f5;">

        <div class="cardList"  :class="{'AndroidTop':AndroidTop,'weixin':phonePage}">
            <ul style="background:#f5f5f5;">
                <li class="lists" v-for="(item,index) in cardCoupons" :key="index">
                  <div class="cardBoxbg" :class="{cardBoxUsed:(item.cardType==1&&item.type==3)||((item.cardType==2||item.cardType==3)&&item.type ==1)}">
                      <div class="carfrom">{{item.cardFrom}}</div>
                    
                      <div class="csrdname"> 
                        <span class="span2" >{{item.cardInfo}}</span>
                        
                        <span class="span1">
                          ￥
                        </span>
                      </div>
                      <div class="card_info">
                        {{item.cardName}}
                      
                      </div>
                      <div class="card_info_txt">{{item.explain}}</div>
                      <div class="CardNum">
                        {{item.activationCode}}
                        <div v-if="item.cardType==1&&item.type ==1" class="btn_type" @click="extractClick(item)"></div>
                        <div v-if="item.cardType==1&&item.type ==0" class="btn_type2"></div>
                        <div v-if="item.cardType==1&&item.type ==2" class="btn_type3">提现中</div>
                        <div v-if="item.cardType==1&&item.type ==3" class="btn_type4">已提现</div>
                        <div v-if="(item.cardType==2||item.cardType==3)&&item.type ==1" class="btn_type4">已使用</div>
                      </div>
                      <div class="useInfomation" @click="useInfomation(item.cardType)"></div>
                  </div>
                </li> 
            </ul>
        </div>
        <div class="market1" v-show="marked"></div>
        <!-- 遮罩层 -->
        <div class="market" v-show="showMarket" @click="marketClick"></div>
        <!-- 弹窗部分 -->
        <div class="bankNum" v-show="showMarket">
            <div class="bank">
                <div class="explain">您尚未绑定银行卡，请先绑定银行卡</div>
                <div class="bankCardOrBankNum">
                    <div class="labelStyle">
                        <x-input class="leftName" name="openingBank" v-model="openingBank" placeholder="请输入开户行名称"></x-input>
                    </div>
                    <div class="labelStyle" style="border-top:none;">
                        <x-input class="leftName" name="bankCardNumber" v-model="bankCardNumber" keyboard="number" placeholder="请输入银行卡号"></x-input>
                    </div>
                </div>
                <div class="bankBottom">
                    <div @click="exitClick">取消</div>
                    <div @click="onBtnClick">确定</div>
                </div>
            </div>
        </div>
        <loading :show="loadingShow" class="Couponsloading"></loading>


        <div class="useCadeInfoPage" v-if="this.InfoPageIndex!=0">
          <div  :class="{useCadeInfoPage_bg1:InfoPageIndex==1,useCadeInfoPage_bg2:InfoPageIndex==2,useCadeInfoPage_bg3:InfoPageIndex==3,phoneType:phonePage}" >
            <span @click="InfoPageIndex=0"></span>
          </div>
        </div>
    </div>
</template>

<script>
import { Divider,Loading } from "vux";
export default {
  components: {
    Divider,
    Loading
  },
  data() {
    return {
      phonePage:false,//是否是手机网页
      // 卡券说明显示内容
      InfoPageIndex:0,
      // 加载是否显示
      loadingShow:false,
      // 控制遮罩层显示
      showMarket: false,
      // 卡券集合
      cardCoupons: [
        // { AmountMoney: "1000", AmountNumber: "001" },
        // { AmountMoney: "1000", AmountNumber: "001" }
      ],
      // 说明集合
      cardExplain: [
        "购房成功后可提现（成功标志为网签）；",
        "仅限购买国安家代理的房地产项目后可提现；",
        "本卡使用规则最终解释权归国安家所有；"
      ],
      openingBank: "",
      bankCardNumber: "",
      cardid: {},
      marked: false,
      AndroidTop: false
    };
  },
  methods: {
    //  列表加载方法
    CardCouponsListLoad() {
      this.get("/cash/getCash", { interfaceType: "collect" }).then(
        response => {
          if(response.code == 200){
            if (response.data.length>0) {
              this.cardCoupons = response.data;
              this.cardCoupons.forEach(item=>{
                if(item.cardType==1){
                //  现金
                item.cardInfo = 50;
                item.cardName ='现金卡';
                item.cardFrom ='-新房';
                item.explain = ''
               } 
               if(item.cardType==2){
                  item.cardInfo = 188;
                  item.cardName ='抵扣券';
                  item.cardFrom ='-租房';
                   item.explain = '业主和租客都可以享用的优惠'
               }
              if(item.cardType==3){
                  item.cardInfo = '8折';
                  item.cardName ='服务费';
                  item.cardFrom ='-租房';
                  item.explain = '首次入住国安家用券服务费八折优惠'
               }
              })
            } else {
              // alert(JSON.stringify(response));
              this.marked = true;
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 提现的点击事件
    extractClick(item) {
      //   this.showMarket = true;
        this.loadingShow = true
      this.get("/cash/appUpdateTypeApp?type=" + "2" + "&id=" + item.id,{interfaceType: "collect" }).then(
        response => {
        this.loadingShow = false
          
          // console.log(response);
          if (response.code == 200) {
            // this.cardCoupons = response.data;
            this.CardCouponsListLoad();
          } else {
            this.showMarket = true;
            this.cardid = item;
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 取消的点击事件
    exitClick() {
      this.showMarket = false;
    },
    // 确定的点击事件
    onBtnClick() {
      let Data = {
        bankName: this.openingBank,
        bankCardNumber: this.bankCardNumber
      };
      this.post("/userInfoController/saveUnionUserInfo", Data,{interfaceType: "collect" }).then(res => {
        // console.log(123,res)
        if (res.code == 200) {
          this.showMarket = false;
          this.extractClick(this.cardid);
        }
      });
      // this.showMarket = false;
    },
    // 遮罩层的点击事件
    marketClick() {
      this.showMarket = false;
    },
    // 点券使用说明
    useInfomation(n){
      this.InfoPageIndex = n
      
    }
  
  },
  created(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/micromessenger/i) == "micromessenger"){
     this.phonePage = true
    }else{
       this.phonePage = false
    }
  },
  mounted() {
    this.CardCouponsListLoad();
    if (!this.AndroidOrIos()) {
      // console.log(this.AndroidOrIos());
      this.AndroidTop = false;
    } else {
      this.AndroidTop = true;
    }
    
  }
};
</script>
<style lang="less">
  
    .Couponsloading{
      .weui-toast{
        width: 2.6em;
        min-height: 2.6em;
      }
    }
  
</style>

<style lang="less" scoped>
.body{
  width:100%;
  height: 100%;
  // background:blue;
   background:#f5f5f5;
   
  *{
    box-sizing: border-box;
    text-align: center;
  }
}
.CardCoupons{
  width:100%;
  height: 100%;
  overflow: hidden !important;
}
.useCadeInfoPage{
     position: fixed;
     top:0;
     left: 0;
     bottom: 0;
     right: 0;
     background-color: rgba(0,0,0,0.5);
     .useCadeInfoPage_bg1,
     .useCadeInfoPage_bg2{
       width: 100%;
       height: 100%;
       position: relative;
       &.phoneType{
          transform:translateX(1%) translateY(1%);
          span{
             top: 10px;
          }
       }
       span{
          width: 0.7rem;
          height: 0.7em;
          content:"";
          position:absolute;
          top: 50px;
          right:0.3rem;
       }
     }
     .useCadeInfoPage_bg1{
        background:url("../../assets/home/CardCoupons/Cashstatement.png") center no-repeat;
        transform:translateX(1%) translateY(3%);
        background-size:  90%;
     }
     .useCadeInfoPage_bg2{
        background:url("../../assets/home/CardCoupons/188.png") center no-repeat;
        transform:translateX(1%) translateY(3%);
        background-size:  90%;
     }
      .useCadeInfoPage_bg3{
        width: 100%;
        height: 100%;
        background:url("../../assets/home/CardCoupons/8zhe.png") center no-repeat;
        transform:translateX(0%) translateY(7%);
        background-size:  88%;
        position: relative;
        &.phoneType{
          transform:translateX(1%) translateY(2%);
          span{
              top: 0px;
          }
        }
        span{
            width: 0.6rem;
            height: 0.6em;
            content:"";
            position:absolute;         
            background: url('../../assets/home/CardCoupons/closed.png') center no-repeat;
            background-size: 82%;
            top: 32px;
            right:0.3rem;
        }
      }
  }
ul{
  width: 100%;
  padding-bottom:2rem;
}
.cardList {
  width: 100%;
  height: 100%;
  position: fixed;
  top:0 ;
  left: 0;
  padding: 0 10px;
  margin-top: 1.4rem;
  overflow-y: auto ;
  box-sizing: border-box;
  background:#f5f5f5;
  &.weixin{
    margin-top:0;
  }
  *{
    
    font-size: 0.32rem;
   
    color: #fff;
  }
  .lists{
    overflow: hidden;
    margin-top: 20px;
    height: 4.4rem;
    width: 100%;
    padding: 0.2rem 10px;
    border-radius:10px;
    background-color: #fff;
    box-sizing: border-box;
    .cardBoxbg{
      width: 100%;
      height: 4rem;
      background: url("../../assets/home/CardCoupons/cardBg2.png") center no-repeat;
      background-size: contain;
      overflow: hidden;
      position: relative;
      &.cardBoxUsed{
        background: url("../../assets/home/CardCoupons/cardBg.png") center no-repeat;
        background-size: contain;
        *{
          color:#666 !important;
        }
      } 
      .carfrom{
    
        font-weight: 400;
        width: 1.5rem;
        height: 0.4rem;
        margin: 0.6rem 0 0 2.3rem;
        text-align: left;
        vertical-align: top;
      } 
      .csrdname{
        width: 2.4rem;
        height: 1rem;
        position: absolute;
        right: 0;
        top: 0.2rem;
        font-size: 0.6rem;
        line-height: 0.8rem;
     
        .span1{
          float: right;
          height: 100%;
          line-height:1rem ;
          padding-top:0.09rem; 
         
        }
        .span2{
          float: right;
          height: 100%;
          padding-right:0.5rem;
          line-height:1rem ;
          font-size: 0.7rem;
                 
        }
      }
      .card_info{
        width: 3rem;
        height: 1.5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 0.8rem;
        line-height: 1.5rem;
        
      }
      .card_info_txt{
          width: 100%;
          height: 0.6rem;
          font-size: 0.28rem;
          position: absolute;
          top: 2.6rem;
          left: 0;

        }
      .CardNum{
        width: 100%;
        height: 0.8rem;
        position: absolute;
        bottom: 0.15rem;
        left: 0;
        padding-left: 0.3rem;
        text-align: left;
        line-height: 0.8rem;
        .btn_type,
        .btn_type2,
        .btn_type3,
        .btn_type4{
          float: right;
          width: 1.5rem;
          height:0.6rem;
          margin-right:0.6rem;
        }

        .btn_type{
          background: url("../../assets/home/CardCoupons/Withdrawals.png") center no-repeat;
          background-size: 100%;
        }
        .btn_type2{
          background: url("../../assets/home/CardCoupons/activeNot.png") center no-repeat;
          background-size: 100%;
        }
        .btn_type3{
         
          color:#333;
        }
        .btn_type4{
           color:#999;
        }
        .btn{
          float: right;
          width: 1.5rem;
          height:0.6rem;
          margin-right:0.6rem;
        }
      }
      .useInfomation{
        width: 2rem;
        height: 0.5rem;
        position: absolute;
        right:0;
        top:1.3rem;
      }
    }
  }






    // .couponslist{
    //      box-sizing: border-box;
    //     height: 2.3rem;
    //     width: 100%;
    //     margin-top: 0.3rem;
    //     padding: 0 0.3rem;
    //     *{
    //         box-sizing: border-box;
    //       }
    //     .listBox{
    //         width: 100%;
    //         height: 100%;
    //         background: url("../../assets/home/Ckaquan.png") center no-repeat;
    //         background-size: 100% ;
    //         position: relative;
    //         .Info{             
    //             margin-left: 2.38rem;
    //             width: 57%;
    //             height: 100%;
    //             .titleInfo{
    //                 text-align: left;
    //                 height: 0.7rem;
    //                 line-height: 0.7rem;
    //                 font-size:14px;
    //                 span{
    //                     display: inline-block;
    //                     font-size:18px;
    //                     height: 0.7rem;
    //                     font-weight: 700;
    //                     line-height: 0.7rem;
    //                 }
    //             }
    //             .msgInfo{
    //                 width: 100%;
    //                 height: 1.3rem;
    //                 border:1px solid #F7B0AE;
                    
    //                 .codenum{
    //                     margin-top:10px;
    //                     width: 100%;
    //                     height: 0.6rem;
    //                     line-height: 0.6rem;
    //                     font-size: 14px;
    //                     color: #EB4E49
    //                 }
    //                 .Notes{
    //                     font-size: 12px;
    //                     width: 100%;
    //                     height: 18px;
    //                     line-height: 18px;
    //                     color:#F7B0AE;
    //                 }
                    
    //             }
                
    //         }
    //         .showExplain{
    //             position: absolute;
    //             width: 1rem;
    //             height: 1rem;
    //             right: 0;
    //             top: 0;
    //         }
            
    //     }
    // }
  // .li_newHouse {
  //   font-size: 18px;
  //   *{
  //     font-size: 18px;
  //   }
  //   width: 90%;
  //   margin: 10px auto;
  //   padding-bottom: 0.2rem;
  //   background: #fff;
  //   border-radius: 0.2rem;
  //   // 头部部分
  // }
    
}
.bankNum {
  width: 80%;
  height: 300px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 10%;
  z-index: 151;
  *{
    font-size: 0.3rem;
    box-sizing: border-box;
  }
  .bank {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../../static/new/img/bankNum.png") no-repeat;
    background-size: 100% 100%;
    .explain {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      position: absolute;
      top: 100px;
      font-size: 0.32rem;
      text-align: center;
    }
    .bankCardOrBankNum {
      width: 90%;
      margin-left: 5%;
      position: absolute;
      left: 0;
      top: 150px;
      // background:yellow;
      .labelStyle {
        width: 100%; // margin-left: 10px;
        border-top: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        font-size: 0.6rem;
      }
    }
    .bankBottom {
      width: 100%;
      height: 1rem;
      // background:red;
      position: absolute;
      left: 0;
      bottom: 0;
      border-top: 1px solid #f5f5f5;
      div {
        float: left;
        width: 50%;
        height: 100%;
        line-height: 1rem;
        font-size: 0.32rem;
      }
      div:nth-child(1) {
        color: #ccc;
        border-right: 1px solid #f5f5f5;
      }
      div:nth-child(2) {
        color: #d7000f;
      }
    }
  }
}
.market1 {
  width: 100%;
  height: 500px;
  background: url("../../../static/new/img/noData.png") no-repeat 50% 20%;
  background-size: 70%;
  // background:red;
  opacity: 0.8;
  // position: fixed;
  // left: 0;
  // bottom: 0;
  // top: 15%;
  // right: 0;
  margin:70px auto;
  z-index: 180;
}
.AndroidTop {
  width: 100%;
  height: 4rem;
  background: #e24e59;
  border-top: 1px solid #ccc;
  position: relative;
  margin-top: 47px;
  .edit {
    width: 2rem;
    height: 1rem;
    background: url("../../../static/new/img/myselfInfo.png") no-repeat;
    background-size: 100%;
    position: absolute;
    right: 0;
    top: 0.5rem;
  }
}
</style>

