import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

/*--------------------------------------------新房----------------------------------------------------------*/
const login = resolve => require(['../new/views/login'], resolve) //登录
//const index = resolve => require(['../new/views/index'], resolve) //首页
const personalCenter = resolve => require(['../new/views/personalCenter'], resolve) //个人中心
const first = resolve => require(['../new/first'], resolve) //第一页
const onLineHouse = resolve => require(['../new/views/onLineHouse'], resolve) //在线选房



//新房模块相关页面
const buildList = resolve => require(['../new/views/buildList'], resolve) //新房楼盘列表
const newbuildList = resolve => require(['../new/views/newbuildList'], resolve) //新房楼盘列表
const newhousehome = resolve => require(['../new/views/newhousehome'], resolve) //新房首页
const information = resolve => require(['../new/views/information'], resolve) //资讯列表
const informationDetail = resolve => require(['../new/views/informationDetail'], resolve) //资讯详情
const search = resolve => require(['../new/components/newhouse/search.vue'], resolve) //新房搜索
const searchcity = resolve => require(['../new/components/newhouse/searchcity.vue'], resolve) //新房城市搜索
const searchresult = resolve => require(['../new/components/newhouse/searchresult.vue'], resolve) //新房城市搜索
const myratings = resolve => require(['../new/views/myratings.vue'], resolve) //我的评论模块
const interactivemessage = resolve => require(['../new/views/interactivemessage.vue'], resolve) //我的评论模块
const newhousebuilddetail = resolve => require(['../new/views/newhousebuilddetail.vue'], resolve) //新房模块的楼盘详情页面
const buildalldetail = resolve => require(['../new/components/newhouse/buildalldetail.vue'], resolve) //楼盘所有的详细信息
const allhousetype = resolve => require(['../new/components/newhouse/allhousetype.vue'], resolve) //户型列表
const housetypedetail = resolve => require(['../new/components/newhouse/housetypedetail.vue'], resolve) //户型详情
const allratings = resolve => require(['../new/components/newhouse/allratings.vue'], resolve) //户型详情


const modifyInfo = resolve => require(['../new/views/modify_info'], resolve) //修改资料
const cardCoupons = resolve => require(['../new/views/cardCoupons'], resolve) // 我的卡券
const reservationpage = resolve => require(['../new/views/reservationpage'], resolve) //选择预约看房页面
const appointement = resolve => require(['../new/views/appointment'], resolve) //预约列表
const collent = resolve => require(['../new/views/collent'], resolve) //收藏列表
const building_detial = resolve => require(['../new/views/building_detial'], resolve) //楼盘详情
const houseType = resolve => require(['../new/views/houseType'], resolve) //户型详情
const MemberIfream = resolve => require(['../new/views/MemberIfream'], resolve) //入会说明ifrem
const membership = resolve => require(['../new/views/membership'], resolve) //入会详情
const house_resource = resolve => require(['../new/views/house_resource'], resolve) //房源列表
const housingPrice = resolve => require(['../new/views/housingPrice'], resolve) //楼盘走势列表
const housingPriceInfo = resolve => require(['../new/views/housingPriceInfo'], resolve) //楼盘详情折线走势表

const house_detial = resolve => require(['../new/views/house_detial'], resolve) //房源详情
const downPage = resolve => require(['../new/views/downPage'], resolve) //房源详情
const map = resolve => require(['../new/views/map'], resolve) //地图

const buildImgList = resolve => require(['../new/views/buildImgList'], resolve) //楼盘全部缩略图
const orderList = resolve => require(['../new/views/orderList'], resolve) //订单列表
const ImgLoad = resolve => require(['../new/views/ImgLoad'], resolve) //订单列表

// 房贷计算器部分页面
// 房贷计算器部分
const Calculator = resolve => require(['../new/views/houseloan/Calculator'], resolve) //房贷计算器
const PaymentPage = resolve => require(['../new/views/houseloan/PaymentPage'], resolve) //房贷计算器计算结果
const ZuhePayment = resolve => require(['../new/views/houseloan/ZuhePayment'], resolve) //房贷计算器计算结果
const ShuifeiPay = resolve => require(['../new/views/houseloan/ShuifeiPay'], resolve) //房贷计算器计算结果

// 餐厅

