<style scoped lang="scss">

    .block {
        width: 100%;
        height: 0;
        padding-bottom: 55%;
        margin: 0 auto;
        position: relative;
        background-position: center;
        background-size: contain;

        .barrage {
            position: absolute;
            top: 0;
            left: 8%;
            width: 84%;
            height: 100%;
        }
    }
</style>

<template>
    <section>
        <div class="block">
            <canvas class="barrage" :width="width" :height="height" id="barrageCanvas"></canvas>
        </div>
    </section>
</template>

<script>
    // const barrageBG = '../../../static/new/img/whiteren.png';

    const width = 400;
    const height = 300;
    const barrageSpeed = 3;  //弹幕速度
    const density = 10;      //弹幕密度 （每屏平均n条）
    const portraitSize = 50;
    const barrageColor = ["#65ff59", "#ff7a70", "#2476ff", "#ff52d0", "#fff2ea", "#5ee4ff", "#e92d36"];

    export default {
        props: {
            barrageList: {
                type: Array,
                default: ()=>{
                    return [];
                },
            },

            comment: {
                type: Object,
                default: ()=>{
                    return {};
                },
            }
        },

        data() {
            return {
                barrageBG: '',
                width: width,
                height: height,

                ctx: null,

                track: [],
                lastTrack: 0,
                barrageArray: [],
            }
        },

        created() {
        },

        mounted() {
            this.createTrack();
            // this.getData();
            this.init();
            this.run();
            console.log(1111, this.barrageList)
        },

        methods: {
            createTrack(){
                let lines = height / portraitSize;
                let begin = 25;
                const track = [begin];
                while (--lines > 0){
                    track.push(begin += portraitSize);
                }
                this.track = track;
            },

            /**
             * 获得随机位置
             * @param text
             * @param cb
             * @param offset 手动偏移量，默认为一屏
             * @private
             */
            _getRandomPosition({text, portrait}, cb) {
                
                const offset = parseInt(this.barrageArray.length / density);

                let lastTrack = parseInt(this.track.length * Math.random());
                while (lastTrack === this.lastTrack){
                    lastTrack = parseInt(this.track.length * Math.random());
                }
                this.lastTrack = lastTrack;

                //避免文字相互挤压，分轨道展示弹幕
                const resObj = {
                    text: text,
                    color: barrageColor[parseInt(Math.random() * barrageColor.length)],
                     x: parseInt((1 + offset + Math.random()) * width),
                    // y: parseInt(yRandom * height),
                    y: this.track[lastTrack]
                };

                if (portrait) {
                    let image = new Image();
                    image.onload = function () {

                        const canvas = document.createElement("canvas");
                        canvas.width = portraitSize;
                        canvas.height = portraitSize;
                        const ctx = canvas.getContext('2d');
                        // 画圆
                        ctx.arc(portraitSize/2, portraitSize/2, portraitSize/2, 0 , 2 * Math.PI);
                        ctx.clip();//裁剪
                        // 在画布上绘制图像
                        ctx.drawImage(image, 0, 0, portraitSize, portraitSize);

                        cb(Object.assign(resObj, {
                            // getImageData() 方法返回 ImageData 对象
                             image: ctx.getImageData(0, 0, portraitSize, portraitSize),
                            // image: image,
                        }));
                    };
                    image.crossOrigin = "Anonymous"; //允许跨域访问图片
                    image.src = portrait;
                } else {
                    cb(resObj)
                }
            },

            init() {
                const canvas = document.getElementById('barrageCanvas');
                const ctx = canvas.getContext('2d');
                this.ctx = ctx;
                ctx.imageSmoothingQuality = "high";
                ctx.imageSmoothingEnabled = true;
                // ctx.globalCompositeOperation = "destination-over";
                ctx.globalCompositeOperation = "lighter";
            },

            run() {
                const ctx = this.ctx;
                const step = () => {
                    ctx.clearRect(0, 0, width, height); //清除指定的图像

                    this.barrageArray.map(item => {
                        item.x -= barrageSpeed;
                        let {x, y, text, image} = item;

                        //用户头像
                        if(image){
                            ctx.beginPath(); //beginPath() 方法在一个画布中开始子路径的一个新的集合。
                            ctx.putImageData(image, x - portraitSize - 10, y - portraitSize/2); //复制画布的指定数据
                            // ctx.drawImage(image, x - portraitSize - 10, y - 33, portraitSize, portraitSize);
                        }

                        //弹幕文字
                        ctx.beginPath();
                        ctx.font = "25px 黑体";
                        ctx.fillStyle = item.color;
                        ctx.textBaseline = "middle";//设置文字居中显示
                        ctx.fillText(text, x, y);
                        //判断是否超出屏幕，超出则重新计算出生位置
                        const textWidth = ctx.measureText(text).width;//计算字体的宽度
                        
                        //文字背景
                        ctx.beginPath();
                        ctx.moveTo(x - 30, y);
                        ctx.lineCap = "round";
                        ctx.lineWidth = 35;
                        ctx.strokeStyle = "rgba(0, 0, 0, 0)";
                        ctx.lineTo(x + textWidth, y);
                        ctx.stroke();

                        if (x < -textWidth) {
                            this._getRandomPosition({}, ({x, y, color}) => {
                                item.color = color;
                                item.x = x;
                                item.y = y;
                            });
                        }
                    });

                    window.requestAnimationFrame(step);
                };
                window.requestAnimationFrame(step);
            },

         /*   _pushText(text) {
                this._getRandomPosition({text}, res => {
                    this.barrageArray.push(res);
                });

            },

            submit() {
                const text = this.addText;
                this.addText = "";
                this._pushText(text);
            }*/
        },

        watch: {
            barrageList(){
                let array = [];
                array = this.barrageList.map(item => {
                    this._getRandomPosition(item, res => {
                        this.barrageArray.push(res);
                    })
                });
            },

            //新增一条评论
            comment(){
                if(this.comment != null){
                    this._getRandomPosition(Object.assign({}, this.comment), res => {
                        this.barrageArray.push(res);
                    })
                }
            }
        },

        components: {}
    }
</script>
