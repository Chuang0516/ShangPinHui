//引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';

// 路由配置信息
export default [
  {
    path: '/home',
    component: Home,
    meta: { show: true },
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: { show: true },
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    name: 'search',
    // 路由组件传递 props 数据
    // 布尔值写法：params
    // props: true,
    // 对象写法：额外传递 props
    // props: { a: '1', b: '2' },
    // 函数写法：可以把params参数、query参数，通过props传递给路由组件
    // props: ($route) => ({
    //   keyword: $route.params.keyword,
    //   k: $route.query.k,
    // }),
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false },
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false },
  },
  // 重定向
  {
    path: '*',
    redirect: '/home',
  },
];