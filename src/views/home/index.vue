<!--
 * @Author: yz
 * @Date: 2022-11-16 17:24:19
 * @Description: 
 * 
-->
<template>
  <div>
    <el-carousel  id="el-carousel" >
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item.imgurl" alt="" width="100%" class="my_img">
      </el-carousel-item>
    </el-carousel>



    <steps :active="info.orderstatus" :info="info"></steps>

    <!-- <foot></foot> -->
123
  </div>



</template>

<script>
import foot from "@/layout/components/footer/index";
import steps from "@/views/steps";
export default {
  components: {
    foot,
    steps
  },
  data() {
    
    return {
      info: {
        orderstatus:3
      },
      bannerHeight: 450,
      screenWidth:1920,
      bannerList: [
      { imgurl: require("@/assets/home/1.png") },
        // { imgurl: require("@/assets/home/2.png") },
        // { imgurl: require("@/assets/home/3.png") },
      ],

    }
  },
  mounted() {
    this.setSize1();
      const that = this;
      //监听浏览器窗口大小改变
      window.addEventListener('resize', function() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        that.screenWidth = width;
        that.setSize();
      }, false);
  },
  methods: {
    setSize1: function() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.screenWidth = width;
        //图片                高 / 宽  700 / 1920
        this.bannerHeight = 450 / 1920 * this.screenWidth - 50
      document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
      console.log(this.screenWidth,"this.screenWidth-----")
      },
      setSize: function() {
        this.bannerHeight = 450 / 1920 * this.screenWidth - 50
        document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
        console.log(this.bannerHeight,"this.bannerHeight")
      },
  },
}
</script>

<style lang="scss" scoped>
 ::v-deep{
 .el-carousel__container {
    height: 100% !important;
  }
 }


.my_img{
    object-fit: contain;
}
</style>
