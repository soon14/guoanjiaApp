<template>
    <div style='background-color:#f5f5f5;height:100%;' :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]">
        <div class='hook'>
            <div class="search">
                <div>
                    <img src="../../../../static/new/newhouseimg/search.png" alt="">
                    <form @search='search' target='frameFile'>
                        <input v-model='searchstr' type="search" placeholder="输入城市名称进行搜索">
                    </form>
                    <iframe name='frameFile' style="display: none;"></iframe>
                    <img @click='clean' src="../../../../static/new/newhouseimg/close.png" alt="">
                </div>
            </div>
            <div class='citylist'>
                <div>
                    <span>{{gelInfo.title}}</span>
                    <p>{{gelInfo.content}}</p>
                </div>
                <div>
                    <span>热门地区</span>
                    <ul>
                        <li @click='clickhouse(item)' v-for='(item,index) in hotarea' :key='index'>{{item.area}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="letter">
            <div class='city_left' :class="[AndroidOrIos() ? 'android' : 'ios']">
                <ul>
                    <li class='list' v-for='(item,index) in city' :key='index'>
                        <h1>{{item.initials}}</h1>
                        <ul>
                            <li  @click='clickhouse(c)' :class="{'vux-1px-b': index != item.area.length-1}" v-for='(c,index) in item.area' :key='index'>{{c.area}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class='city_right'>
                <ul>
                    <li @click='clicklitter(index)' :class="{'currentclass':currentIndex == index}" v-for='(item,index) in letter' :key='index'>{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
    export default {
        data () {
            return {
                hotarea:[],
                city:[],
                citycopy:[],
                letter:[],
                listHeight:[],
                scrollY:0,
                scroll:null,
                searchstr:''
            }
        },
        computed:{
            gelInfo(){
                if(this.$store.state.area == ''){
                    return {
                        title:'暂无位置信息',
                        content:'您可以在“设置-隐私-定位服务”中开启定位服务，开启后可为您推荐当前地区服务'
                    }
                }else{
                    return {
                        title:this.$store.state.area,
                        content:`当前正在为您推荐${this.$store.state.area}的服务，您可以切换地区查看其它地区服务。`
                    }
                }
            },
            currentIndex(){
                for(let i=0;i<this.listHeight.length;i++){
                    let height1 = this.listHeight[i],height2 = this.listHeight[i+1];
                    if(!height2 ||(this.scrollY >= height1 && this.scrollY < height2)){
                        return i
                    }
                }
                return 0;
            }
        },
        watch:{
            searchstr(newvalue,oldvalue){
                if(newvalue == ''){
                    this.city = this.citycopy;
                    this.letter = [];
                    this.city.forEach(item=>{
                        this.letter.push(item.initials);
                    })
                }
            }
        },
        created(){
            this.get('/buildapp/BuildBaseInfoA/areaListsort',{
                interfaceType:"newhouse"
            }).then(res=>{
                if(res.data != null){
                    this.hotarea = res.data.hotarea;
                    this.city = res.data.areaList;
                    this.citycopy = [...res.data.areaList];
                    res.data.areaList.forEach(item=>{
                        this.letter.push(item.initials);
                    })
                    this.$nextTick(_=>{
                        let divhook = document.querySelector('.hook'),
                            divhookheight = divhook.clientHeight,
                            divtop = document.querySelector('.letter'),
                            wrapper = document.querySelector('.city_left'),
                            list = wrapper.getElementsByClassName('list'),
                            height=0;
                        divtop.style.top = divhookheight + "px";
                        this.listHeight.push(height);
                        for(let i=0;i<list.length;i++){
                            height += list[i].offsetHeight;
                            this.listHeight.push(height);
                        }
                        this.scroll = new BScroll(wrapper,{
                            probeType:3,
                            click:true
                        })
                        this.scroll.on('scroll',(res)=>{
                            this.scrollY = Math.abs(Math.round(res.y));
                        })
                    })
                }
            })
        },
        methods:{
            //点击右侧字母的动作
            clicklitter(index){
                let wrapper = document.querySelector('.city_left').getElementsByClassName('list');
                this.scroll.scrollToElement(wrapper[index],300);
            },
            //手机键盘搜索按钮
            search(){
                this.city = this.citycopy;
                this.$nextTick(_=>{
                    if(this.searchstr!=''){
                        let arr = [];
                        this.city.forEach((item,index)=>{
                            for(let i in item){
                                if(item[i] instanceof Array){
                                    let arr1 = [];
                                    item[i].forEach(Item=>{
                                        if(Item.area.indexOf(this.searchstr)!=-1){
                                            arr1.push(Item);
                                            arr.push({
                                                initials:Item.initials,
                                                area:arr1
                                            });
                                        }
                                    });
                                }
                            }
                        })
                        // this.city = [];
                        this.letter=[];
                        let obj = {},arr1=[];//去重对象形式的数组
                        arr.forEach(item=>{
                            if(!obj[item.initials]){
                                arr1.push(item);
                                obj[item.initials] = true;
                            }
                        })
                        this.city = arr1;
                        arr1.forEach(item=>{
                            this.letter.push(item.initials);
                        })
                        document.activeElement.blur();
                    }
                })
            },
            //搜索框清除
            clean(){
                this.searchstr = '';
            },
            //点击楼盘所在区域
            clickhouse(item){
                this.$store.commit('setarea',{area:item.area,logo:item.logo});
                this.$router.back();
            }
        }
    }
</script>
<style lang='less' scoped>
.search{
    padding:0.2rem;
    box-sizing: border-box;
    background:#fff;
    &>div{
        background:#ececec;
        height:0.6rem;
        padding:0.1rem 0.2rem;
        box-sizing: border-box;
        border-radius: 0.05rem;
        text-align:left;
        font-size:0;
        display:flex;
        &>img:nth-of-type(1){
            margin-right:0.2rem;
        }
        &>img{
            display: inline-block;
            width:0.4rem;
            height:0.4rem;
            vertical-align:top;
        }
        &>form{
            flex:1;
            &>input{
                width:100%;
                vertical-align:top;
                border:none;
                outline:none;
                height: 0.4rem;
                line-height: 0.4rem;
                font-size:0.24rem;
                color:#323232;
                background:#ececec;
            }
        }
    }
}
.citylist{
    padding:0.25rem 0.2rem;
    box-sizing:border-box;
    font-size:0;
    &>div:nth-child(1){
        padding:0.1rem 0.4rem 0.1rem 0.28rem;
        box-sizing:border-box;
        height: 1.4rem;
        background:#57bce8;
        text-align:left;
        color:#fff;
        border-radius: 0.05rem;
        span{
            font-size:0.36rem;
            font-weight:700;
        }
        p{
            font-size:0.24rem;
            letter-spacing: 3px;
            line-height: 0.35rem;
        }
    }
    &>div:nth-child(2){
        margin-top:0.4rem;
        text-align: left;
        span{
            font-size:0.24rem;
            color:#757575;
        }
        ul{
            margin:0.18rem 0 0.1rem 0;
            display: flex;
            flex-wrap: wrap;
            li:last-child{
                margin-right:0;
                margin-bottom:0;
            }
            li{
                font-size:0.3rem;
                color:#323232;
                padding:0 0.1rem;
                box-sizing: border-box;
                height: 0.78rem;
                line-height: 0.78rem;
                border-radius: 0.05rem;
                background:#fff;
                text-align:center;
                font-weight:500;
                margin-right:0.18rem;
                margin-bottom:0.1rem;
            }
        }
    }
}
.letter{
    position: absolute;
    bottom:0;
    left: 0;
    right:0;
    &>.city_left{
        position: absolute;
        top:0;
        left: 0;
        right:0;
        overflow: hidden;
        &.ios{
            bottom:1.3rem;
        }
        &.android{
            bottom:1.1rem
        }
        &>ul{
            text-align: left;
            &>li{
                h1{
                    font-size:0.28rem;
                    color:#909090;
                    background:#f2f2f2;
                    padding:0.16rem 0.2rem;
                    box-sizing: border-box;
                }
                ul{
                    li{
                        font-size:0.3rem;
                        font-weight: 500;
                        color:#323232;
                        padding:0.29rem 0.2rem;
                        box-sizing: border-box;
                        background:#fff;
                    }
                }
            }
        }
    }
    &>.city_right{
        position: absolute;;
        right:0;
        top:0;
        bottom:0;
        z-index: 200;
        background: #ffffff;
        width:0.45rem;
        font-size:0.24rem;
        color:#57bce7;
        overflow: hidden;
        li{
            height: 0.4rem;
            line-height:0.4rem;
        }
        .currentclass{
            font-size:0.36rem;
            color:#d7000f;
        }
    }
}
</style>
