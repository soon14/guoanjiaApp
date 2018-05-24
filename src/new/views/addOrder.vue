<style lang="less">

    .bases{
        font-size: 16px;
        text-align: left;
        margin-left :0px;

    }
    .clear{
        clear:both;
        height:0;
        line-height:0;
        font-size:0;
        margin:0;
        padding:0;
    }
   .vux-popup-picker-value {
        display: inline-block;
        height: 24px;
        line-height: 32px;
        overflow: hidden;
    }
    .weui-cell_access .weui-cell__ft:after {
        margin-top: -6px;
    }
    .chouse_time{
        margin-top: 60px;
        width: 100%;
        height: 44px;
        position: fixed;
        top: 0;
        z-index: 300;

    }
    .teb_left{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 25%;
        margin-top:50px ;
        overflow: auto;
        box-sizing: content-box;
    }
    .teb_left_li{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
    }
    .content_right{
        margin-top:51px ;
        float: right;
        width: 75%;
        overflow: auto;

    }
   .content_right.marbottom{
       margin-bottom: 81px
   }
    .content_right_child{
        width: 100%;
        height: 95px;
        border: 1px solid #ccc;
        padding-top: 5px;
        // background-color: #efefef;
        box-sizing: border-box;
        margin-top:-1px;

    }
    .describe {
        height: 100%;
    }
    .content_right_child .imgs{
        float: left;
        width: 60px;
        background-color: blue;
        height: 60px;

    }
    .content_right_child .imgs .one_img{
         width: 60px;
    }
    .content_right_child .describe{
        overflow: hidden;
        padding-left:5px;
        position: relative
    }
    .content_right_child .describe .dish_title{
        height: 30px;
        font-size: 16px
    }
    .content_right_child .describe .dish_price{
        margin-top:20px;
        height: 24px;
    }
    .dish_Msg{
        position: absolute;
        top: 21px;
        left: 10px;
        font-size: 12px;
    }

     .content_right_child .describe .chouse_num{
         position: absolute;

         right: 0px;
         bottom: 10px;
         width:110px;
         height: 26px;
     }
    .out_paied{
       position: absolute;;
        width: 60px;
        height: 30px;
        line-height: 20px;
        right: 25px;
        bottom: 0;
        font-size: 16px;
        opacity: 0.8;
        transform-origin: 100% 100%;
        transform: rotate(10deg);
        text-align: center;
        color: red;
        border: 5px solid red;
        box-sizing: border-box;

     }
     .chouse_num .vux-number-round .vux-number-selector{
        padding: 0;
     }

    .content_right_child .describe .chouse_num .addBun{
        padding: 0;
        float: left;
        width: 24px;
        height:24px;
        border-radius: 50%;
        background-color: blue;
        font-size: 18px;
        color: white;
        border: none;
        outline:none;
    }
    .content_right_child .describe .chouse_num .subtract{
        padding: 0;
        float: right;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: blue;
        font-size: 18px;
        color: white;
        border: none;
        outline:none;
    }
    .shown_num{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 12px ;
        text-align: center;
        line-height: 24px;
        background-color: white;
    }
    .story_num{
        position: absolute;
        bottom: 30px;
        left: 40%;
        transform: translateX(-50%);
        font-size: 12px
    }

    .content_right_box{
       overflow:auto;

    }
    .title_data{
        height: 26px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        line-height: 26px;
        padding-left:5px;
        font-size: 14px;
        color:#999;
    }
    .bottom_car{
        height: 80px;
        border-top: 1px solid #ccc;
        position: fixed;
        bottom: 0;
        z-index: 1000;
        width: 100%;
        background-color: #fff;
    }
    .bottom_car_leftbox{
        width:25%;
        height: 80px;
        position: relative;
        background: url("../../../static/new/img/cart.png") center no-repeat;
        background-size: 50%;
        box-sizing: border-box;
        float: left;
        line-height: 60px;
    }
     .bottom_car_icn{
       width: 30px;
       height: 30px;
       float: left;

    }
    .bottom_car_rightbox{
        float: left;
        position: relative;
        width: 75%;
        padding: 5px;
        box-sizing: border-box;
        height: 80px;
        margin-top: 10px;
        .money_sum{
            height: 28px;
            font-size: 22px;
            line-height: 28px;
        }
    }
    .weui-btn.btn_style{
       position: absolute;
        right: 10px;
        top:15px;
    }
    .info{
        font-size: 12px;
    }
    .weui-cells.vux-no-group-title{
        margin: 0;
    }
    .slide {
        overflow: hidden;
        max-height: 0;
        transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
    }
    .animate {
        max-height: 9999px;
        transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
        transition-delay: 0s;
    }
    .weui-cell_select .weui-select{
        height: 40px;
    }
    .resule_dish_info{
       padding-top: 10px;
       border-bottom: 1px solid #ccc;
       text-align: center;
       line-height: 32px;
    }
    .resule_dish{
        position: absolute;
        bottom: 60px;
        width: 100%;
        max-height: 200px;
        overflow: auto;
        z-index: 1000;
        background-color: #fff;
    }
    .diah_infos{
        width: 30%;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        text-align: center;
    }
    .diah_infos.diah_sums{
        box-sizing: border-box;
   }
    .badge_style{
        position: absolute;
        right: 10%;
        top: 10%;

    }
    .teb_left_li.active{
         color: red;
         background-color: #ccc;
         border-left: 3px solid red;
         box-sizing: border-box;

    }
    .diah_sums .vux-number-round .vux-number-selector-sub,
    .diah_sums .vux-number-round .vux-number-selector-plus{
        padding: 0px;
    }
    .vux-inline-x-number{
        width: 110px;
    }
    .diah_sums .vux-inline-x-number{
        width: 90px;
        float: right;
        margin-top:5px;
    }
    .diah_sums .vux-number-round .vux-number-input {
        width: 35px !important;
        font-size: 16px;
    }
    .resule_dish{
        opacity: 0;
        z-index: -99;
        bottom: -200px;
        transition: all 0.8s;

    }
    .resule_dish.actived{
    z-index: 20;
    opacity: 1;
    bottom:80px;
    transition: bottom 0.5s;
    }
    .mask{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .3);
        z-index: 999;
    }
    .red_font{
        color: red;
        font-style:normal
    }
    .text_throu.red_font {
    color: #333;
    font-style:normal;
    text-decoration:line-through
    }
    .discount_price{
        position: absolute;
        top: 0px;
        left: 65px;

    }
    .noDeshies{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.8;
        top:15%;
        background: url("../../../static/new/img/noData.png") 50% 20% no-repeat;
        background-color: #fff;
        background-size: 70%;
    }
