<!--
 * @Author: yz
 * @Date: 2022-11-16 17:24:19
 * @Description: 
 * 
-->
<template>
  <div>
    <el-carousel id="el-carousel">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item.imgurl" alt="" width="100%" class="my_img">
      </el-carousel-item>
    </el-carousel>



    <steps :active="info.orderstatus" :info="info"></steps>

    <!-- <foot></foot> -->
    <card header="保函开具成功" shadow="never" noborder>
      card
    </card>

    <tip title="注意事项"></tip>

    <tip2 title="注意事项">
      <p>1、每次支付都会生成订单对应的新收款帐号，请按照页面提示帐号进行付款。</p>
      <p>2、请投标人使用投标企业基本账户付款，使用非基本户付款将会打款失败。</p>
      <p>3、订单金额与转账金额必须一致，请勿多转帐、少转帐或分次转账。</p>
      <p>4、请在转帐时，按照收款信息备注的内容，填写附言/摘要/备注。</p>
      <p>5、对公支付因各银行不同，会影响实际到账时间，最终支付时间以到账时间为准，请合理安排付款时间。</p>
      <p>6、如有疑问，请拨打客服电话：400-0755-268</p>
    </tip2>


    <div class="flex_box">
      <p class="title_box">收款账户名称</p>
      <p class="value_box">123</p>
    </div>


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
        orderstatus: 3
      },
      bannerHeight: 450,
      screenWidth: 1920,
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
    window.addEventListener('resize', function () {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      that.screenWidth = width;
      that.setSize();
    }, false);
  },
  methods: {
    setSize1: function () {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.screenWidth = width;
      //图片                高 / 宽  700 / 1920
      this.bannerHeight = 450 / 1920 * this.screenWidth - 50
      document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
      console.log(this.screenWidth, "this.screenWidth-----")
    },
    setSize: function () {
      this.bannerHeight = 450 / 1920 * this.screenWidth - 50
      document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
      console.log(this.bannerHeight, "this.bannerHeight")
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .el-carousel__container {
    height: 100% !important;
  }
}


.my_img {
  object-fit: contain;
}
</style>
