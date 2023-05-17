<!--
 * @Author: wjs
 * @Date: 2022-03-21 18:35:14
 * @Description: 注意事项等
 * @FilePath: \ele-customer\src\components\tip.vue
 * 
-->
<template>
  <div class="flex tip" :class="titlebg">
    <div class="title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tip',
  props: {
    type: {
      type: String,
      default: "mxh"
    },
    title: {
      type: String,
      default: ""
    },
  },
  computed: {
    titlebg() {
      return "tip-" + this.type;
    }
  },
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: stretch;
  border-radius: 5px;

  &.tip {
    margin-bottom: 15px;
  }

  .title {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    flex: 1;
    padding: 15px;
    background-color: #ffffff;
  }
}

.tip- {
  &mxh {
    border-color: #F6384C;

    >.title {
      color: #ffffff;
      background-color: #F6384C;
    }
  }

  &default {
    border-color: #ddd;

    >.title {
      color: #333;
      background-color: #ddd;
    }
  }
}

.tip {
  border-width: 1px;
  border-style: solid;
}
</style>
