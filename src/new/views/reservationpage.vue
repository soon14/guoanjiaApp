<template>
      <div  class="fixContent" >
        <div class="searchInput">
            <div :class="{leftTab:topLeft}">旅居预约</div>
            <div :class="{rightTab:topRight}">租房带看</div>
        </div>
        <div class="appBuild">预约楼盘</div>
        <div class="appbuilds">
            <ul>
                <li :key="index" class="buildLi" :class="{redColor:oLirgb===index}" v-for="(item,index) in buildList" @click="buildClick(index,item)">{{item.buildname}}</li>
            </ul>
        </div>
        <div class="times" style="border-top: 1px solid #e6e6e6;">
            <datetime-range class="lableNames" style="margin-right:.5rem;font-size:.7rem" title="预约时间" placeholder="请选择预约时间" :start-date="startdate" :end-date="enddate" :value="Showingsdate" @on-change="onChange"></datetime-range>
        </div>
        <div class="appBuild">预约地址</div>
        <div class="appBuildaddress" @click="exhiBitionClick">{{exhiBitionCenter}}</div>
        <div class="times">
            <x-input class="lableNames" title="姓　　名　" style="font-size:.7rem;" name="username" v-model='username' placeholder="请输入姓名"></x-input>
            <x-input class="lableNames" title="手机号码　" style="font-size:.7rem;" name="mobile" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
            <x-input class="lableNames" title="人　　数　" style="font-size:.7rem;" name="numPeople" v-model='numPeople' placeholder="请输入看房人数"></x-input>
            <x-input class="lableNames" title="身份证号码" style="font-size:.7rem;" name="idCard" v-model='idCard' placeholder="请输入身份证号码"></x-input>
        </div>
        <div class="appBuild">选择金牌置业顾问</div>
        <div class="appbuilds" style="height: 6.5rem;overflow: scroll;margin-bottom: 2.5rem;">
            <ul>
                <li :key="index" class="buildLi" :class="{redColor:agentoLirgb===index}" v-for="(item,index) in agentList" @click="agentlistClick(index,item)">{{item.realname}}</li>
            </ul>
        </div>
        <div class="bottomDiv">
            <x-button class="immeditBookingPay" type="primary" action-type="button" @click.native='submit'>确定预约</x-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "reservationpage",
    data() {
        return {
            // 楼盘数据
            buildList: [],
            //置业顾问数据
            agentList: [],
            //头部两侧样式控制
            topLeft: true,
            topRight: true,
            oLirgb: '',//楼盘选择样式控制
            liStyle: 0,//楼盘样式控制
            agentoLirgb: '',//置业顾问选择样式控制
            liStyle1: 0,//经纪人样式控制
            buildName: '',//预约的楼盘
            buildid: '',//楼盘id
            startdate: "",//开始的时间
            enddate: "",//结束的时间
            Showingsdate: [],//预约时间
            selecteddate: null,
            exhiBitionCenter: '北京万通展示中心',
            username: "",//姓名
            mobile: "",//电话
            numPeople: "",//看房人数
            idCard: "",//身份证号
            agentName: "",//置业顾问姓名
            agentid: ''//经济人的id
        }
    },
    methods: {
        //楼盘名称和置业顾问数据加载
        loadData() {
            this.get('palmsaleapp/api/v1/build/BuildBaseinfoController/getBuildlistAndSells', null).then(response => {
                //    console.log(response);
                if (response.status == 200) {
                    this.buildList = response.data.buildList;
                    this.agentList = response.data.sells;
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        //楼盘的点击事件
        buildClick(index, item) {
            this.liStyle++;
            if (this.liStyle % 2 == 1) {
                this.oLirgb = index;
                this.buildName = item.buildname;
                this.buildid = item.id;
                // console.log(this.buildid);
            } else {
                this.oLirgb = '';
                this.buildName = '';
            }
        },
        //选择置业顾问的点击事件
        agentlistClick(index, item) {
            this.liStyle1++;
            if (this.liStyle1 % 2 == 1) {
                this.agentoLirgb = index;
                this.agentName = item.realname;
                this.agentid = item.id;
                // console.log(this.agentid);
            } else {
                this.agentoLirgb = '';
                this.agentName = '';
            }
        },
        // 时间选择框
        onChange(val) {
            // console.log('change', val)
            this.selecteddate = val[0] + " " + val[1] + ":" + val[2] + ":" + "00";
        },
        // 展示中心定位
        exhiBitionClick() {
            this.$router.push({ path: 'map', query: { address: this.exhiBitionCenter } })
        },
        //确定预约的点击事件
        submit() {
            if(this.notEmpty(this.buildName)){
                this.msgalert('清选择要预约的楼盘');
                return false;
            }
            if (this.notEmpty(this.mobile)) {
                this.msgalert('请输入电话');
                return false;
            }
            if (this.notEmpty(this.username)) {
                this.msgalert('请输入姓名');
                return false;
            }
            if (this.notEmpty(this.numPeople)) {
                this.msgalert('请输入看房人数');
                return false;
            }
            if (!this.IC(this.idCard) || this.notEmpty(this.idCard)) {
                this.msgalert('请输入身份证号码');
                return false;
            }
            if (this.notEmpty(this.agentName)) {
                this.msgalert('请选择置业顾问');
                return false;
            }
            let post_data = {
                "custname": this.username,//姓名
                "phonenum": this.mobile,//客户电话
                "custphone": localStorage.getItem('userPhone'),//注册手机号
                "scancount": this.numPeople,//看房人数
                "idcardnumber": this.idCard,//身份证
                "buildid": this.buidid,//楼盘id
                "scantime": this.selecteddate,//预约时间
                "myappointmentUrl": window.location.href,
                "buildname": this.buildName,//楼盘名称
                "saleid": this.agentid,//销售id
                "salename": this.agentName//销售姓名
            }
            this.post('palmsaleapp/api/v1/build/collectsave', post_data).then(response => {
                if (response.status == 200) {
                    this.msgalert(response.msg);
                    this.market = false;
                    this.shows = false;
                } else {
                    this.msgalert(response.msg);
                };

            }, response => {
                this.showalert(response.msg);
            });

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
        //调用获取楼盘列表和置业顾问列表的方法
        this.loadData();
        //获取默认传过来的楼盘名称，让默认的楼盘名称高亮显示
        // this.buildName = this.$route.query.lopan;
        // if (!this.notEmpty(this.buildName)) {
        //     this.oLirgb = this.buildList.findIndex((value, index, arr) => {
        //         return value.buildname == bName;
        //     })
        // }
        //获取客户的基本信息进行回显
        let username = localStorage.getItem('userName');
        if (!this.notEmpty(username)) {
            this.username = username;
        } else {
            this.username == '';
        }
        this.mobile = localStorage.getItem('userPhone');
        let custinfo = JSON.parse(localStorage.getItem('userInfroMap'));
        this.idCard = custinfo.infoByUserIdList.card;
        // 日期时间处理
        let date = new Date();
        let nowmonth = date.getMonth() + 1
        this.startdate = date.getFullYear() + '/' + nowmonth + '/' + date.getDate();
        date.setMonth(date.getMonth() + 1);
        let nextmonth = date.getMonth() + 1;
        this.enddate = date.getFullYear() + '/' + nextmonth + '/' + date.getDate();
    }
}
</script>

<style lang="less" scoped>
.searchInput {
    width: 100%;
    height: 1.5rem;
    line-height: 1.4rem; // background: red;
    // margin-left: 2%; // margin-bottom: 0.5rem; // position: fixed;
    margin-top: 0.3rem;
    z-index: 1;
    border: 1px solid #cccccc;
    border-radius: .75rem .75rem 0 0;
    div {
        float: left;
        width: 50%;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: .7rem;
    }
    .leftTab {
        width: 50%;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: .7rem;
        color: #fff;
        background: url('../../../static/new/img/buildListLeft.png') no-repeat;
        background-size: 100%;
        background-position: center;
    }
}

.appbuilds {
    background: none; // padding-bottom: 2.3rem;
    width: 96%;
    margin-left: 2%;
    border-bottom: 1px solid #e6e6e6;
    .buildLi {
        width: 30%;
        float: left;
        font-size: 0.6rem;
        height: 1.2rem;
        overflow: hidden;
        line-height: 1.2rem;
        border: 1px solid #ccc;
        margin-left: 2%;
        margin-bottom: 0.4rem;
        border-radius: .7rem;
        text-align: center;
        color: #999999;
    }
    .redColor {
        width: 30%;
        float: left;
        font-size: 0.6rem;
        line-height: 1.2rem;
        margin-left: 2%;
        margin-bottom: 0.4rem;
        border-radius: .7rem;
        color: #ffffff;
        background: #fa5f49;
        text-align: center;
        border: 1px solid #fa5f49;
    }
    li:nth-child(-n+3) {
        margin-top: .4rem;
    }
}

.appBuildaddress {
    background: url('../../../static/new/img/dingwei.png') no-repeat;
    background-position: 43% 48%;
    background-size: 5%;
    width: 96%;
    height: 2rem;
    border-bottom: 1px solid #e6e6e6;
    margin-left: 2%;
    line-height: 2rem;
    font-size: .6rem;
    text-align: left;
    padding-left: 1rem;
}

.appBuild {
    width: 96%;
    height: 2rem;
    border-bottom: 1px solid #e6e6e6;
    margin-left: 2%;
    line-height: 2rem;
    font-size: .7rem;
    text-align: left; // font-weight: 500;
    color: #333333;
    padding-left: .3rem;
    background: url('../../../static/new/img/lower.png') no-repeat;
    background-position: 96% 48%;
    background-size: 7%;
}

.times {
    width: 96%;
    margin-left: 2%;
    overflow: hidden; // margin-top:1rem;
    // border-top: 1px solid #e6e6e6;
    // border-bottom: 1px solid #e6e6e6;
}

.bottomDiv {
    position: fixed; // background: red;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.2rem;
    font-size: .6rem;
    z-index: 10;
    background: #ffffff;
}

.immeditBookingPay {
    background: url('../../../static/new/img/btnbj.png') no-repeat !important;
    background-size: 100% !important;
    font-size: .8rem !important;
    line-height: 2.2rem;
    margin-top: 0;
}
</style>
<style lang='less'>
.times {
    .lableNames {
        border-bottom: 1px solid #e6e6e6;
        .weui-label {
            display: block;
            width: 5rem;
            text-align: left;
            margin-left: -.3rem;
            color: #333333;
            font-size: .7rem;
        }
    }
}
</style>


