<template>
  <div class="header">
    教程（官方文档）
  </div>

  <div class="router-link-container">
    <app-link
      v-for="router in routes"
      class="router-link"
      :key="router.path"
      :to="router.path"
    >
      {{router.title}}
    </app-link>
  </div>

  <router-view></router-view>
</template>

<script>
import { routes } from '@/routes';

export default {
  data() {
    return {
      routes: (routes.find(item => item.path === '/tutorial').children || []).filter(item => !item.hideInMenu),
    };
  },
}
</script>

<style scoped>
.header {
  margin: 5px;
  text-align: center;
}
</style>
