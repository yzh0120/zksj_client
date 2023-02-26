/*
 * @Author: yz
 * @Date: 2022-02-09 16:51:50
 * @Description: 
 * @FilePath: \operateweb\src\router\routes.js
 * 
 */
let layout = () => import("@/layout/index.vue")

// import baseForm from "./modules/1-base-form.js"
// import vxeTable from "./modules/2-vxe-table.js"
// import fastCopy from "./modules/3-fastCopy.js"
// import fileUp from "./modules/4-fileUp.js"
// import style from "./modules/6-style.js"
// import svgIcon from "./modules/7-svgIcon.js"
// import elementUi from "./modules/11-element-ui.js"
import {
  status
} from "./modules/status.js"

const routes = [
  // {
  //   path: 'home',
  //   name: 'home',
  //   component: () => import('../views/home/index.vue')
  // }
  {
    path: "/",
    component: layout,
    redirect: "/home",
    children: [{
        path: '',
        name: 'home',
        component: () => import("@/views/home/index.vue"),
      },
      // {
      //   path: 'jyt',
      //   name: 'jyt',
      //   component: () => import("@/views/jyt.vue"),
      // },
      // {
      //   path: 'xtrj', //三方金融服务平台
      //   name: 'xtrj',
      //   component: () => import("@/views/xtrj.vue"),
      // }, {
      //   path: 'jdal',
      //   name: 'jdal',
      //   component: () => import("@/views/jdal.vue"),
      //   children: [

      //   ]
      // }, {
      //   path: 'hyzx',
      //   name: 'hyzx',
      //   component: () => import("@/views/hyzx.vue"),
      // }, {
      //   path: 'rczp',
      //   name: 'rczp',
      //   component: () => import("@/views/rczp.vue"),
      // }, {
      //   path: 'aboutUs',
      //   name: 'aboutUs',
      //   component: () => import("@/views/aboutUs.vue"),
      // }
      // ///////////////////////
      // , {
      //   path: 'dzbhspxt',
      //   name: 'dzbhspxt', //电子保函审批系统
      //   component: () => import("@/views/dzbhspxt.vue"),
      // }, {
      //   path: 'frzywoaxt',
      //   name: 'frzywoaxt', //非融资业务OA系统
      //   component: () => import("@/views/frzywoaxt.vue"),
      // }, {
      //   path: 'xwzx/:id?',
      //   name: 'xwzx', //非融资业务OA系统
      //   component: () => import("@/views/xwzx.vue"),
      // }
    ]
  },
]

export const otherRoutes = [{
  path: '*',
  redirect: '/404',
  meta: {
    hidden: true,
  },
}]

export default routes
