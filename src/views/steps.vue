<!--
 * @Author: wjs
 * @Date: 2022-03-21 14:51:30
 * @Description: 步骤条组件
 * @FilePath: \ele-customer\src\components\steps.vue
 * 
-->
<template>
	<div>

		<mSteps :active="active" class="mb15" style="margin-top:60px;" >
			<mStep title="金融机构受理" :description="fn(1)"></mStep>
			<mStep title="金融机构审核" :description="fn(2)"></mStep>
			<mStep title="支付保费" :description="fn(3)"></mStep>
			<mStep title="金融机构出函中" :description="fn(4)" ></mStep>
			<mStep title="出函成功" :description="fn(5)"></mStep>
		</mSteps>

	</div>
</template>

<script>
export default {
	name: "steps",
	props: {
		active: {
			type: [Number,String],
			default: 0
		},
		info: {
			type: Object,
			default: () => { }
		}
	},
	computed: {
		activeOne() {
			// if (this.active == 5) {
			// 	return 3
			// } else {
			// 	return this.active
			// }
			return this.active
		},
	},
	methods: {
		fn(noww) {
			console.log(noww,Number(this.activeOne),"=--------")
			if (noww > Number(this.activeOne)) {
				return ""
			} else if (noww == Number(this.activeOne)) {
				if (this.activeOne == 5) {
					return "已完成"
				}
				// else if (this.activeOne == 3) {
				// 	if (this.info.bankApplystatus === 0) {
				// 		return "不通过"
				// 	}
				// }
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
