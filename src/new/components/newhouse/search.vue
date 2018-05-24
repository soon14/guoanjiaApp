<template>
    <div  style='height:100%'>
        <div :class="[AndroidOrIos() ? 'headerHomeAndro' : 'headerHome']" >
            <div v-if="!AndroidOrIos()" style="height: 0.2rem;"></div>
            <div class='search'>
                <div>
                    <img src="../../../../static/new/newhouseimg/search.png" alt="">
                    <form @search='searchresource' target='frameFile'>
                        <input @input="searchData" v-model='searchdata' v-focus type="search" placeholder="楼盘、资讯、开发商、地址...">
                    </form>
                    <iframe name='frameFile' style="display: none;"></iframe>
                </div>
                <span @click='goBack'>
                    取消
                </span>
            </div>
        </div>
        <div class='search_history' v-if="searchdata == ''" :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent']">
            <div v-if='historydata.length!=0' class='has_history'>
                <span>历史搜索</span>
                <ul class='vux-1px'>
                    <li @click='clickhistory(item)' :class="{'vux-1px-b': index != historydata.length-1}" v-for='(item,index) in historydata' :key='index'>
                        <span>{{item.searchName}}</span>
                        <img @click.stop='deletehistory(index,item)' src="../../../../static/new/newhouseimg/Exit.png" alt="">
                    </li>
                </ul>
                <div>
                    <div class='vux-1px' @click='cleanhistory'>
                        <img src="../../../../static/new/newhouseimg/Trash.png" alt="">
                        <span>
                            清空历史搜索
                        </span>
                    </div>
                </div>
            </div>
            <div v-else class='non_history'>
                <span>
                    {{nohistory}}
                </span>
            </div>
        </div>
        <div class="search_matching" v-else :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent']">
            <ul class="vux-1px" v-if='showmatch'>
                <li :class="{'vux-1px-b': index != matchingdata.length-1,'lastli':index ==  matchingdata.length-1}" v-for='(item,index) in matchingdata' @click='clickmatch(item)' :key='index'>
                    <span v-html="item.innerhtml"></span>
                    <img src="../../../../static/new/newhouseimg/arrowright.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                nohistory:'正在加载数据...',
                searchdata:'',
                historydata:[],
                matchingdata:[],
                time:0
            }
        },
        created(){
            this.get('/buildapp/BuildBaseInfoA/getHistoryRecord',{
                interfaceType:'newhouse'
            }).then(res=>{
                if(res.data instanceof Array){
                    this.historydata = res.data;
                    if(this.historydata.length==0){
                        this.nohistory='暂无历史搜索';
                    }
                }else{
                    this.historydata = [];
                    this.nohistory='暂无历史搜索';
                }
            })
        },
        computed:{
            showmatch(){
                if(this.matchingdata.length!=0){
                    return true;
                }else{
                    return false;
                }
            }
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        methods:{
            goBack(){ 
                this.searchdata = '';
                this.$router.go(-1);
            },
            //清空历史记录
            cleanhistory(){
                this.get('/buildapp/BuildBaseInfoA/deleteHistoryRecord?searchName=',{
                    interfaceType:'newhouse'
                }).then(res=>{
                    this.historydata = [];
                    this.nohistory = '暂无历史搜索';
                })
            },
            //叉叉删除单独历史记录
            deletehistory(index,item){
                this.get(`/buildapp/BuildBaseInfoA/deleteHistoryRecord?searchName=${item.searchName}`,{
                    interfaceType:'newhouse'
                }).then(res=>{
                    this.historydata.splice(index,1);
                    if(this.historydata.length == 0){
                        this.nohistory = '暂无历史搜索';
                    }
                })
            },
            //点击历史记录跳转页面
            clickhistory(item){
                    let obj = {};
                    if(item.type == 1){
                        obj = {
                            path:'newhousebuilddetail',
                            query:{
                                buildID:item.typeid
                            }
                        }
                    }else if(item.type == 2){
                        obj = {
                            path:'informationDetail',
                            query:{
                                id:item.typeid
                            }
                        }
                    }
                    this.$router.push(obj);
            },
            //点击匹配项
            clickmatch(item){
                this.get(`/buildapp/BuildBaseInfoA/saveHistoryRecord?searchName=${item.searchname}&type=${item.logo}&typeid=${item.id}`,{
                    interfaceType:'newhouse'
                }).then(res=>{
                    if(item.logo == 1){
                        this.$router.push({path:'newhousebuilddetail',query:{buildID:item.id}})
                    }else if(item.logo == 2){
                        this.$router.push({path:'informationDetail',query:{id:item.id}})
                    }
                })
            },
            //input的change事件
            searchData(){
                let str = '';
                if(this.searchdata !=''){
                    let t = new Date().getTime();
                    if(this.$store.state.logo == 1){
                        str = `?province=${this.$store.state.area}&city=&searchname=${this.searchdata}&time=${t}`
                    } else if(this.$store.state.logo == 2){
                        str = `?province=&city=${this.$store.state.area}&searchname=${this.searchdata}$time=${t}`;
                    }
                    this.matchingdata = [];
                    this.time = t;
                    this.get(`/buildapp/BuildBaseInfoA/getSearchPrompt${str}`,{
                        interfaceType:"newhouse"
                    }).then(res=>{
                        if(res.data != null){
                            if(res.data.time==this.time){
                                this.matchingdata = res.data.list;
                                this.matchingdata.forEach((item,index)=>{
                                    let that = this,
                                        reg1 = new RegExp(that.searchdata,'g'),
                                        reg2 = /(---资讯)|(---楼盘)/g,
                                        text = item.searchname,
                                        fragment1 = text.match(reg2),
                                        fragment2 = text.replace(reg2,"");
                                    this.$set(this.matchingdata[index],'innerhtml',fragment2.replace(reg1,"<span style='color:#d7000f'>"+ text.match(reg1) +"</span>") + "<span style='color:#909090'>"+ fragment1 +"</span>")
                                })
                            }
                        }
                    })
                } 
                
            },
            //点击手机键盘的搜索按钮
            searchresource(){
                this.$router.push({path:'searchresult',query:{param:this.searchdata}})   
            },
        }
    }
