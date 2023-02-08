<!-- 
data：{
	flag:""                                 控制弹窗显示隐藏字段
	width:'100px' 
	height:'100px' 
	title:'标题'                              标题
	msg：false                                是否只是信息弹窗
}
 -->
<!-- :show-close="false" -->
<template>
  <vxe-modal ref="modal" v-model="flag" :width="w" :height="h" showFooter :title="title" @close="cancel"
    :show-zoom="true">
    <slot></slot>

    <template #footer>
      <el-button @click="cancel" v-if="!msg" plain>取消</el-button>
      <el-button type="primary" @click="confirm">确认</el-button>
    </template>
  </vxe-modal>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    cancel() {
      // this.$emit("event", {
      //   name: "cancel",
      // });
      this.$emit("cancel");
    },
    confirm() {
      // this.$emit("event", {
      //   name: "confirm",
      // });
      this.$emit("confirm");
    },
    close() {
      // this.$emit("event", {
      //   name: "close",
      // });
      this.$emit("close");
    },
  },
  computed: {
    flag: {
      get() {
        return this.data.alert;
      },
      set(val) {
        this.data.alert = val;
      },
    },
    w() {
      return this.data.width ? this.data.width : "80%";
    },
    h() {
      return this.data.height ? this.data.height : "80%";
    },
    title() {
      return this.data.title ? this.data.title : "标题";
    },
    msg() {
      return this.data.msg;
    },
  },
};
</script>

<style>

</style>
<!-- 
正常使用:
flagData:{
	flag:false,
	w:'800px',
	h:'600px',
	title:"标题"
},
<confirm :data="flagData" @close="" @cancel="" @confirm="">

</confirm>

搭配taf:
flagData:{
	w:'800px',
	h:'600px',
	title:"标题",

	tableData: [],//表格数据
	flag:false,//弹窗绑定的name
	formData: {},//表单数据
	flag: "",//表明是新增还是编辑 
},
*******************************************************************************************
<el-button type="primary" @click="tafAdd(flagData)">新增</el-button >

<confirm :data="flagData" @close="tafCancel(flagData)" @cancel="tafCancel(flagData)" @confirm="tafConfirm(flagData,$refs.form3)">
	<el-form ref="form3" :model="flagData.formData" label-width="80px">
	  <el-form-item label="活动名称" :rules="[ { required: true, msgsage: '必填', trigger: 'blur' }]" prop="name">
		<el-input v-model="flagData.formData.name"></el-input>
	  </el-form-item>
	</el-form>
</confirm>

<el-table :data="flagData.tableData" style="width: 100%">
  <el-table-column prop="name" label="姓名"> </el-table-column>
		  
  <el-table-column prop="name" label="操作">
	<template slot-scope="scope">
	  <el-button
		type="info"
		@click="tafEdit(flagData,scope.$index,) "
		>编辑</el-button
	  >
	  <el-button
		type="warning"
		@click="tafDel(flagData,scope.$index)"
		>删除</el-button
	  >
	</template>
  </el-table-column>
</el-table>
 -->
