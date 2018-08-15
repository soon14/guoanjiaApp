<template>
    <div class='fixContent'>
        <div :class="{'collentTop':IosTop,'collentTop1':AndroidTop,'collentWxTop':this.$store.state.showWxTitle}">
            <div class='topContent'>
                <div class='topContentLeft'>
                    <img style='width:100%;height:100%;border-radius:.1rem;' :src='ImgUrl' alt='' />
                </div>
                <div class='topContentRight'>
                    <div class="topContentRightName">[{{BuildCity}}]  {{BuildName}}</div>
                    <div class="topContentRightPrice"><span>{{BuildPrice}}</span>/M㎡</div>
                    <div class="topContentRightArea">{{BuildArea}}㎡</div>
                    <div class="topContentRightAddress">{{BuildAddress}}</div>
                </div>
            </div>
            <!-- 横线 -->
            <div class="Division"></div>

            <!-- 客户信息 -->
            <div class="labelStyle">
                <x-input class="leftName" title="姓名" name="username" v-model='username' :show-clear='false' placeholder="请输入姓名"></x-input>
            </div>
            <div class="labelStyle">
                <x-input class="leftName" title="电话" name="userPhone" v-model='userPhone' keyboard="number" :show-clear='false' is-type="china-mobile" placeholder="请输入电话"></x-input>
            </div>
            <div class="labelStyle">
                <x-input class="leftName" title="人数" name="numPeople" v-model='numPeople' keyboard="number" :show-clear='false'  placeholder="请输入看房人数"></x-input>
            </div>
            <datetime-range class="labelStyle" style="font-size:.3rem;margin-left:-5px;" title="时间" placeholder="请选择看房时间" :start-date="startdate" :end-date="enddate" :value="Showingsdate" @on-change="onChange" ></datetime-range>
        </div>
        
        <!-- 提交按钮 -->
        <button class='subBtn' @click='subClick'>提交约看</button>
    </div>
</template>

<script>
export default {
   components: {},
   data() {
    return {
        AndroidTop: false,
        IosTop: false,
        wxTop: false,
        buildID: this.$route.query.buildID,
        ImgUrl:'',
        BuildCity:'',
        BuildName:"",
        BuildPrice:'',
        BuildArea:'',
        BuildAddress:'',
        username:'',
        userPhone:'',
        numPeople:'',
        startdate: "", //开始的时间
        enddate: "", //结束的时间
        Showingsdate: [], //预约时间
        selecteddate:null,//看房时间
    }
   },
   methods:{
    //    加载预约的楼盘的信息
        lodeBuildInfoFn(){
            this.get("palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=" + this.buildID, {
                interfaceType: "newHouse"
            }).then(
                response => {
                    // console.log('134',response);
                    if(response.status==200){
                        this.ImgUrl= `https://img.guoanfamily.com/${response.data.firstpicture}`;
                        this.BuildCity = response.data.city;
                        this.BuildName =  response.data.buildname;
                        this.BuildPrice =   response.data.averageprice;
                        this.BuildArea = response.data.arearegion;
                        this.BuildAddress = response.data.address;
                    }
                    
            })
        },
    //    时间选择框
        onChange(val) {
        // console.log('change', val)
        this.selecteddate = val[0] + " " + val[1] + ":" + val[2] + ":" + "00";
        },
        // 提交约看的点击事件
        subClick(){
            if (this.notEmpty(this.username)) {
                // this.showalert('请输入姓名');
                this.msgalert("请输入姓名");
                return false;
            }
            if (this.notEmpty(this.userPhone)) {
                this.msgalert("请输入电话");
                return false;
            }
            if (this.notEmpty(this.numPeople)) {
                this.msgalert("请输入带看人数");
                return false;
            }
            if (this.notEmpty(this.selecteddate)) {
                this.msgalert("请选择看房时间");
                return false;
            }
            let post_data = {
                custname: this.username, //姓名
                phonenum: this.userPhone, //客户电话
                custphone: localStorage.getItem("userPhone"), //注册手机号
                scancount: this.numPeople, //看房人数
                buildid: this.buildID, //楼盘id
                scantime: this.selecteddate, //预约时间
                myappointmentUrl: window.location.href,
                buildname: this.BuildName
            };
             this.post("palmsaleapp/api/v1/build/collectsave", post_data, {
                interfaceType: "newHouse"
            }).then(
                response => {
                if (response.status == 200) {
                    this.msgalert(response.msg);
                    this.$router.push('/appointement')
                } else {
                    this.msgalert(response.msg);
                }
                },
                response => {
                    this.showalert(response.msg);
                }
            );
        },
    //    判断当前运行的环境
        threeEndJudgmentFn(){
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
       },
    //    弹窗的公共方法
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
       this.threeEndJudgmentFn();
       this.lodeBuildInfoFn();
        let username = localStorage.getItem('userName');
        if (!this.notEmpty(username)) {
            this.username = username;
        } else {
            this.username = '';
        }
        this.userPhone = localStorage.getItem('userPhone');
       // 日期时间处理
        let date = new Date();
        let nowmonth = date.getMonth() + 1;
        this.startdate = date.getFullYear() + "/" + nowmonth + "/" + date.getDate();
        date.setMonth(date.getMonth() + 1);
        let nextmonth = date.getMonth() + 1;
        this.enddate = date.getFullYear() + "/" + nextmonth + "/" + date.getDate();
   },
}
</script>