</script>
<style lang='less' scoped>
.search{
    padding:0 0.2rem;
    box-sizing: border-box;
    font-size:0;
    &>div{
        display:inline-block;
        background:#ececec;
        height:0.6rem;
        width:6.25rem;
        margin-top:0.25rem;
        padding-top:0.1rem;
        box-sizing: border-box;
        border-radius: 0.05rem;
        text-align:left;
        &>img{
            display: inline-block;
            width:0.4rem;
            height:0.4rem;
            vertical-align:top;
            margin:0 0.2rem;
        }
        form{
            display: inline-block;
        }
        input{
            vertical-align:top;
            border:none;
            outline:none;
            width:5.45rem;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size:0.24rem;
            color:#323232;
            background:#ececec;
        }
    }
    &>span{
        display: inline-block;
        vertical-align: top;
        margin-top:0.25rem;
        margin-left:0.2rem;
        font-size:0.3rem;
        font-weight:500;
        height:0.6rem;
        line-height:0.6rem;
        color:#323232;
    }
}
.search_history{
    width:100%;
    height:100%;
    padding:0 0.2rem;
    box-sizing:border-box;
    box-shadow:0 3px 0 #d6d6d6 inset;
    background-color:#f5f5f5;
    text-align:left;
    &>.has_history{
        &>span{
            font-size:0.24rem;
            color:#757575;
            display: block;
            width:100%;
            height:0.6rem;
            line-height:0.6rem;
        }
        &>ul{
            width:100%;
            background:white;
            li{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 0.9rem;
                line-height: 0.9rem;
                padding:0 0.2rem 0 0.7rem;
                box-sizing:border-box;
                font-size:0.24rem;
                color:#323232;
                position: relative;
                &>span::before{
                    content:'';
                    background: url('../../../../static/new/newhouseimg/Clock.png') no-repeat center;
                    background-size:100% 100%;
                    position: absolute;
                    top:0.28rem;
                    left:0.2rem;
                    width:0.3rem;
                    height:0.3rem;
                }
                &>img{
                    width:0.25rem;
                    height:0.25rem;
                }
            }
        }
        &>div{
            width:100%;
            color:#757575;
            text-align: center;
            div{
                margin:0 auto;
                width:4.38rem;
                height: 0.65rem;
                line-height: 0.65rem;
                margin-top:0.78rem;
                padding-left:0.17rem;
                box-sizing: border-box;
                font-size:0;
                img{
                    vertical-align: top;
                    display: inline-block;
                    margin-right:0.14rem;
                    margin-top:0.19rem;
                    width:0.23rem;
                    height:0.27rem;
                }
                span{
                    font-size:0.24rem;
                }
            }
        }
    }
    &>.non_history{
        width:100%;
        height:100%;
        font-size: 0;
        text-align: center;
        padding-top:40%;
        box-sizing: border-box;
        span{
            font-size:0.24rem;
        }
    }
}
.search_matching{
    height:100%;
    width:100%;
    font-size:0.24rem;
    color:#323232;
    padding:0.1rem 0.2rem 0;
    box-sizing:border-box;
    box-shadow:0 3px 0 #d6d6d6 inset;
    background-color:#f5f5f5;
    ul{
        background-color:#fff;
        padding:0 0.2rem;
        box-sizing:border-box;
        li{
            display: flex;
            justify-content: space-between;
            padding:0.32rem 0;
            box-sizing:border-box;
            img{
                width:0.19rem;
                height:0.3rem;
            }
        }
        .lastli{
            position: relative;
            z-index: 10000;
        }
    }
}
</style>