</style>
<template>
    <div class="body bases fixContent">
        <div :class="{chouse_time:!this.$store.state.showWxTitle}">
            <group  label-width="5em">
                <popup-picker title="就餐时间" :data="list1" v-model="value1"  @on-change="onChange2" ></popup-picker>
            </group>
        </div>
        <div class="teb_left">
            <!-- 左侧 -->
            <ul>
                <li class="teb_left_li"  v-for="(item, index) in showAllData" :key="index" :class="{active: active === index}" v-scroll-to="{
                    el: '#' + item.name,
                    container: 'body',
                    duration: 500,
                    easing: 'linear',
                    offset: -49,
                    cancelable: false,
                    onDone: onDone,
                    onCancel: false
                }" @click="changeActive(index)">{{item.name}}</li>
            </ul>
        </div>
        <div :class="{'content_right':true ,'right_box':true,'marbottom':showCar}">
            <!-- 右侧菜单 -->
              <div >
                 <div class="content_right_box"  v-for="(item,index) in showAllData" :key="index"  >
                    <div class="title_data"  :id="item.name" :ref="item.name">{{item.name}}</div>
                    <div class= "content_right_child"  v-for="(opas,index) in item.showDate" :key="index">
                        <div  class="describe">
                            <div class="dish_title">{{opas.name}}</div>
                            <div  class="dish_Msg" v-if="item.name=='套餐'">{{opas.dishMag}}</div>
                            <div class="dish_price">￥{{opas.price}}</div>
                            <div class="story_num" v-if="!(opas.storageNumber===null)&&item.name!=='套餐'">剩余{{opas.storageNumber}}份</div>
                            <div class="story_num" v-if="(opas.storageNumber===null)&&item.name!=='套餐'">不限量</div>
                            <div class="chouse_num">
                                <inline-x-number :min="0" :max="opas.storageNumber" v-if="opas.storageNumber>0" v-model="opas.chouseNum" button-style="round" @changeNum="changeNum(opas)"  ></inline-x-number>
                                <inline-x-number :min="0" v-if="opas.storageNumber===null" v-model="opas.chouseNum" button-style="round" @changeNum="changeNum(opas)"  ></inline-x-number>
                                <inline-x-number :min="0" v-if="item.name=='套餐'&&!(opas.storageNumber==0)" v-model="opas.chouseNum" button-style="round" @changeNum="changeNum(opas)"  ></inline-x-number>
                            </div>
                             <span class="out_paied" v-if="opas.storageNumber==0">售罄 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部购物车 -->
        <div class="bottom_car" v-show="showCar">
            <span class="bottom_car_leftbox" @click="Toshown">
                <badge v-show="dishLength>0" :text="dishLength" class="badge_style"></badge>
                <i class="bottom_car_icn" ></i>
            </span>
            <span class="bottom_car_rightbox">
                <div class="money_sum">￥<i :class="{'red_font':true,'text_throu':textThrou}">{{allPrice}}</i></div>
                 <span class="discount_price" v-if="textThrou">￥<i class="red_font payFor">{{factMoney}}</i></span>
                <span class="info">点击购物车查看详情</span>
                <x-button mini class="btn_style" type="warn" @click.native="upDishies">确认订单</x-button>
            </span>
            <div :class="{'resule_dish':true,'actived':Isshown}" >
                <div class="resule_dish_box">
                    <div  class="resule_dish_info" v-for="item in resuleDish" :key="item.id">
                        <span class="diah_infos diah_name">{{item.name}}</span>
                        <span class="diah_infos diah_price">￥{{item.price}}</span>
                        <span class="diah_infos diah_sums">
                            <inline-x-number :min="0" :max="item.storageNumber"  v-if="!showPrice&&item.storageNumber!==null"  v-model="item.chouseNum"  button-style="round" @changeNum="changeMineNum(item)"></inline-x-number>
                            <inline-x-number :min="0"   v-if="!showPrice&&item.storageNumber===null"  v-model="item.chouseNum"  button-style="round" @changeNum="changeMineNum(item)"></inline-x-number>
                            <span v-if="showPrice" >{{item.chouseNum}}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="noDeshies" v-if="isNoDesh"></div>
        <div class="mask" v-if="Isshown||showPrice">
        </div>
    </div>
