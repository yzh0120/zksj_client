<!--
 * @Author: yz
 * @Date: 2022-12-15 10:01:58
 * @Description: 
 * 
-->
<template>
  <page>
    <!-- {{ $fn.dataItem("a", "1") }} -->
    <steps :active="info.orderstatus" :info="info" />
  </page>
</template>

<script>
import steps from "@/views/home/steps.vue"
export default {
  components: {
    steps
  },
  data() { 
    return {
      info: {
        orderstatus:2
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
