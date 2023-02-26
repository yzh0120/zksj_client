<!--
 * @Author: yz
 * @Date: 2022-11-16 17:24:19
 * @Description: 
 * 
-->
<template>

  <div class="box">
    <div class="left">
      <img :src="require(`@/assets/imgHome/logo.png`)" alt="" @click="ccc" class="img_logo" />

    </div>

    <div class="nav">
      <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/">首页</el-menu-item>
        <!-- <el-menu-item index="/jyt">捷易通平台</el-menu-item> -->


        <!-- <el-submenu index="/xtrj">
          <template slot="title">系统软件</template>
 
          <el-menu-item index="/xtrj">三方金融服务平台</el-menu-item>
          <el-menu-item index="/dzbhspxt">电子保函审批系统</el-menu-item>
          <el-menu-item index="/frzywoaxt">非融资业务OA系统</el-menu-item>
        </el-submenu> -->

        <!-- <el-menu-item index="/jdal">经典案例</el-menu-item>
        <el-menu-item index="/hyzx">行业资讯</el-menu-item>
        <el-menu-item index="/rczp">人才招聘</el-menu-item>
        <el-menu-item index="/aboutUs">关于我们</el-menu-item> -->
      </el-menu>
    </div>

    <div class="right">

      <div class="right1" @click="gogo">
        捷易通登录
      </div>
      <div class="right2">


        <span>
          400-0755-268
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      activeIndex: "1"
    }
  },
  components: {
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse;
    },
  },
  methods: {
    ccc() {
      this.$router.push("/")
    },
    gogo() {
      window.open("https://jyt.zksj.com.cn/receive-platform-saas/#/home?souId=zksj")
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onCollapseChange() {
      this.$store.dispatch("config/setCollapse", !this.$store.getters.isCollapse);
    },
  },
};
</script>

<style lang="scss" scoped>
.img_logo {
  cursor: pointer;
}

.box {
  position: relative;
  border-bottom: 1px solid #ccc;
}

.left {
  // background-color: red;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 60px;

  img {
    width: 88px;
    height: 46px;
  }
}

.right {
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 60px;

  .right1 {
    cursor: pointer;
    background-color: #F5F5F5;
    border-radius: 4px;
    width: 109px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.9);
    margin-right: 20px;

    &:hover {
      background-color: rgba(217, 22, 59, 1);
      color: #F5F5F5;
    }
  }

  .right2 {
    // background-color: #F5F5F5;
    border: 1px solid rgba(217, 22, 59, 1);
    border-radius: 4px;
    width: 135px;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(217, 22, 59, 1);
    background-image: url(../../../assets/imgHome/phone1.png);
    background-repeat: no-repeat;
    background-position: left 8px top 10px;

    span {
      margin-left: 18px;
    }

    //  .img2{
    //   display: none;
    //  }
    &:hover {
      background-color: rgba(217, 22, 59, 1);
      color: #F5F5F5;
      background-image: url(../../../assets/imgHome/phone2.png);
      background-repeat: no-repeat;
      background-position: left 8px top 10px;
      //     .img1{
      //   display: none;
      //  }
    }
  }
}

.nav {
  width: 1200px;
  margin: 0 auto;
}

.navbar {
  border-bottom: 1px solid #f1f2f3;
  height: 50px;
  background-color: var(--bg-topBar);
  flex-shrink: 0;
  display: flex;
  padding-right: 15px;

  .navbar-left,
  .navbar-right {
    flex: 1;
    align-items: center;
    display: flex;
  }

  .navbar-right {
    justify-content: flex-end;
  }

  .navbar-collapse {
    cursor: pointer;
    font-size: 22px;
    margin-left: 15px;
    margin-right: 15px;
    color: var(--bg-topBarColor);
  }
}
</style>



