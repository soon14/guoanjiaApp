<template>
    <div class="houses_wrap">
        <div class="houses_list" :class="[AndroidOrIos() ? 'android' : 'ios']" v-if="buildData.length!=0">
            <div class="scroll_wrap">
                <scroller>
                    <div class='main' v-for="item in buildData" :key="item.id" @click="jumproute(item)">
                        <div v-if='item.identity==1' class="house_box">
                            <img class="house_L" :src="item.picturename" alt="">
                            <div class="house_nR">
                                <div class="house_RT">
                                    <div class="house_M">
                                        <div class="house_name">
                                            {{item.buildname}}
                                        </div>
                                        <div class="house_site">
                                            {{item.address}}
                                        </div>
                                        <div class="house_desc">
                                            {{item.typenumber}}
                                        </div>
                                    </div>
                                    <div class="house_R">
                                        <span>{{item.averageprice}}元/㎡</span>
                                    </div>
                                </div>
                                <div class="house_tag">
                                    <span v-for="(tag,_index) in item.buildtag" :key="_index">{{tag}}</span>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="item.identity==2" class='info_box'>
                            <img class="info_L" :src="item.pictureURL" alt="">
                            <div class='info_R'>
                                <h1>{{item.name}}</h1>
                                <p>{{item.source}}</p>
                                <div>
                                    <span>{{item.updateTime}}</span>
                                    <span>{{item.browseQuantity}}人查看</span>
                                </div>
                            </div>
                        </div>
                        <img :src="item.identity == 1 ? '../../../../static/new/newhouseimg/loupanbg.png' : '../../../../static/new/newhouseimg/zixunbg.png'" alt="">
                    </div>
                </scroller>
            </div>
        </div>
        <div class='empty' v-else>
            <span>
                {{emptydata}}
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                buildData: [],
                emptydata:'正在加载数据...'
            }
        },
        created(){
            let param = this.$route.query.param,
                str = '';
            if(this.$store.state.logo == 1){
                str = `?province=${this.$store.state.area}&city=&searchname=${param}`; 
            } else if(this.$store.state.logo == 2){
                str = `?province=&city=${this.$store.state.area}&searchname=${param}`;
            }
            this.get(`/buildapp/BuildBaseInfoA/selectresults${str}`,{
                interfaceType:"newhouse"
            }).then(res=>{
                console.log(res.data)
                if(res.data!=null && JSON.stringify(res.data) != '{}'){
                    let house = res.data.buildbaseinfoList,
                        info = res.data.consultInfoDOList;
                    res.data.buildbaseinfoList.forEach(item=>{
                        item.identity = 1;//1表示楼盘信息
                        item.picturename = this.concatFileUrl(item.picturename);
                        if(item.buildtag != ''){
                            item.buildtag = item.buildtag.split(',')
                        }else{
                            item.buildtag = [];
                        }
                    });
                    res.data.consultInfoDOList.forEach(item=>{
                        item.identity = 2;//2表示资讯信息
                        item.pictureURL = this.concatFileUrl(item.pictureURL);
                    })
                    this.buildData = house.concat(info);
                    if(this.buildData.length == 0){
                        this.emptydata = '暂无搜索结果!换个关键词试试';
                    }
                }else{
                    this.emptydata = '暂无搜索结果!换个关键词试试';
                }
            })
        },
        methods:{
            jumproute(item){
                let str = '',obj = {};
                if(item.identity == 1){
                    str = `/buildapp/BuildBaseInfoA/saveHistoryRecord?searchName=${item.buildname}&type=${item.identity}&typeid=${item.id}`;
                    obj = {
                        path:'newhousebuilddetail',
                        query:{
                            buildID:item.id
                        }
                    }
                }else if(item.identity == 2){
                    str = `/buildapp/BuildBaseInfoA/saveHistoryRecord?searchName=${item.name}&type=${item.identity}&typeid=${item.id}`;
                    obj = {
                        path:'informationDetail',
                        query:{
                            id:item.id
                        }
                    }
                }
                this.get(str,{
                    interfaceType:'newhouse'
                }).then(res=>{
                    this.$router.push(obj);
                })
            }
        }
    }
