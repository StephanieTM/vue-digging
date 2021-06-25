import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus'
import CustomRouterLink from './components/RouterLink';
import App from './App.vue';
import './element-variables.scss';

const routes = [
  {
    path: '/',
    component: () => import('./components/Home'),
  },
  {
    path: '/hello-world',
    component: () => import('./components/HelloWorld'),
  },
  {
    path: '/tutorial',
    component: () => import('./tutorial'),
    children: [
      {
        path: '1',
        component: () => import('./tutorial/01-declarative-rendering'),
        children: [
          {
            path: '',
            component: () => import('./components/Placeholder'),
          },
          {
            path: 'counter',
            component: () => import('./tutorial/01-declarative-rendering/Counter'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component('app-link', CustomRouterLink);

app.use(router)
  .use(ElementPlus)
  .mount('#app');
