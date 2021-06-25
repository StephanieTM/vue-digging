<template>
  <div class="header">
    声明式渲染
  </div>

  <div class="router-link-container">
    <app-link class="router-link" to="/tutorial/1/counter">计数器</app-link>
  </div>

  <div class="content-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'tutorial-01',
}
</script>

<style scoped>
.header {
  margin: 5px;
  text-align: center;
}
</style>
