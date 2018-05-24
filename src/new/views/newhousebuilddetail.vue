<template>
    <div class="builddetail_wrap" v-if='housedata!=null'>
        <div :class="[AndroidOrIos() ? 'headerHomeAndro' : 'headerHome']" ref='header' v-if='!isECTouch()'>
            <div v-if="!AndroidOrIos()" style="height: 0.2rem;"></div>
            <div class='title' v-if='hiddenheader'>
                <img src="../../../static/rent/icon-back-btn.png" @click="jumproute(-1)"/>
                <span class="housename">{{housedata.buildname}}</span>
                <img src="../../../static/new/newhouseimg/share.png" class="share" @click='share'/>
            </div>
            <div class='anchor' :class="[AndroidOrIos() ? 'android' : 'ios']" v-else>
                <img src="../../../static/rent/icon-back-btn.png" @click="jumproute(-1)"/>
                <img src="../../../static/new/newhouseimg/share.png" class="share" @click='share'/>
                <div>
                    <ul class="vux-1px-l">
                        <li :class="{'targetstyle':Index==index}" v-for='(item,index) in taglist' :key='index' @click="anchor(item.target,index)">{{item.label}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div style='scroll-behavior:smooth;' :class="[{'handleHead':showInput||showDetail},{'andhandleHead':AndroidOrIos()&&(showInput||showDetail)},AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]" @scroll="scroll"  ref='scroll'>
            <videoandimg :data='housedata' id='house' ref='house'></videoandimg>
            <housetypelist :data='housedata' :buildid='this.$route.query.buildID' id='housetype'></housetypelist>
            <builddetail :data='housedata' id='detail' :buildid='this.$route.query.buildID'></builddetail>
            <div class="expertcomment"  id='comment'>
                <div class="expertcommenttitle" @click="jumproute('allratings')">
                    <span>专家点评</span>
                    <span>全部点评</span>
                </div>
                <ratingandecharts :cssShow='true' v-if='housedata.reviewrecordArrayList.length != 0 && housedata.reviewrecordArrayList != null' :data='housedata.reviewrecordArrayList'></ratingandecharts>
                <div class="empty"  v-else>
                    暂无专家点评信息
                </div>
                
            </div>
            <comment style='padding-bottom:0.9rem;' topicType="房源评价" :detailId='this.$route.query.buildID' :page='0' :size='3' :isPull='false'></comment>
            <!--<div class='hotpush' id='push'>
                <div class='hotpush_title'>
                    推荐楼盘
                </div>
                <div class="scroll_wrap">
                    <div class="house_box"  v-for="item in buildData" :key="item.id">
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
                </div>
            </div>-->
        </div>
        <newhousefooter :buildname='housedata.buildname'></newhousefooter>
    </div>
</template>
<script>
const videoandimg = resolve => require(['./../components/newhouse/builddetail/videoandimg'], resolve);
const housetypelist = resolve => require(['./../components/newhouse/builddetail/housetypelist'], resolve);
const builddetail = resolve => require(['./../components/newhouse/builddetail/builddetail'], resolve);
const ratingandecharts = resolve => require(['./../components/newhouse/builddetail/ratingandecharts'], resolve);
const newhousefooter = resolve => require(['./../components/newhouse/builddetail/newhousefooter'], resolve);
const comment = resolve => require(['./../components/newhouse/comment'], resolve);
export default {
    data() {
        return {
            // buildData:[
            //     {
            //         picturename:"../../../static/new/newhouseimg/buildList_IMG.jpg",
            //         buildname:'晋唐海湾',
            //         address:'北京市朝阳区四惠东',
            //         typenumber:'安居客',
            //         averageprice:100000,
            //         buildtag:['在售','学校','地铁','公园']
            //     },
            //     {
            //         picturename:"../../../static/new/newhouseimg/buildList_IMG.jpg",
            //         buildname:'晋唐海湾',
            //         address:'北京市朝阳区四惠东',
            //         typenumber:'安居客',
            //         averageprice:100000,
            //         buildtag:['在售','学校','地铁','公园']
            //     },
            //     {
            //         picturename:"../../../static/new/newhouseimg/buildList_IMG.jpg",
            //         buildname:'晋唐海湾',
            //         address:'北京市朝阳区四惠东',
            //         typenumber:'安居客',
            //         averageprice:100000,
            //         buildtag:['在售','学校','地铁','公园']
            //     }
            // ],
            hiddenheader:true,
            Index:-1,
            taglist:[
                {
                    label:'楼盘',
                    target:'house'
                },
                {
                    label:'户型',
                    target:'housetype'
                },
                {
                    label:'详情',
                    target:'detail'
                },
                {
                    label:'点评',
                    target:'comment'
                }
                // ,
                // {
                //     label:'推荐',
                //     target:'push'
                // },
            ],
            housedata:null,
            showInput:false,
            showDetail:false
        }
    },
    created(){
        this.get(`/buildapp/BuildBaseInfoA/buildparticularsid?buildid=${this.$route.query.buildID}`,{
            interfaceType:"newhouse"
        }).then(res=>{
            if(res.data!=null){
                if(res.data.buildtag != ''){
                    res.data.buildtag = res.data.buildtag.split(',')
                }else{
                    res.data.buildtag = []
                }
                this.housedata = res.data;
                if(this.housedata.buildTypeList instanceof Array){
                    this.housedata.buildTypeList.forEach(item=>{
                        item.totalprice = (Math.round(item.salearea * this.housedata.averageprice)/10000).toFixed(2);
                        if(item.housetypefilename!=''){
                            item.housetypefilename = item.housetypefilename.split(',');
                        }
                        item.housetypefilename = this.concatFileUrl(item.housetypefilename[0]);
                    })
                }
                if(this.housedata.buildPictureList instanceof Array && this.housedata.buildPictureList.length!=0){
                    let arr = []
                    this.housedata.buildPictureList.forEach(item=>{
                        if(item.filetype == 1){
                            item.filename = this.concatFileUrl(item.filename);
                            arr.push(item)
                        }
                    })
                    this.setStorage('IMGNAME',arr[0].filename);
                }else{
                    this.setStorage('IMGNAME','');
                }
                if(this.housedata.reviewrecordArrayList instanceof Array){
                    this.housedata.reviewrecordArrayList.forEach(item=>{
                        item.reviewheadpicture = this.concatFileUrl(item.reviewheadpicture);
                    })
                }
                this.setStorage('housedata',this.housedata);
                this.setStorage('BUILDID',this.$route.query.buildID);
                this.setStorage('BUILDNAME',this.housedata.buildname);
                this.setStorage('AVERAGEPRICE',this.housedata.averageprice);
                this.setStorage('ADDRESS',this.housedata.province + this.housedata.city + this.housedata.country + this.housedata.address);
                this.setStorage('BUILDINGAREA',this.housedata.area);
            }
        })
    },
    components: {
        videoandimg,
        housetypelist,
        builddetail,
        ratingandecharts,
        newhousefooter,
        comment
    },
    methods:{
        jumproute(_route){
            if(_route == -1){
                this.$router.go(_route);
            }else{
                this.$router.push({path:_route,query:{id:this.$route.query.buildID}})
            }
        },
        anchor(item,index){
            this.$nextTick(_=>{
                this.$refs.scroll.scrollTop = document.getElementById(item).offsetTop;
                 this.Index = index;
            })
        },
        scroll(){
            this.$nextTick(_=>{
                if(this.$refs.scroll.scrollTop >= this.$refs.house.$refs.videoorimg.offsetHeight){
                    this.hiddenheader=false;
                }else{
                    this.hiddenheader=true;
                }
            })
        },
        share(){
            this.$share.show({
                title:'测试',
                desc:'微信分享测试',
                imgUrl:'https://img.guoanfamily.com/555b4663-2f61-43fb-9738-e77de7d1a0de.jpg',
                link:'https://www.baidu.com'
            })
        }
    }
}
</script>
<style lang="less" scoped>
.builddetail_wrap{
    background:#f5f5f5;
    height:100%;
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
        &>img:nth-of-type(2){
            padding:0.35rem;
        }
        &>img{
            width:0.4rem;
            height:0.4rem;
        }
    }
    .expertcomment{
        padding:0.2rem;
        margin-bottom:0.2rem;
        box-sizing: border-box;
        background-color:#fff;
        &>.expertcommenttitle{
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
                    background:url('../../../static/new/newhouseimg/arrowright.png') center no-repeat;
                    background-size: cover;
                }
            }
        }
        .empty{
            font-size:0.16rem;
            height:0.6rem;
            line-height: 0.6rem;
        }
    }
    .anchor{
        width:100%;
        height:1.1rem;
        display: flex;
        align-items: center;
        color:#fff;
        position: fixed;
        z-index: 100;
        background:#e24e5a;
        // transition:all 0.5s;
        &.android{
            top:0;
        }
        &.ios{
            top:0.2rem;
        }
        &>img:nth-of-type(1){
            padding:0.15rem;
        }
        &>img:nth-of-type(2){
            padding:0.25rem;
            margin-right:0.35rem;
        }
        &>img{
            width:0.4rem;
            height:0.4rem;
        }
        &>div{
            flex:1;
            ul{
                width:100%;
                padding:0 0.2rem;
                box-sizing: border-box;
                display: flex;
                &.vux-1px-l::before{
                    border-color:#fff;
                }
                .targetstyle{
                    color:#94cbfe;
                }
                li{
                    flex:1;
                    font-size:0.3rem;
                    margin-right: 0.2rem;
                }
                li:last-child{
                    margin-right: 0;
                }
            }
        }
    }
    // .hotpush{
    //     background: #fff;
    //     padding-bottom:0.9rem;
    //     .hotpush_title{
    //         height:1.1rem;
    //         line-height: 1.1rem;
    //         padding-left:0.2rem;
    //         text-align: left;
    //         font-size:0.3rem;
    //         color:#323232;
    //     }
    //     .scroll_wrap {
    //         width: 100%;
    //         height: 100%;
    //         .house_box {
    //             display: flex;
    //             padding: 0 0.2rem 0.3rem 0.2rem;
    //             .house_L {
    //                 width: 2.4rem;
    //                 height: 1.8rem;
    //                 border-radius: 0.05rem;
    //             }
    //             .house_nR {
    //                 flex: 1;
    //                 height: 1.8rem;
    //                 min-width: 0;
    //                 margin-left: 0.27rem;
    //                 .house_RT {
    //                     display: flex;
    //                     align-items: center;
    //                     height: 1.35rem;
    //                     .house_M {
    //                         width: 55%;
    //                         text-align: left;
    //                         & > div {
    //                             overflow: hidden;
    //                             white-space: nowrap;
    //                             text-overflow: ellipsis;
    //                             line-height: 0.45rem;
    //                             height:0.45rem;
    //                         }
    //                         .house_name {
    //                             font-size: 0.26rem;
    //                             color: #323232;
    //                         }
    //                         .house_desc,
    //                         .house_site {
    //                             font-size: 0.22rem;
    //                             color: #757575;
    //                         }
    //                     }
    //                     .house_R {
    //                         width: 45%;
    //                         text-align: right;
    //                         margin-right: 0.1rem;
    //                         font-size: 0.3rem;
    //                         line-height: 0.45rem;
    //                         color: #D7000F;
    //                     }
    //                 }
    //                 .house_tag {
    //                     font-size: 0.22rem;
    //                     height: 0.5rem;
    //                     line-height: 0.4rem;
    //                     text-align: left;
    //                     span {
    //                         display: inline-block;
    //                         margin-right: 0.1rem;
    //                         padding: 0 0.1rem;
    //                         overflow: hidden;
    //                         white-space: nowrap;
    //                         &:nth-child(1) {
    //                             color: #E79C87;
    //                             background: #feebe5;
    //                         }
    //                         &:nth-child(2) {
    //                             color: #6A9DE5;
    //                             background: #e4f3fa;
    //                         }
    //                         &:nth-child(3) {
    //                             color: #91C076;
    //                             background: #edf0e5;
    //                         }
    //                         &:nth-child(4) {
    //                             color: #E79C87;
    //                             background: #feebe5;
    //                         }
    //                         &:nth-child(5) {
    //                             color: #6A9DE5;
    //                             background: #e4f3fa;
    //                         }
    //                         &:nth-child(6) {
    //                             color: #91C076;
    //                             background: #edf0e5;
    //                         }
    //                     }
    //                 }
    //             }

    //         }
    //     }
    // }
}
.handleHead {
    top: 0;
    padding-top: 1.3rem;
    z-index: 101;
    overflow-y: hidden;
}
.andhandleHead {
    padding-top: 1.1rem;
    z-index: 101;
    overflow-y: hidden;
}
</style>
