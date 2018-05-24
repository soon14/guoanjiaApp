<style lang="less">
    .body{
        &.place_Result{
            text-align: left;
             .finish{
                margin-top:60px;
                padding: 0 10px;
                .finish_btn{
                    border-radius: 5px;
                    height: 44px;
                }
                .weui-btn_primary{
                    background-color: #D22423;;
                }
            }
            .meet_sty{
                position: relative;
                height: 44px;
                .p_right{
                    top: 10px;
                    position: absolute;
                    right: 15px;
                }
                .p_left{
                    position: absolute;
                    left:15px;
                }
            }
        }
    }
   
</style>

<template>
    <div class="body place_Result">
         <group>
            <cell-box class="meet_sty">
                <span class="p_left">下单时间：</span>
                <span class="p_right">{{createTime}}</span>
            </cell-box>
        </group>
        <group title="会场" >
            <cell-box  class="meet_sty" v-for="items in meetPlace" :key="items.id">
                <span class="p_left">{{items.name}}</span>
                <span class="p_right">{{items.price}}元</span>
            </cell-box>
        </group>
         <group title="服务" v-if="servers.length>0">
            <cell-box  class="meet_sty" v-for="item in servers" :key="item.id">
                <span class="p_left">{{item.name+"x"+item.count}}</span>
                <span class="p_right">{{item.price}}元</span>
            </cell-box>
        </group>
        <group class="finish">
            <x-button class="finish_btn" type="primary" @click.native="makeSure">完 成</x-button>
        </group>
    </div>
</template>
<script>
import { XButton,Group,CellBox } from 'vux';
export default {
    components: {
        XButton,
        Group,
        CellBox
    },
    data(){
        return {
            reqId :"",
            servers:[],
            meetPlace:[],
            createTime:""
        }
    },
    created(){
        let msg = window.location.href.split("?msg=")[1];
        if(window.location.href.indexOf("?msg=weixin")!=-1){
            this.reqId =msg.split("&orderId=")[1]
        }else{
            this.reqId = this.$route.query.id
        }
    },
    mounted(){
        this.reqData();
    },
    methods:{
        reqData(){
            console.log(this.reqId)
            this.get("order/storage/findDatas?id="+this.reqId).then(res=>{
                console.log("data",res)   
                if(res.data){
                    this.createTime = res.data.createTime
                    res.data.orderDetails.forEach(item => {
                        if(item.flagNumber=="2"){
                            this.servers.push(item)
                        }else{
                            this.meetPlace.push(item)
                        }

                        console.log(item)
                    }, this);
                }
               
            })
        },
        makeSure(){
            this.$router.push({name:"personalCenter"}) 
        }
    }  
}
</script>
