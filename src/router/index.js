import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
    }]
  },
  {
    path: '/form',
    component: Layout,
    meta: { title: '表单', icon: 'form' },
    children: [
      {
        path: '',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单1', icon: 'form' }
      },
      {
        path: 'index',
        name: 'Form1',
        component: () => import('@/views/form/index'),
        meta: { title: '表单2', icon: 'form' }
      },
    ]
  },
];


// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
