<style lang="less" scoped>
.search {
    width: 100%;
    padding: 0 0.45rem 0 0.9rem;
    box-sizing: border-box;
    position: relative;
    & > span {
        position: absolute;
        left: 0;
        bottom: -0.25rem;
        height: 1.1rem;
        width: 0.7rem;
        background: url("../../../static/rent/icon-back-btn.png") no-repeat center;
        background-size: 0.42rem;
    }
    & > .search_wrap {
        background: #dbe8f9;
        height: 0.6rem;
        margin-top: 0.25rem;
        border-radius: 0.05rem;
        display: flex;
        & > div:nth-child(1) {
            font-size: 0;
            padding-left: 0.3rem;
            box-sizing: border-box;
            line-height: 0.6rem;
            height: 0.6rem;
            span:nth-child(1) {
                font-size: 0.28rem;
                color: #323232;
                width: 0.55rem;
                overflow-y: auto;
                display: inline-block; //增加这句即可
                vertical-align: top;
                white-space: nowrap;
            }
            span:nth-child(2) {
                background: url("../../../static/new/newhouseimg/searchtriangle.png") no-repeat center;
                background-size: 100% 100%;
                width: 0.20rem;
                height: 0.14rem;
                margin: 0.23rem 0.3rem 0 0.1rem;
                display: inline-block;
                vertical-align: top;
            }
        }
        & > div:nth-child(2) {
            font-size: 0.24rem;
            color: #afafaf;
            height: 0.6rem;
            line-height: 0.6rem;
            padding-left: 0.7rem;
            box-sizing: border-box;
            position: relative;
            img {
                position: absolute;
                top: 0.16rem;
                width: 0.29rem;
                height: 0.28rem;
            }
            span {
                margin-left: 0.4rem;
            }
        }
    }
}

