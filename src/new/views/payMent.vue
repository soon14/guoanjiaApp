<style scoped>
    .bases{
        font-size: 16px;
    }
    .bases.body{
        margin-bottom: 50px;
        margin-left :0px;
        padding-left: 0;
    }
    .order_time{
        overflow: hidden ;
        width: 100% ;
    }
    .order_timetitle{
        float: left;
        width: 100px;
        height: 24px;
        text-align: left;
    }
     .order_timeMsg{
        width: 140px;
        float: right;
        height: 24px;
        line-height: 24px;
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
    .text_left{
        text-align: left;
    }
</style>
<template>
    <div class="bases body fixContent">
        <group>
            <cell-box class="order_time">
                <span class="order_timetitle">订餐时段：</span>
                <span class="order_timeMsg">{{upDataInfo.chouseTime}}</span>
            </cell-box>
        </group>
        <form-preview :header-label="'付款金额'" :header-value="'¥'+factMoney" :body-items="list" ></form-preview>
        <group >
            <radio :options="radio001" v-model="radio001Value" >
                <template slot-scope="props" slot="each-item">
                    <p class="text_left">
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
                <x-button type="warn" @click.native="upData">支付</x-button>
            </flexbox-item>
        </flexbox>
         <div v-transfer-dom>
            <alert v-model="show2" :title="payMsg" @on-hide="turnToResult"></alert>
        </div>
    </div>
</template>
<script>
    import {   Alert, FormPreview ,CellBox, Radio,TransferDomDirective as TransferDom  } from 'vux';
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
                show2:false,
                payMsg:"",
                body:"支付",
                totalFee:0,
                callBackUrl:"",
                upDataInfo:{},
                factMoney:"",
                orderTime:"",
                notifyurl:"order/myOrder/doReturnForWeiXin",
                orderid:"",
                money:"",
                openid:"",
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
        mounted(){
            if(this.notEmpty(this.$store.state.saveDated)){
                this.saveDated = JSON.parse(localStorage.getItem("saveDated"))
            }else{
                this.saveDated=this.$store.state.saveDated
            }
            // 在组件 B 创建的钩子中监听事件
            for (var key in this.saveDated){
                 this.upDataInfo[key] = this.saveDated[key]
            }
            console.log( this.upDataInfo)
            localStorage.removeItem("saveDated")
            let self = this
            localStorage.setItem("saveDated", JSON.stringify(this.saveDated))
            this.factMoney =this.saveDated.factMoney
            let opa={};
            this.saveDated.r_order_details.forEach(item=>{
                opa={};
                opa.label=item.name+"x"+item.number;
                opa.value = item.price*item.number+"元";
                this.list.push(opa)
            }, this);
            this.chouseTime = this.$route.query.chouseTime
        },
        methods:{
            upData(){//支付
                if(this.radio001Value=="微信"){//微信支付
                    this.saveOrder();
                }else{
                     // 余额支付
                    let data={
                        sum:this.factMoney
                    }
                    this.post("order/myOrder/payByAppSum",data).then(res=>{
                        if(res.code==200){
                            this.payMsg = res.msg
                            if(this.payMsg=="付款成功"){
                                this.isPath=true
                                this.upDataInfo.payStatus="1";
                                console.log( this.upDataInfo)
                                this.post("order/myOrder/saveOrder", this.upDataInfo).then(res=>{
                                    if(res.code==200){
                                        let upDishies = [];
                                        this.orderid=res.data.id
                                        this.upDataInfo.r_order_details.forEach(item=>{
                                            let opas={};
                                            opas.id = item.menu_id;
                                            opas.number = item.number
                                            upDishies.push(opas)
                                        })
                                        this.post("order/restaurant/updateDishes",upDishies).then(response=>{
                                            if(response.code==200){
                                                this.show2 =true
                                            }
                                        })
                                    }
                                })
                            }else{
                                this.show2 = true;
                            }
                        }else{
                            this.show2 =  true;
                            this.payMsg = "支付失败"
                        }
                    });
                }
            },
            saveOrder(){//微信保存订单
                this.upDataInfo.payStatus="0";
                console.log( this.upDataInfo)
                this.post("order/myOrder/saveOrder", this.upDataInfo).then(res=>{
                    if(res.code==200){
                        let upDishies = [];
                        this.orderid=res.data.id
                        this.upDataInfo.r_order_details.forEach(item=>{
                            let opas={};
                            opas.id = item.menu_id;
                            opas.number = item.number
                            upDishies.push(opas)
                        })
                        // 更改库存
                        this.post("order/restaurant/updateDishes",upDishies).then(response=>{
                            if(response.code==200){
                                this.orderid=res.data.id
                                this.money = res.data.payMoney
                                this.money = this.money*100
                                this.saveDisheStore() //请求微信
                            }
                        })
                    }
                })
            },
            saveDisheStore(){
                let upDishies = [];
                this.upDataInfo.r_order_details.forEach(item=>{
                    let opas={};
                    opas.id = item.menu_id;
                    opas.number = item.number
                })
                this.post("order/restaurant/updateDishes",upDishies).then(res=>{
                    if(res.code==200){
                        this.openid = localStorage.getItem('openid'); //自己的openid
                        this.notifyUrl = this.Utils + this.notifyurl; //微信回调url
                        this.totalFee = this.money; //支付总额
                        this.callBackUrl = window.location.href.split("#/")[0]+"#/orderResult?mentId="+this.orderid//支付成功的回调
                        window.location.href = 'http://act.guoanfamily.com/commonPlatform/pay/membershipPayment.html?time='+((new Date()).getTime())+'&id=' + this.openid + '&notifyUrl=' + this.notifyUrl + '&totalFee=' + this.totalFee + '&orderid=' + this.orderid + '&body=' + encodeURIComponent(this.body) + '&callBackUrl='+encodeURIComponent(this.callBackUrl);
                    }
                })
            },
            turnToResult(){ //余额支付成功后
                if(this.isPath){
                    this.$router.push({path:"orderResult",query:{id:this.orderid}})
                }
            }
        }
    }
</script>
