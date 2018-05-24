<template>
    <div class='footerbody'>
        <div class="footer">
            <div>
                <img :src="src" alt="">
                <span v-if='collection' @click="collentClick">收藏</span>
                <span v-else @click="quitCollentClick" style='color:#e24e59'>已收藏</span>
            </div>
            <div @click='appointmentClick'>
                <img src="../../../../../static/new/newhouseimg/yuyue.png" alt="">
                <span>预约看房</span>
            </div>
            <div @click='call'>
                <img src="../../../../../static/new/newhouseimg/dianhua.png" alt="">
                <span>电话咨询</span>
            </div>
        </div>
        <div class="market" style="z-index:149;" v-show="market" @click="markedClick"></div>
        <div class="dialog" v-show="shows" v-transfer-dom>
            <div class="dialogTop">我要看房</div>
            <div style="border-radius:.25rem;">
                <group class="GGroup" title="预约看房">
                    <x-input class="labelStyle" placeholder="预约看房" v-model="rooms" :show-clear="false" placeholder-align="left"></x-input>
                </group>
                <group class="GGroup" title="姓　　名">
                    <x-input class="labelStyle" placeholder="请输入姓名" name="username" v-model="username"></x-input>
                </group>
                <group class="GGroup" title="人　　数">
                    <x-input class="labelStyle" placeholder="请输入看房人数" name="numberPeople" type="number" v-model="numberPeople"></x-input>
                </group>
                <group class="GGroup" title="手机号码">
                    <x-input class="labelStyle" placeholder="请输入手机号码" name="mobile" v-model="mobile" keyboard="number" is-type="china-mobile"></x-input>
                </group>
                <group class="GGroup" title="预约时间">
                    <datetime-range class="labelStyle" title='请选择' :start-date="startdate" :end-date="enddate" :value="Showingsdate" @on-change="onChange"></datetime-range>
                </group>
                <button class="btnYuyue" @click="btnSubClick">立即预约</button>
            </div>
        </div>
    </div>
</template>
<script>
import { TransferDom} from "vux";
    export default {
        data(){
            return {
                rooms:'',
                username:'',
                numberPeople:'',
                mobile:'',
                startdate:'',
                enddate:'',
                Showingsdate: [],
                selecteddate: null,
                shows:false,
                market:false,
                collection:true,
                src:'../../../../../static/new/newhouseimg/shoucang.png'
            }
        },
        mounted(){
            let date = new Date();
            let nowmonth = date.getMonth() + 1;
            this.startdate = date.getFullYear() + "/" + nowmonth + "/" + date.getDate();
            date.setMonth(date.getMonth() + 1);
            let nextmonth = date.getMonth() + 1;
            this.enddate = date.getFullYear() + "/" + nextmonth + "/" + date.getDate();
            // 获取localstorage
            let user = JSON.parse(localStorage.getItem("userInfroMap"));
            if (!this.notEmpty(user)) {
                let userArr = user.collectList;
                let hres = window.location.href;
                for (let i = 0; i < userArr.length; i++) {
                    if (hres == userArr[i]) {
                        this.collection = false;
                        this.src = '../../../../../static/new/newhouseimg/star.png';
                        return;
                    }
                }
            }
        },
        props:{
            buildname:{
                type:String
            },
            housetypedetail:{
                type:Object
            }
        },
        directives: {
            TransferDom
        },
        methods:{
            msgalert(msg) {
                this.$vux.toast.show({
                    text: msg,
                    type: "text"
                });
            },
            //电话咨询
            call(){
                window.location.href = 'tel://4009002225'
            },
            onChange(val) {
                this.selecteddate = val[0] + " " + val[1] + ":" + val[2] + ":" + "00";
            },
            //立即预约
            btnSubClick() {
                if (this.notEmpty(this.username)) {
                    this.msgalert("请输入姓名");
                    return false;
                }
                if (this.notEmpty(this.mobile)) {
                    this.msgalert("请输入电话");
                    return false;
                }
                if (this.notEmpty(this.numberPeople)) {
                    this.msgalert("请输入带看人数");
                    return false;
                }
                if (this.notEmpty(this.selecteddate)) {
                    this.msgalert("请选择看房时间");
                    return false;
                }

                let post_data = {
                    custname: this.username, //姓名
                    phonenum: this.mobile, //客户电话
                    custphone: localStorage.getItem("userPhone"), //注册手机号
                    scancount: this.numberPeople, //看房人数
                    buildid: this.getStorage('BUILDID'), //楼盘id
                    scantime: this.selecteddate, //预约时间
                    myappointmentUrl: window.location.href,
                    buildname: this.rooms
                };
                this.post("palmsaleapp/api/v1/build/collectsave", post_data, {
                    interfaceType: "newHouse"
                }).then(response => {
                    if (response.status == 200) {
                        this.msgalert(response.msg);
                        this.market = false;
                        this.shows = false;
                    } else {
                        this.msgalert(response.msg);
                    }
                },response => {
                    this.msgalert(response.msg);
                });
            },
            //遮罩层
            markedClick() {
                this.shows = false;
                this.market = false;
            },
            //预约看房
            appointmentClick() {
                if (!this.LoToken() && !this.UserPhone()) {
                    this.rooms = this.getStorage('BUILDNAME');
                    let username = localStorage.getItem("userName");
                    if (!this.notEmpty(username)) {
                        this.username = username;
                    } else {
                        this.username = "";
                    }
                    this.mobile = localStorage.getItem("userPhone");
                    this.shows = true;
                    this.market = true;
                } else {
                    this.$store.state.loginShow = true;
                }
            },
            //收藏按钮
            collentClick() {
                if (!this.LoToken() && !this.UserPhone()) {
                    let post_data = {};
                    let path = window.location.hash.slice(2,17);
                    if(path == 'housetypedetail'){
                        //还需重新调试
                        post_data = {
                            collectTitle: this.housetypedetail.housetypecode,//户型
                            collectResume: this.housetypedetail.salearea,//大小
                            collectContent: this.housetypedetail.housetypedescribe,//厅室卫
                            adjunctContent: this.housetypedetail.towards,//朝向
                            imageName: this.housetypedetail.housetypefilename,//图片名称
                            collectUrl: window.location.href,//当前url
                            type: '2',//收藏的类型,楼盘为1,户型为2
                        }
                    }else{
                        post_data = {
                            collectTitle: this.getStorage('BUILDNAME'), //楼盘名
                            collectResume: this.getStorage('AVERAGEPRICE'), //价格
                            collectContent: this.getStorage('ADDRESS'), //地址
                            adjunctContent: this.getStorage('BUILDINGAREA'), //建筑面积
                            imageName: this.getStorage('IMGNAME'), //图片名称
                            collectUrl: window.location.href, //当前url
                            type: "1" //收藏的类型,楼盘为1,户型为2
                        };
                    }
                    this.post("CollectController/saveCollectInfo", post_data, {
                        interfaceType: "collect"
                    }).then(
                    response => {
                        if (response.code == 200) {
                            this.msgalert("收藏成功");
                            let a = JSON.parse(localStorage.getItem("userInfroMap"));
                            a.collectList.push(window.location.href);
                            localStorage.setItem("userInfroMap", JSON.stringify(a));
                            this.collection = false;
                            this.src = '../../../../../static/new/newhouseimg/star.png'
                        } else {
                            // this.showalert(response.msg);
                        }
                    },
                    response => {
                        this.showalert(response.msg);
                    }
                    );
                } else {
                    this.$store.state.loginShow = true;
                }
            },
            // 取消收藏按钮
            quitCollentClick() {
                let post_data = {
                    collectUrl: window.location.href
                };
                this.post("CollectController/delCollectInfo", post_data, {
                    interfaceType: "collect"
                }).then(response => {
                    if (response.code == 200) {
                        this.msgalert("取消收藏成功");
                        let a = JSON.parse(localStorage.getItem("userInfroMap"));
                        let arr = a.collectList;
                        let hrefs = window.location.href;
                        arr.splice(arr.indexOf(hrefs), 1);
                        a.collectList = arr;
                        localStorage.setItem("userInfroMap", JSON.stringify(a));
                        this.collection = true;
                        this.src = '../../../../../static/new/newhouseimg/shoucang.png'
                    }
                },response => {
                    this.showalert(response.msg);
                })
            }
        }
    }
