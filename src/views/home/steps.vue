<!--
 * @Author: wjs
 * @Date: 2022-03-21 14:51:30
 * @Description: 步骤条组件
 * @FilePath: \ele-customer\src\components\steps.vue
 * 
-->
<template>
	<div>
		<!-- <el-steps :active="activeOne" align-center class="mt20 mb15" finish-status="success">
      <el-step title="确认出函机构" :description="fn(0)"></el-step>
      <el-step title="提交申请资料" :description="fn(1)"></el-step>
      <el-step title="支付保费" :description="fn(2)"></el-step>
      <el-step title="金融机构审核" :description="fn(3)"></el-step>
      <el-step title="出具保函" :description="fn(4)"></el-step>
    </el-steps> -->
		<mSteps :active="active" class="mb15" style="margin-top:60px;" v-if="$store.state.config.isMobile">
			<mStep title="确认出函机构" :description="fn(0)" v-show="fn(0) == `进行中`"></mStep>
			<mStep title="提交申请资料" :description="fn(1)" v-show="fn(1) == `进行中`"></mStep>
			<mStep title="支付保费" :description="fn(2)" v-show="fn(2) == `进行中`"></mStep>
			<mStep title="金融机构审核" :description="fn(3)" :status="info.bankApplystatus === 0 ? 'error' : ''"
				v-show="fn(3) == `进行中`"></mStep>
			<mStep title="出具保函" :description="fn(4)" v-show="fn(4) == `进行中` || fn(4) == `已完成`"></mStep>
		</mSteps>

		<mSteps :active="active" class="mb15" style="margin-top:60px;" v-else>
			<mStep title="确认出函机构" :description="fn(0)"></mStep>
			<mStep title="提交申请资料" :description="fn(1)"></mStep>
			<mStep title="支付保费" :description="fn(2)"></mStep>
			<mStep title="金融机构审核" :description="fn(3)" :status="info.bankApplystatus === 0 ? 'error' : ''"></mStep>
			<mStep title="出具保函" :description="fn(4)"></mStep>
		</mSteps>

	</div>
</template>

<script>
export default {
	name: "steps",
	props: {
		active: {
			type: Number,
			default: 0
		},
		info: {
			type: Object,
			default: () => { }
		}
	},
	computed: {
		activeOne() {
			if (this.active == 5) {
				return 3
			} else {
				return this.active
			}
		},
	},
	methods: {
		// fn(curactive) {
		// 	if (curactive > Number(this.activeOne)) {
		// 		return ""
		// 	}
		// 	if (curactive == Number(this.activeOne)) {
		// 		return "进行中"
		// 	}
		// 	if (curactive < Number(this.activeOne)) {
		// 		return "已完成"
		// 	}
		// }
		fn(noww) {
			if (noww > Number(this.activeOne)) {
				return ""
			} else if (noww == Number(this.activeOne)) {
				if (this.activeOne == 4) {
					return "已完成"
				} else if (this.activeOne == 3) {
					if (this.info.bankApplystatus === 0) {
						return "不通过"
					}
				}
				return "进行中"
			} else if (noww < Number(this.activeOne)) {
				return "已完成"
			}
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
