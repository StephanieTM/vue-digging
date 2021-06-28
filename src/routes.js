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
        path: '/tutorial/1',
        component: () => import('./tutorial/01-essentials'),
        children: [
          {
            hideInMenu: true,
            path: '',
            component: () => import('./components/Placeholder'),
          },
          {
            title: '声明式渲染',
            path: '/tutorial/1/declarative-rendering',
            component: () => import('./tutorial/01-essentials/declarative-rendering'),
          },
          {
            title: '处理用户输入',
            path: '/tutorial/1/handling-user-input',
            component: () => import('./tutorial/01-essentials/handling-user-input'),
          },
          {
            title: '条件与循环',
            path: '/tutorial/1/conditionals-and-loops',
            component: () => import('./tutorial/01-essentials/conditionals-and-loops'),
          },
          {
            title: '计算属性和侦听器',
            path: '/tutorial/1/computed-properties-and-watchers',
            component: () => import('./tutorial/01-essentials/computed-properties-and-watchers'),
          },
        ],
      },
    ],
  },
];