.headerHome {
    position: fixed;
    top: 0;
    left: 0;
}
.filtrate_tab {
    display: flex;
    font-size: 0.26rem;
    color: #323232;
    height: 0.9rem;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 99;
    .filt_item {
        text-align: center;
        flex: 1;
        line-height: 0.9rem;
        i {
            display: inline-block;
            width: 0.2rem;
            height: 0.3rem;
            background: url("../../../static/new/newhouseimg/searchtriangle.png") no-repeat center;
            background-size: contain;
            vertical-align: text-bottom;
            margin-left: 0.15rem;
        }
        i.active {
            background: url("../../../static/new/newhouseimg/arr_down_red.png") no-repeat center;
            background-size: contain;
        }
    }
}
.HomeContent,
.HomeContentndroid {
    background: #f5f5f5;
}
.filt_com {
    display: flex;
    background: #f5f5f5;
    position: absolute;
    width: 100%;
    font-size: 0.28rem;
    line-height: 0.64rem;
}
.filt_com_L {
    width: 40%;
    & > span {
        display: block;
        text-align: left;
        text-indent: 0.47rem;
        background: #fff;
        color: #323232;
        border-bottom: 1px dashed #f8f8f8;
        &:last-child {
            border-bottom: none;
        }
    }
    & > span.cuurentMenu {
        color: #D7000F;
    }
}
.filt_com_R {
    width: 60%;
    position: relative;
    background: #fff;
    ul {
        text-align: left;
        padding: 0 0.4rem;
        color: #323232;
        & > li {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        & > .cuurentLi {
            color: #D7000F;
        }
    }
}
.buildArea {
    height: 100%;
    .filt_com;
    .buildArea_L {
        .filt_com_L;
    }
    .buildArea_R {
        .filt_com_R;
    }
}
.filtrate_con {
    position: absolute;
    top: 0.9rem;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 99;
    // height: 100%;
    background: rgba(0, 0, 0, .6);
}
#buildListContent {
    height: 100%;
}
.buildPrice {
    flex-wrap: wrap;
    .filt_com;
    .buildPrice_L {
        .filt_com_L;
    }
    .buildPrice_R {
        height: 6rem;
        .filt_com_R;
    }
    .customPrice {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0.5rem auto 0.3rem;
        & > span {
            display: inline-block;
            height: 0.45rem;
            line-height: 0.45rem;
            vertical-align: top;
            font-size: 0;
            cursor: pointer;
            input {
                width: 1.62rem;
                box-sizing: border-box;
                height: 0.45rem;
                padding: 0.05rem 0.1rem;
                font-size: 0.22rem;
                line-height: 0.35rem;
                text-align: center;
                outline: 0;
                border: 0;
                background: #fff;
            }
        }
        span.span_t {
            font-size: 0.24rem;
            color: #323232;
            margin-right: 0.15rem;
        }
        span.span_spit {
            width: 0.53rem;
            height: 0.45rem;
            background: url("../../../static/new/newhouseimg/price-line.png") no-repeat center;
            background-size: 0.25rem;
        }
        span.span_btn {
            width: 0.8rem;
            height: 0.45rem;
            text-align: center;
            font-size: 0.22rem;
            background-color: #d7000f;
            color: #fff;
            margin-left: 0.15rem;
        }
    }
}
.buildType {
    .filt_com;
    flex-wrap: wrap;
    .buildType_L {
        .filt_com_L;
    }
    .buildType_R {
        height: 6rem;
        .filt_com_R;
    }
    .buildTypeOperation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 1.8rem;
        font-size: 0.24rem;
        .typeSure {
            display: inline-block;
            width: 2rem;
            height: 0.53rem;
            text-align: center;
            line-height: 0.53rem;
            color: #ffffff;
            background-color: #ed5353;
            border-radius: 0.05rem;
        }
    }
}
.buildMore {
    height: 100%;
    background: #f5f5f5;
    .buildMorePart {
        background: #ffffff;
        padding: 0.3rem 0 0;
        margin-bottom: 0.1rem;
        .morePartTit {
            padding-left: 0.2rem;
            text-align: left;
            font-size: 0.24rem;
            color: #333333;
        }
        .morePartCon {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 0.3rem 0 0 0.4rem;
            font-size: 0.24rem;
            color: #4e4e4e;
            .moreRadio {
                display: block;
                width: 2rem;
                height: 0.53rem;
                position: relative;
                margin-bottom: 0.3rem;
                margin-right: 0.35rem;
                line-height: 0.53rem;
                text-align: center;
                background: url("../../../static/new/newhouseimg/buildList-noselect.png") no-repeat center;
                background-size: contain;
                input {
                    position: absolute;
                    left: -9999px;
                }

            }
            .moreRadioSelected {
                background: url("../../../static/new/newhouseimg/buildList-selected.png") no-repeat center;
                background-size: contain;
            }
        }
    }
    .buildMoreOperation {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0.4rem;
        height: 1.8rem;
        font-size: 0.24rem;
        .moreEmpty {
            color: #757575;
            margin-bottom: 0.4rem;
        }
        .moreSure {
            display: inline-block;
            width: 2rem;
            height: 0.53rem;
            text-align: center;
            line-height: 0.53rem;
            color: #ffffff;
            background-color: #ed5353;
            border-radius: 0.05rem;
        }
    }
}
</style>