<style scoped lang="less">
@font-face{
	font-family:font01;
	src:url("../..//fonts/BEBASNEUE.otf");
}
.collentTop {
  position: fixed;
  top: 80px;
  left: .3rem;
  right:.3rem;
  z-index: 11;
  height: auto;
}
.collentTop1 {
  position: fixed;
  top: 47px;
  left: 0.3rem;
  right:0.3rem;
  z-index: 11;
  height: auto;
}
.collentWxTop {
  position: fixed;
  top: 0px;
  right:.3rem;
  left: .3rem;
  z-index: 11;
  height: auto;
}
.topContent{
    width:100%;
    height:3rem;
    overflow:hidden;
    .topContentLeft{
        width:2.8rem;
        height:2.3rem;
        float:left;
        margin-top:.35rem;
    }
    .topContentRight{
       margin-left:3.1rem;
       height:100%;
       text-align:left;
       .topContentRightName{
           overflow: hidden;
           white-space: nowrap;
           text-overflow: ellipsis;
           width:100%;
           height:.5rem;
           margin-top:.35rem;
           font-size:.4rem;
           color:#000000;
       }
       .topContentRightPrice{
           overflow: hidden;
           white-space: nowrap;
           text-overflow: ellipsis;
           margin-top:.15rem;
           width:100%;
           line-height:.4rem;
           font-family:'Source Han Sans CN';
           font-size:.35rem;
           height:.4rem;
           color:#000000;
           span{
               font-size:font01;
           }
       }
       .topContentRightArea{
           overflow: hidden;
           white-space: nowrap;
           text-overflow: ellipsis;
           margin-top:.3rem;
           width:100%;
           height:.4rem;
           font-size:.28rem;
           line-height:.4rem;
           color:#999999;
       }
       .topContentRightAddress{
           overflow: hidden;
           white-space: nowrap;
           text-overflow: ellipsis;
           margin-top:.15rem;
           width:100%;
           height:.4rem;
           font-size:.28rem;
           line-height:.4rem;
           color:#999999;
       }
    }
}
.Division{
    width:100%;
    height:.2rem;
    background:#eeeeee;
    margin-top:.2rem;
}
.labelStyle {
    border-bottom: 1px solid #e6e6e6;
    font-size: 0.3rem;
    color:#000000;
}
.subBtn {
   position:absolute;
   left:.3rem;
   right:.3rem;
   bottom:.36rem;
   height:.9rem;
   width:6.9rem;
   border:none;
   text-align:center;
   color:#ffffff;
   border-radius:.1rem;
   line-height:.9rem;
   font-size:.32rem;
   background:#e34b3e;
}
</style>
<style lang='less'>
    .leftName {
        width:100%;
        margin:0;
        padding-left:0;
        height:.5rem;
        margin-left:10px;
        .weui-label {
            width: 1.2rem !important;
            text-align: left;
            color:#00000 !important;
        }
    }
    .labelStyle{
        .weui-cell__hd{
            .weui-label{
                width:1.2rem !important;
                text-align:left;
                color:#000000;
                font-weight:200;
            }
        }
        .vux-cell-primary{
            .vux-popup-picker-select{
                text-align:left;
            }
        } 
        
    }
    .labelStyle .vux-popup-picker-select{
        text-align:left !important;
        .vux-cell-placeholder{
            float: left;
        }
    }
</style>
