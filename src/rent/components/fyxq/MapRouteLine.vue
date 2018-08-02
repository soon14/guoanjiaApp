<style scoped lang="scss">
    @import "../../style/theme.scss";
    .map-route{
        position: fixed;
        left: 0rem;
        top:1.3rem;
        bottom: 0;
        width: 100%;;
        height: 100%;
        background-color: #e8e8e8;
        .map-tab{
            width: 95%;
            background-color: #fff;
            height:1.6rem;
            padding-left:5%;
            font-size: 0.3rem;
            .start-input{
                width: 90%;
                height: 0.8rem;
                border-bottom:1px solid #ccc;
                text-align: left;
                line-height: 0.8rem;
                .start-point{
                    float: left;
                    width:0.1rem;
                    height:0.1rem;
                    border-radius:50%;
                    background-color:rgb(248, 78, 48);
                    margin-top:0.35rem;
                }
                .start-area{
                    margin-left: 0.2rem;
                }
            }
            .end-input{
                width: 90%;
                height: 0.8rem;
                text-align: left;
                line-height: 0.8rem;
                .end-point{
                    float: left;
                    width:0.1rem;
                    height:0.1rem;
                    border-radius:50%;
                    background-color:rgb(48, 2, 253);
                    margin-top:0.35rem;
                }
                .end-area{
                    margin-left: 0.2rem;
                }
            }
            .arrows{
                position: absolute;
                right: 8%;
                top: 0.3rem;
                background: url("../../../../static/rent/fyxq/icon/arrows.png") no-repeat;
                width: 0.4rem;
                height: 1rem;
                background-size: 100%;
                transform: rotate(90deg);
            }
        }
        .location{
            width: 100%;
            height: 1rem;
            background-color: #fff;
            margin-top:0.1rem;
            font-size: 0.28rem;
            line-height: 1rem;
            position: relative;
            z-index: 100;
            .company-location{
                width: 50%;
                height: 100%;
                border-right: 1px solid #e8e8e8;
                float: left;
                .radius{
                    float: left;
                    background:url("../../../../static/rent/fyxq/icon/radius.png") no-repeat;
                    width: 0.4rem;
                    height: 0.4rem;
                    background-size: 100%;
                    margin-top:0.3rem;
                    margin-left: 5%;
                }
                span:nth-child(2){
                    width: 2rem;
                    float: left;
                    margin-left: 0.1rem;
                    text-align: left;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                span:nth-child(3){
                    float: right;
                    margin-right: 0.2rem;
                    color:rgb(248, 78, 48);
                }
            }
            .user-location{
                width: 49%;
                height: 100%;
                float: left;
                .radius{
                    float: left;
                    background:url("../../../../static/rent/fyxq/icon/radius.png") no-repeat;
                    width: 0.4rem;
                    height: 0.4rem;
                    background-size: 100%;
                    margin-top:0.3rem;
                    margin-left: 5%;
                }
                span:nth-child(2){
                    width: 2rem;
                    float: left;
                    margin-left: 0.1rem;
                    text-align: left;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
        }
        .historical-route{
            width: 100%;
            // height: 100%;
            background-color: #fff;
            margin-top:0.1rem;
            font-size: 0.32rem;
            text-align: left;
            position: absolute;
            top:2.7rem;
            bottom:0rem;
            z-index: 100;
            h3{
                height: 1rem;
                line-height: 1rem;
                padding-left: 0.2rem;
            }
            .history-ul{
                position: absolute;
                top:1rem;
                bottom:0rem;
                overflow-y: scroll;
                padding-left:0.2rem;
                padding-right:0.2rem;
                width: 100%;
                background-color: #fff;
                box-sizing: border-box;
                z-index: 10;
                .history-area-list{
                    width: 100%;
                    height: 1rem;
                    line-height: 1rem;
                    border-bottom:1px solid #e8e8e8;
                    &:last-child{
                        border-bottom: none;
                    }
                }
            }
        }
        .map{
            position: absolute;
            top:1.6rem;
            bottom:0rem;
            width: 100%;
        }
        .input-search{
            position: absolute; 
            top:0rem;
            left:0rem;
            bottom:0rem;
            width:100%; 
            height:100%; 
            background-color:#fff; 
            z-index:10000;
            font-size: 0.32rem;
            text-align: left;
            input{
                width: 100%;
                height: 1rem;
                border: 0px;
                outline:none;
                cursor: pointer;
                text-align: left;
                padding-left: 0.2rem;
                border-bottom: 1px solid #e8e8e8;
                font-size: 0.32rem;
            }
            span{
                position: absolute;
                top:0.3rem;
                right:0.5rem;
            }
            .history-ul-list{
                position: absolute;
                top:1rem;
                bottom:0rem;
                overflow-y: scroll;
                padding-left:0.2rem;
                padding-right:0.2rem;
                width: 100%;
                height: 100%;
                background-color: #fff;
                box-sizing: border-box;
                z-index: 10;
                .history-area-list{
                    width: 100%;
                    height: 1rem;
                    line-height: 1rem;
                    border-bottom:1px solid #e8e8e8;
                    &:last-child{
                        border-bottom: none;
                    }
                }
            }
        }
        .circuit-panel{
            width: 100%;
            height:4rem;
            background-color: #fff;
            font-size: 0.28rem;
            border-top:1px solid rgb(77, 3, 251);
            position: fixed;
            bottom:-1.5rem;
            left:0rem;
            transition:.4s;
            .vehicle{
                width: 100%;
                height: 0.8rem;
                padding:0.3rem 0rem 0rem 0.3rem;
                li{
                    float: left;
                    width: 2rem;
                    border-radius: 0.5rem;
                    background-color: rgba(255, 150, 37, 1);
                    margin-right: 0.4rem;
                    color:#fff;
                    height: 0.5rem;
                    line-height: 0.5rem;
                }
                .public{
                    background-color: #fff;
                    i{
                        display: inline-block;
                        width: 0.48rem;
                        height: 0.48rem;
                        background:url("../../../../static/rent/fyxq/icon/path.png") no-repeat;
                        background-size: 100%;
                    }
                }
                .drive{
                    background-color: #fff;
                    i{
                        display: inline-block;
                        width: 0.48rem;
                        height: 0.48rem;
                        background:url("../../../../static/rent/fyxq/icon/automobile.png") no-repeat;
                        background-size: 100%;
                    }
                }
                .walk{
                    background-color: #fff;
                    i{
                        display: inline-block;
                        width: 0.48rem;
                        height: 0.48rem;
                        background:url("../../../../static/rent/fyxq/icon/walk.png") no-repeat;
                        background-size: 100%;
                    }
                }
            }
            .path-message{
                width: 100%;
                height: 3.1rem;
                ul{
                    width:100%;
                    height: 2.6rem;
                    overflow: scroll;
                    li{
                        padding:0.2rem 0.2rem 0rem 0.2rem;
                        height: 1rem;
                        text-align: left;
                        border-bottom:1px solid #e8e8e8;
                        color:#666;
                        &:last-child{
                            border-bottom:none;
                        }
                        div{
                            height: 0.5rem;
                        }
                    }
                    .onmessage{
                        color:rgba(255, 150, 37, 0.9);
                    }
                }
                .path-button{
                    float:right; 
                    margin-right:0.25rem; 
                    color:#d31a20; 
                    border:1px solid #d31a20;
                    border-radius: 0.1rem;
                }
            }
        }
        .touchmove-css{
            bottom:0rem;
        }
    }
    .wx-heat-map{
        top:0rem;
    }
</style>
<template>
    <div class="map-route" :class="{'wx-heat-map':isWex}">
        <div class="map-tab">
            <div class="start-input" @click="startSearch">
                <span class="start-point"></span>
                <span class="start-area">{{startName}}</span>
                <span style="clear:both"></span>
            </div>
            <div class="end-input" @click="endSearch">
                <span class="end-point"></span>
                <span class="end-area">{{areaName}}</span>
                <span style="clear:both"></span>
            </div>
            <div class="arrows" @click="arrows"></div>
        </div>	
        <div class="location">
            <div class="company-location">
                <span class="radius"></span>
                <span>{{userLoaction}}</span>
                <span @click="setLocation">设置</span>
                <span style="clear:both"></span>
            </div>
            <div class="user-location" @click="setUsetLocation">
                <span class="radius"></span>
                <span>当前位置</span>
            </div>
        </div>
        <div class="historical-route" v-show="isHistortLog">
            <h3>历史路线</h3>
            <ul class="history-ul">
                <li v-for="item in hotAllList" :key="item.index" class="history-area-list" @click.stop="HistorySearchClick(item)">
                        {{item}}
                </li>
            </ul>
        </div>
        <div id="container" class="map"></div>
        <div class="input-search" v-if="isInputSearch">
            <input type="text" placeholder="请输入地点"  :oninput="enterClick()" v-focus="focusState" v-model="areaInput">
            <span @click="cancel">取消</span>
             <ul class="history-ul-list">
                <li v-for="(item,index) in areaList" :key="index" class="history-area-list" @click.stop="SearchClick(item.title)">
                        {{item.title}}
                </li>
            </ul>
        </div>
        <div class="circuit-panel" v-show="isMessageList" :class="{'touchmove-css':isTouchmove}">
            <ul class="vehicle" @touchmove="messageTouchmove" @touchstart="messageTouchstart">
                <li v-if="public" @click="publicClick">公交</li>
                <li v-else class="public" @click="publicClickElse">
                    <i></i>
                </li>
                <li v-if="drive" @click="driveClick">驾车</li>
                <li v-else class="drive" @click="driveClickElse">
                    <i></i>
                </li>
                <li v-if="walk" @click="walkClick">步行</li>
                <li v-else class="walk"  @click="walkClickElse">
                    <i></i>
                </li>
                <li style="clear:both; display:none;"></li>
            </ul>
            <div class="path-message">
                <ul v-if="public">
                    <li v-for="(item,index) in messageList" :key="index" :class="{onmessage:onMessage===index}"@click="publicMessageClick(index)">
                        <div>
                            <span style="float:left; width:75%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">{{item.title}}</span>
                            <x-button mini plain  class="path-button" @click.native="navigation">开始导航</x-button>
                            <span style="clear:both"></span>
                        </div>
                        <p>{{item.driveTime}}</p>
                    </li>
                </ul>
                 <ul v-if="drive">
                    <li v-for="(item,index) in messageList" :key="index" :class="{onmessage:onMessage===index}"@click="driveMessageClick(index)">
                        <div>
                            <span style="float:left;">方案{{index+1}}</span> 
                            <x-button mini plain class="path-button" @click.native="navigation">开始导航</x-button>
                            <span style="clear:both"></span>
                        </div>
                        <p>{{item}}</p>
                    </li>
                </ul>
                 <ul v-if="walk">
                    <li v-for="(item,index) in messageList" :key="index" :class="{onmessage:onMessage===index}"@click="messageListClick(index)">
                        <div>
                            <span style="float:left;" >步行</span>
                            <x-button mini plain class="path-button" @click.native="navigation">开始导航</x-button>
                            <span style="clear:both"></span>
                        </div>
                        <p>{{item}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import myIcon from "../../../../static/rent/fyxq/icon/start.png";
import myIcon2 from "../../../../static/rent/fyxq/icon/end.png";
    export default {
        data(){
            return {
                isWex:false,
                areaName:"",
                startName:"请输入起点",
                hotAllList:[],
                isInputSearch:false,
                focusState:false,
                areaInput:"",  //搜索地点
                local:null,  //地图检索
                areaList:[],
                messageList:[],
                textSearch:"",
                start:false,
                userLoaction:"我的公司",
                isUserLoaction:false,
                isHistortLog:false,
                isMessageList:false,
                onMessage:0,
                public:true,  //公交
                drive:false,  //驾车
                walk:false,  //步行
                longitude:"",
                latitude:"",
                p1:"",
                p2:"",
                isUserArea:true,
                userLongitude:"",
                userLatitude:"",
                isTouchmove:false,
                TouchstartY:"",
                myIcon:myIcon,
                myIcon2:myIcon2,
            }
        },
        created(){
            this.areaName = this.$route.query.areaName;
            if(this.isECTouch()){
                 this.isWex = true;
            }
            if(this.getStorage(this.KEYS.MAPSEARCH_LOG)){
                this.hotAllList = this.getStorage(this.KEYS.MAPSEARCH_LOG);
            }
            this.userLoaction = this.getStorage(this.KEYS.MAPUSER_LOCATION) || "我的公司";
        },
        mounted(){
            let map = new BMap.Map("container");
            this.longitude = this.$route.query.longitude;
            this.latitude = this.$route.query.latitude;
            this.areaName = this.$route.query.areaName;
            this.p2 = new BMap.Point(this.longitude,this.latitude);
            map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 11);
            map.enableScrollWheelZoom(true);
            map.enableDragging();
            // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            //添加地图平移缩放控件
            // map.addControl(new BMap.NavigationControl());
            //控制地图的最大和最小缩放级别
            map.setMinZoom(11);
            map.setMaxZoom(18);
            this.map = map;
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            };
            if (navigator.geolocation) {
                //浏览器支持geolocation
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(result => {
                    result.accuracy = 10;
                    this.startName = "我的位置";
                    this.userLongitude = result.longitude;
                    this.userLatitude = result.latitude;                    
                    this.p1 = new BMap.Point(result.longitude,result.latitude);
                    this.drawLine(0);
                });
            }
            this.local = new BMap.LocalSearch(this.map);
        },
        methods:{
            cancel(){
                this.isInputSearch = false;
            },
            startSearch(){
                this.isInputSearch = true;
                this.focusState = true;
                this.start = true;
                this.isUserLoaction = false;
            },
            endSearch(){
                this.isInputSearch = true;
                this.focusState = true
                this.start = false;
                this.isUserLoaction = false;
            },
            arrows(){
                var name = this.startName;
                this.startName = this.areaName;
                this.areaName = name;
                this.onMessage = 0;
                var p3= this.p1;
                this.p1 = this.p2;
                this.p2 = p3;
                this.map.clearOverlays();
                if(this.public){
                    this.drawLine(0);
                    
                }else if(this.drive){
                    this.drawDriveLine(0);

                }else if(this.walk){
                    this.drawWalkLine(0);
                }
                
            },
            enterClick(){
                if(this.areaInput){
                    if(this.textSearch !== this.areaInput){
                        this.local.search(this.areaInput);
                        this.local.setSearchCompleteCallback(results=>{
                            if(results.Br.length!==0){
                                this.areaList = results.Br.map((item,index)=>{
                                    if(index<=9){
                                        return item;
                                    }
                                })
                                this.textSearch = this.areaInput;
                            }
                        })
                    }  
                }
            },
            //搜索结果点击
            SearchClick(data){
                this.isInputSearch = false;
                var callPoint = "";
                var local = new BMap.LocalSearch(this.map);
                local.setSearchCompleteCallback( (searchResult)=> {
                    var poi = searchResult.getPoi(0);
                    callPoint = new BMap.Point(poi.point.lng,poi.point.lat)
                    if(this.isUserLoaction){
                        this.userLoaction = data;
                        this.setStorage(this.KEYS.MAPUSER_LOCATION,data);
                        if(this.startName!=="请输入起点" && this.areaName==="请输入终点"){
                            this.areaName = data;
                            this.p2 = callPoint;
                            this.longitude = poi.point.lng;
                            this.latitude = poi.point.lat;
                        }else if(this.startName==="请输入起点" || this.startName==="我的位置"){
                            this.startName = data;
                            this.p1 = callPoint;
                            this.userLongitude =  poi.point.lng;
                            this.userLatitude = poi.point.lat;    
                        }
                    }else{
                        if(this.start){
                            this.startName = data;
                            this.p1 = callPoint;
                            this.userLongitude =  poi.point.lng;
                            this.userLatitude = poi.point.lat;  
                        }else{
                            this.areaName = data;
                            this.p2 = callPoint;
                            this.longitude = poi.point.lng;
                            this.latitude = poi.point.lat;
                        }
                    }
                    // this.isHistortLog = false;
                    if(this.startName !=="请输入起点" && this.areaName !=="请输入终点"){
                        this.map.clearOverlays();
                        if(this.public){
                            this.drawLine(0);
                        }else if(this.drive){
                            this.drawDriveLine(0);
                        }else if(this.walk){
                            this.drawWalkLine(0);
                        }
                    }
                });
                local.search(data);
            },
            //绘制公交线路
            drawLine(index){
                var map = this.map;
                var transit = new BMap.TransitRoute(map, {renderOptions: {map:map},onSearchComplete: (result)=>{    
                    if (transit.getStatus() == BMAP_STATUS_SUCCESS){
                        var firstPlan = result.getPlan(index);
                        // // 绘制步行线路
                        for (var i = 0; i < firstPlan.getNumRoutes(); i++){
                            var walk = firstPlan.getRoute(i);
                            if (walk.getDistance(false) > 0){
                                // 步行线路有可能为0
                                map.addOverlay(new BMap.Polyline(walk.getPath(), {lineColor: "green"}));
                            }
                        }
                        // 绘制公交线路
                        for (i = 0; i < firstPlan.getNumLines(); i++){
                            var line = firstPlan.getLine(i);
                            map.addOverlay(new BMap.Polyline(line.getPath()));
                        }
                        // 输出方案信息
                        if(index===0){
                            var allMessage = [];
                            this.messageList = [];
                            for (let i = 0; i < result.getNumPlans(); i++){
                                var message = {};
                                var firstPlan1 = result.getPlan(i);
                                var walk1 = firstPlan1.getRoute(i);
                                message.driveTime = "约"+firstPlan1.getDuration(true)  //获取时间
                                if(walk1 && walk1.getDistance(false) > 0){
                                    message.driveTime = "约"+firstPlan1.getDuration(true) +"　约步行"+walk1.getDistance(false)+"米";  //获取时间
                                }
                                for (let j = 0; j < firstPlan1.getNumLines();j++){
                                    message.title+=firstPlan1.getLine(j).title.split("(")[0]+"->";
                                }
                                message.title = message.title.replace("undefined","").slice(0,-2)
                                allMessage[i] = message;
                                this.messageList[i] = message;
                            }
                            this.messageList = allMessage;
                        }
                    }
                },onPolylinesSet:()=>{

                }});
                var myIcon = new BMap.Icon(this.myIcon, new BMap.Size(30,40));
                var myIcon2 = new BMap.Icon(this.myIcon2, new BMap.Size(30,40));
                transit.setMarkersSetCallback(function(result){
                    result[0].marker.setIcon(myIcon);
                    result[1].marker.setIcon(myIcon2);
                })
                transit.search(this.p1, this.p2);
                this.isMessageList = true;
            },
            //绘制驾车路线
            drawDriveLine(index){
                var map = this.map;
                var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
                var _this = this;
                var myIcon = new BMap.Icon(this.myIcon, new BMap.Size(30,40));
                var myIcon2 = new BMap.Icon(this.myIcon2, new BMap.Size(30,40));
                if(index===0){
                    this.messageList = [];
                    for(var i = 0; i <3;i++){
                        var index = i;
                        search(_this.p1, _this.p2,routePolicy[i],index);
                    }
                    function search(start,end,route,i){ 
                        var driving = new BMap.DrivingRoute(map, {onSearchComplete: (result)=>{
                            _this.messageList.push("行驶距离"+result.getPlan(0).getDistance(true)+"　大约需要"+result.getPlan(0).getDuration(true))
                        },policy: route});
                        driving.search(start,end);
                    }
                    var transit = new BMap.DrivingRoute(map, {renderOptions: {map: map},policy: routePolicy[index]});
                    transit.setMarkersSetCallback(function(result){
                        result[0].marker.setIcon(myIcon);
                        result[1].marker.setIcon(myIcon2);
                    })
                    transit.search(_this.p1, _this.p2);
                }else{
                    var transit = new BMap.DrivingRoute(map, {renderOptions: {map: map},policy: routePolicy[index]});
                    transit.setMarkersSetCallback(function(result){
                        result[0].marker.setIcon(myIcon);
                        result[1].marker.setIcon(myIcon2);
                    })
                    transit.search(this.p1, this.p2);
                }
            },
            //绘制步行路线
            drawWalkLine(index){
                var map = this.map;
                this.messageList = [];
                var walking = new BMap.WalkingRoute(map, {renderOptions: {map: map, autoViewport: true},onSearchComplete:(result)=>{
                    this.messageList.push("距离"+result.getPlan(0).getDistance(true)+"　步行大约需要"+result.getPlan(0).getDuration(true))
                }});
                walking.setPolylinesSetCallback(function(e){//调用setPolylionesSetCallback()方法
                    e[0].getPolyline().z.strokeColor="#0C88E8";
                    e[0].getPolyline().z.strokeStyle="solid";
                    e[0].getPolyline().z.rd = "1";
                });
                var myIcon = new BMap.Icon(this.myIcon, new BMap.Size(30,40));
                var myIcon2 = new BMap.Icon(this.myIcon2, new BMap.Size(30,40));
                walking.setMarkersSetCallback(function(result){
                    result[0].marker.setIcon(myIcon);
                    result[1].marker.setIcon(myIcon2);
                })
                walking.search(this.p1, this.p2);
                
            },
            //历史搜索
            HistorySearchClick(){

            },
            //我的公司
            setLocation(){
                this.isInputSearch = true;
                this.isUserLoaction = true;
            },
            //当前位置
            setUsetLocation(){
                if (navigator.geolocation) {
                    //浏览器支持geolocation
                    var geolocation = new BMap.Geolocation();
                    geolocation.getCurrentPosition(result => {
                        this.map.clearOverlays();
                        result.accuracy = 10;
                        this.startName = "我的位置";
                        this.userLongitude = result.longitude;
                        this.userLatitude = result.latitude;     
                        this.p1 = new BMap.Point(result.longitude,result.latitude);
                        this.drawLine(0);
                    });
                }
            },
            publicMessageClick(index){
                this.onMessage = index;
                this.map.clearOverlays();
                this.drawLine(index);
            },
            driveMessageClick(index){
                this.onMessage = index;
                this.map.clearOverlays();
                this.drawDriveLine(index);
            },
            navigation(){
                var pattern = "";
                if(this.public){
                    pattern = "transit";
                }else if(this.drive){
                    pattern = "driving";
                }else if (this.walk){
                    pattern = "walking";
                }
                location.href="http://api.map.baidu.com/direction?origin=latlng:"+this.userLatitude+","+this.userLongitude+"|name:"+this.areaName+"&destination="+this.latitude+","+this.longitude+"&mode="+pattern+"&region=北京&output=html&src=国安家"
            },
            messageTouchmove(evt){
                var touch=evt.touches[0];
                if(parseInt(touch.pageY) < this.TouchstartY ){
                    this.isTouchmove = true;
                }else{
                    this.isTouchmove = false;
                }
            },
            messageTouchstart(evt){
                var touch=evt.touches[0];
                this.TouchstartY = parseInt(touch.pageY);
                // console.log(this.TouchstartY)
            },
            publicClick(){
                this.public=true;  //公交
                this.drive=false;  //驾车
                this.walk=false;  //步行
            },
            publicClickElse(){
                this.public=true;  //公交
                this.drive=false;  //驾车
                this.walk=false;  //步行
                this.map.clearOverlays();
                this.drawLine(0);
            },
            walkClick(){
                this.public=false;  //公交
                this.drive=false;  //驾车
                this.walk=true;  //步行
            },
            walkClickElse(){
                this.public=false;  //公交
                this.drive=false;  //驾车
                this.walk=true;  //步行
                this.map.clearOverlays();
                this.drawWalkLine(0);
            },
            driveClick(){
                this.public=false;  //公交
                this.drive=true;  //驾车
                this.walk=false;  //步行
            },
            driveClickElse(){
                this.map.clearOverlays();
                this.public=false;  //公交
                this.drive=true;  //驾车
                this.walk=false;  //步行
                this.drawDriveLine(0);
            },
        },
        directives: {
            focus: {
                inserted: function (el, {value}) {
                    if (value) {
                        el.focus();
                    }
                }
            }
        },
    }
</script>
