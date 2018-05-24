<style >
    .chouse_payway .weui-cells{
        text-align: left;
    }
    .bases{
        font-size: 16px;
    }
    .bases.body.payMent{
        text-align: left;
         margin-bottom: 50px;
        margin-left :0px;
        padding-left: 0;
    }
    .order_time{
        overflow: hidden;
    }
    .demo5-item {
        width: 100px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-right: 6px;
    }
    .demo5-item-selected_checker{
        width: 44%;
        margin-left:3%;
    }
    .checker_box{
        margin:10px 0;
    }
    .btn_box{
        width: 100%;
        height: 40px;
    }
    .btn_box .btn_left_box,.btn_box .btn_right_box{
        width: 50%;
        height: 100%;
        float: left;
    }
    .btn_box .btn_bottom_true{
        width: 100%;
        height: 100%;
       background-color: #fff;
       font-size: 16px;
       color: #333;
       border:1px solid #ccc;
       box-shadow: none;

       box-sizing: border-box;


    }
    .flexbox_bottom{
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: #eee;

    }

    .left_msg{
        height: 42px;
        text-align: right;
        line-height: 42px;

    }
    .start{
        position: relative;
    }
    .start::before{
        content: "*";
        color:red;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        left: 5px;


    }
</style>
<template>
    <div class="bases body payMent">
        <group>
            <cell-box class="order_time">
                <span>订餐时段：</span>
                <span >{{orderTime}}</span>
            </cell-box>
        </group>

        <form-preview :header-label="'付款金额'" :header-value="'¥'+factMoney" :body-items="list" ></form-preview>
        <group title="预订人信息">
            <div class="start">
                <x-input title="姓名：" placeholder="预定人姓名" v-model="inptMsg.name"   placeholder-align="right"></x-input>
            </div>
            <div class="start">
                <x-input title="手机：" placeholder="预订人手机" v-model="inptMsg.tel" :is-type="testTel"   placeholder-align="right"></x-input>
            </div>
        </group>

        <group class="chouse_payway" title="支付方式">
            <radio :options="radio001" v-model="radio001Value">
                <template slot-scope="props" slot="each-item">
                    <p>
                        {{ props.label }}
                    </p>
                </template>
            </radio>
        </group>

        <flexbox class="flexbox_bottom">
            <flexbox-item >
               <div class="left_msg">
                   付款：{{factMoney}}元
               </div>
            </flexbox-item>
            <flexbox-item>
                <x-button type="warn" @click.native="BeginUpData">支付</x-button>
            </flexbox-item>
        </flexbox>
         <div v-transfer-dom>
            <alert v-model="show2" :title="payMsg"></alert>
        </div>
         <div v-transfer-dom>
            <alert v-model="show3" @on-hide="TurnAway" :title="errorMsg"></alert>
        </div>
    </div>