</template>
<script>
import { Badge ,PopupPicker } from 'vux'
import InlineXNumber from '../components/xNumber/inline-x-number'//计数器
    export default {
        components: {
            Badge,
            InlineXNumber,
            PopupPicker
        },
        data(){
            return {
                show:false,
                isNoDesh:false,//是否无菜品
                offsetTopList:[],
                factMoney:0,
                orderTime:"",
                textThrou:false,
                resuleDish:[],
                showPrice:false,
                Isshown:false,
                dishLength:0,
                value1:[],
                active: 0,
                showCar:false,
                list1: [],
                showAllData:[],
                RorderDetails:[],
                saveDated:{},
                choeseTime:"",
            }
        },
        created(){
              window.onscroll = (e, l) => {
                if(this.frozen === true){
                    return;
                }
                let active = 0;

                this.offsetTopList.map((item, i) => {
                    if(window.scrollY + 50 > item){
                        active = i;
                    }
                });
                this.active = active;
            }
        },
        mounted(){
              //发送请求
            this.makeOpation ()
            let startChouseTime = this.list1[0][0]
            this.value1 = [startChouseTime]
            this.choeseTime= this.value1.toString()
        },
        methods:{
            //发送请求菜单
            reqData(upData){
                this.resuleDish=[];
                this.get("order/restaurant/queryVariety?queryTime="+upData,{interfaceType: "metorRest"}).then(res=>{
                    if(res.data){
                        localStorage.removeItem("chouseTime")
                        localStorage.setItem("chouseTime", this.choeseTime)
                        this.showAllData=[];
                        this.isNoDesh = false
                        res.data.forEach(item=>{
                            item.showDate.forEach(opas=>{
                                opas.chouseNum=0;

                                if(item.name==="套餐"){
                                    console.log(item)
                                    opas.dishMag="";
                                    opas.isFood="1"
                                    opas.dishes.forEach(its=>{

                                        if(its.isSell=="0"){
                                            opas.storageNumber=0
                                        }
                                        if(its.dishesNumber!=null){
                                            opas.dishMag+=its.name+its.dishesNumber+"份，"
                                        }else{
                                            opas.dishMag+=its.name+"，"
                                        }
                                    })
                                    opas.dishMag="（"+opas.dishMag.substring(0,opas.dishMag.length-1)+"）"

                                }else{
                                    opas.isFood="0"
                                }
                            })
                            if(item.showDate.length>0){
                                this.showAllData.push(item)
                            }
                        })
                        setTimeout(()=> {
                            this.offsetTopList=[];
                            this.showAllData.forEach(item => {
                                this.offsetTopList.push(this.$refs[item.name][0].offsetTop)
                            });
                        },200);
                    }else{
                        this.showAllData = []
                        this.isNoDesh = true
                    }
                })
            },
            // 处理数据
            makeUPDatas(arr){
                let orderDetail
                console.log("arr:",arr)
                arr.forEach(item=>{
                    orderDetail={}
                    orderDetail.menu_id = item.id;
                    orderDetail.price = parseFloat(item.price);
                    orderDetail.factMoney = 0
                    orderDetail.name = item.name
                    orderDetail.number = item.chouseNum;
                    orderDetail.isDiscount = item.isDiscount==1?1:0;
                    orderDetail.isFood = item.isFood

                    this.RorderDetails.push(orderDetail)
                })
            },
            upDishies(){
                if(!this.showPrice){
                    //上传菜品
                    if(this.resuleDish.length>0){
                        this.makeUPDatas(this.resuleDish)
                    }
                    //需要调取本地的信息
                    // 目前是属于固定值

                    let choeseDate = this.choeseTime.substring(0,10)
                    let telNum = localStorage.getItem("userPhone")
                    let userName = localStorage.getItem("userName")
                        telNum = this.notEmpty(telNum)?"未注册电话":telNum;
                        userName = this.notEmpty(userName)?"未注册姓名":userName;
                    let upData = {
                        tel:telNum,
                        name:userName,
                        category:"",
                        // id:"",
                        openId:localStorage.getItem('openid')||"",//注意以后要清除  "o8awnwtP8efh2X1mTblRj_x5FGVs"
                        sex:localStorage.getItem("sex")||"未注册性别",
                        orderTime:choeseDate||"",
                        // 备注信息，应该加上
                        content:"暂无",
                        r_order_details:this.RorderDetails
                    }
                    console.log(upData)
                    if(this.value1){
                        this.post("order/myOrder/confirmOrder",upData).then(res=>{
                            this.factMoney = res.data.factMoney
                            this.saveDated=res.data
                            console.log(this.saveDated)
                            this.saveDated.chouseTime=this.choeseTime
                            this.$store.state.saveDated =  this.saveDated
                            this.$router.push({name:"payMent"})
                        })
                    }else{
                        this.show=true
                    }
                    return false
                }
            },
        // 获取日期
            GetDateStr(AddDayCount) {
                // AddDayCount 0：当天 1：明天 -1：昨天
                var dd = new Date();
                dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
                var y = dd.getFullYear();
                var m = dd.getMonth()+1;//获取当前月份的日期
                var d = dd.getDate();
                //保证date格式为“yy-mm-dd”
                m<10&&(m="0"+m)
                d<10&&(d="0"+d)
                return y+"-"+m+"-"+d;
            },
            GetTimeStr(){
                var tt = new Date();
                var h = tt.getHours();
                var M = tt.getMinutes();//获取当前月份的日期
                var s = tt.getSeconds();
                //保证date格式为“hh-MM-ss”
                h<10&&(h="0"+h)
                M<10&&(M="0"+M)
                s<10&&(s="0"+s)
                return h+":"+M+":"+s;
            },
            // 制作选择时段
            makeOpation(){
                let todayStr = this.GetDateStr(0);
                let tomStr= this.GetDateStr(1);
                let arr=[];
                arr=[
                    todayStr+" 午餐",
                    tomStr+" 午餐",

                ]
                let Hours = (new Date()).getHours()
                if(Hours>14){
                    arr.splice(0,1)
                }
                    this.list1.push(arr)
            },
            Toshown(){
                this.Isshown=!this.Isshown
            },
             changeActive(i){
                this.frozen = true;
                this.active = i;
            },
            onDone(e){
                this.frozen = false;
            },
            changeNum(a){
                let flage = true
                if(this.resuleDish.length>0){
                    this.resuleDish.forEach((item,index)=> {
                        if(item.id==a.id){
                            item.chouseNum = a.chouseNum;
                            flage = false;
                        }
                    });
                }
                if(flage){
                    this.resuleDish.push(a)
                }
                 setTimeout(()=> {
                    this.resuleDish.forEach((item,index)=>{
                        if(item.chouseNum==0){
                            this.resuleDish.splice(index,1)
                        }
                    })
                    this.dishLength =  this.resuleDish.length;
                }, 20);
            },
            changeMineNum(item){
                setTimeout(its=>{
                     if(item.chouseNum==0){
                         this.resuleDish.splice(this.resuleDish.indexOf(item),1);
                           this.dishLength = this.resuleDish.length
                     }
                     if(this.resuleDish.length==0){
                         this.showCar=false;
                         this.Isshown =false
                     }
                },20)
            },
            onChange2 (val) {
                // 选定时段后
                this.choeseTime=val.toString()
                let upTateTime="";
                upTateTime = val.toString().substring(0,10)+" "+this.GetTimeStr();
                this.reqData(upTateTime);
            },
        },
        watch:{
            resuleDish(){
                if(this.resuleDish.length==0){
                    this.showCar=false;
                }else{
                    this.showCar=true;
                }
            }
        },
        computed:{
            allPrice:{
                get(){
                    let prices =0;
                    this.resuleDish.forEach(item=>{
                        prices+=item.price*item.chouseNum
                    })
                    prices = Math.round(prices*100)/100
                    return prices
                }
            }
        }
    }
</script>
