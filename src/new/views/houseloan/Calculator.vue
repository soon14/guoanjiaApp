<style lang="less" scoped>
  .calculator{
    padding: 0 0 20px;
    margin-top: 1.3rem;
    text-align: left;
  }
  .calculator1{
    padding: 0 0 20px;
    margin-top: 0rem;
    text-align: left;
  }
</style>

<template>
  <div :class="{'calculator':!this.$store.state.showWxTitle,'calculator1':this.$store.state.showWxTitle,}">
    <tab>
    <tab-item selected @on-item-click="onItemClick">商业贷</tab-item>
    <tab-item @on-item-click="onItemClick">公积金贷</tab-item>
    <tab-item @on-item-click="onItemClick">组合贷</tab-item>
    <tab-item @on-item-click="onItemClick">税费计算</tab-item>
    </tab>
    <div v-show="showPage==0">
        <ShangDaiPage></ShangDaiPage>
    </div>
    <div v-show="showPage==1">
      <GongJijinPage></GongJijinPage>
    </div>
    <div v-show="showPage==2">
      <ZuHePage></ZuHePage>
    </div>
    <div v-show="showPage==3">
      <ShuiFiePage></ShuiFiePage>
    </div>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux';
import ShangDaiPage from "./ShangDaiPage"
import GongJijinPage from "./GongJiJinPage"
import ZuHePage from "./ZuHePage"
import ShuiFiePage from "./ShuiFiePage"
export default {
  components: {
    Tab,
    TabItem,
    ShangDaiPage,
    GongJijinPage,
    ZuHePage,
    ShuiFiePage
  },
  data() {
    return {
      showPage:0
    };
  },
  methods:{
     onItemClick (index) {
       this.showPage=index;
    }
  }
};
</script>