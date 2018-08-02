<template>
 <div>
       
        <div :class="{'body_top':IosTop,'body_tops':AndroidTop,'wx_top':wxTop}" ></div>

 </div>
</template>

<script>
export default {
   components: {},
   data() {
    return {
        IosTop: false,
        AndroidTop: false,
        wxTop: false,
    }
   },
   methods:{},
   created(){},
   mounted(){
       // 判断类型
    if (!this.$store.state.showWxTitle) {
      if (!this.AndroidOrIos()) {
        this.AndroidTop = false;
        this.IosTop = true;
        this.wxTop = false;
      } else {
        this.AndroidTop = true;
        this.IosTop = false;
        this.wxTop = false;
      }
    } else {
      this.wxTop = true;
      this.AndroidTop = false;
      this.IosTop = false;
    }
   },
   computed(){},
}
</script>

<style scoped lang="less">
.body_top {
  margin-top: 0.6rem;
  // position: absolute;
  // left: 0;
  // top: 0;
  // bottom: 1.2rem;
  // right: 0;
  // overflow: auto;
  transform: translate3d(0, 0, 0);
}
.body_tops {
  margin-top: 0.6rem;
  // position: absolute;
  // left: 0;
  // top: 0;
  // bottom: 0;
  // right: 0;
  overflow: auto;
}
.wx_top {
  margin-top: 0;
  // position: absolute;
  // width: 100%;
  // height: 100%;
  // left: 0;
  // top: 0;
  // bottom: 1.2rem;
  // right: 0;
  // overflow-y: scroll;
}
</style>
