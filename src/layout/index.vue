<!--
 * @Author: yz
 * @Date: 2022-11-16 17:24:19
 * @Description: 
 * 
-->
<template>

  <div>
    <el-container class="hm-container" v-if="$store.state.config.mode == 1">
    <!-- 头部 -->
    <topheader></topheader>
    <!-- 主体 -->
    <maincontent></maincontent>
  </el-container>

 
  <maincontent v-if="$store.state.config.mode == 2"></maincontent>
  </div>

</template>

<script>
import topheader from "@/layout/components/header/index.vue";
import maincontent from "@/layout/components/main/index";
export default {
  name: "layout",
  components: {
    topheader,
    maincontent,
  },
  // 监听路由的变化
  $route: {
    handler(to) {
      this.$refs.layoutScrollbarRef.wrap.scrollTop = 0;
    },
    deep: true,
  },
};
</script>


<style lang="scss" scoped>
.hm-container {
  flex-direction: column;
}

.layout-scrollbar {
  // min-height: calc(100vh - 84px);
  transition: padding 0.3s ease-in-out 0s;
  width: 100%;
  // padding: 15px;
}
</style>
