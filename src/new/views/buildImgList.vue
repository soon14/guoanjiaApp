<template>
    <!-- <div style="margin-top:1rem;"> -->
        <div  class="fixContent" >
        <!-- <ul>
            <li class="li1" :key="index" v-for="(item,index) in names">
                <div>{{item}}</div>
                <ul>
                    <li :key="index" v-for="(item,index) in List">
                        <img :src="item.src" alt="">
                    </li>
                </ul>
            </li>
        </ul> -->
        <div>
            <div v-transfer-dom>
                <previewer :list="List" ref="previewer"></previewer>
            </div>
        </div> 
        <div class="ImgType">
            <span>效果图</span>
            <span>(</span>
            <span>{{xiaoguotu}}</span>
            <span>)</span>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in xiaoguotuArr" @click="show()">
                <img :src='item.picturename' style="border-radius:.25rem;">
            </li>
        </ul>
        <div class="ImgType">
            <span>户型图</span>
            <span>(</span>
            <span>{{HuxingImg}}</span>
            <span>)</span>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in HuxingImgArr" @click="show1()">
                <img :src='item.picturename' style="border-radius:.25rem;">
            </li>
        </ul>
        <div class="ImgType">
            <span>规划图</span>
            <span>(</span>
            <span>{{GuihuaImg}}</span>
            <span>)</span>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in GuihuaImgArr" @click="show2()">
                <img :src='item.picturename' style="border-radius:.25rem;">
            </li>
        </ul>
        <div class="ImgType">
            <span>样板间</span>
            <span>(</span>
            <span>{{YangbanImg}}</span>
            <span>)</span>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in YangbanImgArr" @click="show3()">
                <img :src='item.picturename' style="border-radius:.25rem;">
            </li>
        </ul>
        <div class="ImgType">
            <span>实景图</span>
            <span>(</span>
            <span>{{ShijingImg}}</span>
            <span>)</span>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in ShijingImgArr" @click="show4()">
                <img :src='item.picturename' style="border-radius:.25rem;">
            </li>
        </ul>
        <div class="ImgType">
            <span>沙盘图</span>
            <span>(</span>
            <span>{{ShapanImg}}</span>
            <span>)</span>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in ShapanImgArr" @click="show5()">
                <img :src='item.picturename' style="border-radius:.25rem;">
            </li>
        </ul>
        <div class="ImgType">
            <span>鸟瞰图</span>
            <span>(</span>
            <span>{{NiaokanImg}}</span>
            <span>)</span>
        </div>
        <ul>
            <li :key="index" v-for="(item,index) in NiaokanImgArr" @click="show6()">
                <img :src='item.picturename' style="border-radius:.25rem;">
            </li>
        </ul>
    </div>
</template>

