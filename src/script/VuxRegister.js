/**
 * Created by Administrator on 2017/4/10 0010.
 */
//安装vux全局组件
import {
    AlertPlugin,
    Toast,
    ToastPlugin,
    XInput,
    Group,
    XButton,
    Datetime,
    XSwitch,
    Scroller,
    //Swiper,
    ConfirmPlugin,
    SwiperItem,
    WechatPlugin,
    LoadingPlugin,
    Cell,
    Flexbox,
    FlexboxItem,
    Tabbar,
    TabbarItem,
    ButtonTab,
    ButtonTabItem,
    XDialog,
    DatetimeRange,
    Checklist,
    ViewBox
} from 'vux'


export default class {

    constructor() {

    }

    install(Vue, options) {
        Vue.use(AlertPlugin);
        Vue.use(ToastPlugin);
        Vue.use(ConfirmPlugin);
        Vue.use(WechatPlugin);
        Vue.use(LoadingPlugin);

        Vue.component("Toast", Toast);
        Vue.component("Datetime", Datetime);
        Vue.component("XSwitch", XSwitch);
        Vue.component("Scroller", Scroller);

        Vue.component("Cell", Cell);
        Vue.component("Group", Group);
        Vue.component("Flexbox", Flexbox);
        Vue.component("FlexboxItem", FlexboxItem);
        Vue.component("Tabbar", Tabbar);
        Vue.component("TabbarItem", TabbarItem);
        Vue.component("XInput", XInput);
        Vue.component("XButton", XButton);
        Vue.component("ButtonTab", ButtonTab);
        Vue.component("ButtonTabItem", ButtonTabItem);
        //Vue.component("Swiper", Swiper);
        Vue.component("SwiperItem", SwiperItem);
        Vue.component("XDialog", XDialog);
        Vue.component("DatetimeRange", DatetimeRange);
        Vue.component("Checklist", Checklist);
        Vue.component("ViewBox", ViewBox);
    }
}