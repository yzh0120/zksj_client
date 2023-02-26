<template>
    <div class="footer">
        <div class="footer-center">
            <div>
                <p class="item1" @click="go(`home`)">首页</p>
                <p class="item2">服务对象</p>
                <p class="item2">金融产品</p>
                <p class="item2">产品案例</p>
                <p class="item2">资讯中心</p>
                <p class="item2">合作机构</p>
            </div>
            <div>
                <p class="item1" @click="go(`jyt`)">捷易通平台</p>
                <p class="item2">电子投标保函</p>
                <p class="item2">履约类保函</p>
                <p class="item2">融资类产品</p>

            </div>
            <div>
                <p class="item1" @click="go(`xtrj`)">系统软件</p>
                <p class="item2">三方金融服务平台</p>
                <p class="item2">电子保函审批系统</p>
                <p class="item2">非融资业务OA系统</p>

            </div>
            <div>
                <p class="item1" @click="go(`jdal`)">经典案例</p>
                <p class="item2">接入服务</p>
                <p class="item2">系统案例</p>

            </div>
            <div>
                <p class="item1" @click="go(`rczp`)">人才招聘</p>
                <p class="item2">招聘信息</p>
            </div>
            <div style="margin-right:68px">
                <p class="item1" @click="go(`aboutUs`)">关于我们</p>
                <p class="item2">公司介绍</p>
                <p class="item2">股东信息</p>
                <p class="item2">联系我们</p>

            </div>
            <div>
                <p class="tel-phone">400-0755-268</p>
                <p class="dz">地址：深圳市福田区沙头街道天安社区公庙泰然七路1号博今商务广场A座26层</p>
                <p
                    style="width:261px;height:1px;background-color:rgba(255,255,255,1);margin-top: 6px;margin-bottom: 6px;">
                </p>
                <p style="color:rgba(255,255,255,1);line-height: 22.4px;">Copyright © 2020- 2022</p>
                <p style="color:rgba(255,255,255,1);line-height: 22.4px;">深圳市中科数建科技有限公司</p>
                <p style="color:rgba(255,255,255,1);line-height: 22.4px;"> All Rights Reserved.</p>
                <a href="https://beian.miit.gov.cn/#/Integrated/index"
                    style="color:rgba(255,255,255,1);line-height: 22.4px;text-decoration:none;"
                    target="_blank">粤ICP备2021122283号-1</a>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "foot",
    components: {

    },
    data() {
        return {

        };
    },
    methods: {
        go(path) {
            this.$router.push({ path: path })
        },
    },
    created() { },
};
</script>
<style lang="scss" scoped>
.footer {
    // width: 1200px;
    height: 418px;
    opacity: 1;
    background: rgba(24, 30, 45, 1);
    overflow: hidden;
    // margin: 0 auto;
}

.footer-center {
    width: 1200px;
    margin: 0 auto;
    margin-top: 62px;
    display: flex;

    div {
        margin-right: 55px;
    }
}

.item1 {
    color: rgba(255, 255, 255, 1);
    font-size: 20px;

    &:hover {
    cursor:pointer;
     
        color: rgba(217, 22, 59, 1);
    }
}

.item2 {
    color: rgba(177, 179, 184, 1);
    font-size: 16px;
    font-weight: 500;
    font-family: "PingFang";
    margin: 14px 0;
}

.tel-phone {
    color: rgba(217, 22, 59, 1);
    font-size: 34px;
    font-weight: 700;
    font-family: "PingFang";
    margin-top: -10px;
}

.dz {
    width: 261px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 500;
    line-height: 22.4px;
}
</style>
