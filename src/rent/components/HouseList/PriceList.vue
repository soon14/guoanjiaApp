<style scoped lang="scss">
 @import "../../style/theme.scss";
        .regloin{
            .search-house-list{
                width: 6.9rem;
                height: 100%;
                background-color: $titleColor;
                // margin-top:0.3rem;
                margin-left:0.32rem;
                // .price-one{
                //     padding:0rem 0.3rem;
                // }
                // .types{
                //     height: 0.8rem;
                //     padding:0rem 0.3rem;
                //     line-height: 0.8rem;
                //     border-bottom: 1px solid $lineColor;
                //     font-size:0.3rem;
                // }
                .house-type-ul{
                    overflow: hidden;
                    margin:0.1rem 0rem;
                    padding:0rem 0.1rem 0rem 0.2rem;
                    height: 3.1rem;
                    .renge{
                        width: 100%;
                        // margin-left:2%;
                        margin-top:1.2rem;
                        position: relative;
                       .min-price{
                            position: absolute;
                            top:0.01rem;
                            left:-0.8rem;
                            color:$unselectedColor;
                       }
                       .max-price{
                           position: absolute;
                           top:0.01rem;
                           right:0.1rem;
                           color:$unselectedColor;
                       }
                    }
                }
            }
           
            .buttons{
                width: 100%;
                margin-top:0.4rem;
                margin-bottom:1.6rem;
                .subMit1{
                    width: 4.4rem;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    background-color: #e34b3e;
                    border-radius:0.1rem;
                    font-size:$titleFontSize;
                    color:$titleColor;
                    float:left;
                    margin-top:0px;
                    margin-left:0.2rem;
                    border:none;
                }
                .exit{
                    margin-left:5rem;
                    width: 2.3rem;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    // border-radius: 0.15rem;
                    font-size:$titleFontSize;
                    // background-color:$greyColor;
                    background: url("../../../../static/rent/house-list/exit-button.png") no-repeat;
                    background-size: 100%;
                    // border:1px solid $mineColor;
                    margin-top:-0.9rem;
                    color:$titleColor;
                }
            }  
        }
        .iosregloin{
            top:1.05rem;
        }
        .bounce-enter-active {
            animation: bounce-in  .5s ease;
        }
        .bounce-leave-active {
            animation: bounce-out .2s;
        }
        @keyframes bounce-in {
            0% {
                transform: translateY(-100%);
            }
            100% {
                transform: translateY(0rem);
            }
        }
        @keyframes bounce-out {
            0% {
                opacity: 0;
                // transform: translateY(0rem);
            }
            100% {
                opacity: 0;
                // transform: translateY(-100%);
            }
        }
</style>

 <template>
        <!--价格筛选部分  -->
    <transition name="bounce">
         <div class="regloin" v-if="isSearchShow" :class="{iosregloin:!isAndrion}">
            <div class="search-house-list">
                <!-- <div class="price-one">
                    <div class="types">价格区间(每月)</div>
                </div> -->
                <div class="house-type-ul">
                    <div class="renge">
                        <vue-slider  @callback="cb" ref="slider3" v-bind="demo" v-model="demo.value"></vue-slider>
                        <!-- <template slot="tooltip" slot-scope="tooltip">
                            <div class="diy-tooltip">
                                <img src="../../../../static/rent/house-list/price-icon.png" width="40"/>
                                {{ tooltip.value }}
                            </div>
                        </template> -->
                        <!-- <span class="min-price">￥500</span><span class="max-price">￥10000</span> -->
                    </div>
                </div>
            </div>
             <div class="buttons">
                <button class="subMit1" @click="allBuildClick">确定</button>
                <button class="exit" @click="allBuildExitClick">重置</button>
            </div>
        </div>
    </transition>
</template>

 <script>
import vueSlider from 'vue-slider-component'
     export default {
         components: {
            vueSlider,
        },
         props:{
            isShow:{
                type:Boolean,
                default:false,
            },
            // priceMinMax:{
            //     type:Array,
            //     default:[]
            // }
         },
         data(){
             return{
                demo: {
					value: [500, 10000],
					width: '97%',
					height: 24,
					dotSize: 26,
					min: 500,
                    max: 10000,
                    interval:100,
					disabled: false,
					show: true,
					tooltip: 'always',
                    formatter: '{value}元',
                    tooltipDir: [
                    "bottom",
                    "bottom"
                    ],
					bgStyle: {
						backgroundColor: '#e8e8e8',
						boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
					},
					tooltipStyle: {
						backgroundColor: 'rgba(255,255,255,0)',
                        borderColor: 'rgba(255,255,255,0)',
                        color:'#e42929',
                        marginRright:"18",
                        top:"0",
                        bottom:"0"
					},
					processStyle: {
						backgroundColor: '#e24e59',
					},
                    sliderStyle:{
                        // backgroundColor: '#ff9b2f',
                        background:'url("../../../../static/rent/house-list/price-icon.png") no-repeat',
                        backgroundSize:'100%',
                    }
                },
                isAndrion:true,
             }
         },
         created(){
            
         },
         methods:{

             //价格筛选确定按钮
            allBuildClick(){
                this.$emit("changePrice",this.demo.value);
                // this.demo.value = [500, 10000]
            },
            //筛选重置按钮
            allBuildExitClick(){
                this.demo.value = [500, 10000]
            },
            // priceClear(){
            //     this.demo.value = [500, 10000]
            // },
            cb (val) { 
			//  console.log(val)
		    },
         },
         watch:{
            isShow(){
                // if(!localStorage.getItem("mm")){
                //     this.demo.value = [500, 10000];
                // }
            }
         },
         computed:{
            isSearchShow(){
                if(this.isShow){
                    if((this.getStorage("mm"))==true){
                        this.demo.value = [500, 10000];
                    }
                }
                if(this.AndroidOrIos()){
                    this.isAndrion = true;
                }else{
                    this.isAndrion = false;
                }
                return this.isShow;
            },
         },
     }
 </script>
 