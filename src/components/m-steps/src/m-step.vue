<template>
  <div class="m-steps-item">
    <div class="m-steps-icon" :class="['is-' + currentStatus]">
      <template v-if="currentActive <= index">
        <i class="el-icon-close" v-if="status == 'error'"></i>
        <span class="u-icon" v-else>{{ index + 1 }}</span>
      </template>
      <template v-else>
        <i class="el-icon-close" v-if="status == 'error'"></i>
        <i class="el-icon-check" v-else></i>
      </template>
    </div>
    <div class="m-steps-content" :class="['is-' + currentStatus]">
      <div class="u-steps-title">{{ title }}</div>
      <div class="u-steps-description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mStep',
  props: {
    title: String,
    icon: String,
    description: String,
    status: String
  },
  data() {
    return {
      index: "-1",
      currentActive: this.$parent.active,
      totalSteps: "",
      internalStatus: ''
    }
  },
  beforeCreate() {
    this.$parent.steps.push(this);
    this.totalSteps = this.$parent.steps;
    this.index = this.totalSteps.indexOf(this);
  },
  beforeDestroy() {
    const steps = this.$parent.steps;
    const index = steps.indexOf(this);
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },

  computed: {
    currentStatus() {
      return this.status || this.internalStatus;
    },
  },

  methods: {
    updateStatus(val) {
      const prevChild = this.$parent.$children[this.index - 1];
      if (val > this.index) {
        this.internalStatus = this.$parent.finishStatus;
      } else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.processStatus;
      } else {
        this.internalStatus = 'wait';
      }

      // if (prevChild) prevChild.calcProgress(this.internalStatus);
    },
  },

  mounted() {
    const unwatch = this.$watch('index', val => {
      this.$watch('$parent.active', this.updateStatus, { immediate: true });
      this.$watch('$parent.processStatus', () => {
        const activeIndex = this.$parent.active;
        this.updateStatus(activeIndex);
      }, { immediate: true });
      unwatch();
    });
  }
}
</script>

<style lang="scss">
.m-steps-area {
  .m-steps {
    // padding: 30px 0;
    display: flex;

    .m-steps-item {
      display: inline-block;
      flex: 1; // 弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容
      overflow: hidden;
      font-size: 16px;
      line-height: 32px;


      .m-steps-icon {
        display: inline-block;
        margin-right: 14px;
        margin-left: 14px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        text-align: center;
        border: 1px solid rgba(0, 0, 0, .4);
        color: rgba(0, 0, 0, 0.4);

        &.is-finish {
          color: #409EFF;
          border: 1px solid #409EFF;
        }

        &.is-process {
          border: 1px solid #409EFF;
          color: #ffffff;
          background-color: #409EFF;
        }

        &.is-error {
          border: 1px solid #F6384C;
          color: #F6384C;
        }
      }

      &:first-child {
        .m-steps-icon {
          margin-left: 0;
        }
      }

      &:last-child {
        flex: none;

        .u-steps-title {
          &::after {
            height: 0;
          }
        }
      }

      .m-steps-content {
        display: inline-block;
        vertical-align: top;
        color: rgba(0, 0, 0, 0.4);

        &.is-process,
        &.is-finish {
          color: #409EFF;
        }

        &.is-finish {
          .u-steps-title {
            &::after {
              background: #409EFF;
            }
          }
        }

        &.is-error {
          color: #F6384C;

          .u-steps-title {
            &::after {
              background: #F6384C;
            }
          }
        }

        .u-steps-title {
          position: relative;
          padding-right: 17px;
          font-weight: bold;
          display: inline-block;

          &::after {
            position: absolute;
            top: 16px;
            left: 100%;
            display: block;
            width: 9999px;
            height: 1px;
            background: #DCDCDC;
            content: "";
          }
        }

        .u-steps-description {
          font-size: 14px;
          max-width: 140px;
        }
      }
    }
  }
}
</style>
