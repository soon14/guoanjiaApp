<template>
       <div  class="fixContent" >

       <!-- <div class="collentTop" style="margin-top:60px;">
             
            <div class="lookTop">我的预约</div> 
            我的预约
        </div>-->
        <div class="market1" v-show="marked"></div>
        <div :class="{'listUlDiv':!this.$store.state.showWxTitle}">
            <ul class="listUl">
                <li class="listHouseoLi" :key="index" v-for="(item,index) in appintmentList">
                    <div class="yytime">
                        <span>约看时间:</span>
                        <span>{{item.appointmentTime}}</span>
                        <div class="visit" :class="{visit01:item.state != '未到访'}">
                             <span style="color:#666">{{item.state}}</span>
                        </div>
                    </div>
                    <div class='listHouseLeftImg'>
                        <img :src='item.picture' />
                    </div>
                    <div class="listHouseRightDiv">
                        <div class='listHouseRightName'>
                            <span>[{{item.location}}]</span>
                            <span>{{item.buildName}}</span>
                        </div>
                        <div class="listHouseaverage">
                            <span style="">¥{{item.price}}</span>
                            <span style="">元/㎡</span>
                        </div>
                        <div class="listHouseaverage" style="padding-top:.32rem">
                            <span style="font-size:0.3rem;color:#999;font-weight:normal;">{{item.content}}</span>
                            <span style="font-size:0.34rem;color:#999;font-weight:normal;">㎡</span>
                        </div>
                        <div class="HouseaddressLocation">
                            <div class="listHouseaddress">{{item.appointmentAddress}}</div>
                        </div>
                    </div>
                    <div class="custNaTime">
                        <!-- <div>
                            <span>人数:</span>
                            <span>{{item.totalCount}}</span>
                            <span style="color:red;padding-left:.25rem;">状态:</span>
                           
                        </div> -->
                        <div style="">
                            <span>约看地点:</span>
                            <span>{{item.lookAddress}}</span>
                        </div>
                        <div class="callNumber">
                            <a href="tel:400-900-2225">联系客服</a>
                        </div>
                    </div>
                    
                    <!-- <x-button class="immeditBookingPay" type="primary" action-type="button" @click.native='exitAppoint(item)'>取消预约</x-button> -->
                </li>
                <!-- <div class="solidLine"></div> -->
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'appointment',
    data() {
        return {
            demo01: 0,
            appintmentList: [],
            post_data: {
                startCount: '0',
                type: '1'
            },
            marked: false,
        }
    },
    methods: {
        // tab的点击事件
        consoleIndex() {
            // console.log('click demo01', this.demo01);
        },
        // 请求数据页面加载
        appintmentLoad(post_data) {
            this.get('AppointmentController/getAllListByUserId?startCount=' + this.post_data.startCount + '&type=' + this.post_data.type,{ interfaceType: "collect"}
            ).then(response => {
                // debugger;
                // console.log(response);
                if (response.code == 200) {
                    if (response.data.appointmentList.length != 0) {
                        // 遍历所有数据，为数据图片添加url地址
                        // console.log(response.data.collectList);
                        this.marked = false;
                        if (response.data.appointmentList.length > 0) {
                            for (let i = 0; i < response.data.appointmentList.length; i++) {
                                // response.data.appointmentList[i].picture = this.ImgSrc + response.data.appointmentList[i].picture;
                                response.data.appointmentList[i].picture = this.concatFileUrl( response.data.appointmentList[i].picture);
                            }
                            if (this.post_data.type == 1) {
                                if (response.data.appointmentList.length != 0) {
                                    this.appintmentList = response.data.appointmentList;
                                } else {
                                    // this.showalert('您还没有收藏的楼盘')
                                    this.marked = true;
                                }
                            }
                        } else {
                            this.marked = true;
                        }
                    } else {
                        this.marked = true;
                    }
                    // this.appintmentList = response.data;
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        //取消预约按钮的点击事件
        exitAppoint(item){
            // console.log(item);
        }
    },
    mounted() {
        // this.consoleIndex();
        this.appintmentLoad();
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.collentTop {
    font-size: .4rem;
    width: 100%; // margin-left: 2%; // margin-top: 0.5rem;
    padding-top: 3px;
    height: 1rem;
    border-bottom: 1px solid red;
    font-weight: 500;
    line-height: 1rem;
    position: fixed;
    top:0;
    left: 0;z-index: 10;
    background:#fff;
}
.listUlDiv{
    margin:1.3rem auto 0;
    width: 100%;
}
.listUl {
    // background: #eee;
    box-sizing: border-box;
    width: 100%;
    padding: 0 .3rem;
}

.listHouseoLi {
    padding-top: 0.25rem;
    width: 100%;
    height: 4.3rem;
    // margin-bottom: 0.25rem;
    background: #fff;
    position: relative;
    .immeditBookingPay {
        background: none;
        color: #333333;
        border-radius: .125rem;
        width: 26%;
        font-size: .3rem !important;
        line-height: .5rem;
        margin-top: 0;
        border: 1px solid #ccc;
        position: absolute;
        bottom: 1.2rem;
        right: .25rem;
    }
}

// .solidLine{
//     width: 100%;
//     height: .25rem;
//     background: red;
// }
.listHouseLeftImg {
    float: left;
    width: 2.8rem;
}

.listHouseLeftImg img {
    margin-top: .2rem;
    width: 2.8rem;
    height: 2.1rem;
    border-radius: 5px;
}

.listHouseRightDiv {
    width: 3.8rem;
    float: right;
    text-align: left;
    position: relative;
}

.listHouseRightName {
    padding-top: .2rem;
    font-size: 0.32rem;
    font-weight: 600;
    color: #000;
}

.listHouseaverage {
    padding-top: .1rem;
    bottom: 0;
    color: #000;
    font-size: 0.3rem;
    font-weight: bold;
}

.HouseaddressLocation {
    .listHouseaddress {
        padding-top: .04rem;
        font-size: 0.24rem;
        float: left;
        width: 100%;
        height: .39rem;
        line-height: 0.35rem;
        text-align: left;
        font-size: 0.3rem;
        color: #999; 
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.custNaTime {
    width: 100%;
    height: .7rem;
    float: left;
    line-height: .7rem;
    text-align: left;
    margin-top: 0.3rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-size: 0.28rem;
    font-weight: 600;
    position: relative;
}
.callNumber {
    width: 1.4rem;
    font-size: 0.24rem;
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    margin-top: .1rem;
    background-color: #e34b3e;
    border-radius: .06rem;
    // float: right;
    position: absolute;
    right: 0;
    top: 0;
    a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
        font-weight: 400;
    }
}
.market1 {
    width: 100%;
    height: 90%;
    background: url('../../../static/new/img/noData.png') no-repeat 50% 20%;
    background-size: 70%;
    opacity: 0.8;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 4%;
    right: 0;
    margin: auto;
    z-index: 11;
}
.yytime{
    height: 0.6rem;
    background-color: #eee;
    font-size: .28rem;
    color: #666;
    padding: 0 .2rem 0 .22rem;
    line-height: .6rem;
    text-align: left;
}
.visit{
    float: right;
    width: 1.3rem;
    height: 0.6rem;
    background: url("../../assets/home/yuyuexx.png") no-repeat center right;
    background-size: 30%;
}
.visit01{
    background: url("../../assets/home/yuyuexx01.png") no-repeat center right;
    background-size: 30%;
}
</style>

