<template>
  <div class="m-steps-area">
    <div class="m-steps">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mSteps',
  props: {
    active: {
      type: Number,
      default: 0
    },
    finishStatus: {
      type: String,
      default: 'finish'
    },
    processStatus: {
      type: String,
      default: 'process'
    }
  },

  data() {
    return {
      steps: [],
    };
  },

  methods: {

  },

  watch: {
    active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },

    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
    }
  }
};
</script>

<style lang="scss">

</style>
