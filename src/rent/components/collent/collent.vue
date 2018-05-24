<template>
    <div>
        <div class="houseResourceList">
            <!--头部-->
           
            <!-- <div style="height: 0.8rem; background: $baseColor;"></div> -->
            <!--房源列表  -->
            <div class="market1" v-show="marked"></div>
            <!--租房列表  -->
            <div class="list-box">
                <scroller class="scroller"
                        :on-refresh="refresh"
                        :on-infinite="infinite"
                        noDataText="------我是有底线的------"
                        ref="myList"
                    >
                <div style="margin-top:0.8rem;">
                    <ul v-show="rent" class="listUl">
                        <li class="listHouseoLi" :key="index" v-for="(item,index) in rentHouseList" @click="rentListClick(item)">
                            <div class="exitCollect" @click.stop="rentExitcollect(item.collectUrl,index)"></div>
                            <div class='listHouseLeftImg'>
                                <img :src='item.imageName || noDetailImg' />
                            </div>
                            <div class="listHouseRightDiv">
                                <div class='listHouseRightName'>
                                    <span style="font-size:normal;">户型</span>
                                    <span>{{item.collectTitle}}&nbsp;{{item.roomName}}</span>
                                </div>
                                <div class="listHouseaverage">
                                    <span>{{item.collectResume}}</span>
                                    <span>/月</span>
                                </div>
                                <div class="0.32rem;">
                                    <div class="listHouseaddress">
                                        {{item.collectContent}}
                                    </div>
                                    <div class="tags-arr">
                                        <span class="label" v-for="(label,index) in item.advantageTagsArr" :key="index">{{label}}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </scroller>
            </div>
        </div>
    </div>
</template>

<script>
// import { ButtonTab, ButtonTabItem } from 'vux'
export default {
    name: 'collent',
    components: {
        // ButtonTab, ButtonTabItem
    },
    data() {
        return {
        	noDetailImg : "https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png",
            userID: '',
            userPhone: '',
            demo01: 0,
            rentHouseList: [],//收藏的租房
            rent: true,
            post_data: {
                startCount: '0',
                type: '3'
            },
            marked: false,
            startCount: 0,
            type: 1,
            flag:false,
            IsRefresh:false,
            noDetailImg:noDetailImg,
        }
    },
    methods: {
        //收藏数据加载
        collent(post_data) {
            return this.get('CollectController/getAllByUid?startCount=' + post_data.startCount + '&type=' + this.post_data.type,{
                interfaceType:"collect"
            }
            ).then(res => {
                // console.log(res.data.collectList);
                if (res.code == 200) {
                    if (res.data.collectList.length) {
                        // 遍历所有数据，为数据图片添加url地址
                        this.marked = false;
                        //处理数据的价格
                        for (let i = 0; i < res.data.collectList.length; i++) {
                            res.data.collectList[i].imageName = res.data.collectList[i].imageName ? this.concatFileUrl(res.data.collectList[i].imageName,200,200) : "";
                            res.data.collectList[i].advantageTagsArr = res.data.collectList[i].advantageTagsArr ? res.data.collectList[i].advantageTagsArr.split(",").slice(0,3) : [];
                            if(res.data.collectList[i].advantageTagsArr.length!=0){
                                for( let j = 0; j < res.data.collectList[i].advantageTagsArr.length; j ++){
                                    if(res.data.collectList[i].advantageTagsArr[j] == ""){
                                        res.data.collectList[i].advantageTagsArr.splice(j,1);
                                    }
                                }
                            }

                            if (res.data.collectList[i].collectResume !== null) {
                                if (res.data.collectList[i].collectResume == '售价待定') {
                                    res.data.collectList[i].collectResume = '售价待定'
                                } else if (res.data.collectList[i].collectResume.substr(res.data.collectList[i].collectResume.length - 2) == '/㎡') {
                                    res.data.collectList[i].collectResume = "¥" + res.data.collectList[i].collectResume;
                                } else if (res.data.collectList[i].collectResume == '') {
                                    res.data.collectList[i].collectResume = '售价待定'
                                } else {
                                    res.data.collectList[i].collectResume = "¥" + res.data.collectList[i].collectResume + "㎡";
                                }
                            }
                            this.marked = false;
                            this.rentHouseList.push(res.data.collectList[i])
                        }
                        this.post_data.startCount = res.data.startCount;
                        this.IsRefresh =false;
                        return res.data.collectList;
                    } else {
                        // this.marked = true;
                        // this.rentHouseList = [];
                        this.IsRefresh =false;
                        return res.data.collectList;
                    }
                } else {
                    this.showalert("获取收藏列表失败!");
                }
            }, res => {
                this.showalert(res.msg);
            });
        },

        // 取消收藏的租房
        rentExitcollect(url, index) {
            let post_data = {
                collectUrl: url,
            }
            this.post('CollectController/delCollectInfo', post_data,{
                interfaceType:"collect"
            }).then(res => {
                if (res.code == 200) {
                    this.msgalert('取消收藏成功')
                    this.IsRefresh = true;
                    this.rentHouseList=[];
                    this.post_data = {
                        startCount: '0',
                        type: '3'
                    }
                    let a = JSON.parse(localStorage.getItem('userInfroMap'));
                    let arr = a.collectList;
                    let hrefs = url;
                    arr.splice(arr.indexOf(hrefs), 1);
                    a.collectList = arr;
                    localStorage.setItem('userInfroMap', JSON.stringify(a));
                    this.collent(this.post_data);
                }
            }, res => {
                this.showalert(res.msg);
            });
        },

        // 租房列表的点击事件
        rentListClick(item) {
            // window.location.href =  'https://www.guoanfamily.com/rentHouse/wap/#/HouseList/houseDetail' + href;
            // let id = item.collectUrl.substr(23);
            // let productType = item.collectUrl.substr(12,7);
            this.$router.push({path:'/HouseList/houseDetail',query:{id:item.productId,productType:item.productType}})
        },
       refresh(done){
           this.IsRefresh = true;
           this.rentHouseList=[];
           this.post_data = {
                startCount: '0',
                type: '3'
            }
            this.collent(this.post_data).then((res)=>{
                if(res.length<5){
                    done(true);
                }else{
                    done(false);
                }
            })


       },
       infinite(done){
           if(this.IsRefresh){
               done(false);
               return;
           }
            this.collent(this.post_data).then((res)=>{
                if(res.length<5){
                    done(true);
                }else{
                    done(false);
                }
            })
       },
        showalert(msg) {
            // 显示
            this.$vux.alert.show({
                title: '提示信息',
                content: msg
            })
        },
        msgalert(msg) {
            this.$vux.toast.show({
                text: msg,
                type: "text"
            })
        }

    },
    mounted() {
        // this.collent(this.post_data);
        // this.consoleIndex();
        // console.log(window.location.href)
    }
}
</script>

