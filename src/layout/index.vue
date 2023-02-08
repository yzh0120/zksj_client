<template>
  <maincontent></maincontent>
</template>

<script>
import maincontent from "@/layout/components/main/index";
export default {
  name: "layout",
  components: {
    maincontent,
  },
  computed: {
    //写死的布局数据
    // isCollapse() {
    //   if (this.$store.state.config.isCollapse) {
    //     return { width: `calc(100% - 54px)` }
    //   } else {
    //     return { width: "calc(100% - 210px)" }
    //   }
    // },
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
.one_index-container-aside-head-main {
  display: flex !important;
}

.one_index-container-head-main {
  flex-direction: column;
  // width: 100%;
  height: 100%;
  display: flex;
}

.layout-scrollbar {
  transition: padding 0.3s ease-in-out 0s;
  width: 100%;
  // padding: 15px;
}

//写死的布局数据
.isCollapse {
  width: calc(100% - 54px)
}

//写死的布局数据
.noisCollapse {
  width: calc(100% - 210px)
}
</style>
