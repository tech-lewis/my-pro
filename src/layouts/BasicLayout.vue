<!-- 
  <template>
  <div>
    <router-link to="/dashboard">我是仪表盘</router-link>
    <router-link to="/form">我是From模块</router-link>
     
    <Header />
    <SliderMenu />
    <router-view></router-view>
    <Footer />
  </div>
</template> -->
<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible theme="light">
      <div class="logo">Ant Desingn Pro</div>
      <SliderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>

      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SliderMenu from "./SliderMenu";
export default {
  components: {
    Header,
    Footer,
    SliderMenu
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style scoped>
.logo {
  color: red;
  font-size: 30px;
}
</style>
