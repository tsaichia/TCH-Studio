import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: false,
      title: 'TCH Studio',
      transition: 'fade'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      login: false,
      title: 'TCH Studio | 關於我',
      transition: 'fade'
    }
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import(/* webpackChunkName: "work" */ '../views/Work.vue'),
    meta: {
      login: false,
      title: 'TCH Studio | 作品集',
      transition: 'fade'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue'),
    meta: {
      login: false,
      title: 'TCH Studio | 服務項目',
      transition: 'fade'
    }
  },
  {
    path: '/process',
    name: 'Process',
    component: () => import(/* webpackChunkName: "process" */ '../views/Process.vue'),
    meta: {
      login: false,
      title: 'TCH Studio | 設計流程',
      transition: 'fade'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      login: false,
      title: 'TCH Studio | 聯絡我',
      transition: 'fade'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      login: false,
      title: 'TCH Studio | 管理員登入',
      transition: 'fade'
    }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue'),
    meta: {
      login: true,
      title: 'TCH Studio | 管理員後台',
      transition: 'fade'
    }
  },
  {
    path: '/graphic',
    name: 'Graphic',
    component: () => import(/* webpackChunkName: "graphic" */ '../views/Graphic.vue'),
    meta: {
      login: false,
      title: 'TCH Studio | 平面設計',
      transition: 'fade'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.user) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  if (to.name !== 'Manage') document.title = to.meta.title
  else document.title = store.state.user + '的後台'
})
export default router
