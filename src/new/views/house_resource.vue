<template>
     <div  class="fixContent" >
        <!-- 头部 -->
        <div class="topBuildName">
            <span>{{stagename}}</span>
        </div>
        <!-- 中间 -->
        <div class="houseList">
            <ul>
                <li class="houseoLi" :key="index" v-for="(item,index) in houseList">
                    <div class="buildNumber">
                        <span>{{item.housenumber}}</span>
                    </div>
                    <div class="Available">
                        <div class="NoAvailable">
                            <span>已售</span>
                            <span>{{item.noavailable}}</span>
                        </div>
                        <div class="inAvailable">
                            <span>可售</span>
                            <span>{{item.available}}</span>
                        </div>
                    </div>
                    <div class="unit">
                        <ul>
                            <li :key="Index" v-for="(a,Index) in item.unitnumberList" @click="houseDetial(Index,item.housenumber)">
                                {{a}}单元
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 底部 -->
        <div class="buildHouseBottom">
            <group>
                <selector placeholder="期区" v-model="demo02" :options="list"></selector>
            </group>
        </div>
    </div>
</template>

<script>
import { Selector } from 'vux';
export default {
    name: 'house_resource',
    components: {
        Selector
    },
    data() {
        return {
            buildId: '',
            housetypeId:'',
            houseList: [
                // { "saling": "153", "housenumber": "9号楼", "saled": "1", "unitnumberList": ["1", "2", "3", '4', '5'] },
                // { "saling": "153", "housenumber": "8号楼", "saled": "2", "unitnumberList": ["1", "2", "3"] },
            ],
            stagename:'',
            demo02: '',
            list: [{'key':'','value':''}],
            
        }
    },
    methods: {
        // 单元的点击事件
        houseDetial(item, house) {
            // console.log(item,house);
            let house_resource = item + 1;//单元号码 
            let resource = house;//楼号
            this.$router.push({ path: 'house_detial', query: {housetypeid:this.housetypeId, typeid: this.buildId, house_resource: house_resource, resource: resource }, })
        },
        //数据加载
        Buildonload() {
            let buildid = this.buildId;
            let housetypeid  =  this.housetypeId;
            this.get('palmsaleapp/api/v1/build/buildhousenumber?buildid=' + buildid + "&housetypeid=" + housetypeid,{ interfaceType: "newHouse"}).then(response => {
                // console.log(response);
                if (response.status == 200) {
                    this.houseList = response.data.list;
                    // console.log(this.houseList);
                    this.stagename = response.data.stagename;
                    this.list[0].key =  response.data.stagename;
                    this.list[0].value = response.data.stagename;
                    // console.log(this.list);
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        //alert弹窗
        showalert(msg) {
            // 显示
            this.$vux.alert.show({
                title: '提示信息',
                content: msg
            })
        }
    },
    mounted() {
        this.buildId = this.$route.query.buildid;
        this.housetypeId = this.$route.query.housetypeid;
        if(this.housetypeId == undefined){
            this.housetypeId = ''
        }
        this.Buildonload();
    }
}
</script>

<style lang="less" scoped>
// 头部
.topBuildName {
    margin-top:60px;
    height: 1.05rem;
    line-height: 1.05rem;
    text-align: left;
    font-size: .45rem;
    padding-left: .35rem;
    border-bottom: 1px solid #f8f8f8;
}

// 楼盘号儿模块
.buildNumber {
    border-bottom: 1px dashed #f8f8f8;
    line-height: 1.05rem;
    height: 1.05rem;
    padding: 0 .35rem;
    font-size: .35rem;
    text-align: left;
    width: 100%;
    span {
        color: #606060;
        font-size: .35rem;
        border-left: .1rem solid #ffd273;
        padding-left: .25rem;
    }
}

// 可售不可售模块
.houseoLi {
    width: 100%;
    overflow: hidden;
    padding-bottom: 1rem;
    border-bottom: .025rem solid #eee;
}

.Available {
    text-align: center;
    line-height: 1rem;
    height: 1rem;
    font-size: .35rem;
    text-align: left;
    width: 100%;
    .NoAvailable {
        color: #e0001a;
        padding-right: 0;
        width: 33.3%;
        text-align: center;
        float: left;
    }
    .inAvailable {
        color: #68bf34;
        padding-right: 0;
        width: 33.3%;
        text-align: center;
        float: left;
    }
}

// 单元模块
.unit {
    float: left;
    overflow: hidden;
    width: 100%;
    li {
        float: left;
        display: inline-block;
        width: 20%;
        height: .75rem;
        line-height: .75rem;
        border: 1px solid #fa7500;
        margin-left: 4%;
        border-radius: .1rem;
        font-size: .3rem;
        text-align: center;
        margin-top: 0.15rem;
        border-radius: .15rem;
    }
}

// 底部样式
.buildHouseBottom {
    width: 100%; // height: 2rem;
    position: fixed;
    left: 0;
    bottom: 0; // background: red;
    z-index: 100;
}
</style>
