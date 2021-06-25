<template>
  <div class="header">
    教程（官方文档）
  </div>

  <div class="router-link-container">
    <app-link class="router-link" to="/tutorial/1">声明式渲染</app-link>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  name: 'tutorial'
}
</script>

<style scoped>
.header {
  margin: 5px;
  text-align: center;
}
</style>
