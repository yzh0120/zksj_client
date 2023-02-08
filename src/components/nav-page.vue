<template>
  <!-- .linkFixedPage -->
  <div class="navTablePage" :style="{ height: config.navTableHeight }">
    <div class="left" :style="{ width: widthComputed }">
      <div class="left-top titleText" v-if="leftTitle">{{ leftTitle }}</div>

      <div :class="['left-main', leftTitle ? 'hasTit' : '']">
        <el-scrollbar style="height: 100%">
          <slot name="left"></slot>
        </el-scrollbar>
      </div>
    </div>
    <div class="right">
      <div class="right-top titleText" v-if="rightTitle">{{ rightTitle }}</div>

      <div :class="['right-main', rightTitle ? 'hasTit' : '']">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from "@/config/index";

export default {
  props: ["leftTitle", "rightTitle", "width"],
  data() {
    return {
      config: config
    }
  },
  computed: {
    widthComputed() {
      return this.width ? this.width : "200px";
    },
  },
};
</script>




<!-- scoped 导致样式无法突破滚动组件 -->
<style  lang="scss">
//联动固定页面的左边的宽度
// $linkFixedPage_left_width: 200px;
//标题
$height: 40px;
$normal_spacing: 15px; //普通的间隔 适合 一般的padding 和margin
$shadow: #ccc; //page  nav link-page  navDetail 的背景

.navTablePage {
  // height: 100%;
  display: flex;
  background-color: transparent;

  // box-shadow:#ccc 0px 0px 10px;//将颜色提到前面 将h-shadow,v-shadow设为0px,实现四周阴影

  height: calc(100% - #{$normal_spacing} - #{$normal_spacing});
  margin: $normal_spacing calc(#{$normal_spacing} * 1); //margin: calc(#{$normal_spacing} / 1.5) $normal_spacing;
  // background-color: white;
  //overflow: hidden; //内容溢出隐藏
  // box-shadow: #ccc 0px 0px 10px;
  border-radius: 6px;

  .titleText {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    color: #606266;
    font-weight: 700;
    margin-left: 6px;
  }

  .hasTit {
    height: calc(100% - #{$height}) !important;
  }

  >.left {
    box-shadow: $shadow 0px 0px 10px;
    border-radius: 6px;
    background-color: white;
    // width: $linkFixedPage_left_width;
    flex-shrink: 0; //如果空间不足,该项目不缩小
    height: 100%;
    margin-right: $normal_spacing;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d8dce5;

    >.left-top {
      width: 100%;
      height: $height;
      flex-shrink: 0; //如果空间不足,该项目不缩小
      border-bottom: 1px solid #d8dce5;
    }

    >.left-main {
      width: 100%;
      flex-grow: 1;
      overflow: auto;

      .left-item {
        // background-color: red;
        font-size: 14px;
        height: 36px;
        padding: 10px 0px 10px 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &:hover {
          background-color: #e8f4ff;
          cursor: pointer;
        }

        &.active {
          background-color: #e8f4ff;
          color: #1890ff;
        }
      }
    }
  }

  >.right {
    box-shadow: $shadow 0px 0px 10px;
    border-radius: 6px;
    background-color: white;
    border: 1px solid #d8dce5;
    position: relative;
    flex-grow: 1;
    height: 100%;
    display: flex;
    /* 
			 为了解决 el-table 在flex的bug，在.right-main使用了position:absolute;也就让flex失灵了
			 */
    // flex-direction: column;
    // justify-content: space-between;
    // align-items: center;

    >.right-top {
      width: 100%;
      height: $height;
      // flex-shrink:0;//如果空间不足,该项目不缩小
      border-bottom: 1px solid #d8dce5;
    }

    >.right-main {
      padding: 0 10px;
      width: 100%;
      // flex-grow:1;
      overflow: auto;
      position: absolute;
      bottom: 0;
      height: 100%;

      // 加上了 flex,插槽里面的table就不需要 height: "calc(100% - 194px)",
      //height: "calc(100% - 194px)",  这个写法会在表单换行显示的时候,导致高度增大,湿的 link-fixed-page出现滚动条
      //坏处就是子元素包括 elbutton 的width 就是100%
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
    }
  }
}
</style>
