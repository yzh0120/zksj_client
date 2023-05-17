<template>
  <div class="m-card">
    <el-card :shadow="shadow" :body-style="bodyStyle" :header="header"
      :class="{ noborder: noborder, showHeader: showHeader }">
      <div slot="header" v-if="$slots.header || header" class="m-header">
        <slot name="header">{{ header }}</slot>
      </div>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * @Author: wjs
     * @description: 设置 header，也可以通过 slot#header 传入 DOM
     * @param {*}
     * @return {*}
     */
    header: {
      type: String,
      default: ""
    },
    /**
     * @Author: wjs
     * @description: 设置阴影显示时机
     * @param {*} always / hover / never	always
     * @return {*}
     */
    shadow: {
      type: String,
      default: "always"
    },
    /**
     * @Author: wjs
     * @description: 设置 body 的样式
     * @param {*}
     * @return {*}
     */
    bodyStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    /**
     * @Author: wjs
     * @description: 是否有边框线条
     * @param {*}
     * @return {*}
     */
    noborder: {
      type: Boolean,
      default: false
    },
    /**
     * @Author: wjs
     * @description: 是否有header
     * @param {*}
     * @return {*}
     */
    showHeader: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style lang="scss">
$color:#E4E7ED;

.m-card {
  .el-card {
    color: #000000;
    border: 1px solid $color;

    &.noborder {
      border: none;

      .el-card__header {
        padding: 30px 43px 0;
      }
    }

    .el-card__header {
      font-size: 18px;
      font-weight: 400;
      padding: 45px 43px 0;
      border-bottom: none;

      .m-header {
        padding-bottom: 21px;
        border-bottom: 1px solid $color;
        position: relative;
        padding-left: 14px;

        &::before {
          position: absolute;
          top: 3px;
          left: 0px;
          // transform: translateY(-50%);
          content: "";
          display: inline-block;
          width: 2px;
          height: 20px;
          background: #F6384C;
        }
      }

    }
    .el-card__body {
      padding: 20px 43px;
    }

    .showHeader {
      .el-card__body {
        padding: 20px 43px;
      }
    }
  }
}
</style>
