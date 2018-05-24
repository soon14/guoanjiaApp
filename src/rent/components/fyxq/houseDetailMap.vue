<style scoped lang="scss">
    @import "../../style/theme.scss";
    .house-map{
        position: fixed;
        left: 0rem;
        top:1.3rem;
        bottom: 0rem;
        width: 100%;;
        height: 100%;
        .map-tab{
            width: 100%;
            background-color: #fff;
            overflow-x: scroll;
            position: relative;
            z-index: 100;
            .map-title{
                width: 100%;
                position: relative;
                height: 0.94rem;
                li{
                    float: left;
                    text-align: center;
                    line-height: 0.9rem;
                    color:#000;
                    width: 16.66666%;
                    font-size: $titleFontSize;
                }
                .map-title:last-child{
                    padding:0.2rem 0rem;
                }
                .maplist{
                    border-bottom:2px solid transparent;
                    color:#d31a20;
                }
                .slide-li{
                	width: 16.666%;
                	height: 3px;
                	background: #e24e59;
                	position: absolute;
                	left: 0;
                	bottom: 0;
                	padding: 0;
                	margin: 0;
                	transition: .4s;
                }
                .itemslide1{
                	left: 16.67%;
                }
                .itemslide2{
                	left: 16.67%*2;
                }
                .itemslide3{
                	left: 16.67%*3;
                }
                .itemslide4{
                	left: 16.67%*4;
                }
                .itemslide5{
                	left: 16.667%*5;
                }
            }
        }
        .map{
            position: absolute;
            left: 0rem;
            top:0rem;
            bottom: 0rem;
            width: 100%;;
            height: 100%;
        }
        .message-box{
            position: fixed;
            left:5%;
            bottom:0.6rem;
            width: 90%;
            height: 1.5rem;
            background-color: #fff;
            -moz-box-shadow: 0px 3px 10px #888888; /* 老的 Firefox */
            box-shadow: 0px 3px 10px #888888;
            font-size: 0.32rem;
            h4{
                text-align: left;
                margin: 0.2rem 0rem 0.2rem 0.2rem;
            }
            .address{
                width: 100%;
                color:#8a8a8a;
                height: 0.5rem;
                span:nth-child(1){
                    width: 60%;
                    float: left;
                    margin-left:0.2rem;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    text-align: left;
                }
                span:nth-child(2){
                    float: right;
                    margin-right: 0.2rem;
                    .aircraft{
                        display:inline-block;
                        background:url("../../../../static/rent/fyxq/icon/aircraft.png") no-repeat;
                        width: 0.48rem;
                        height: 0.48rem;
                        background-size: 100%;
                        vertical-align:middle
                    }
                }
            }
        }
        .bottom-path{
            position: fixed;
            bottom:0rem;
            width: 100%;
            height: 2.8rem;
            background-image: radial-gradient(to top,rgba(255,255,255,1),rgba(255,255,255,0.3),rgba(255,255,255,0.1) 90%);
            z-index: 1;
        }
        .path{
            position: fixed;
            right: 0.5rem;
            bottom:1rem;
            width: 1rem;
            height: 1rem;
            background: #fff;
            border-radius:50%;
            font-size: 0.34rem;
            font-family: "黑体";
            color:#000;
            .path-radius{
                width: 0.6rem;
                height: 0.6rem;
                background:url("../../../../static/rent/fyxq/icon/path.png") no-repeat;
                background-size: 100%;
                margin:0.2rem 0rem 0rem 0.2rem
            }
            div:last-child{
                margin-top:0.2rem;
            }
        }
    }
    .wx-heat-map{
        top:0rem;
    }
</style>
<template>
    <div class="house-map" :class="{'wx-heat-map':isWex}">
        <div class="map-tab">
            <div style="width: 100%;overflow-x:scroll;-webkit-overflow-scrolling:touch;height: 0.94rem;">	
                <ul class="map-title">
                    <li
                        :class="{maplist:maplist ===index}"
                        v-for="(item,index) in list"
                        :key="index"
                        @click="handleClick(item,index)"
                        >{{item}}</li>
                    <li class="slide-li" :class="itemslide[maplist]"></li>
                </ul>
            </div>
        </div>	
        <div id="container" class="map" ></div>
        <div class="message-box" v-if="isMessage">
            <h4>{{title}}</h4>
            <div class="address">
                <span>{{address}}</span>
                <span><i class="aircraft"></i>
                    {{distance}}</span>
            </div>
        </div>
        <!-- <div class="bottom-path" v-if="!isMessage" @tab ="pathMarkeTab"> -->
            <div class="path" @click="path" v-if="!isMessage">
                <div class="path-radius"></div>
                <div style="color:#d31a20;">路线</div>
            </div>
        <!-- </div> -->
        <div class="BMap_mask" style="position:fixed; left: 0rem; top: 0rem; z-index: 1;  user-select: none; width: 100%; height: 100%;" v-if="isMessageMask" @click="BMapMask"></div>
    </div>
