<style scoped lang="scss">
    @import "../../style/theme.scss";
    .content {
      width:92%;
      margin:0 auto;
      background-color: $greyColor;
    }
    .ts {
      width:100%;
      height:0.7rem;
      line-height:0.7rem;
      background-color:#fff;
      text-indent:0.8rem;
      margin-top:0.4rem;
      position:relative;
      .tsxq {
        font-size:0.25rem;
      }
      img{
        position: absolute;
        margin-top: 0.5rem;
        width: 0.4rem;
        left: 0.3rem;
        top: 50%;
        margin-top: -0.2rem;
      }
    }
    .tsnr {
      width:100%;
      background-color:#fff;
      padding:0.25rem 0;
      margin-top:0.1rem;
      textarea {
        font-size:0.25rem;
        width:90%;
        margin:0 auto;
        display:block;
        height:3rem;
        padding:0.2rem;
        outline:none;
        resize:none;
        // font-style:oblique;
      }
    }
    .tslxfs {
      width:100%;
      height:0.7rem;
      line-height:0.7rem;
      background-color:#fff;
      text-indent:0.8rem;
      margin-top:0.4rem;
      position:relative;
      .tsxq {
        font-size:0.22rem;
        color:$partColor;
      }
      img{
        position: absolute;
        width: 0.3rem;
        left: 0.3rem;
        top: 50%;
        margin-top: -0.15rem;
      }
    }
    .lxr {
      width:100%;
      height:1.4rem;
      line-height:0.7rem;
      background-color:#fff;
      text-indent:0.8rem;
      margin-top:0.1rem;
      position:relative;
      .line {
        width:100%;
        height:1rem;
        line-height:1rem;
        padding-top: 0.2rem;
        .tsrxm {
          font-size:0.35rem;
          float:left;
          text-indent:0.3rem;
          width:1.9rem;
        }
        .xingming {
          font-size: 0.35rem;
          float: left;
          width: 4.5rem;
          height: 0.8rem;
          text-indent: 0.3rem;
          border: none;
          background-size: 100% 100%;
        }
      }
    }
    .sumbit {
      margin: 0 auto;
      margin-top: 0.2rem;
      width:100%;
      height:0.9rem;
      line-height:0.9rem;
      font-size:0.35rem;
      text-align:center;
      background-color:$baseColor;
      color:#fff;
      border-radius:5px;
    }
    .weui-dialog__hd {
        padding: 0.2em 0.6em 0.5em;
    }
</style>

<template>
    <!-- 投诉详情 -->
    <div class="content">
      <div class="ts">
        <img src="../../../../static/rent/img/collection/fangzi.png">
        <div class="tsxq">投诉详情</div>
      </div>
      <div class="tsnr">
        <textarea maxlength="200" v-model="questionDescription" placeholder="请您详细描述投诉对象及理由，保证国安家及时准确处理您的投诉（200个汉字以内）" cols="30" rows="10"></textarea>
      </div>
      <div class="tslxfs">
        <img src="../../../../static/rent/img/collection/xingxing.png">
        <div class="tsxq">感谢您提出的建议，我们会及时和您取得联系</div>
      </div>
      <div class="lxr">
        <div class="line">
          <div class="tsrxm">联系电话</div>
          <div class="xingming" type="text">{{phone}}</div>
        </div>
      </div>
      <div class="sumbit" @click="sumbit">
        提交
      </div>
      <div class="bottom"></div>
      <div class="btm"></div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            //userId:this.getStorage(this.KEYS.USER_INFO).id,//投诉者id
            questionDescription:"",    //问题描述
            phone:localStorage.getItem("userPhone").substr(0, 3) + '****' + localStorage.getItem("userPhone").substr(7),//投诉者电话
            sourceCode:"0056011",
          }
        },
        components: {
        },
        computed: {
        },
        created(){
          this.questionDescription = "";
        },
        methods: {
          sumbit(){
            this.post("CComplaintController/save",{
                complaintId:this.userId,//用户id
                questionDescription:this.questionDescription,//问题描述
                complaintIdentity:this.complaintIdentity,//投诉对象
                sourceCode:this.sourceCode,
            }).then(res =>{

              this.questionDescription = "";
              this.$vux.alert.show({
                title: '投诉结果',
                content: res.msg,
                onShow () {
                  //console.log('Plugin: I\'m showing')
                },
                onHide () {
                  //console.log('Plugin: I\'m hiding')
                }
              })
            })
          }
        }
    }
</script>