</script>
<style lang='less'>
    .footer{
        position: fixed;
        bottom: 0;
        width:100%;
        display: flex;
        box-shadow: 0 0 5px 1px #ccc;
        &>div{
            flex:1;
            height:0.9rem;
            line-height: 0.9rem;
            text-align: center;
            font-size:0.3rem;
            img{
                display: inline-block;
                width:0.35rem;
                height: 0.35rem;
                position: relative;
                top:-0.03rem;
            }
            span{
                display: inline-block;
            }
        }
        &>div:nth-child(1){
            background-color: #fff;
            color:#323232;
        }
        &>div:nth-child(2){
            background-color: #e69249;
            color:#fff;
        }
        &>div:nth-child(3){
            background-color: #d7000f;
            color:#fff;
        }
        
    }
    .GGroup{
        padding:0 0.3rem;
        .labelStyle{
            padding:0;
        }
        .weui-cells::before,
        .weui-cells::after,
        .vux-cell-box:before{
            display:none; 
        }
        .weui-cells{
            padding:0.1rem 0.2rem;
            border-radius: 0.15rem;
            font-size:0.24rem;
            color:#323232;
            border:1px solid #D9D9D9;
        }
        .weui-cell{
            padding:0;
        }
        .weui-cells__title{
            margin: 0.08rem 0;
            padding-left: 0; 
            padding-right: 0; 
            font-size:0.24rem;
            color:#768082;
        }
    }
    
    .market {
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.8;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        margin: auto;
        z-index: 11;
    }
    .dialog {
        background: #ffffff;
        position: fixed;
        width: 90%;
        top: 13%;
        left: 5%;
        z-index: 150;
        border-radius: 0.25rem;
    }
    .dialogTop {
        position: relative;
        text-align: center;
        line-height: .9rem;
        background: #e69249;
        border-radius: 0.125rem 0.125rem 0 0;
        color: #fff;
        font-size: 0.32rem; // border-radius: .4rem .4rem 0 0;
        font-weight: 500;
    }
    .btnYuyue {
        display: block;
        margin: 0.2rem auto;
        padding:0.15rem 0.2rem;
        text-align: center;
        color: #fff;
        font-size: 0.28rem;
        background: #e69249;
        border: none;
        border-radius: 0.125rem; // margin-bottom: 1rem;
    }

</style>