<script>
import { TransferDom } from 'vux'
import Previewer from '../components/previewer'
export default {
    name: 'buildImgList',
    directives: {
        TransferDom
    },
    components: {
        Previewer
    },
    data() {
        return {
            names:['效果图','户型图','样板间','实景图','沙盘图','鸟瞰图','规划图'],
            ImgArray: [],//所有图片
            xiaoguotu: '',//效果图长度
            xiaoguotuArr: [],//效果图集合
            peitaotu: '',//配套图长度
            peitaotuArr: [],//配套图集合
            YangbanImg: '',//样板间长度
            YangbanImgArr: [],//样板间集合
            ShijingImg: '',//实景图长度
            ShijingImgArr: [],//实景图集合
            ShapanImg: '',//沙盘图长度
            ShapanImgArr: [],//沙盘集合
            NiaokanImg: '',//鸟瞰长度
            NiaokanImgArr: [],//鸟瞰图集合
            GuihuaImg: '',//规划图长度
            GuihuaImgArr: [],//规划图集合
            HuxingImg: '',//户型长度
            HuxingImgArr: [],//户型图集合
            List: [],
            huxing: '',//户型图index
            xiaoguo: '',//效果图index
            guihua: '',//规划图
            niaokan: '',//鸟瞰图
            shapan: '',//沙盘图
            shijing: '',//实景图
            yangbanjian: '',//样板间
            peitao: '',//配套图
        }
    },
    methods: {
        // 放大功能
        // 效果图放大事件
        show() {
            this.$refs.previewer.show(this.xiaoguo);
        },
        // 户型图放大事件
        show1() {
            this.$refs.previewer.show(this.huxing);
        },
        //规划图放大事件
        show2() {
            this.$refs.previewer.show(this.guihua);
        },
        //样板间放大事件
        show3() {
            this.$refs.previewer.show(this.yangbanjian);
        },
        // 实景图放大事件
        show4() {
            this.$refs.previewer.show(this.shijing);
        },
        // 沙盘图放大事件
        show5() {
            this.$refs.previewer.show(this.shapan);
        },
        // 鸟瞰图放单事件
        show6(){
            this.$refs.previewer.show(this.niaokan);
        },
        // 数据加载
        ImgonLoad() {
            this.get('palmsaleapp/api/v1/build/figurepicture?buildid=' + this.$route.query.buildId,{ interfaceType: "newHouse"}).then(response => {
                // console.log(response);
                if (response.status == 200) {
                    this.ImgArray = response.data;
                    for (let i = 0; i < this.ImgArray.length; i++) {
                        // this.ImgArray[i].picturename = this.ImgSrc + this.ImgArray[i].picturename
                        this.ImgArray[i].picturename = this.concatFileUrl( this.ImgArray[i].picturename)
                    }
                    let picturetype = 'picturetype';
                    // 筛选效果图
                    this.xiaoguotu = this.onFilterImg(this.ImgArray, picturetype, '0').length;
                    this.xiaoguotuArr = this.onFilterImg(this.ImgArray, picturetype, '0');
                    // console.log(this.onFilterImg(this.ImgArray, picturetype, '0'));
                    // 配套图
                    this.peitaotu = this.onFilterImg(this.ImgArray, picturetype, '1').length;
                    this.peitaotuArr = this.onFilterImg(this.ImgArray, picturetype, '1');
                    // 样板间
                    this.YangbanImg = this.onFilterImg(this.ImgArray, picturetype, '2').length;
                    this.YangbanImgArr = this.onFilterImg(this.ImgArray, picturetype, '2');
                    // 实景图长度
                    this.ShijingImg = this.onFilterImg(this.ImgArray, picturetype, '3').length;
                    this.ShijingImgArr = this.onFilterImg(this.ImgArray, picturetype, '3');
                    // 沙盘图长度
                    this.ShapanImg = this.onFilterImg(this.ImgArray, picturetype, '4').length;
                    this.ShapanImgArr = this.onFilterImg(this.ImgArray, picturetype, '4');
                    // 鸟瞰图长度
                    this.NiaokanImg = this.onFilterImg(this.ImgArray, picturetype, '5').length;
                    this.NiaokanImgArr = this.onFilterImg(this.ImgArray, picturetype, '5');
                    // 规划图长度
                    this.GuihuaImg = this.onFilterImg(this.ImgArray, picturetype, '6').length;
                    this.GuihuaImgArr = this.onFilterImg(this.ImgArray, picturetype, '6');
                    // 户型图长度
                    this.HuxingImg = this.onFilterImg(this.ImgArray, picturetype, '7').length;
                    this.HuxingImgArr = this.onFilterImg(this.ImgArray, picturetype, '7');
                    // 处理图片集合
                    this.List = this.ImgArray.map((item, index) => ({
                        src: item.picturename,
                        type: item.picturetype
                    }))
                    this.huxing = this.List.findIndex((value, index, arr) => {
                        return value.type == '7'
                    })
                    // 效果图index
                    this.xiaoguo = this.List.findIndex((value, index, arr) => {
                        return value.type == '0'
                    })
                    console.log(this.xiaoguo);
                    // 规划图index
                    this.guihua = this.List.findIndex((value, index, arr) => {
                        return value.type == '6'
                    })
                    // 鸟瞰图index
                    this.niaokan = this.List.findIndex((value, index, arr) => {
                        return value.type == '5'
                    })
                    // 沙盘图index
                    this.shapan = this.List.findIndex((value, index, arr) => {
                        return value.type == '4'
                    })
                    // 实景图index
                    this.shijing = this.List.findIndex((value, index, arr) => {
                        return value.type == '3'
                    })
                    // 样板间index
                    this.yangbanjian = this.List.findIndex((value, index, arr) => {
                        return value.type == '2'
                    })
                    // 配套图index
                    this.peitao = this.List.findIndex((value, index, arr) => {
                        return value.type == '1'
                    })
                    // console.log(this.List);
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        // 筛选图片长度
        onFilterImg(arr, type, num) {
            let arroy = arr.filter((items) => {
                return items[type] == num;
            })
            return arroy;
        },
    },
    mounted() {
        this.ImgonLoad();
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.ImgType {
    width: 100%;
    height: 0.5rem;
    font-size: .3rem;
    line-height: .4rem;
    float: left;
    text-align: left;
    margin-left: .25rem;
    margin-top: .5rem;
}
// .li1{
//     width:100%;
// }
li {
    border-radius: 5px;
    display: inline-block;
    float: left;
    width: 46%;
    margin-left: 2%;
    margin-right: 1%;
    margin-bottom: .25rem;
    text-align: center;
    line-height: 2.5rem;
    height: 2.5rem;
    overflow: hidden;
    img {
        width: 100%;
    }
}
</style>

