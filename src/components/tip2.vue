<template>
  <div class="box">
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
  name: 'card',
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
.box{
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  padding: 20px 30px;
  .title{
    font-size: 20px;
    font-weight: bold;
    color: #F6384C;
    margin-bottom: 10px;
  }
  .content{
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
  }
}

</style>
