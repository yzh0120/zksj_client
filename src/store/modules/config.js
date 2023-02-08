/*
 * @Author: yz
 * @Date: 2022-06-08 15:42:48
 * @Description: 
 * 
 */
const state = {
  isCollapse: false,//折叠
  loading: false,
  dataItem: {},//数据字段
  isMobile:false,//手机环境
}

const mutations = {
  setCollapse(state, val) {
    state.isCollapse = val;
  },
  windowResize(state, params) { //是一个函数
    let {
      innerWidth,
      innerHeight
    } = window
    state.window_innerWidth = innerWidth
    state.window_innerHeight = innerHeight

    state.isMobile = state.window_innerWidth < 768 ? true : false;
  },
}

const actions = {
  setCollapse({
    commit
  }, val) {
    commit("setCollapse", val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
