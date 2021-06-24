import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

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

createApp(App)
  .use(router)
  .mount('#app');
