<template>
    <div class="builddetail">
        <div class="builddetailtitle" @click='jumproute()'>
            <span>楼盘详情</span>
            <span>全部详情</span>
        </div>
        <ul>
            <li><span>开 发 商 ：</span><span>{{data.developers}}</span></li>
            <li><span>联系电话：</span><span>{{data.consultingphone}}</span></li>
            <li><span>交房时间：</span><span>{{data.launchtime}}</span></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        created(){
            console.log(this.data)
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
            jumproute(){
                this.$router.push({path:'buildalldetail',query:{id:this.buildid}})
            }
        }
    }
</script>
<style lang='less' scoped>
.builddetail{
    padding:0.2rem;
    margin-bottom:0.2rem;
    box-sizing: border-box;
    background-color:#fff;
    &>.builddetailtitle{
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
    ul{
        padding-top:0.1rem;
        li{
            text-align: left;
            font-size:0.26rem;
            height:0.4rem;
            line-height: 0.4rem;
            span:nth-child(1){
                color:#909090;
            }
            span:nth-child(2){
                color:#323232;
                font-weight: 500;
            }
        }
    }
}
</style>

