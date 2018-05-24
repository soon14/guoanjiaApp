<template>
    <div style='height:100%'>
        <div class='allhouse_wrap' :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]">
            <ul v-if='list.length!=0'>
                <li v-for='(item,index) in list' :key='index' class="vux-1px" @click='jumproute(item.id)'>
                    <div>
                        <img :src="item.housetypefilename" alt="">
                    </div>
                    <div>
                        <span>{{item.housetypedescribe}}/</span>
                        <span>{{item.salearea}}㎡</span>
                    </div>
                    <div>{{item.housetypecode}}</div>
                </li>
            </ul>
            <div v-else class="empty">
                暂无数据
            </div>
        </div>
        <newhousefooter v-if='list.length!=0'></newhousefooter>
    </div>
</template>
<script>
const newhousefooter = resolve => require(['../../components/newhouse/builddetail/newhousefooter'], resolve);
    export default {
        data() {
            return {
                list:[]
            }
        },
        created(){
            this.list = this.getStorage('housedata').buildTypeList;
        },
        components: {
            newhousefooter
        },
        methods:{
            jumproute(id){
                this.$router.push({path:'housetypedetail',query:{id:id}})
            }
        }
    }
</script>
<style lang='less' scoped>
    .allhouse_wrap{
        padding:0 0.2rem 1.1rem 0.2rem;
        box-sizing: border-box;
        background:#f5f5f5;
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width:3.5rem;
                height:3.2rem;
                position: relative;
                background:#fff;
                margin-top:0.1rem;
                &>div:nth-child(1){
                    margin-top:0.5rem;
                    margin-bottom:0.2rem;
                    width:100%;
                    text-align: center;
                    img{
                        display: inline-block;
                        width:1.44rem;
                        height:1.85rem;
                    }
                }
                &>div:nth-child(2){
                    width:100%;
                    height:0.4rem;
                    line-height: 0.4rem;
                    text-align: center;
                    font-size:0.28rem;
                    font-weight:600;
                    color:#323232;
                }
                &>div:nth-child(3){
                    position: absolute;
                    top:0;
                    left:0;
                    width:0.68rem;
                    height:0.45rem;
                    line-height: 0.45rem;
                    text-align:center;
                    font-size:0.3rem;
                    font-weight:700;
                    color:#fff;
                    background-color:#57bce8;
                }
            }
            li:nth-child(2n+1){
                margin-right:0.1rem;
            }
        }
        .empty{
            width:100%;
            height:100%;
            text-align: center;
            padding-top:40%;
            box-sizing: border-box;
            font-size:0.24rem;
        }
    }
</style>

