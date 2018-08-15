<style scoped lang="scss">
    .about-us{
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding:0.2rem 0.3rem 0 0.3rem;
        box-sizing: border-box;
        margin-top:1.5rem;
        .about-img{
            position: relative;
            width: 6.9rem;
            height: 3.6rem;
            video{
                width: 6.9rem;
                height: 3.6rem;
                margin:0 auto;
            }
            // span{
            //     display:inline-block;
            //     width: 6.9rem;
            //     height: 3.6rem;
            //     background:url("../../../../static/rent/aboutus/video.jpg") no-repeat;
            //     background-size: 100%;
            //     position: absolute;
            //     top:0rem;
            //     left:0rem;
            // }
            // .Video{
            //     display: none;
            // }
        }
        .about-text{
            margin-top: 0.6rem; 
            margin-bottom: 1rem;
            h3{
                font-size: 0.36rem;
                color:#e34b3e;
                text-align: left;
                font-weight: 700;
                .about-text-span{
                    font-size: 0.32rem;
                    font-weight: 500;
                    margin-left: 0.1rem;
                    display:inline-block;
                }
            }
            p{
                margin-top: 0.36rem; 
                font-size: 0.28rem;
                color:#666;
                text-align: left;
            }
            h4{
                font-size: 0.32rem;
                font-weight: 500;
                color:#e34b3e;
                text-align: left;
                margin-top:0.2rem;
            }
            h5{
                font-size: 0.28rem;
                font-weight: 700;
                color:#000;
                text-align: left;
                margin-top:0.36rem;
            }
            ul{
                font-size: 0.22rem;
                color:#666;
                margin-top:0.36rem;
                li{
                    width: 100%;
                    height: 0.48rem;
                    line-height: 0.48rem;
                    text-align: left;
                }
            }
        }
        .about-text-top{
            margin-top: 0.4rem; 
        }
    }
    .wexcss{
        margin-top: 0.4rem;
    }
</style>
<template>
    <div class="about-us" :class="{wexcss:isWex}">
        <div class="about-img">
            <video src="http://img.guoanfamily.com/WeChatSight3.mp4"  controls="controls" poster="../../../../static/rent/aboutus/video.jpg" webkit-playsinline="true"  playsinline="true"  x-webkit-airplay="true" x5-playsinline="true">
                your browser does not support the video tag
            </video>
            <!-- <span @click="videoImg" :class="{Video:isVideo}"></span> -->
        </div>
        <div class="about-text about-text-top">
            <h3>国安家</h3>
            <p>西藏中信国安房地产项目管理有限公司(简称"国安家")，作为中信国安集团旗下中信国安城市发展控股有限公司的下属公司，秉承了中信的企业精神，发扬诚信、凝聚、奉献、创新、融合、卓越的企业文化。</p>
        </div>
        <div class="about-text">
            <h3>国安家文化<span class="about-text-span">一切以客户为中心</span></h3>
            <p>国安家全员，同心协力，精诚合作，在为客户提供最好产品与服务的同时，肩负时代使命，推进房地产行业持续创新。</p>
        </div>
        <div class="about-text">
            <h3>房地产创新服务平台</h3>
            <p>随着中央提出供给侧结构性改革要求，地产商从“传统地产开发”转向“运营+服务”，成为当前主流趋势。用互联网思维增加产品和服务的创新，成为地产商提升自身竞争力的发展路径。在此时代背景下，中信国安城市发展控股有限公司倾力打造房地产创新服务平台———国安家。</p>
            <p>国安家以“互联网+”为发展路径，以大数据运用为支撑，以颠覆传统房地产开发模式为目标，涵盖新房、不动产托管、二手房、展示中心、金融五大产业板块，打造全产业链不动产管理平台</p>
        </div>
        <div class="about-text">
            <h3>中信国安集团</h3>
            <h4>亚太经合组织联席企业千亿规模永争第一</h4>
            <h5>38载央企，信任源自使命</h5>
            <p>1979年，中国中信集团有限公司在邓小平同志支持下，由前国家副主席荣毅仁同志创立。成立以来，公司充分发挥经济改革试点和对外开放窗口的重要作用。在诸多领域进行了卓有成效的探索与创新，成功开辟出一条通过吸收和运用外资、引进先进技术、设备和管理经验，为中国改革开放和现代化建设服务的创新。</p>
            <h5>千亿规模，亚太经合组织联席企业</h5>
            <p>截至2015年末，国安集团合并总资产1580亿元，合并净资产325亿元。2015年，实现营业收入935亿元。</p>
            <p>强大实力备受国际、国内认可————</p>
            <ul>
                <li>1.成为亚太经合组织（APEC）中国企业联席会议成员企业。</li>
                <li>2.成为中国企业联合会、中国企业家协会成员企业。</li>
                <li>3.“国安”商标为著名商标和知名名牌。</li>
            </ul>
            <p>中信国安集团的雄厚实力和“永远争第一”的企业文化，赋予国安家勇于挑战、一往无前的企业性格。</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isWex:false,
                isVideo:false,
            }
        },created(){
            if(this.isECTouch()){
                this.isWex = true;
            }else{
                this.isWex = false;
            }
        },
        mounted(){
            // if(this.isECTouch()){
            //     this.$wechat.ready(() =>{
            //         document.getElementById("myVideo").play();
            //     })
            // }
            
        },
        methods:{
            // videoImg(){
            //     this.isVideo = true;
            //     document.getElementById("myVideo").play();
            // }
        }
    }
</script>