</template>
<script>
import icon_ditu2 from '../../../../static/rent/fyxq/icon/ditu2.gif'
    export default {
        data(){
            return{
                map:null,  //地图
                list:["交通","商超","教育","餐饮","金融","医疗"],
                maplist:0,
                local:null,  //地图搜索
                longitude:"",
                latitude:"",
                isWex:false,
                title:"",
                address:"",
                distance:"",
                isMessage:false,
                isMessageMask:false,
                point:null,
                areaName:"",
                itemslide:{
                	1:"itemslide1",
                	2:"itemslide2",
                	3:"itemslide3",
                	4:"itemslide4",
                	5:"itemslide5",
                }
            }
        },
        created(){
            if(this.isECTouch()){
                 this.isWex = true;
            }
        },
        mounted(){
            let map = new BMap.Map("container");
            this.longitude = this.$route.query.longitude;
            this.latitude = this.$route.query.latitude;
            this.areaName = this.$route.query.areaName;
            map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 14);
            map.enableScrollWheelZoom(true);
            map.enableDragging();
            // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            //添加地图平移缩放控件
            // map.addControl(new BMap.NavigationControl());
            //控制地图的最大和最小缩放级别
            map.setMinZoom(11);
            map.setMaxZoom(18);
            this.map = map;
            this.point = new BMap.Point(this.longitude, this.latitude);
            var myIcon = new BMap.Icon(icon_ditu2, new BMap.Size(45,70));
            var marker2 = new BMap.Marker(this.point,{icon:myIcon});  // 创建标注
            marker2.disableMassClear();
            map.addOverlay(marker2);              // 将标注添加到地图中
           
            this.handleClick("地铁",0)
        },
        methods:{
            handleClick(item,index){
                this.map.clearOverlays();
                this.maplist = index;
                var item = item;
                if(item==="交通"){
                    item = "地铁";
                }
                this.local = new BMap.LocalSearch(this.map, {
                    onSearchComplete:(results)=>{
                        this._getContent(results.Br)
                    }
                },{renderOptions:{
                    autoViewport:false,
                }});
                this.local.searchNearby(item,new BMap.Point(this.longitude, this.latitude),5000);
            },
            //绘制周边
            _getContent(obj){
                obj.map(item => {
                    let labelText =  item.title;

                    let label2 = new BMap.Label(labelText, {
                        position: new BMap.Point(item.point.lng, item.point.lat)
                    });
                    label2.setStyle({
                        textAlign: "center",
                        color : "#fff",
                        background: "rgba(228, 57, 60, 0.9)",
                        border: "1px solid rgba(228, 57, 60, 0.9)",
                        fontSize : "0.22rem",
                        height : "0.6rem",
                        lineHeight:"0.55rem",
                        width : "auto",
                        paddingLeft:"0.2rem",
                        paddingRight:"0.2rem",
                        borderRadius: '0.2rem',
                        boxSizing: "border-box",
                    });
                    this.map.addOverlay(label2);
                    label2.addEventListener("click", (e) => {
                        e.domEvent.stopPropagation();
                        this.title = item.title;
                        this.address= item.address;
                        this.distance = parseInt(this.map.getDistance(this.point,new BMap.Point(item.point.lng, item.point.lat)))+"米";
                        var Overlays = this.map.getOverlays();
                        Overlays.forEach(item2=>{
                            if(item2.content){
                                if(item2.content===item.title){
                                    item2.V.style.background = "rgba(255, 150, 37, 0.9)"
                                    item2.V.style.border = "rgba(255, 150, 37, 0.9)"
                                    item2.V.style.zIndex = 999
                                }else{
                                    item2.V.style.background = "rgba(228, 57, 60, 0.9)"
                                    item2.V.style.border = "rgba(228, 57, 60, 0.9)"
                                    item2.V.style.zIndex = 999
                                }
                            }
                        })
                        this.isMessage = true;
                        setTimeout(()=>{
                             this.isMessageMask = true;
                        },200)
                       
                    });
                });
            },
            //路线
            path(){
                this.$router.push({path:"/MapRouteLine",query:{areaName:this.areaName,longitude:this.longitude,latitude:this.latitude,}})
            },
            BMapMask(){
                this.isMessage = false;
                this.isMessageMask = false;
                var Overlays = this.map.getOverlays();
                Overlays.forEach(item2=>{
                    if(item2.content){
                        item2.V.style.background = "rgba(228, 57, 60, 0.9)"
                        item2.V.style.border = "rgba(228, 57, 60, 0.9)"
                        item2.V.style.zIndex = 999
                    }
                })
            }
        }
    }
</script>
