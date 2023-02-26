<!--
 * @Author: yz
 * @Date: 2022-11-24 17:09:39
 * @Description: 
 * 
-->
<template>
  <div style="" class="boxx" :style="myStyle">
    <el-image :style="myStyle" :src="url" :preview-src-list="srcList" ref="reference">

    </el-image>
    <button class='fada'><i class="el-icon-search" style="color: white;font-size: 24px;" @click="click"></i></button>
  </div>

</template>

<script>
export default {
  props: {
    myStyle: {
      type: Object,
      default: () => {
        return {
          width: "100px",
          height: "100px"
        }
      }
    },
    url: {
      // type: Object,
      // default: () => { }
      type: String,
      default: ""
    },
    srcList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    click() {
      console.log(this.$refs.reference.$el.childNodes[0].click(), "reference")
    }
  },
}
</script>

<style lang="scss" scoped>
.boxx {
  position: relative;
  width: auto;

  &:hover {
    .fada {
      // pointer-events: all;
      display: block;
    }
  }
}

.fada {
  border-radius: 50%;
  background-color: rgba(217, 22, 59, 1);
  border: none;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 999999;
}
</style>
