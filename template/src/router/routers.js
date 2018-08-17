import _import from './_import';

export default [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: _import('home'),
    meta: {
      title: '首页'
    }
  }
];
