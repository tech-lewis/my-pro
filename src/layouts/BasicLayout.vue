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
  <div :class="[`navTheme-${navTheme}`, `navLayout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        :theme="navTheme"
        v-if="navLayout === 'left'"
        v-model="collapsed"
        collapsible
        :trigger="null"
        :width="256"
      >
        <div class="logo">Ant Desingn Pro</div>
        <SliderMenu :theme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            class="fold-icon"
            @click="collapsed = !collapsed"
          >
          </a-icon>
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
    <SettingDrawer></SettingDrawer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SliderMenu from "./SliderMenu";
import SettingDrawer from "../components/SettingDrawer.vue";
export default {
  components: {
    Header,
    Footer,
    SliderMenu,
    SettingDrawer
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style scoped lang="less">
.logo {
  color: red;
  font-size: 15px;
}
.fold-icon {
  line-height: 64px;
  padding: 0 19px;
  font-size: 20px;
  &:hover {
    background-color: #eeeeee;
  }
}

.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.navTheme-dark {
  .logo {
    background-color: #ffffff;
  }
}
</style>
