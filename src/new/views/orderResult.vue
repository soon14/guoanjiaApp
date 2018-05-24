<style>
     .bases{
        font-size: 16px;
    }
    .weui-form-preview__btn.weui-form-preview__btn_primary{
        text-decoration: none;
        font: 400 20px/50px "微软雅黑";
        margin: 20px 10px 0;
        border-radius: 5px;
        color: white;
        background-color: #D22423;
    }
</style>

<template>
    <div class="bases fixContent">
        <group>
            <cell-box>
                <span>订餐时段：</span>
                <span>{{chouseTime}}</span>
            </cell-box>
        </group>
        <group>
            <cell-box>
                <span>下单时间：</span>
                <span>{{createTime}}</span>
            </cell-box>
        </group>
         <form-preview :header-label="'取餐号'" :header-value="fetchNumber" :body-items="list" :footer-buttons="buttons"></form-preview> 
    </div>
</template>
<script>
    import { FormPreview,CellBox } from 'vux';
    export default {
        components: {
            FormPreview,
            CellBox
        },
         data () {
            return {
                orderTime:"",
                createTime:"",
                fetchNumber:"",
                list:[
                    {
                        label: '名称',
                        value: '价格'
                    }
                ],
                chouseTime:"",
                orderId:"",
                buttons: [{
                    style: 'primary',
                    text: '完 成',
                    onButtonClick: () => {
                       this.$router.push({name:"personalCenter"}) 
                    }
                }],
            }
        },
        mounted(){  
            if(this.notEmpty(this.$route.query.id)){
                this.orderId = window.location.href.split("?mentId=")[1]
            }else{
                this.orderId = this.$route.query.id
            }
            console.log(this.orderId)
            this.upData(this.orderId);
        },
        methods:{
            upData(mid){
                this.get("order/myOrder/findByOrderId?id="+mid).then(res=>{
                    console.log(res)
                    this.fetchNumber = res.data.fetchNumber
                    // this.chouseTime = this.$store.state.saveDated.createTime.substring(0,14)
                    this.chouseTime = localStorage.getItem("chouseTime")
                    //  this.chouseTime = res.data.payTime.substring(0,10)
                    this.createTime = res.data.createTime.split(".")[0]
                    let opa;
                    res.data.r_order_details.forEach(item=>{
                        opa={};
                        opa.label=item.name+"X"+item.number;
                        opa.value = item.price*item.number+"元";
                        this.list.push(opa)
                    }, this);
                    this.list.push({
                        label: '应付',
                        value: res.data.payMoney+"元"
                    });
                    // this.list.push({
                    //     label: '实付',
                    //     value: res.data.factMoney+"元"
                    // })
                })
            }
        }
    }
</script>
