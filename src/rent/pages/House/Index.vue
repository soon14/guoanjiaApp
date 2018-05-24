<style scoped lang="scss">
    .list-box{
        top: 40px;
        position: absolute;
        bottom: 40px;
        width: 100%;
    }
</style>

<template>
    <div class="">
        <div @click="alert">alert</div>
        <div @click="toast">toast</div>
        <div class="list-box">
            <List></List>
        </div>
    </div>
</template>

<script>
    import List from './List'

    export default {
        data() {
            return {}
        },

        created() {

        },

        mounted() {

        },

        methods: {
            alert(){
                // 显示
                this.$vux.alert.show({
                    title: 'Vux is Cool',
                    content: 'Do you agree?',
                    onShow () {
                        console.log('Plugin: I\'m showing')
                    },
                    onHide () {
                        console.log('Plugin: I\'m hiding')
                    }
                })
            },

            toast(){
                this.$vux.toast.show({
                    text: 'Loading'
                })
            }
        },

        components: {
            List
        }
    }
</script>
