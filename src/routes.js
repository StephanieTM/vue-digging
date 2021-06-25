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
        title: '介绍',
        path: '/tutorial/1',
        component: () => import('./tutorial/01-introduction'),
        children: [
          {
            hideInMenu: true,
            path: '',
            component: () => import('./components/Placeholder'),
          },
          {
            title: '声明式渲染',
            path: '/tutorial/1/declarative-rendering',
            component: () => import('./tutorial/01-introduction/declarative-rendering'),
          },
          {
            title: '处理用户输入',
            path: '/tutorial/1/handling-user-input',
            component: () => import('./tutorial/01-introduction/handling-user-input'),
          },
          {
            title: '条件与循环',
            path: '/tutorial/1/conditionals-and-loops',
            component: () => import('./tutorial/01-introduction/conditionals-and-loops'),
          },
        ],
      },
    ],
  },
];
