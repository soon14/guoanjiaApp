<template>
  <div>
      <x-input class="labelStyle"  title="建筑面积:" v-model="houseArea" placeholder="请输入建筑面积">
        <span slot="right" style="line-height:70px;">m2</span>
      </x-input>
      <x-input class="labelStyle"  title="面积单价:" v-model="areaPrice">
        <span slot="right">元</span>
      </x-input>      
      <popup-picker class="labelStyle"  :data="natureList" title="房屋性质" v-model="nature"  style="text-align:left;height:50px;font-weight:400;line-height:30px;">
      </popup-picker>
      <x-switch class="labelStyle" style="height:45px;"  title="是否唯一" v-model="stringValue"></x-switch>
      <x-button type="warn" @click.native="calculateShui">开始计算</x-button>
  </div>
</template>
<script>
import { PopupPicker,XSwitch } from 'vux';
export default {
  components: {
    PopupPicker,
    XSwitch
  },
    data() {
    return {
      natureList: [["普通住宅", "非普通住宅"]],
      nature: ["普通住宅"],
      houseArea: '',
      areaPrice: 10000,
      stringValue: true,
      IsCommonHouse:"",
    };
  },
  methods: {
    calculateShui() {      
      this.nature[0] == "普通住宅" ? this.IsCommonHousea=1 : this.IsCommonHousea=0;
      this.$router.push({
        path: "/ShuifeiPay",
        query: { totalPrice: this.houseArea*this.areaPrice,
        IsCommonHouse:this.IsCommonHouse,
        IsOnly:this.stringValue}
      });
    }
  },
};
</script>
<style lang = "less">
  .labelStyle{
    height: 30px;
    font-size: 14px;
    .weui-cell__hd{
      .weui-label{
        font-size: 16px;
      }
    }
    .weui-cell__bd{
        font-size: 16px;
      }
  }
</style>


