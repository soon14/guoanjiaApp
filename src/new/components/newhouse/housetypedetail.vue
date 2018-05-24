<template>
    <div class='housedetail_wrap' v-if='housetypedetail != null'>
        <div :class="[AndroidOrIos() ? 'headerHomeAndro' : 'headerHome']" v-if='!isECTouch()'>
            <div v-if="!AndroidOrIos()" style="height: 0.2rem;"></div>
            <div class='title'>
                <img src="../../../../static/rent/icon-back-btn.png" @click="jumproute(-1)"/>
                <span class="housename">{{housetypedetail.buildname}}</span>
                <span></span>
            </div>
        </div>
        <div :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]">
            <div class="img">
                <img :src="housetypedetail.housetypefilename" alt="">
            </div>
            <div class="content">
                <h1>{{housetypedetail.housetypedescribe}}</h1>
                <div>
                    <span>建筑面积：</span>
                    <span>{{housetypedetail.salearea}}㎡</span>
                </div>
                <div>
                    <span>套内面积：</span>
                    <span>{{housetypedetail.internalarea}}㎡</span>
                </div>
                <div>
                    <div>
                        <span>所属楼盘：</span>
                        <span>{{housetypedetail.buildname}}</span>
                    </div>
                    <div @click="jumproute('newhousebuilddetail')">
                        <span>房源详情</span>
                        <img src="../../../../static/new/newhouseimg/arrowright.png" alt="">
                    </div>
                </div>
                <div>
                    <div>户型描述：</div>
                    <div>
                        {{housetypedetail.housetypedetail}}
                    </div>
                </div>
            </div>
        </div>
        <newhousefooter :housetypedetail='housetypedetail'></newhousefooter>
    </div>
</template>
<script>
const newhousefooter = resolve => require(['../../components/newhouse/builddetail/newhousefooter'], resolve);
export default {
    data() {
        return {
            housetypedetail:null
        }
    },
    created(){
        this.get(`/buildtypeapp/BuildTypeA/getBuildTypeInfoId?id=${this.$route.query.id}`,{
            interfaceType:"newhouse"
        }).then(res=>{
            if(res.data!=null){
                if(res.data.housetypefilename != ''){
                    res.data.housetypefilename = res.data.housetypefilename.split(',')
                }
                res.data.housetypefilename = this.concatFileUrl(res.data.housetypefilename[0]);
                this.setStorage('IMGNAME',res.data.housetypefilename);
                this.housetypedetail = res.data;
            }
        })
    },
    components: {
        newhousefooter
    },
    methods:{
        jumproute(_route){
            if(_route==-1){
                this.$router.go(-1);
            }else{
                this.$router.push({path:_route,query:{buildID:this.housetypedetail.buildid}});
            }
        }
    }
}
</script>
<style lang='less' scoped>
.housedetail_wrap{
    background:#fff;
    height:100%;
    .HomeContentndroid,.HomeContent{
        bottom:1.1rem;
    }
     .title{
        width:100%;
        height:1.1rem;
        box-sizing: border-box;
        font-size:0.32rem;
        color:#fff;
        font-weight:700;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>img:nth-of-type(1){
            padding:0.15rem;
        }
        &>span:nth-of-type(2){
            padding:0.35rem;
        }
        &>img{
            width:0.4rem;
            height:0.4rem;
        }
    }
    .img{
        width:100%;
        height:4.2rem;
        line-height: 4.2rem;
        text-align: center;
        img{
            width:2.4rem;
            height:3rem;
            display: inline-block;
        }
    }
    .content{
        padding:0.2rem 0.2rem 0 0.2rem;
        box-sizing: border-box;
        text-align: left;
        font-size:0.26rem;
        color:#323232;
        h1{
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
            font-size:0.36rem;
            font-weight:600;
            color:#323232;
        }
        &>div{
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
        }
        &>div:nth-of-type(3){
            display: flex;
            justify-content: space-between;
            &>div:nth-child(2){
                font-size:0;
                span,img{
                    display: inline;
                    font-size:0.24rem;
                    color:#757575;
                }
                span{
                    margin-right:0.1rem;
                }
                img{
                    width:0.15rem;
                    height:0.25rem;
                    position: relative;
                    top:-0.08rem;
                }
            }
        }
        &>div:nth-of-type(4){
            display: flex;
            &>div:nth-child(1){
                white-space: nowrap;
            }
            &>div:nth-child(2){
                text-align: justify;
            }
        }
    }
}

</style>

