<!--
 * @Author: yz
 * @Date: 2022-11-16 17:24:19
 * @Description: 
 * 
-->
<template>
  <el-header class="headerstyle">
    <navbar></navbar>
  </el-header>
  
</template>

<script>
import navbar from "@/layout/components/header/navbar";
import * as config from "@/config/index";
export default {
  name: "topheader",
  components: {
    navbar,
  },
  data() {
    return {
      needTags: config.needTags,
      // heigth: config.needTags ? "84px" : "50px",
    };
  },
  created() { },
};
</script>

<style lang="scss" scoped>

</style>
