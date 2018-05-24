/**
 * 项目配置信息
 * @type {{}}
 */

//TODO 上线时修改接口地址
const isDev = () => {
  return window.location.host.indexOf("guoanfamily.com") === -1;
};

let def = {
  //微信后台接口地址
  WECHAT: "//www.guoanfamily.com/openweixin/",
  WECHAT_AUTH_URL: (url) => {
      return `http://act.guoanfamily.com/openweixin/user/getCode?redirect_url=${url}&scope=snsapi_base`;
  },
  PAY_WAY: "https://www.guoanfamily.com/common/"
};

let dev = {
  DEV: true,
  // INTERFACE_NEW1: "http://172.16.43.166:8002/palmsaleapp/api/v1",
  // INTERFACE_NEW1: "http://ntest.guoanfamily.com/palmsaleapp/api/v1",
  INTERFACE_NEW: "https://www.guoanfamily.com/",
  INTERFACE_RENT: "https://www.guoanfamily.com/agenthouseCutomer/",
  UPLOAD_IMAGE: `https://www.guoanfamily.com/agenthouseWeb/CommonController/uploadFile`,
  IMAGE_PATH: "https://media.guoanfamily.com/",
  WECHAT_AUTH: false,

  //个人中心后台接口
  //COLLECT: "https://www.guoanfamily.com/user/",
  COLLECT: "https://www.guoanfamily.com/user/",
  // 我的积分后台接口
  // intergral: 'http://rtest.guoanfamily.com/',
  intergral: 'https://www.guoanfamily.com/',
  // 抽奖后台接口
  luckdraw: 'https://www.guoanfamily.com/',
  // luckdraw: 'http://ntest.guoanfamily.com/',
  
  // COLLECT: "http://ntest.guoanfamily.com/user/",
  // 餐厅接口
  metRest: "https://www.guoanfamily.com/",
  // metRest: "http://ntest.guoanfamily.com/",
  //个人中心登录页面地址
  LOGIN_PAGE_URL: function() {
      // return `http://ntest.guoanfamily.com/newHouseTest/#/login?domain=${encodeURIComponent(window.location.href)}`
      return `https://www.guoanfamily.com/guoanjia/#/login?domain=${encodeURIComponent(window.location.href)}`
  },
};

let prod = {
  DEV: false,
  INTERFACE_NEW: "https://www.guoanfamily.com/",
  // INTERFACE_NEW: "http://ntest.guoanfamily.com/",
  // INTERFACE_NEW: "http://172.16.40.120:8002/",
  INTERFACE_RENT: "https://www.guoanfamily.com/agenthouseCutomer/",
  UPLOAD_IMAGE: `https://www.guoanfamily.com/agenthouseWeb/CommonController/uploadFile`,
  IMAGE_PATH: "https://media.guoanfamily.com/",
  // 个人中心后台接口个人中心后台接口
  COLLECT: "https://www.guoanfamily.com/user/",
  // COLLECT: "http://ntest.guoanfamily.com/user/",
  // 会议接口
  metRest: "https://www.guoanfamily.com/",
  SUPERNATANT: 'https://www.guoanfamily.com/guoanjiaApp/#/HouseList/houseDetail?',
   // 我的积分后台接口
  intergral: 'https://www.guoanfamily.com/',
  // intergral: 'http://rtest.guoanfamily.com/',
   // 抽奖后台接口
  luckdraw: 'https://www.guoanfamily.com/',
  // luckdraw: 'http://ntest.guoanfamily.com/',
  // INTERFACE: "http://172.16.4.12:8084/agenthouseCutomer/",
  // UPLOAD_IMAGE: `http://172.16.4.12:8082/agenthouseWeb/CommonController/uploadFile`,
  // // IMAGE_PATH: "http://172.16.4.12:8088/upload_image/",
  // IMAGE_PATH: "https://media.guoanfamily.com/",
  WECHAT_AUTH: true,
  // COLLECT: "http://ntest.guoanfamily.com/user/",
  // metRest: "http://ntest.guoanfamily.com/",
  //个人中心登录页面地址
  LOGIN_PAGE_URL: function() {
      return `https://www.guoanfamily.com/guoanjia/#/login?domain=${encodeURIComponent(window.location.href)}`
  },
};

let config = isDev() ? dev : prod;
config = Object.assign(config, def);
export { config }