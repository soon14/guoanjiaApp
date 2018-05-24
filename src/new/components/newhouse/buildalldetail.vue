<template>
<div style="height:100%">
    <div class='alldetail_wrap' :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]" v-if='housedetail!=null'>
        <div class="baseinfo">
            <div>
                <span>{{housedetail.buildname}}</span>
                <span v-for="(item,index) in list" :key='index'>{{item}}</span>
            </div>
            <div>
                <span>均价{{housedetail.averageprice}}元/平</span>
                <span @click="jump({path:'Calculator'})"></span>
            </div>
            <div class='common'>
                <span>物业类型：</span>
                <span>{{housedetail.tenementtype}}</span>
            </div>
            <div class='common'>
                <span>产权年限：</span>
                <span>{{housedetail.equityyearlimit}}年</span>
            </div>
            <div class='common'>
                <span>开 发 商：</span>
                <span>{{housedetail.developers}}</span>
            </div>
            <div class="common">
                <span>楼盘地址：</span>
                <span>{{housedetail.province + housedetail.city + housedetail.country + housedetail.address}}</span>
                <span @click="jump({path:'map',query:addLocation})"></span>
            </div>
            <div class='common'>
                <span>装修情况：</span>
                <span>{{housedetail.decoratestate}}</span>
            </div>
            <div class='common'>
                <span>建筑类型：</span>
                <span>{{housedetail.buildtype}}</span>
            </div>
            <div class='common'>
                <span>开盘时间：</span>
                <span>{{housedetail.openquotationtime}}</span>
            </div>
            <div class='common'>
                <span>交房时间：</span>
                <span>{{housedetail.launchtime}}</span>
            </div>
        </div>
        <div class="allcommon">
            <h1>规划消息</h1>
            <div>
                <span>占地面积：</span>
                <span>{{housedetail.occupiedarea}}㎡</span>
            </div>
            <div>
                <span>建筑面积：</span>
                <span>{{housedetail.buildingarea}}㎡</span>
            </div>
            <div>
                <span>容积率：</span>
                <span>{{housedetail.volumefraction}}%</span>
            </div>
            <div>
                <span>绿化率：</span>
                <span>{{housedetail.greenrate}}%</span>
            </div>
            <div>
                <span>停车位：</span>
                <span>{{housedetail.stallnumber}}</span>
            </div>
            <div>
                <span>楼栋总数：</span>
                <span>{{housedetail.totabuildnum}}</span>
            </div>
            <div>
                <span>总户数：</span>
                <span>{{housedetail.totalhouseholdnumber}}</span>
            </div>
            <div>
                <span>物业公司：</span>
                <span>{{housedetail.tenementcompany}}</span>
            </div>
            <div>
                <span>物业费：</span>
                <span>{{housedetail.tenementfee}}</span>
            </div>
        </div>
        <div class="allcommon">
            <h1>五证信息</h1>
            <div>
                <span>土地使用证：</span>
                <span>{{housedetail.landcertificate}}</span>
            </div>
            <div>
                <span>建设用地规划许可证：</span>
                <span>{{housedetail.buildingplanlicence}}</span>
            </div>
            <div>
                <span>建设工程规划许可证：</span>
                <span>{{housedetail.buildingexecutionlicence}}</span>
            </div>
            <div>
                <span>建筑工程施工许可证：</span>
                <span>{{housedetail.buildingopenlicence}}</span>
            </div>
            <div>
                <span>预售证：</span>
                <span>{{housedetail.commodityhousedeallicence}}</span>
            </div>
        </div>
        <div class="baidumap">
            <h1>周边配套</h1>
            <div class="XSDFXPage" id='container'></div>
            <div class='divcommon'>
                <div>
                    <span>地铁：</span>
                    <span>{{metro}}</span>
                </div>
                <div>
                    <img src="../../../../static/new/newhouseimg/arrowright.png" alt="">
                </div>
            </div>
            <div class='divcommon'>
                <div>
                    <span>学校：</span>
                    <span>{{school}}</span>
                </div>
                <div>
                    <img src="../../../../static/new/newhouseimg/arrowright.png" alt="">
                </div>
            </div>
            <div class='divcommon'>
                <div>
                    <span>周边：</span>
                    <span>{{periphery}}</span>
                </div>
                <div>
                    <img src="../../../../static/new/newhouseimg/arrowright.png" alt="">
                </div>
            </div>
        </div>
        <div class="onlyservice">
            <h1>专享服务</h1>
            <div>400-900-2225转1</div>
            <div>最新政策、更多优惠详情，请致电展示中心</div>
        </div>
    </div>
    <newhousefooter></newhousefooter>