<template>
<div id="buildListContent">
    <div :class="[isAndro ? 'headerHomeAndro' : 'headerHome']">
        <div v-if="!isAndro" style="height: 0.2rem;"></div>
        <!-- 搜索城市 -->
        <div class='search' :style="{paddingLeft:isECTouch()?'0.45rem':'0.9rem'}">
            <span @click='goBack' v-if="!isECTouch()"></span>
            <div class='search_wrap'>
                <div class="vux-1px-r" @click="jumproute('searchcity')">
                    <span>{{$store.state.area}}</span>
                    <span></span>
                </div>
                <div @click="jumproute('search')">
                    <img src="../../../static/new/newhouseimg/search.png" alt="">
                    <span>输入城市名称进行搜索</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 楼盘类型筛选 -->
    <div :class="[isAndro ? 'HomeContentndroid' : 'HomeContent']">
        <div class="filtrate_tab" :class="{'vux-1px-b':cuurentFilt!=null}">
            <div class="filt_item" v-if="filts" v-for="(item,index) in filts" :key="index" @click="changeFilt(index)">
                <span>{{item}}</span>
                <i :class="{active:cuurentFilt==index}"></i>
            </div>
        </div>
        <div class="filtrate_con" v-if="cuurentFilt!=null">
            <!-- 区域 -->
            <div class="buildArea" v-if="cuurentFilt==0">
                <div class="buildArea_L">
                    <span class="cuurentMenu">区域</span>
                </div>
                <div class="buildArea_R">
                    <scroller>
                        <ul>
                            <li v-for="(item,index) in cuurentAreaList.list" :key="index" :class="[{'vux-1px-b':(cuurentAreaList.list.length-1)!=index},{'cuurentLi':index==0}]" @click="changeAreaList(item)">
                                {{item}}
                            </li>
                        </ul>
                    </scroller>
                </div>
            </div>
            <!-- 价格 -->
            <div class="buildPrice" v-if="cuurentFilt==1">
                <div class="buildPrice_L">
                    <span v-for="(item,index) in priceMenu" @click="changePriceMenu(index)" :class="{cuurentMenu:priceCurrentMenu==index}" :key="index">{{item}}</span>
                </div>
                <div class="buildPrice_R">
                    <scroller>
                        <ul v-if="priceCurrentMenu==0">
                            <li v-for="(item,index) in unitPriceType" :key="index" :class="[{'vux-1px-b':(unitPriceType.length-1)!=index},{'cuurentLi':index==filtStates.averageprice_index}]" @click="selectPrice(item,index)">
                                {{item}}
                            </li>
                        </ul>
                        <ul v-if="priceCurrentMenu==1">
                            <li v-for="(item,index) in totalPriceType" :key="index" :class="[{'vux-1px-b':(totalPriceType.length-1)!=index},{'cuurentLi':index==filtStates.totalprice_index}]" @click="selectPrice(item,index)">
                                {{item}}
                            </li>
                        </ul>
                    </scroller>
                </div>
                <div class="customPrice">
                    <span class="span_t">自定义</span>
                    <span class="vux-1px" @click="focueTarget"><input type="number" name="mineprice"  v-model="customPriceMin" value=""></span>
                    <span class="span_spit"></span>
                    <span class="vux-1px" @click="focueTarget"><input type="number" name="maxprice"  v-model="customPriceMax" value=""></span>
                    <span class="span_btn" @click="customPriceSure">确定</span>
                </div>
            </div>
            <!-- 类型 -->
            <div class="buildType" v-if="cuurentFilt==2">
                <div class="buildType_L">
                    <span class="cuurentMenu">类型</span>
                </div>
                <div class="buildType_R">
                    <scroller>
                        <ul>
                            <li v-for="(item,index) in filtTypes" :key="index" :class="[{'vux-1px-b':(filtTypes.length-1)!=index},{'cuurentLi':isContains(filtStates.buildType_indexs,index)}]" @click="selectType(item,index)">
                                {{item}}
                            </li>
                        </ul>
                    </scroller>
                </div>
                <div class="buildTypeOperation">
                    <span class="typeSure" @click="sureType">
                        确定
                    </span>
                </div>
            </div>
            <!-- 更多 -->
            <div class="buildMore" v-if="cuurentFilt==3">
                <scroller>
                    <div class="buildMorePart">
                        <div class="morePartTit">{{filtMoreData[0].type}}</div>
                        <div class="morePartCon">
                            <label class="moreRadio" v-for="(item,index) in filtMoreData[0].value" :class="{'moreRadioSelected':isContains(moreQuantity,item)}" :key="index" @click="">
                          <input type="checkbox" v-model="moreQuantity" :value="item" >
                          {{item}}
                      </label>
                        </div>
                    </div>
                    <div class="buildMorePart">
                        <div class="morePartTit">{{filtMoreData[1].type}}</div>
                        <div class="morePartCon">
                            <label class="moreRadio" v-for="(item,index) in filtMoreData[1].value" :class="{'moreRadioSelected':isContains(moreArea,item)}" :key="index" @click="">
                          <input type="checkbox" v-model="moreArea" :value="item" >
                          {{item}}
                      </label>
                        </div>
                    </div>
                    <div class="buildMorePart">
                        <div class="morePartTit">{{filtMoreData[2].type}}</div>
                        <div class="morePartCon">
                            <label class="moreRadio" v-for="(item,index) in filtMoreData[2].value" :class="{'moreRadioSelected':moreSort==index}" :key="index" @click="">
                          <input type="radio" v-model="moreSort"  :value="index">
                          {{item}}
                      </label>
                        </div>
                    </div>

                    <div class="buildMoreOperation">
                        <span class="moreEmpty" @click="emptyMore">
                            清空条件
                        </span>
                        <span class="moreSure" @click="sureMore">
                            确定
                        </span>
                    </div>
                </scroller>
            </div>
        </div>
        <!-- 楼盘列表组件 -->
        <houses-list :province="filtDatas._province" :city="filtDatas._city" :country="filtDatas._country" :averageprice="filtDatas._averageprice" :totalprice="filtDatas._totalprice" :tenementtypeList="filtDatas._tenementtypeList" :typenumberList="filtDatas._typenumberList"
            :arearegionList="filtDatas._arearegionList" :indexnumtype="filtDatas._indexnumtype" :buildtag="filtDatas._buildtag" ref="housesList"></houses-list>
    </div>