</script>
<style lang='less' scoped>
.houses_wrap{
    background-color:#f5f5f5;
    width:100%;
    height:100%;
    .empty{
        margin-top:3.2rem;
        width:100%;
        color:#757575;
        font-size:0.24rem;
        text-align: center;
    }
    .houses_list {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 0.1rem 0.15rem;
        &.ios{
            top:1.3rem;
        }
        &.android{
            top:1.1rem;
        }
        .scroll_wrap {
            position: relative;
            width: 100%;
            height: 100%;
            .main{
                position: relative;
                .house_box {
                    display: flex;
                    background: #fff;
                    padding: 0.15rem 0 0.15rem 0.1rem;
                    margin-bottom: 0.1rem;
                    border-radius: 0.1rem;
                    .house_L {
                        width: 2.4rem;
                        height: 1.8rem;
                        border-radius: 0.05rem;
                    }
                    .house_nR {
                        flex: 1;
                        height: 1.8rem;
                        min-width: 0;
                        margin-left: 0.27rem;
                        .house_RT {
                            display: flex;
                            align-items: center;
                            height: 1.35rem;
                            .house_M {
                                width: 55%;
                                text-align: left;
                                & > div {
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    line-height: 0.45rem;
                                    height:0.45rem;
                                }
                                .house_name {
                                    font-size: 0.26rem;
                                    color: #323232;
                                }
                                .house_desc,
                                .house_site {
                                    font-size: 0.22rem;
                                    color: #757575;
                                }
                            }
                            .house_R {
                                width: 45%;
                                text-align: right;
                                margin-right: 0.1rem;
                                font-size: 0.3rem;
                                line-height: 0.45rem;
                                color: #D7000F;
                            }
                        }
                        .house_tag {
                            font-size: 0.22rem;
                            height: 0.5rem;
                            line-height: 0.4rem;
                            text-align: left;
                            span {
                                display: inline-block;
                                margin-right: 0.1rem;
                                padding: 0 0.1rem;
                                overflow: hidden;
                                white-space: nowrap;
                                &:nth-child(1) {
                                    color: #E79C87;
                                    background: #feebe5;
                                }
                                &:nth-child(2) {
                                    color: #6A9DE5;
                                    background: #e4f3fa;
                                }
                                &:nth-child(3) {
                                    color: #91C076;
                                    background: #edf0e5;
                                }
                                 &:nth-child(4) {
                                    color: #E79C87;
                                    background: #feebe5;
                                }
                                &:nth-child(5) {
                                    color: #6A9DE5;
                                    background: #e4f3fa;
                                }
                                &:nth-child(6) {
                                    color: #91C076;
                                    background: #edf0e5;
                                }
                            }
                        }
                    }

                }
                .info_box{
                    display: flex;
                    background: #fff;
                    padding: 0.15rem 0 0.15rem 0.1rem;
                    margin-bottom: 0.1rem;
                    border-radius: 0.1rem;
                    .info_L {
                        width: 2.4rem;
                        height: 1.8rem;
                        border-radius: 0.05rem;
                    }
                    .info_R{
                        flex: 1;
                        height: 1.8rem;
                        min-width: 0;
                        font-size:0;
                        margin-left: 0.27rem;
                        text-align:left;
                        &>h1{
                            font-size:0.26rem;
                            height: 0.88rem;
                            line-height: 0.44rem;
                            color:#323232;
                            font-weight:700;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                        &>p,&>div{
                            height:0.52rem;
                            line-height:0.52rem;
                            font-size:0.22rem;
                            color:#757575;
                        }
                        &>div{
                            display: flex;
                            justify-content: space-between;
                            padding-right:0.25rem;
                            height:0.4rem;
                            line-height:0.4rem;
                        }
                    }
                }
                &>img{
                    position: absolute;
                    top:0.15rem;
                    left:0.1rem;
                    width:0.6rem;
                }
            }
        }
    }
}
</style>

