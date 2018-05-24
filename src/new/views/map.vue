<template>
    
    <div style="width:100%;height:100%;">
        <div :class="{'map':!this.$store.state.showWxTitle}" id="container"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        addresonLoad(addr) {
            // 百度地图API功能
            var map = new BMap.Map("container");    // 创建Map实例
            // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            // map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            // map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            // let loupandizhi = '山西省太原市小店北营街道99号'
            var point = new BMap.Point(125, 39.897445);
            var myGeo = new BMap.Geocoder();
            myGeo.getPoint(addr, function(point) {
                if (point) {
                    map.centerAndZoom(point, 16);
                    map.addOverlay(new BMap.Marker(point));
                } else {
                   alert("您选择地址没有解析到结果!");
                }
            }, "北京");
        },
        //  msgalert(msg) {
        //     this.$vux.toast.show({
        //         text: msg,
        //         type: "text"
        //     })
        // }
    },
    mounted() {
        this.addresonLoad(this.$route.query.address);
    }
}
</script>

<style lang="less" scoped>
#container{
    width:100%;
    height:100%;
}
.map {
    width: 100%;
    height: 100%;
    background: #ccc;
    position: absolute;
    top: 1.1rem;
    bottom: 0;
    left: 0; // display: none;
    z-index: 1000;
    overflow: scroll;
}
</style>

