import request from "@/utils/axiosHttp";

/**
 * 获取用户基础信息
 * @param {*} params 
 * @returns 
 */
export function pageList(data) {
  return request({
    url: "/test/tablePager",
    method: "post",
    data: data
  })
}


/**
 * 获取用户基础信息
 * @param {*} params 
 * @returns 
 */
export function del(data) {
  // return request({
  //   url: "/test/tablePager",
  //   method: "post",
  //   data: data
  // })
}


//socket
export function socket(data) {
  return request({
    url: "/socket",
    method: "get",
    data: data
  })
}
