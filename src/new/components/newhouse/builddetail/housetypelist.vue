<template>
    <div class="housetypelist">
        <div class="housetypetitle" @click="jumproute({path:'allhousetype'})">
            <span>户型列表</span>
            <span v-if='buildTypeList.length != 0 && buildTypeList != null'>全部户型</span>
        </div>
        <div class='housetypebody' v-if='buildTypeList.length != 0 && buildTypeList != null'>
            <ul class='tag'>
                <li v-for="(item,index) in tablist" :key="index" :class="{'listyle':Index==index}"  @click='clickli(index,item)'>
                    <span v-if='index==0'>{{item}}</span>
                    <div v-else>
                        <span>{{item.room}}</span>
                        <span>({{item.number}})</span>
                    </div>
                </li>
            </ul>
            <div class='housetype'>
                <ul>
                    <li v-for="(item,index) in buildTypeList" :key='index' @click="jumproute({path:'housetypedetail',query:item.id})">
                        <div class="explainimg vux-1px">
                            <img :src="item.housetypefilename" alt="">
                        </div>
                        <div class="explain">
                            <div>
                                <span>{{item.housetypecode}}</span>
                            </div>
                            <div>
                                <span>{{item.housetypedescribe}}</span>
                                <span>{{item.salearea}}㎡</span>
                            </div>
                            <div>{{item.totalprice}}万/套</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="empty" v-else>
            暂无户型信息
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tablist:[],
                Index:0,
                buildTypeList:[]
            }
        },
        created(){
            this.get(`/buildtypeapp/BuildTypeA/getBuildTypeGroup?buildid=${this.buildid}`,{
                interfaceType:"newhouse"
            }).then(res=>{
                this.tablist.push('全部');
                for(let i in res.data){
                    this.tablist.push({
                        room:i,
                        number:res.data[i].length
                    })
                }
                this.buildTypeList = this.data.buildTypeList
            })
        },
        props:{
            data:{
                type:Object,
                require:true
            },
            buildid:{
                type:String,
                require:true
            }
        },
        methods:{
            jumproute(obj){
                if(typeof obj.query != 'undefined'){
                    this.$router.push({ path: obj.path, query: { id: obj.query } });
                }else{
                    if(this.buildTypeList.length != 0 && this.buildTypeList != null){
                        this.$router.push({ path: obj.path});
                    }
                }
            },
            clickli(index,item){
                if(item == '全部'){
                    this.buildTypeList = this.getStorage('housedata').buildTypeList;
                }else{
                    this.buildTypeList = this.getStorage('housedata').buildTypeList.filter(Item=>{
                        return Item.typenumber == item.room
                    })
                }
                this.Index = index;
            }
        }
    }
</script>
<style lang='less' scoped>
.housetypelist{
    padding:0.2rem;
    margin-bottom:0.2rem;
    box-sizing: border-box;
    background-color:#fff;
    &>.housetypetitle{
        padding-right:0.27rem;
        display: flex;
        justify-content: space-between;
        &>span:nth-child(1){
            font-size:0.3rem;
            font-weight:700;
            color:#323232;
        }
        &>span:nth-child(2){
            font-size:0.24rem;
            font-weight:500;
            color:#757575;
            position: relative;
            top:0.03rem;
            &::before{
                content: '';
                position: absolute;
                right:-0.25rem;
                top:0.04rem;
                width:0.15rem;
                height:0.25rem;
                background:url('../../../../../static/new/newhouseimg/arrowright.png') center no-repeat;
                background-size: cover;
            }
        }
    }
    &>.housetypebody>.tag{
        padding:0.2rem 0;
        display: flex;
        li{
            padding:0 0.15rem;
            height:0.5rem;
            line-height: 0.5rem;
            text-align: center;
            margin-right:0.2rem;
            font-size:0.24rem;
            font-weight: 600;
            color:#323232;
            background-color:#f1f2f6;
            border-radius: 0.05rem;
        }
        .listyle{
            color:#d7000f;
        }
    }
    &>.housetypebody>.housetype{
        width:100%;
        overflow-y: auto;
        ul{
            display: flex;
            li{
                margin-right:0.2rem;
                &>.explainimg{
                    width:3.02rem;
                    height:2.82rem;
                    line-height: 2.82rem;
                    text-align: center;
                    margin-bottom:0.1rem;
                    &::before{
                        border-radius: 0.1rem;
                    }
                    img{
                        display: inline-block;
                        width:60%;
                        height:80%;
                    }
                }
                &>.explain{
                    &>div{
                        width:100%;
                        height:0.45rem;
                        line-height: 0.45rem;
                        text-align: left;
                        font-size: 0;
                    }
                    &>div:nth-child(1){
                        &>span{
                            font-size:0.28rem;
                            font-weight: 600;
                            color:#323232;
                            margin-right:0.2rem;
                        }
                    }
                    &>div:nth-child(2){
                        &>span{
                            font-size: 0.28rem;
                            font-weight: 600;
                            color:#323232;
                        }
                    }
                    &>div:nth-child(3){
                        font-size: 0.28rem;
                        font-weight: 600;
                        color:#d7000f;
                    }
                }
            }
        }
    }
    .empty{
        font-size:0.16rem;
        height:0.6rem;
        line-height: 0.6rem;
    }
}
</style>

