<style scoped lang="scss">
    .loading-block{
        position: fixed;
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 20;
        top: 0;
    }
    .loadimg-img{
        width:100px;
        height:100px;
        position: absolute;
        top: 40%;
        left: 38%;
    }
</style>

<template>
    <div>
        <div class="loading-block" v-show="loading">
            <img class="loadimg-img" src="../../../assets/home/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
            }
        },

        created() {
            this.subscribe(this.EVENTS.PAGE_LOADING_START, "LoadingTip", () => {
                this.loading = true;
            });

            this.subscribe(this.EVENTS.PAGE_LOADING_END, "LoadingTip", () => {
                this.loading = false;
            });
        },

        mounted() {

        },

        methods: {},

        components: {}
    }
</script>