</div>
</template>

<script>
import housesList from '../components/newhouse/housesList';
export default {
    name: "newbuildList",
    data: () => ({
        filts: ["区域", "价格", "类型", "更多"], //筛选导航
        cuurentFilt: null,
        cuurentAreaList: {
            parenttype: '',
            list: ["不限"],
            parentname: ''
        },
        defaultList: {
            list: [],
            parenttype: '',
            parentname: ''
        },
        priceMenu: ["单价", "总价"],
        priceCurrentMenu: 0, //切换价格筛选左边菜单 0:单价 1:总价
        unitPriceType: ["不限", "8000元/㎡以下", "8000-10000元/㎡", "10000-12000元/㎡", "12000-15000元/㎡", "15000元/㎡以上"],
        totalPriceType: ["不限", "50万以下", "50-80万", "80-100万", "100-120万", "120-150万"],
        customPriceMin: '', //自定义价格左边输入
        customPriceMax: '', //自定义价格右边输入
        filtTypes: ["不限"],
        filtMoreData: [{
                type: "居室数量",
                value: ["一居室", "两居室", "三居室", "四居室", "五居室", "五居以上"],
                name: "moreQuantity"
            },
            {
                type: "面积",
                value: ["50㎡以下", "50-70㎡", "70-90㎡", "90-110㎡", "110-130㎡", "130-150㎡", "150-200㎡", "200-300㎡", "300㎡以上"],
                name: "moreArea"
            },
            {
                type: "排序",
                value: ["综合排序", "价格由高到低", "价格由低到高", "开盘时间倒序", "开盘时间顺序"],
                name: "moreSort"
            }
        ],
        moreQuantity: [],
        moreArea: [],
        moreSort: 0,
        selectBuildTypes: [],
        filtDatas: {
            _province: '',
            _city: '',
            _country: '',
            _averageprice: '',
            _totalprice: '',
            _tenementtypeList: '',
            _typenumberList: '',
            _arearegionList: '',
            _indexnumtype: 0,
            _buildtag: ''
        },
        filtStates: {
            averageprice_index: 0,
            totalprice_index: 0,
            buildType_indexs: [0]
        }

        //moreSendData: []
    }),
    components: {
        housesList
    },
    methods: {
        // header 返回、搜索、跳转
        goBack() {
            this.$router.back(-1);
        },
        jumproute(_route) {
            this.$router.push(_route)
        },
        changeAreaList(item) {
            if (this.cuurentAreaList.parenttype == "province") {
                if (item == "不限") {
                    this.filtDatas._city = '';
                    this.filtDatas._country = '';
                    this.filtDatas._province = this.cuurentAreaList.parentname;
                    this.initFilt();
                    return;
                } else {
                    this.upCuurList(item);
                }
            } else if (this.cuurentAreaList.parenttype == "city") {
                if (item == "不限") {
                    this.filtDatas._country = '';
                    this.filtDatas._city = this.cuurentAreaList.parentname;
                    this.initFilt()
                    return;
                } else {
                    this.filtDatas._city = this.cuurentAreaList.parentname;
                    this.filtDatas._country = item;
                    this.initFilt()
                }
            }
        },
        initFilt() {
            //初始化筛选
            this.cuurentFilt = null;
            //初始化区域
            this.cuurentAreaList.list = this.defaultList.list;
            this.cuurentAreaList.parentname = this.defaultList.parentname;
            this.cuurentAreaList.parenttype = this.defaultList.parenttype;
            //初始化价格
            this.customPriceMax = '';
            this.customPriceMin = '';
        },
        changeFilt(index) {
            //切换筛选条件
            if (this.cuurentFilt == index) {
                this.initFilt();
            } else {
                this.initFilt();
                this.cuurentFilt = index;
            }
        },
        focueTarget(even) {
            //点击有1PX边框的Input外层，触发内部input
            even.target.children[0].focus()
        },

        changePriceMenu(index) {
            this.priceCurrentMenu = index;
            this.customPriceMax = '';
            this.customPriceMin = '';
        },
        emptyMore() {
            //情空筛选更多条件
            this.moreQuantity = [];
            this.moreArea = [];
            this.moreSort = 0;
        },
        sureMore() {
            //筛选更多 确定
            this.filtDatas._typenumberList = this.moreQuantity.length ? this.moreQuantity.join(",") : '';
            this.filtDatas._arearegionList = this.moreArea.length ? this.moreArea.join(",") : '';
            this.filtDatas._indexnumtype = this.moreSort;
            this.initFilt();
        },
        selectPrice(price, index) {
            //筛选价格
            if (price == "不限") price = '';
            if (this.priceCurrentMenu == 0) {
                //选择单价
                this.filtDatas._averageprice = price;
                this.filtStates.averageprice_index = index;
                this.filtDatas._totalprice = '';
                this.filtStates.totalprice_index = 0;
            } else if (this.priceCurrentMenu == 1) {
                //选择总价
                this.filtDatas._totalprice = price;
                this.filtDatas._averageprice = '';
                this.filtStates.totalprice_index = index;
                this.filtStates.averageprice_index = 0;
            }
            this.initFilt();
        },
        customPriceSure() {
            if (this.customPriceMax < this.customPriceMin || this.customPriceMax == '' || this.customPriceMin == '') {
                //console.log("填写有误")
            } else {
                if (this.priceCurrentMenu == 0) {
                    //筛选自定义单价
                    this.filtDatas._averageprice = this.customPriceMin + "-" + this.customPriceMax + "元/㎡";
                    this.filtDatas._totalprice = '';
                } else if (this.priceCurrentMenu == 1) {
                    //筛选自定义总价
                    this.filtDatas._totalprice = this.customPriceMin + "-" + this.customPriceMax + "万";
                    this.filtDatas._averageprice = '';
                }
                this.filtStates.totalprice_index = 0;
                this.filtStates.averageprice_index = 0;
                this.initFilt();
            }

        },
        sureType() {
            //筛选类型确定
            this.filtDatas._tenementtypeList = this.selectBuildTypes.join(",");
            this.initFilt();
        },
        selectType(item, index) {
            //选择筛选物业类型
            if (item == "不限") {
                this.filtStates.buildType_indexs = [0];
                this.selectBuildTypes = [];
            } else {
                if (this.isContains(this.filtStates.buildType_indexs, 0)) {
                    this.filtStates.buildType_indexs = [];
                }
                if (this.isContains(this.filtStates.buildType_indexs, index)) {
                    let n = this.filtStates.buildType_indexs.indexOf(index);
                    this.filtStates.buildType_indexs.splice(n, 1);
                    this.selectBuildTypes.splice(n, 1);
                } else {
                    this.filtStates.buildType_indexs.push(index);
                    this.selectBuildTypes.push(item);
                }
            }

        },
        isContains(arr, item) {
            //判断数组是否包含该项
            let i = arr.length;
            while (i--) {
                if (arr[i] === item) {
                    return true;
                }
            }
            return false;
        },
        upCuurList(city) {
            this.get('/build/BuildBaseInfoIntf/findprovincesarea?province=&city=' + city, {
                interfaceType: "newhouse"
            }).then(
                res => {
                    //console.log(city);
                    //console.log(res.data)
                    if (res.data.length > 0) {
                        this.cuurentAreaList.list = ["不限"];
                        this.cuurentAreaList.list = this.cuurentAreaList.list.concat(res.data);
                        this.cuurentAreaList.parentname = city;
                        this.cuurentAreaList.parenttype = "city";
                    } else {
                        this.filtDatas._city = city;
                        this.initFilt();
                    }
                }
            )
        }

    },
    computed: {
        isAndro() {
            //判断安卓还是IOS
            return this.AndroidOrIos();
        },
        defaultArea() {
            //获取vuex地址信息
            return this.$store.state.area;
        },
        defaultAreaLoge() {
            //获取vuex地址信息省or市
            return this.$store.state.logo;
        },
        customunitPrice() {
            return this.customPriceMin + "-" + this.customPriceMax + "/㎡";
        },
        customtotalPrice() {
            return this.customPriceMin + "-" + this.customPriceMax + "万";
        }

    },
    created() {
        this.filtDatas._buildtag = this.$route.query.param;
        //获取区域
        if (this.defaultAreaLoge == 1) {
            this.get('/build/BuildBaseInfoIntf/findprovincesarea?province=' + this.defaultArea + '&city=' + '&type=0', {
                interfaceType: "newhouse"
            }).then(
                res => {
                    //console.log(res.data)
                    if (res.data != null) {
                        this.filtDatas._province = this.defaultArea;
                        this.cuurentAreaList.list = this.cuurentAreaList.list.concat(res.data);
                        this.defaultList.list = this.cuurentAreaList.list;
                        this.cuurentAreaList.parenttype = "province";
                        this.defaultList.parenttype = "province";
                        this.cuurentAreaList.parentname = this.defaultArea;
                        this.defaultList.parentname = this.defaultArea;

                    }
                }
            )
        } else if (this.defaultAreaLoge == 2) {
            this.get('/build/BuildBaseInfoIntf/findprovincesarea?province=&city=' + this.defaultArea, {
                interfaceType: "newhouse"
            }).then(
                res => {
                    //console.log(res.data)
                    if (res.data != null) {
                        this.filtDatas._city = this.defaultArea;
                        this.cuurentAreaList.list = this.cuurentAreaList.list.concat(res.data);
                        this.defaultList.list = this.cuurentAreaList.list;
                        this.cuurentAreaList.parenttype = "city";
                        this.defaultList.parenttype = "city";
                        this.cuurentAreaList.parentname = this.defaultArea;
                        this.defaultList.parentname = this.defaultArea;

                    }
                }
            )
        }
        //价格筛选
        this.post('/priceScreen/findByCityApp', {
            city: this.defaultArea
        }, {
            interfaceType: 'newhouse'
        }).then(
            res => {
                //console.log(res);
                if (res.status == 200) {
                    if (res.data.avgPdrice.length > 0) {
                        this.unitPriceType = ['不限'];
                        res.data.avgPdrice.forEach((item, index) => {
                            if (index == 0) {
                                item = item.split('-')[1] + '以下';
                            }
                            if (index == (res.data.avgPdrice.length - 1)) {
                                item = item.split('-')[0] + '元/㎡以上';
                            }
                            this.unitPriceType.push(item)
                        })
                    }
                    if (res.data.totalPrice.length > 0) {
                        this.totalPriceType = ['不限'];
                        res.data.totalPrice.forEach((item, index) => {
                            if (index == 0) {
                                item = item.split('-')[1] + '以下';
                            }
                            if (index == (res.data.avgPdrice.length - 1)) {
                                item = item.split('-')[0] + '万以上';
                            }
                            this.totalPriceType.push(item)
                        })
                    }
                }
            }
        )
        //物业类型
        this.get('/dict/findAll', {
            interfaceType: "newhouse"
        }).then(
            res => {
                if (res.status = 200) {
                    for (let item of res.data) {
                        if (item.label == "物业类型") {
                            for (let i of item.children) {
                                this.filtTypes.push(i.label)
                            }
                            break;
                        }
                    }
                }
            }
        )
    }
}
</script>
