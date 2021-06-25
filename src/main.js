import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus'
import CustomRouterLink from './components/RouterLink';
import App from './App.vue';
import { routes } from './routes';
import './element-variables.scss';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component('app-link', CustomRouterLink);

app
  .use(router)
  .use(ElementPlus, { size: 'small' });

app.mount('#app');
