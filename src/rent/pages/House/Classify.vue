<style scoped lang="scss">
    .left-part {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 20%;

        p{
            margin: 2rem 0;
            text-align: center;

            &.active{
                color: red;
            }
        }
    }

    .right-part {
        padding-left: 25%;
    }
</style>

<template>
    <div class="">
        <!--<div @click="login">login</div>-->

        <div class="left-part">

            <p  v-for="(item, index) in list" :key="index" :class="{active: active === index}" v-scroll-to="{
                 el: '#' + item.name,
                 container: 'body',
                 duration: 500,
                 easing: 'linear',
                 offset: -50,
                 cancelable: false,
                 onDone: onDone,
                 onCancel: false
             }" @click="changeActive(index)">
                {{item.name}}
            </p>

        </div>

        <div class="right-part">
            <div v-for="(item, index) in list" :key="index">
                <h1 :id="item.name" :ref="item.name">{{item.name}}</h1>
                <hr>
                <p v-for="(item_s, index_s) in item.son" :key="index_s">
                    {{item_s}}
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
                frozen: false,
                list: [
                    {
                        name: "早餐",
                        son: [
                            '豆浆', '油饼1', '油饼2', '油饼3', '油饼4', '油饼5', '油饼6', '油饼7'
                        ]
                    },
                    {
                        name: "午餐",
                        son: [
                            '豆浆', '油饼1', '油饼2', '油饼3', '油饼4', '油饼5', '油饼6', '油饼7'
                        ]
                    },
                    {
                        name: "晚餐",
                        son: [
                            '豆浆', '油饼1', '油饼2', '油饼3', '油饼4', '油饼5', '油饼6', '油饼7'
                        ]
                    }
                ],
                offsetTopList: [],
            }
        },

        created() {
            window.onscroll = (e, l) => {
                if(this.frozen === true){
                    return;
                }

                console.log(window.scrollY);
                let active = 0;

               /* if(window.scrollY === ){

                }*/

                this.offsetTopList.map((item, i) => {
                    if(window.scrollY + 50 > item){
                        active = i;
                    }
                });

                this.active = active;
            }
        },

        mounted() {
            //获取所有滚动点的位置
            let offsetTopList = [];
            this.list.map(item => {
                console.log(this.$refs[item.name][0].offsetTop)
                offsetTopList.push(this.$refs[item.name][0].offsetTop)
            });

            this.offsetTopList = offsetTopList;
        },

        methods: {
            login() {
                this.$router.push('/')
            },

            changeActive(i){
                this.frozen = true;
                this.active = i;
            },

            onDone(e){
                console.log(e)
                this.frozen = false;
            },
        },

        components: {}
    }
</script>
