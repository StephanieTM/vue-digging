<template>
  <div class="header">
    基础
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

  <div class="content-container">
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from '@/routes';

export default {
  data() {
    let tutorial1Routes = [];
    try {
      tutorial1Routes = routes.find(item => item.path === '/tutorial').children.find(item => item.path === '/tutorial/essentials').children.filter(item => !item.hideInMenu);
    } catch {
      tutorial1Routes = [];
    }
    return {
      routes: tutorial1Routes || [],
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
