<template>
    <div>
        <!-- <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"> -->
            <router-view class="router-view"></router-view>
        <!-- </transition> -->
        <!-- <buttonGroup></buttonGroup> -->
    </div>
</template>
<script>
// import buttonGroup from '../components/buttonGroup'//底部导航栏
export default {
    name: 'index',
    // components: {
    //     buttonGroup
    // },
    data() {
        return {
            // direction: 'forward',
            tostack: [],
            hlenght: 0
        }
    },
    methods: {

    },
    mounted() {
        this.$router.beforeEach((to, from, next) => {
            //初始化时放入当前地址,多数为'/'
            if (this.tostack.length == 0) {
                this.tostack.push(from.path)
            }
            if (this.tostack.length > 1 && this.tostack[this.tostack.length - 2] == to.path) {
                this.tostack.pop();
                this.direction = 'backward';
            } else {
                this.tostack.push(to.path);
                this.direction = 'forward';
            }
            next();

        });
    }

}
</script>
<style lang="less">
.router-view {
    width: 100%;
}

// .vux-pop-out-enter-active,
// .vux-pop-out-leave-active,
// .vux-pop-in-enter-active,
// .vux-pop-in-leave-active {
//     will-change: transform;
//     transition: all 500ms;
//     height: 100%; // top: 46px;
//     position: absolute;
//     backface-visibility: hidden;
//     perspective: 1000;
// }

// .vux-pop-out-enter {
//     opacity: 0;
//     transform: translate3d(-100%, 0, 0);
// }

// .vux-pop-out-leave-active {
//     opacity: 0;
//     transform: translate3d(100%, 0, 0);
// }

// .vux-pop-in-enter {
//     opacity: 0;
//     transform: translate3d(100%, 0, 0);
// }

// .vux-pop-in-leave-active {
//     opacity: 0;
//     transform: translate3d(-100%, 0, 0);
// }
</style>