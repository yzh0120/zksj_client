<!--
 * @Author: yz
 * @Date: 2023-02-08 15:51:32
 * @Description: 
 * 
-->
<template>
  <el-main class="two_main-main-scrollbar">
    <!-- <el-scrollbar class="layout-scrollbar" ref="layoutScrollbarRef" :style="style"> -->
    <el-scrollbar class="layout-scrollbar" ref="layoutScrollbarRef">
      <div ref="keepAliveContainer" class="app_main" id="app_main">
        <transition name="fade-transform" mode="out-in">
          <!-- <keep-alive>
            <router-view :key="key" />
          </keep-alive> -->
          <router-view :key="key" />
          <!-- <router-view v-else></router-view> -->
        </transition>
      </div>
    </el-scrollbar>
  </el-main>
</template>

<script>
import * as config from "@/config/index";
export default {
  name: "maincontent",
  data() {
    return {
      //写死的布局数据 //84px  是header的高度
      // style: {
      //   "min-height": "calc(100vh - 84px)"
      // },
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
.one_index-container-aside-head-main .layout-scrollbar {
  // padding: 15px;
  transition: padding 0.3s ease-in-out 0s;
}
</style>
