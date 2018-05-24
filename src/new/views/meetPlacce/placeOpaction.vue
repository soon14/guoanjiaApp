 <style lang="less" scoped>
    .body{
        box-sizing: border-box;
        text-align: left;
        margin-top:55px;
        .date_title{
            font-size: 16px;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            border-bottom: 1px solid #eee;
            background-color: #fff;
            z-index:200;
            padding: 0;
            margin: 0;
            height: 48px;
            line-height: 48px;
            &.vux-divider:after, &.vux-divider:before{
                top: 0;
            }
        }
        .ul_box{
            position: fixed;
            top: 48px;
            right: 0;
            left: 0;
            bottom: 0;
            overflow: auto;
            .opation{
                background-color:#E22018;
                height: 26px;
                font-size: 16px;
                line-height: 26px;
                color: #fff;
                padding-left: 10px;
                border-bottom: 1px solid #ccc;
            }
        }
        .box_content{
            border-top: 1px solid #eee;
            background-color: #fff;
            &.msg_bottom{
            padding-bottom: 100px;
            border-bottom: none;
        }
        }
        .content{
            height: 68px;
            padding: 10px;
            background-color:#fff;
            border-bottom: 1px solid #eee;
            position: relative;
            .content_title{
                font-size: 20px;
                line-height: 48px;

            }
            .content_storeNum{
                font-size: 12px;
                height: 30px;
                line-height: 30px;
            }
            .content_price{
                font-size: 14px;
                position: absolute;
                left: 50%;
                top:20px;
                transform: translateX(-50%);
                .content_price_num{
                    font-size: 20px;
                    color: #E64340;
                }
            }
            .content_num{
                position: absolute;
                right: 10px;
                top: 27px;

            }
        }
        .car_box{
            position: fixed;
            z-index: 1000;
            border-top: 1px solid #ccc;
            width: 100%;
            height: 80px;
            background-color: #fff;
            bottom: 0;
            left: 0;
            .car_box_left{
                width: 60px;
                height: 60px;
                margin: 10px;
                background-color: #fff;
                float: left;

                .bottom_car_icon{
                    float: left;
                    width: 60px;
                    height: 60px;
                    background: url("../../../../static/new/img/cart.png") center no-repeat;
                    background-size: 80%;
                    position: relative;
                    .deg_style{
                        position: absolute;
                        top: 0;
                        right: 0;
                        height: 20px;
                        font-size: 12px;
                        padding: 0 5px;
                        line-height: 20px;
                        background-color: #E64340;
                        border-radius: 50%;
                        color: #FFF;
                        transform: translateX(50%) ;
                    }
                }
            }
            .car_box_content{
                height: 80px;
                margin-left:80px;
                overflow: hidden;
                padding: 10px;
                position: relative;
                .car_box_content_price{
                    margin-top:15px;
                    .car_box_content_num{
                        color: #E64340;
                    }
                }
                .car_box_content_msg{
                    height: 20px;
                    line-height: 20px;
                    font-size: 12px;
                }
                .sbtn{
                    position: absolute;
                    right: 15px;
                    bottom: 20px;
                }
            }
        }
    .resule_dish{
        position: absolute;
        bottom: 80px;
        width: 100%;
        max-height: 200px;
        overflow: auto;
        z-index: 1000;
        font-size: 16px;
        border-top: 1px solid #ccc;
        background-color: #fff;
        .resule_dish_info{
            padding: 5px 0 4px;
            border-bottom: 1px solid #ccc;

            line-height: 32px;
        }
        }
        .diah_infos{
            width: 30%;
            display: inline-block;
            height: 20px;
            line-height: 20px;
            text-align: center;
        }
        .diah_infos.diah_sums{
            position: relative;
            width: 33%;
            text-align: left;
            box-sizing: border-box;
    }


        .badge_style{
            position: relative;
            top: -30px;
            right: 0;
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
            width: 100px !important;
        }
        .diah_sums .vux-inline-x-number{
            width: 90px;
            float: right;
            margin-top: 3px;
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
        // .alert_style{
        //     z-index:2000
        // }
        .infoName{

            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 20px;
            line-height: 20px;
            text-align: center;
            width: 72px;

        }
    }
</style>
<template>
    <div class="body" >
        <divider class="date_title">{{chouseTime}}</divider>

            <group title="会场">
                <checklist  :min="1"  style=" position: relative;" label-position="left" :options="commonList" v-model="checklistServer" @on-change="changeServer" ></checklist>
            </group>
             <group title="服务">
                <ul class="box_content" :class="{msg_bottom:dishLength>0}">
                    <li class="content" v-for="(item,index) in showData"  :key="item.id">
                        <div class="content_title">{{item.name}}</div>

                        <div class="content_price">￥<span class="content_price_num"> {{item.price}}</span>元</div>
                        <div class="content_num">

                            <inline-x-number v-if="item.type=='0'" :min="0" :max="item.storageNumber " v-model="item.num" button-style="round" @changeNum="changeMineNum(item,index)"></inline-x-number>
                            <inline-x-number :min="0" v-else v-model="item.num" button-style="round" @changeNum="changeMineNum(item,index)"></inline-x-number>

                        </div>
                    </li>

                </ul>
            </group>
        <!-- 购物车 -->
        <div class="car_box" v-show="dishLength>0">
            <div class="car_box_left" @click="Toshown">
                <span class="bottom_car_icon" ><span class="deg_style" v-show="dishLength>0">{{dishLength}}</span></span>
            </div>
            <div class="car_box_content">
                <span class="car_box_content_price"> ￥<span class="car_box_content_num">{{priceSum}}</span></span>
                <div class="car_box_content_msg">点击购物车查看详情</div>

                <x-button mini type="warn" class="sbtn" @click.native="upDishies">确认订单</x-button>
            </div>
            <div :class="{'resule_dish':true,'actived':shownOrder}" >
                <div>
                    <div  class="resule_dish_info" v-for="(item,index) in  DataLists" :key="index">
                        <span class="diah_infos diah_name">{{item.name}}</span>
                        <span class="diah_infos diah_price">￥{{item.price}}</span>

                         <span class="diah_infos diah_sums">
                            <inline-x-number :min="0" :max="item.storageNumber"  v-if="!(item.flagNumber=='1')"   v-model="item.num"  button-style="round" @changeNum="changeMineNum(item,index)"></inline-x-number>
                            <x-button mini type="warn" v-if="item.flagNumber=='1'" class="infoName" @click.native="removeOrder(item,index)">取消</x-button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
            <alert class="alert_style" v-model="show2" title="您尚未选择会场" content="请选择会场"></alert>
        <div class="mask" v-show="shownOrder&&showmak"></div>
    </div>
</template>
<script>
    import { Alert,Divider } from 'vux'
    import InlineXNumber from '../../components/xNumber/inline-x-number'//计数器

    export default {
        components:{
            InlineXNumber,
            Divider ,
            Alert,
        },
        data(){
            return{
                show2:false,
                meetData:[],//会场的信息
                dishLength:0,
                YOUR_DATA:{},
                chouseTime:"",
                checklistServer:[],
                commonList:[],
                showData:[],
                itemList:[],//购物车的数据
                DataLists:[],//计算后购物车的内容
                priceSum:0,
                tmp:0,//中间值
                tmp2:0,
                priceTmp:0,
                priceTmp2:0,
                shownOrder:false,//订单的可见性
                showmak:false,//订单是否有内容
                upDataOrder:[],
            }
        },
       mounted(){
            this.askData()

       },
        methods:{
            //获取数据
            askData(){

                this.YOUR_DATA = this.$store.state.YOUR_DATA
                 console.log(this.YOUR_DATA)
                 //处理数据
                this.chouseTime = this.YOUR_DATA.start
                let str
                this.YOUR_DATA.storageNumberList.forEach((item,index)=> {
                    if(item.flagNumber=="1"){
                        str ="<span style='font-size:20px'>"+item.name+"</span><span style='font-size:14px;position: absolute; left:50%; transform: translateX(-50%);'> ￥<span style='color:#E64340;font-size: 18px'>"+item.price+"</span>元<span style='display:none'>"+item.id+"</span>";
                        this.meetData.push(item)
                        this.commonList.push(str)
                    }else{
                        let SunPrie=0;
                        if(item.num>0){
                            if(this.DataLists.indexOf(item)==-1){
                                this.DataLists.push(item)
                            }
                            SunPrie = Math.round(item.price*100)*item.num
                            SunPrie =SunPrie/100

                            this.priceSum=  Math.round(this.priceSum*100 - this.priceTmp2*100)/100;
                            this.priceTmp2 = SunPrie
                            this.priceSum=Math.round(SunPrie*100+this.priceSum*100)/100;

                        }else{
                            this.DataLists.splice(index,1)
                            this.priceSum=Math.round(this.priceSum*100 - this.priceTmp2*100)/100;
                            this.priceTmp2 = 0;
                        }
                        this.priceSum = this.priceSum.toFixed(2)
                        this.showData.push(item)
                    }

                }, this);
                this.checklistServer.push(this.commonList[0])
            },
           removeOrder(item,index){//删除场地
                this.checklistServer.forEach((opas,i)=>{
                    let pliceName = opas.split("</span>")[0].split("<span style='font-size:20px'>")[1]
                    if(item.name==pliceName){
                        this.checklistServer.splice(i,1)
                    }
                },this)
                this.DataLists.splice(index,1)
           },

            changeMineNum(item,index){
                setTimeout(()=> {
                    let SunPrie=0;
                    item.num = Number(item.num)
                    if(item.num>0){
                        if(this.DataLists.indexOf(item)==-1){
                            this.DataLists.push(item)
                        }
                        SunPrie =Math.round(item.price*100)*item.num/100
                        this.priceSum=Math.round(this.priceSum*100- this.priceTmp2*100)/100;
                        this.priceTmp2 = SunPrie
                        this.priceSum=Math.round(this.priceSum*100+ SunPrie*100)/100;
                    }else{
                        this.DataLists.splice(this.DataLists.indexOf(item),1)
                        this.priceSum=Math.round(this.priceSum*100- this.priceTmp2*100)/100;
                        this.priceTmp2 = 0;
                    }
                    this.priceSum = this.priceSum.toFixed(2)
                }, 50);
            },
            changeServer(val) {
                let Sums=0;
                this.DataLists = this.DataLists.filter(item=>{
                   return item.flagNumber!="1"
                })
                val.forEach(item=>{
                    let priceNum = item.split("<span style='color:#E64340;font-size: 18px'>")[1].split("</span>")[0];
                    Sums += Number(priceNum)
                    //填数据
                    let newObjs = {};
                    newObjs.name = item.split("</span>")[0].split("<span style='font-size:20px'>")[1]

                    newObjs.prices = priceNum
                    newObjs.price=newObjs.prices
                    newObjs.num = 1
                    newObjs.flagNumber = "1"
                    newObjs.id= item.split("</span>元<span style='display:none'>")[1].split("</span>")[0]
                    this.DataLists.push(newObjs)
                })
                this.priceSum=Math.round(this.priceSum*100-this.priceTmp*100)/100
                this.priceTmp = Sums;
                this.priceSum=Math.round(this.priceSum*100+Sums*100)/100
                this.priceSum = this.priceSum.toFixed(2)

            },
            Toshown(){
                if(this.dishLength>0){
                    this.shownOrder=!this.shownOrder
                }else{
                    this.shownOrder = false;
                }

            },
            upDishies(){//支付
               if( this.checklistServer.length>0){
                    this.DataLists.forEach(item=>{
                        this.YOUR_DATA.storageNumberList.forEach(opas=>{
                            if(item.id==opas.id){
                                this.upDataOrder.push(opas)
                            }
                        })
                    })
                    let msgs={
                        msg:"place"
                    }
                    let sumPriceData =[];

                    this.DataLists.forEach(item=>{
                        let objs={
                            num:item.num,
                            pay:Number(item.price)
                        };
                        sumPriceData.push(objs)
                    },this)
                    this.post("order/storage/sumPrice",sumPriceData).then(res=>{
                        this.$store.state.placeOrder={
                            DataLists:this.DataLists,
                            upDataOrder:this.upDataOrder,
                            orderTime:this.chouseTime,
                            factMoney:Number(res.data).toFixed(2)
                        }
                        this.$router.push({name:"placePayMent", query:msgs})
                    })
                }else{
                    this.show2 = true;
                }
            }
        },
        watch:{

            DataLists(){
                this.dishLength = this.DataLists.length
                if(this.DataLists==0){
                    this.showmak = false;
                }else{
                    this.showmak = true;
                }
            },
            dishLength(){
                if(this.dishLength==0){

                }
            }
        }

    }
</script>