<style lang='scss' scoped>
$k:1;
$labelOne: #e99064;
$labelTwo: #7dadd2;
$labelThree: #76b48f;
$ColorClass: $labelOne, $labelTwo, $labelThree;
.collentTop {
    width: 100%; // margin-left: 2%; // margin-top: 0.5rem;
    // padding-top: 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 2.25rem;
    background: #f5f5f5;
    div {
        margin-top: .12rem;
        width: 33%;
        float: left;
        height: 2rem;
        line-height: 2rem;
        font-size: .7rem;
    }
    .collent {
        background: #f5f5f5;
    }
    .collentBuild {
       background: url('../../../../static/rent/personalCenter/collentTopLeft.png') no-repeat;
        background-size: 95%;
        background-position: center;
        color: red;
    }
    .collentHouseType {
        background: url('../../../../static/rent/personalCenter/collentTopCenter.png') no-repeat;
        background-size: 100%;
        background-position: center;
        color: red;
    }
    .collentRentHouse {
        background: url('../../../../static/rent/personalCenter/collentTopRight.png') no-repeat;
        background-size: 95%;
        background-position: center;
        color: red;
    }
}


.houseResourceList {
    width: 100%;
    // background-color: #fff;
    padding-top: 0.2rem;

    .list-box{
        width: 100%;
        height: 100%;
        .listUl {
            background: #eee;
            // overflow:scroll;
            // margin-top:0.2rem;
        }
    }
}

.listHouseoLi {
    padding: 0rem 0.18rem;
    width: 95%;
    height: 2.36rem;
    background: #fff;
    position: relative;
    margin-bottom:0.2rem;
    .exitCollect {
        position: absolute;
        width: 20%;
        height: 1.4rem;
        background: url('../../../../static/rent/personalCenter/collent.png') no-repeat;
        background-size: 50%;
        right: 0;
        top: 0.4rem;
        z-index: 10;
    }
}

.listHouseLeftImg {
    float: left;
    width: 35%;
}

.listHouseLeftImg img {
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    margin-top:0.18rem;
}

.listHouseRightDiv {
    width: 62%;
    float: right;
    text-align: left;
    position: relative;
}

.listHouseRightName {
    font-size: 0.32rem;
    font-weight: 400;
    line-height: 0.8rem;
    // font-size: 0.65rem;
    font-weight: bold;
    width: 70%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

.listHouseaverage {
    bottom: 0;
    color: red;
    font-size: 0.32rem;
    font-weight: bold;
    overflow: hidden;
    width: 70%;
    // height: 1.15rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.listHousearearegion {
    width: 70%; // height: 1rem;
    // line-height: 1rem;
    text-align: left;
    font-size: 0.32rem;
    color: red;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


    .listHouseaddress {
        font-size: 0.32rem;
        float: left;
        width: 70%;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: left;
        // font-size: 0.6rem;
        color: #666666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .tags-arr{
        width: 100%;
        .label{
            width: 25%;
            height: 0.45rem;
            text-align: center;
            float: left;
            display:block;
            margin-right:0.15rem;
            line-height: 0.45rem;
            padding: 0rem 0.1rem;
            border-radius:0.05rem;
            color:#fff;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size: 0.14rem;
        }
        @mixin color($bgColor){
            background-color: $bgColor;

        }
        @for $i from 1 through 3{
            .label:nth-child(3n+#{$i}){
                @include color(nth($ColorClass,$i));
            }
        }
    }


.market1 {
    width: 100%;
    height: 100%;
    background: url('../../../../static/rent/personalCenter/noData.png') no-repeat 50% 20%;
    background-size: 70%;
    opacity: 0.8;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 1.92rem;
    right: 0;
    margin: auto;
    z-index: 11;
    background-color: #fff;
}
</style>
