<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      data1: ""
    }
  }
}
</script>
<style lang="less">
#app {
  padding: 0;
  margin: 0;
}

// VUE脚手架的默认样式害人啊
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
