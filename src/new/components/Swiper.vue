<template>
  <!-- <div :class="[AndroidTop ? 'AndroidTop' : 'body_top']" > -->
  <div>
   <!--<swiper loop auto :list="demo06_list" :index="demo06_index" dots-position="center" height="4rem" @on-index-change="demo06_onIndexChange"  @on-click-list-item="justep"></swiper> -->
      <div style="margin-left:.3rem;margin-right:.3rem;height:4rem;">
        <swiper :options="swiperOption" ref="mySwiper" v-if="urlList.length > 0">
          <swiper-slide :key='index' v-for="(item,index) in urlList"><img style="width:100%; height:4rem;border-radius: .1rem;" :src='item.img' @click='justep(item)' /></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        disableOnInteraction:false,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      AndroidTop: false,
      baseList: [],
      urlList: [],
      demo06_list: [],
      demo06_index: 0,
      buildid: ""
    };
  },
  methods: {
    demo06_onIndexChange(index) {
      // console.log(index);
      this.buildid = this.demo06_list[index].id;
    },
    justep(item) {
        if(item.type == 2){
          // this.$router.push({ path: "building_detial", query: { buildID: item.valueId } });
          this.$router.push({path:item.value})
          this.$store.state.buttonGroup = 1;
          this.$store.state.isIndexTrue = false;
          this.$store.state.isonLineTrue = true;
          this.$store.state.isMyTrue = false;
          this.$store.state.isonLinerent = false;
        }else if(item.type == 4){
          this.$router.push({path:item.value});
        }else if(item.type == 3){
          let locationHref = window.location.href;
			    let locationvalue = locationHref.substr(0,locationHref.indexOf("#")+1);
          let title =  item.name;
          this.$router.push({path:'/framePage',query:{src:'https://www.group.citic/html/brand_launch/',title:title}});
        }else{
          this.$router.push({path:item.value});
          this.$store.state.buttonGroup = 3;
          this.$store.state.isIndexTrue = false;
          this.$store.state.isonLineTrue = false;
          this.$store.state.isMyTrue = false;
          this.$store.state.isonLinerent = true;
        }
    },
    headerSwiper() {
      this.get("palmsaleapp/api/v1/banner/appList", {
        interfaceType: "newHouse"
      }).then(
        response => {
          if (response.status == 200) {
            this.baseList = response.data;
            // console.log(this.baseList);
            this.urlList = this.baseList.map((item, index) => ({
              img: this.concatFileUrl(item.multimefileName),
              id: item.id,
              type:item.bannerType,
              value:item.bannerValue,
              valueId:item.bannerValueId,
              name:item.name,
            }));
            // console.log(this.urlList);
            // this.demo06_list = this.urlList;
            // this.buildid = this.demo06_list[0].id;
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    }
  },

  mounted() {
    this.headerSwiper();
    if (!this.AndroidOrIos()) {
      // console.log(this.AndroidOrIos());
      this.AndroidTop = false;
    } else {
      this.AndroidTop = true;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang='less'>
.body_top {
  margin-top: 60px;
}
.copyright {
  font-size: 0.6rem;
  color: #ccc;
  text-align: center;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
  bottom:0px !important;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}

.text-scroll p {
  font-size: 0.6rem;
  text-align: center;
  line-height: 30px;
}

.black {
  background-color: #000;
}

.title {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
</style>
