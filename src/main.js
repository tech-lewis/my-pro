/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Button, Icon, Layout, Menu, Drawer, Radio} from "ant-design-vue";

// import Button from "ant-design-vue/lib/button";
// import "ant-design-vue/dist/antd.less"; 使用下面的按需倒入样式import AntD from "ant-design-vue/dist/antd"
// import "ant-design-vue/lib/button/style";
Vue.use(Button);
Vue.use(Icon);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Drawer);
Vue.use(Layout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
