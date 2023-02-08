const screenHeight = Number(clientHeight());
// let app_main = document.getElementById("app_main")

// console.log(app_main.height, "app_main")

//vxetable高度
export const tableheight = screenHeight - 280 + "px"
//vxetable高度
export const navTableHeight = screenHeight - 140 + "px"

export const navTableIntableHeight = (screenHeight - 140) - 180 + "px"

function clientHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
}
