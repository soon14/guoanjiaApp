<style scoped lang="scss">

</style>

<template>
    <div class="fixContent" >
        <!--<ga-page-header title="登录">

        </ga-page-header>-->

        <div class="page-content">
            <group>
                <x-input title="用户id" v-model="id"></x-input>
            </group>

            <group>
                <x-button type="primary" @click.native="submit">登录</x-button>
            </group>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: "",
            }
        },

        created() {

        },

        mounted() {

        },

        methods: {
            submit() {
                this.setStorage(this.KEYS.USER_TOKEN, "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTdlYzgyMjVlN2YzNTk2MDE1ZTdmMzc2NTI4MDAwMCIsInBob25lIjoiMTIzIiwiaXAiOiIwOjA6MDowOjA6MDowOjEiLCJleHAiOjE1MDU5Nzg4NzIsImlhdCI6MTUwNTM3NDA3Mn0.guMTCTpGGgUsZhx0517qWBjsSxa_42CPiQlhJlbeulEPiIQDU45o8tAy-q1uBYmaYhiyCjiYh3mP9L3S1oXCkw");
                this.setStorage(this.KEYS.USER_INFO, {id: this.id});
                this.$router.replace("/")
            }
        },
        components: {}
    }
</script>