</template>
<script>
    import {    Alert, FormPreview ,CellBox, Radio,TransferDomDirective as TransferDom  } from 'vux';
    export default {
         directives: {
            TransferDom
        },
        components: {

            Alert,


            FormPreview,
            CellBox,
            Radio
        },
         data () {
            return {
                // placeOrder:{},
                inptMsg:{
                    name:"",
                    tel:"",
                },
                body:"支付",
                testTel(value){
                    // 手机验证
                    return {
                        valid: /^1[34578]\d{9}$/.test(value),
                        msg: "请输入正确的手机号"
                    }
                },
                orderDetails:[],//提交的订单
                show2:false,
                show3:false,
                payMsg:"",
                errorMsg:"支付失败",
                upDataInfo:{},
                factMoney:"",
                orderTime:"",
                notifyurl:"order/myOrder/doReturnForWeiXin",
                orderid:"",
                openid:"",
                money:"",
                demo5: 1,
                callBackUrl:"",
                isPath:false,

                radio001: [ "微信", "余额" ],
                radio001Value:"微信",
                 opation:[
                     {
                         value:"1",
                         label:"微信"
                     },
                     {
                         value:"2",
                         label:"余额"
                     }
                 ],
                list: [
                    {
                        label: '名称',
                        value: '价格'
                    }
                ],
            }
        },
        created(){

        },
        mounted(){
            if(this.notEmpty(this.$store.state.placeOrder)){
                this.inptMsg.tel =  localStorage.getItem("orderPhone");
                this.inptMsg.name =  localStorage.getItem("orderUser");
                localStorage.removeItem("orderPhone")
                localStorage.removeItem("orderUser")
                this.$store.state.placeOrder = JSON.parse(localStorage.getItem("placeOrderUp"))

            }else{
                let IsuserName =""
                if(localStorage.getItem("userName")){
                    IsuserName =localStorage.getItem("userName")
                }
                if(IsuserName.length>0&& IsuserName!='null'&&IsuserName!='undefined'){
                    this.inptMsg.name = localStorage.getItem("userName")
                    console.log(this.inptMsg.name)
                }else{
                    this.inptMsg.name =""
                }
                this.inptMsg.tel =""
                if(localStorage.getItem("userPhone")&&localStorage.getItem("userPhone").length>0){
                    this.inptMsg.tel = localStorage.getItem("userPhone")
                }


            }
            //  this.placeOrder=this.$store.state.placeOrder


            this.orderTime = this.$store.state.placeOrder.orderTime
            this.$store.state.placeOrder.DataLists.forEach(item=>{
                let obj={};
                obj.label = item.name+"x"+item.num;
                obj.value = (item.price*item.num).toFixed(2);
                this.list.push(obj)
            })
            localStorage.removeItem("placeOrderUp")
            localStorage.setItem("placeOrderUp",JSON.stringify(this.$store.state.placeOrder))
            this.$store.state.placeOrder.upDataOrder.forEach(opas=>{
                this.$store.state.placeOrder.DataLists.forEach(item=>{
                    if(opas.id==item.id){
                        opas.num = item.num
                        let orderObjs={
                            commnet:"",
                            count: opas.num,
                            endTime:opas.endTime,
                            flagNumber:opas.flagNumber,
                            images:opas.images,
                            startTime:opas.startTime,
                            startDate:"",
                            name:opas.name,
                            price:Number(opas.price),
                            sort:opas.sort,
                            status:opas.status,
                            storageNumber:opas.storageNumber,
                            type:opas.type,
                            storage_number_id:opas.id

                        }
                            this.orderDetails.push(orderObjs)
                    }

                })
            })
            console.log("2",this.$store.state.placeOrder.upDataOrder)

            this.factMoney = this.$store.state.placeOrder.factMoney



        },
        methods:{
            TurnAway(){
                if(this.isPath){
                    this.$router.push({path:"placeResult",query:{id:this.orderid}})
                }
            },
            BeginUpData(){
                if(this.inptMsg.name.length==0||!(/^1[34578]\d{9}$/.test((this.inptMsg.tel)))){
                    this.errorMsg = "请正确输入预订人电话"
                    this.show3 = true;
                }else{
                    this.toUpData();
                }
            },
            toUpData(){//支付
                localStorage.setItem("orderPhone", this.inptMsg.tel);
                localStorage.setItem("orderUser", this.inptMsg.name);
                if(this.radio001Value=="微信"){//微信支付
                    this.saveOrder();
                }else{
                    //  余额支付
                    let data={
                        sum:this.factMoney
                    }
                    this.post("order/myOrder/payByAppSum",data).then(res=>{
                        if(res.code==200){
                            console.log(res)
                            this.payMsg = res.msg
                            if(this.payMsg=="付款成功"){

                                 if( this.$route.query.msg=="place"){
                                     let upData ={
                                        orderEntity:{
                                            commnet:"",
                                            curDate:this.$store.state.YOUR_DATA.start,
                                            endTime:"10:00",
                                            startTime:"09:45",
                                            storageEntity:this.$store.state.YOUR_DATA,
                                            storage_id:this.$store.state.YOUR_DATA.id,
                                            resource:"",
                                            name:this.inptMsg.name,
                                            tel:this.inptMsg.tel,
                                            orderDetails:this.orderDetails
                                        }
                                    }
                                    upData.orderEntity.payStatus="1";
                                    console.log(upData)
                                    this.post("order/storage/saveOrder",upData).then(res=>{
                                        if(res.code==200){
                                                this.isPath=true
                                                this.errorMsg = "交易成功"
                                                this.show3 =  true
                                                this.orderid = res.data.content.id
                                        }else{
                                                this.isPath=false
                                        }
                                    })
                                }
                            }else{
                                this.show2 = true;
                            }
                        }else{
                            this.errorMsg = "支付失败"
                            this.show3 =  true
                        }
                    });
                }
            },
            saveOrder(){//微信保存订单
                if( this.$route.query.msg=="place"){
                    let upData ={
                        orderEntity:{
                            commnet:"",
                            curDate:this.$store.state.YOUR_DATA.start,
                            endTime:"10:30",
                            startTime:"09:45",
                            storageEntity:this.$store.state.YOUR_DATA,
                            storage_id:this.$store.state.YOUR_DATA.id,
                            resource:"",
                            name:this.inptMsg.name,
                            tel:this.inptMsg.tel,
                            orderDetails:this.orderDetails
                        }

                    }

                    upData.orderEntity.payStatus="0";
                    this.post("order/storage/saveOrder",upData).then(res=>{
                        console.log(res.data.content)
                        this.orderid = res.data.content.id
                        this.money = this.factMoney*100
                        //更改库存
                        this.saveDisheStore()
                    })

                }
            },
            saveDisheStore(){
                this.openid = localStorage.getItem('openid'); //自己的openid
                this.notifyUrl = this.Utils + this.notifyurl; //微信回调url
                this.totalFee = this.money; //支付总额
                this.callBackUrl = window.location.href.split("#/")[0]+"#/placeResult?msg=weixin&orderId="+this.orderid;//支付成功的回调

                window.location.href = 'http://act.guoanfamily.com/commonPlatform/pay/membershipPayment.html?time='+((new Date()).getTime())+'&id=' + this.openid + '&notifyUrl=' + this.notifyUrl + '&totalFee=' + this.totalFee + '&orderid=' + this.orderid + '&body=' + encodeURIComponent(this.body) + '&callBackUrl=' + encodeURIComponent(this.callBackUrl);
            },

        }
    }
</script>