const addOrder = resolve => require(['../new/views/addOrder'], resolve) //定餐菜单
const payMent = resolve => require(['../new/views/payMent'], resolve) //订单结算
const orderResult = resolve => require(['../new/views/orderResult'], resolve) //订单结果
const placeChouse = resolve => require(['../new/views/meetPlacce/placeChouse'], resolve) //场地预定日历
const placeOpaction = resolve => require(['../new/views/meetPlacce/placeOpaction'], resolve) //场地预定详情
const placePayMent = resolve => require(['../new/views/meetPlacce/placePayMent'], resolve) //场地预定订单
const placeResult = resolve => require(['../new/views/meetPlacce/placeResult'], resolve) //场地预定订单
    /*------------------------------------------------------------------------------------------------------*/

 /*---------------------------------------------活动抽奖---------------------------------------------------------*/
 const drawrules = resolve => require(['../new/views/Lucky/drawrules'], resolve) // 幸运转盘
 const luckdraw = resolve => require(['../new/views/Lucky/luckdraw'], resolve) // 幸运转盘

/*---------------------------------------------我的积分---------------------------------------------------------*/
const myintegral = resolve => require(['../new/views/integral/MyIntegral.vue'], resolve) //
const integralExplan = resolve => require(['../new/views/integral/integralExplan.vue'], resolve) //
const Withdrawals = resolve => require(['../new/views/integral/Withdrawals.vue'], resolve) //


 /*--------------------------------------------租房----------------------------------------------------------*/
//首页
const HomePage = resolve => require(['../rent/pages/HomePage/HomePage'], resolve);
const framePage = resolve => require(['../rent/pages/HomePage/framePage'], resolve);
// const Login = resolve => require(['../rent/pages/Login/Index'], resolve);
// const PersonalCenter = resolve => require(['../rent/pages/HomePage/personalCenter'], resolve); //个人中心
const HouseList = resolve => require(['../rent/pages/House/HouseList'], resolve); //房源列表

const HotSearch = resolve => require(['../rent/pages/House/HotSearch'], resolve); //热门搜索
const Complaint = resolve => require(['../rent/pages/House/Complaint'], resolve);

//支付
const Lease = resolve => require(['../rent/pages/House/Lease'], resolve); //我的租约
const PaySure = resolve => require(['../rent/pages/House/PaySure'], resolve); //支付确认
const PaymentDetails = resolve => require(['../rent/pages/House/PaymentDetails'], resolve);
//收藏
const Collection = resolve => require(['../rent/pages/House/Collection'], resolve);
//mxx

const Delegation = resolve => require(['../rent/pages/Delegation/Delegation'], resolve); //业主委托
const DepositContract = resolve => require(['../rent/pages/DepositContract/DepositContract'], resolve); //定金合同
const Lessee = resolve => require(['../rent/pages/Lessee/Lessee'], resolve); //合同详情
const MyContract = resolve => require(['../rent/pages/MyContract/MyContract'], resolve); //我的合同

//房源详情
const Fyxq = resolve => require(['../rent/pages/fyxq/houseDetail'], resolve);
const Djyd = resolve => require(['../rent/pages/fyxq/payDeposit'], resolve);


//约看
const appointList = resolve => require(['../rent/pages/Appoint/appointList'], resolve);
const submitAppoint = resolve => require(['../rent/pages/Appoint/submitAppoint'], resolve);
const appointSuccess = resolve => require(['../rent/pages/Appoint/appointSuccess'], resolve);
const ThreeD = resolve => require(['../rent/pages/fyxq/threeD.vue'], resolve);
//精彩活动列表页
const ActiveList = resolve => require(['../rent/pages/HomePage/activeList'], resolve);
//地图找房
const MapSearch = resolve => require(['../rent/components/HouseList/HeatMap'], resolve);
//房源详情地图导航
const houseDetailMap = resolve => require(['../rent/components/fyxq/houseDetailMap'], resolve);
//线路
const MapRouteLine = resolve => require(['../rent/components/fyxq/MapRouteLine'], resolve);

/*------------------------------------------------------------------------------------------------------*/


