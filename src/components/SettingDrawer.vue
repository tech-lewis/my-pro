<template>
  <div>
    <a-drawer
      title="Setting Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
      :width="300"
    >
      <!-- 官方文当里的写法还有插槽 v-Node怎么使用的？Sync怎么实现绑定 -->
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <template>
          <h2>主题风格定制</h2>
          <!-- v-model 拿到的其实还是把value给我 v-model="navTheme"-->
          <a-radio-group
            @change="e => handleSettingChange('navTheme', e.target.value)"
            :value="$route.query.navTheme || 'dark'"
          >
            <a-radio value="dark">黑色主题</a-radio>
            <a-radio value="light">白色主题</a-radio>
          </a-radio-group>
          <h2>导航模式选择</h2>
          <a-radio-group
            name="radioGroup"
            @change="e => handleSettingChange('navLayout', e.target.value)"
            :value="$route.query.navLayout || 'left'"
          >
            <a-radio value="left">左侧导航</a-radio>
            <a-radio value="right">顶部导航</a-radio>
          </a-radio-group>
        </template>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
      // navTheme: this.$route.query.navTheme || "dark",
      // navLayout: "left"
    };
  },
  watch: {
    // navTheme: function(newVal) {
    //   console.log(newVal);
    // }
  },
  methods: {
    handleSettingChange(type, value) {
      //修改主题或布局样式
      // console.log(type, value)
      // let path = this.$route.path;
      // let query = this.$route.query
      // query.a = "abc";
      // let location = {
      //     path,
      //     query
      // }
      // //this.$router.push(location);
      this.$router.push({
        query: { ...this.$route.query, [type]: value }
      });
    },
    onClose() {
      this.visible = false;
    },
    // 不知道干什么用的事件哦
    afterVisibleChange(val) {
      //console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    }
  }
};
</script>
<style lang="less" scoped>
.handle {
  position: absolute;
  top: 300px;
  right: 300px;
  width: 40px;
  height: 40px;
  background-color: #1890ff;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  border-radius: 3px 0 0 3px;
}
</style>
