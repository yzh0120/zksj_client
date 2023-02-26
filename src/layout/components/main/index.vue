<!--
 * @Author: yz
 * @Date: 2022-11-16 17:24:19
 * @Description: 
 * 
-->
<template>
  <el-main class="layout-main">
    <el-scrollbar class="layout-scrollbar" ref="layoutScrollbarRef" :style="style">
      <div ref="keepAliveContainer" class="app_main" id="app_main">
        <transition name="fade-transform" mode="out-in">
          <!-- <keep-alive > -->
          <router-view :key="key" />
          <!-- </keep-alive> -->
          <!-- <router-view></router-view> -->
        </transition>
      </div>
    </el-scrollbar>
  </el-main>

</template>

<script>
import * as config from "@/config/index";
export default {
  name: "maincontent",
  watch: {
    $route: {
      //保存上一次的路由,之所以放在这里 是保证已经进了路由了
      handler(newVal, oldVal) {
        if (this.$refs.layoutScrollbarRef) {
          this.$refs.layoutScrollbarRef.wrap.scrollTop = 0;  //这句重置滚动条高度
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      needTags: config.needTags,
      style: {
        "min-height": config.needTags
          ? "calc(100vh - 84px)"
          : "calc(100vh - 50px)",
      },
    };
  },
  mounted() {
    if (this.$refs.keepAliveContainer) {
      this.$root.keepAlive =
        this.$refs.keepAliveContainer.childNodes[0].__vue__._vnode.componentInstance;
    }
  },
  computed: {
    key() {
      return this.$route.path;
    },
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
.layout-container .layout-scrollbar {
  padding: 15px;
  transition: padding 0.3s ease-in-out 0s;
}
</style>
