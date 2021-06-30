export const routes = [
  {
    title: 'Home',
    path: '/',
    component: () => import('./components/Home'),
  },
  {
    title: 'Hello World',
    path: '/hello-world',
    component: () => import('./components/HelloWorld'),
  },
  {
    title: 'Tutorial',
    path: '/tutorial',
    component: () => import('./tutorial'),
    children: [
      {
        title: '基础',
        path: '/tutorial/essentials',
        component: () => import('./tutorial/01-essentials'),
        children: [
          {
            hideInMenu: true,
            path: '',
            component: () => import('./components/Placeholder'),
          },
          {
            title: '介绍',
            path: '/tutorial/essentials/introduction',
            component: () => import('./tutorial/01-essentials/introduction'),
          },
          {
            title: '计算属性和侦听器',
            path: '/tutorial/essentials/computed-properties-and-watchers',
            component: () => import('./tutorial/01-essentials/computed-properties-and-watchers'),
          },
          {
            title: 'Class 与 Style 绑定',
            path: '/tutorial/essentials/class-and-style-bindings',
            component: () => import('./tutorial/01-essentials/class-and-style-bindings'),
          },
          {
            title: '条件渲染',
            path: '/tutorial/essentials/conditional-rendering',
            component: () => import('./tutorial/01-essentials/conditional-rendering'),
          },
          {
            title: '列表渲染',
            path: '/tutorial/essentials/list-rendering',
            component: () => import('./tutorial/01-essentials/list-rendering'),
          },
        ],
      },
    ],
  },
];