const routes = [
    /*-----------------------------------------新房-------------------------------------------------*/

    {
        path: '/login', //登录页面
        name: 'login',
        component: login,
        meta: {
            title: '登录',
            business:'new'
        },
    },
    {
        path: '/', //首页
        name: 'first',
        component: first,
        meta: {
            title: '首页',
            isShow: true,
            business:'com'
        },
    },
    { //个人中心
        path: '/personalCenter',
        name: 'personalCenter',
        component: personalCenter,
        meta: {
            title: '个人中心',
            isShow: true,
            business:'new'
        },
    },
    {
        path: '/newhousehome', //楼盘列表页
        name: 'newhousehome',
        component: newhousehome,
        meta: {
            title: '新房首页',
            isShow: false
        },
    },
    {
        path: '/information', //资讯列表
        name: 'information',
        component: information,
        meta: {
            title: '资讯列表',
            isShow: false,
            keepAlive: true
        },
    },
    {
        path: '/informationDetail', //资讯详情
        name: 'informationDetail',
        component: informationDetail,
        meta: {
            title: '资讯详情',
            isShow: false
        },
    }, {
        path: '/search', //搜索
        name: 'search',
        component: search,
        meta: {
            title: '搜索',
            isShow: false
        },
    },
    {
        path: '/searchcity', //搜索城市
        name: 'searchcity',
        component: searchcity,
        meta: {
            title: '切换城市',
            isShow: false
        },
    },
    {
        path: '/searchresult',
        name: 'searchresult',
        component: searchresult,
        meta: {
            title: '搜索结果',
            isShow: false
        },
    },
    {
        path: '/myratings',
        name: 'myratings',
        component: myratings,
        meta: {
            title: '我的评论',
            isShow: false
        },
    },
    {
        path: '/interactivemessage',
        name: 'interactivemessage',
        component: interactivemessage,
        meta: {
            title: '互动消息',
            isShow: false
        },
    },
    {
        path: '/newhousebuilddetail',
        name: 'newhousebuilddetail',
        component: newhousebuilddetail,
        meta: {
            title: '楼盘详情',
            isShow: false
        },
    },
    {
        path: '/buildalldetail',
        name: 'buildalldetail',
        component: buildalldetail,
        meta: {
            title: '楼盘详情',
            isShow: false
        },
    },
    {
        path: '/allhousetype',
        name: 'allhousetype',
        component: allhousetype,
        meta: {
            title: '全部户型',
            isShow: false
        },
    },
    {
        path: '/housetypedetail',
        name: 'housetypedetail',
        component: housetypedetail,
        meta: {
            title: '户型详情',
            isShow: false
        },
    },
    {
        path: '/allratings',
        name: 'allratings',
        component: allratings,
        meta: {
            title: '全部评价',
            isShow: false
        },
    },
    {
        path: '/newbuildList', //楼盘列表页
        name: 'newbuildList',
        component: newbuildList,
        meta: {
            title: '楼盘展示',
            isShow: false
        },
    },
    {
        path: '/buildList', //楼盘列表页
        name: 'buildList',
        component: buildList,
        meta: {
            title: '楼盘展示',
            isShow: false,
            business:'new'
        },
    },
    {
        path: '/onLineHouse', //楼盘列表页
        name: 'onLineHouse',
        component: onLineHouse,
        meta: {
            title: '在线选房',
            isShow: true,
            business:'new'
        },
    }, {
        path: '/modifyInfo', //修改个人资料页面
        name: 'modifyInfo',
        component: modifyInfo,
        meta: {
            title: '我的资料',
            business:'com'
        },
    }, {
        path: '/cardCoupons', //修改个人资料页面
        name: 'cardCoupons',
        component: cardCoupons,
        meta: {
            title: '我的卡券',
            business:'com'
        },
    }, {
        path: '/ImgLoad', //上传图片
        name: 'ImgLoad',
        component: ImgLoad,
        meta: {
            title: '上传头像',
            business:'new'
        },
    }, { //房贷计算器
        path: '/Calculator',
        name: 'Calculator',
        component: Calculator,
        meta: {
            title: '房贷计算器',
            isShow: false,
            keepAlive: true,
            business:'new'
        }
    }, { //房贷计算器计算结果
        path: '/PaymentPage',
        name: 'PaymentPage',
        component: PaymentPage,
        meta: {
            title: '房贷计算器',
            isShow: false,
            business:'new'
        }
    }, { //房贷计算器计算结果
        path: '/ZuhePayment',
        name: 'ZuhePayment',
        component: ZuhePayment,
        meta: {
            title: '房贷计算器',
            isShow: false,
            keepAlive: true,
            business:'new'
        }
    },

    { //房贷计算器计算结果
        path: '/ShuifeiPay',
        name: 'ShuifeiPay',
        component: ShuifeiPay,
        meta: {
            title: '房贷计算器',
            isShow: false,
            business:'new'
        }


    }, {
        path: '/reservationpage', //预约列表
        name: 'reservationpage',
        component: reservationpage,
        meta: {
            title: '预约看房',
            business:'new'
        },
    }, {
        path: '/appointement', //预约列表
        name: 'appointement',
        component: appointement,
        meta: {
            title: '我的预约',
            business:'new'
        },
    }, {
        path: '/collent', //收藏列表
        name: 'collent',
        component: collent,
        meta: {
            title: '我的收藏',
            business:'com'
        },
    }, {
        path: '/building_detial', //楼盘详情
        name: 'building_detial',
        component: building_detial,
        meta: {
            title: '楼盘详情',
            business:'new'
        },
    }, {
        path: '/houseType', //户型详情
        name: 'houseType',
        component: houseType,
        meta: {
            title: '户型详情',
            business:'new'
        },
    }, {
        path: '/MemberIfream', //入会说明
        name: 'MemberIfream',
        component: MemberIfream,
        meta: {
            title: '入会说明',
            isShow: false,
            business:'new'
        },
    }, {
        path: '/membership', //入会详情
        name: 'membership',
        component: membership,
        meta: {
            title: '我要入会',
            business:'new'
        },
    }, {
        path: '/house_resource', //房源列表
        name: 'house_resource',
        component: house_resource,
        meta: {
            title: '房源展示',
            business:'new'
        },
    }, {
        path: '/housingPrice', //楼盘走势列表
        name: 'housingPrice',
        component: housingPrice,
        meta: {
            title: '楼盘走势',
            business:'new'
        },
    }, {
        path: '/housingPriceInfo', //楼盘走势折线图
        name: 'housingPriceInfo',
        component: housingPriceInfo,
        meta: {
            title: '楼盘走势图',
            business:'new'
        },
    }, {
        path: '/house_detial', //房源详情
        name: 'house_detial',
        component: house_detial,
        meta: {
            title: '房源列表',
            business:'new'
        },
    }, {
        path: '/downPage', //下订
        name: 'downPage',
        component: downPage,
        meta: {
            title: '房源下订',
            business:'new'
        },
    }, {
        path: '/map', //地图
        name: 'map',
        component: map,
        meta: {
            title: '查看位置',
            business:'new'
        },
    }, {
        path: '/buildImgList', //楼盘相册
        name: 'buildImgList',
        component: buildImgList,
        meta: {
            title: '楼盘相册',
            business:'new'
        },
    }, {
        path: '/orderList', //订单列表
        name: 'orderList',
        component: orderList,
        meta: {
            title: '我的订单',
            business:'new'
        },
    }, {
        path: '/addOrder', //定餐菜单
        name: 'addOrder',
        component: addOrder,
        meta: {
            title: '菜单展示',
            business:'new'
        },
    }, {
        path: '/payMent', //定单结算
        name: 'payMent',
        component: payMent,
        meta: {
            title: '订单结算',
            business:'new'
        },
    }, {
        path: '/orderResult', //定单结果
        name: 'orderResult',
        component: orderResult,
        meta: {
            title: '订单结果',
            business:'new'
        },
    }, {
        path: '/placeChouse', //场地预定日历
        name: 'placeChouse',
        component: placeChouse,
        meta: {
            title: '场地预定',
            business:'new'
        },
    }, {
        path: '/placeOpaction', //场地预定详情
        name: 'placeOpaction',
        component: placeOpaction,
        meta: {
            title: '场地预定详情',
            business:'new'
        },
    }, {
        path: '/placePayMent', //场地预定订单
        name: 'placePayMent',
        component: placePayMent,
        meta: {
            title: '场地预定订单',
            business:'new'
        },
    }, {
        path: '/placeResult', //场地预定订单
        name: 'placeResult',
        component: placeResult,
        meta: {
            title: '场地订单展示',
            business:'new'
        },
    },
    {
        path: '/luckdraw',
        name: 'luckdraw',
        component: luckdraw,
        meta: {
            title: '幸运抽奖',
            isShow: false,
            business:'new'
        },
    }, {
        path: '/drawrules',
        name: 'drawrules',
        component: drawrules,
        meta: {
            title: '抽奖说明',
            isShow: false,
            business:'new'
        },
    }, { //积分
        path: '/myintegral',
        name: 'myintegral',
        component: myintegral,
        meta: {
            title: '我的积分',
            isShow: false,
            business:'new'
        },
    }, { //积分
        path: '/integralExplan',
        name: 'integralExplan',
        component: integralExplan,
        meta: {
            title: '积分说明',
            isShow: false,
            business:'new'
        },
    }, { //积分
        path: '/Withdrawals',
        name: 'Withdrawals',
        component: Withdrawals,
        meta: {
            title: '我要提现',
            isShow: false,
            business:'new'
        },
    },


    /*-----------------------------------------租房-------------------------------------------------*/
    {
        path: '/HomePage',
        meta: {
            title: '首页',
            business:'rent'
        },
        component: HomePage //首页
    },
    {
        path: '/framePage',
        meta: {
            title: '',
            business:'com'
        },
        component: framePage //首页
    },
    // {
    //     path: '/login',
    //     meta: {
    //         title: '登录'
    //     },
    //     component: Login
    // },
    {
        path: '/HouseList/houseDetail',
        meta: {
            title: '房源详情',
            business:'rent'
        },
        component: Fyxq //房源详情
    },
    {
        path: '/payDeposit',
        meta: {
            title: '定金预定',
            business:'rent'
        },
        component: Djyd //定金预定
    }, {
        path: '/appointList',
        meta: {
            isShow: true,
            title: '约看清单',
            business:'rent'
        },
        component: appointList //约看清单
    }, {
        path: '/PaymentDetails',
        meta: {
            title: '支付',
            business:'rent'
        },
        component: PaymentDetails //支付
    }, {
        path: '/PaySure',
        meta: {
            title: '支付确认',
            business:'rent'
        },
        component: PaySure
    }, {
        path: '/appointList/submitAppoint',
        meta: {
            title: '提交约看',
            business:'rent'
        },
        component: submitAppoint //提交约看
    }, {
        path: '/appointList/appointSuccess',
        meta: {
            title: '约看成功',
            business:'rent'
        },
        component: appointSuccess //约看成功
    },{
        path: '/threeDLookHouse',
        meta: {
            title: '',
            business:'rent'
        },
        component: ThreeD //3D看房frame页面
    }, {
        path: '/HouseList', //房源列表
        component: HouseList,
        meta: {
            // keepAlive: true,
            title: '',
            isShow: true,
            business:'rent'
        }
    }, {
        path: '/HouseList/HotSearch', //热门搜索
        meta: {
            title: '热门搜索',
            business:'rent'
        },
        component: HotSearch
    }, {
        path: '/Delegation', //业主委托
        meta: {
            title: '业主委托',
            isShow: false,
            business:'rent'
        },
        component: Delegation
    }, {
        path: '/MyContract/DepositContract', //定金合同
        meta: {
            title: '定金合同',
            business:'rent'
        },
        component: DepositContract
    }, {
        path: '/DepositContract/Lessee', //合同详情
        meta: {
            title: '合同详情',
            business:'rent'
        },
        component: Lessee
    }, {
        path: '/MyContract', //我的合同
        component: MyContract,
        meta: {
            //keepAlive: true,
            title: '我的合同',
            isShow: true,
            business:'rent'
        }
    }, {
        path: '/Complaint', //投诉建议
        meta: {
            title: '投诉建议',
            business:'rent'
        },
        component: Complaint
    }, {
        path: '/Lease', //我的租约
        meta: {
            title: '我的租约',
            business:'rent'
        },
        component: Lease
    }, {
        path: '/Collection', //我的收藏
        meta: {
            title: '我的收藏',
            business:'rent'
        },
        component: Collection
    }, {
        path: '/ActiveList', //精彩活动列表
        meta: {
            title: '精彩活动',
            business:'rent'
        },
        component: ActiveList
    },
    {
        path: '/MapSearch', //地图找房
        meta: {
            title: '地图找房'
        },
        component: MapSearch
    },
    {
        path: '/houseDetailMap', //房源周边
        meta: {
            title: '周边'
        },
        component: houseDetailMap
    },
    {
        path: '/MapRouteLine', //路线
        meta: {
            title: '路线'
        },
        component: MapRouteLine
    },
    {
        path: '*',
        beforeEnter: (to, from, next) => {
            next("/")
        }
    },
];

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

const vue = new Vue();
/*---------------------------------------------------*/
// 路由拦截器
router.beforeEach((to, from, next) => {
    var platform =  localStorage.getItem('platform');
    if(platform == null || platform =='null' || platform == undefined){
        platform = 'webPage';
    }
    // 统计代码
    if (to.path) {
        // console.log(to);
        // 平台 + 业务 +  地址
      _hmt.push(['_trackPageview','/' + platform + '/' + to.meta.business  + to.fullPath ]);
    }
    next();
  });
router.afterEach((to, from) => {

});

export default router