</div>
</template>
<script>
const newhousefooter = resolve => require(['../../components/newhouse/builddetail/newhousefooter'], resolve);
    export default {
        data() {
            return {
                housedetail:null,
                list:[],
                addLocation:'',
                school:'',
                metro:'',
                periphery:''

            }
        },
        mounted(){
            this.get(`/buildapp/BuildBaseInfoA/findBuildid?buildid=${this.$route.query.id}`,{
                interfaceType:"newhouse"
            }).then(res=>{
                if(res.data!=null){
                    if(res.data.buildtag!=''){
                        this.list = res.data.buildtag.split(',');
                    }
                    this.housedetail = res.data
                    this.addLocation = this.housedetail.province + this.housedetail.city + this.housedetail.country + this.housedetail.address
                    this.$nextTick(_=>{
                        this.addresonLoad(this.addLocation);
                    })
                }
            })
        },
        methods:{
            jump(obj){
                if(typeof obj.query != undefined){
                    this.$router.push({ path: obj.path, query: { address: obj.query } });
                }else{
                     this.$router.push({ path: obj.path});
                }
            },
            addresonLoad(addr) {
                let that = this;
                // 百度地图API功能
                let map = new BMap.Map("container");    // 创建Map实例
                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                let point = new BMap.Point(125, 39.897445);
                let myGeo = new BMap.Geocoder();
                let top_right_navigation = new BMap.NavigationControl({type: BMAP_NAVIGATION_CONTROL_SMALL}); //仅包含缩放按钮
					map.addControl(top_right_navigation);
                myGeo.getPoint(addr, function(point) {
                    if (point) {
                        map.centerAndZoom(point, 16);
                        function getCurrentNumPois(target){
                            let options = {
                                onSearchComplete: function(results){
                                    // 判断状态是否正确
                                    if (local.getStatus() == BMAP_STATUS_SUCCESS){
                                        let s = [];
                                        for (let i = 0; i < results.getCurrentNumPois(); i ++){
                                            s.push(results.getPoi(i).title);
                                        }
                                        switch(target){
                                            case '地铁':
                                               that.metro = s.join(';');
                                               break;
                                            case '学校':
                                               that.school = s.join(';');
                                               break;
                                            case '周边':
                                               that.periphery = s.join('、');
                                               break;
                                        }
                                    }else{
                                       switch(target){
                                            case '地铁':
                                               that.metro = '暂无地铁信息';
                                               break;
                                            case '学校':
                                               that.school = '暂无学校信息';
                                               break;
                                            case '周边':
                                               that.periphery = '暂无周边信息';
                                               break;
                                        } 
                                    }
                                }
                            };
                            let local = new BMap.LocalSearch(map, options);
                            local.search(target);
                        }
                        getCurrentNumPois('地铁');
                        getCurrentNumPois('学校');
                        getCurrentNumPois('周边');
                        map.addOverlay(new BMap.Marker(point));
                    } else {
                        alert("您选择地址没有解析到结果!");
                    }
                }, "北京");
            }
        },
        components: {
            newhousefooter
        }
    }
</script>
<style lang='less' scoped>
.alldetail_wrap{
    background:#f5f5f5;
    padding-bottom:0.9rem;
    .baseinfo{
        padding:0.2rem;
        box-sizing: border-box;
        margin-bottom:0.2rem;
        background:#fff;
        &>div{
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
            text-align: left;
            font-size: 0;
        }
        &>div:nth-child(1){
            font-size: 0;
            &>span{
                font-size:0.22rem;
                padding:0.02rem 0.1rem;
                border-radius: 0.05rem;
                margin-right:0.15rem;
            }
            &>span:nth-child(1){
                font-size:0.36rem;
                font-weight:600;
                color:#323232;
                padding:0;
            }
            &>span:nth-child(2) {
                color: #E79C87;
                background: #feebe5;
            }
            &>span:nth-child(3) {
                color: #6A9DE5;
                background: #e4f3fa;
            }
            &>span:nth-child(4) {
                color: #91C076;
                background: #edf0e5;
            }
            &>span:nth-child(5) {
                color: #E79C87;
                background: #feebe5;
            }
            &>span:nth-child(6) {
                color: #6A9DE5;
                background: #e4f3fa;
            }
            &>span:nth-child(7) {
                color: #91C076;
                background: #edf0e5;
            }
        }
        &>div:nth-child(2){
            display: flex;
            justify-content: space-between;
            &>span:nth-child(1){
                font-size:0.26rem;
                color:#d7000f;
                font-weight:700;
            }
            &>span:nth-child(2){
                display: inline-block;
                height: 0.3rem;
                width:0.3rem;
                background:url('../../../../static/new/newhouseimg/calc.png') center no-repeat;
                background-size:cover;
                margin-top:0.15rem;
            }
        }
        &>.common{
            font-size:0.26rem;
            color:#323232;
        }
        &>div:nth-child(6){
            position: relative;
            &>span:nth-child(3){
                position: absolute;
                top:0.1rem;
                right:0;
                height: 0.3rem;
                width:0.3rem;
                background:url('../../../../static/new/newhouseimg/map.png') center no-repeat;
                background-size:cover;
            }
            
        }
    }
    .allcommon{
        padding:0.2rem;
        box-sizing: border-box;
        margin-bottom:0.2rem;
        background:#fff;
        text-align: left;
        h1{
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
            font-size:0.36rem;
            font-weight:600;
            color:#323232;
        }
        div{
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
            font-size:0.26rem;
            color:#323232;
        }
    }
    .baidumap{
        padding:0.2rem;
        box-sizing: border-box;
        margin-bottom:0.2rem;
        background:#fff;
        text-align: left; 
        h1{
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
            font-size:0.36rem;
            font-weight:600;
            color:#323232;
        }
        .XSDFXPage{
            width:100%;
            height:2.8rem;
        }
        .divcommon{
            display: flex;
            justify-content: space-between;
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
            font-size:0.26rem;
            color:#323232;
            &>div:nth-child(1){
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            &>div:nth-child(2){
                width:0.6rem;
                height: 0.6rem;
                position: relative;
                img{
                    width:0.15rem;
                    height:0.25rem;
                    position: absolute;
                    right:0;
                    top:0.16rem;
                }
            }
        }
    }
    .onlyservice{
        padding:0.2rem;
        box-sizing: border-box;
        margin-bottom:0.2rem;
        background:#fff;
        text-align: left;  
        h1{
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
            font-size:0.36rem;
            font-weight:600;
            color:#323232;
        }
        div{
            height: 0.6rem;
            line-height: 0.6rem;
            width:100%;
        }
        div:nth-of-type(1){
            font-size:0.26rem;
            color:#307602;
        }
        div:nth-of-type(2){
            font-size:0.22rem;
            color:#757575;
        }
    }
}

</style>

