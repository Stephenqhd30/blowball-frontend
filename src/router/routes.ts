import {RouteRecordRaw} from 'vue-router';
import Login from '../views/user/Login.vue';
import NoAuthPage from '../views/exception/NoAuthPage.vue';
import {ACCESS_ENUM} from '../constants';
import UserLayout from '../layouts/UserLayout.vue';
import NotFoundPage from '../views/exception/NotFoundPage.vue';
import AdminUserPage from '../views/admin/AdminUserPage.vue';
import UserCenter from '../views/account/UserCenter.vue';
import UserSettings from '../views/account/UserSettings.vue';
import IndexPage from '../views/IndexPage.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "主页",
    component: IndexPage,
    children: [
      {path: "/:category", component: IndexPage},
    ]
  },
  {
    path: "/admin",
    name: "管理页",
    redirect: "/admin/user",
    meta: { title: "关于", access: ACCESS_ENUM.ADMIN },
    children: [
      { path: "/admin/user", name: "用户管理", component: AdminUserPage },
    ],
  },
  {
    path: "/user",
    name: "用户页",
    component: UserLayout,
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: Login,
      },
    ],
  },
  {
    path: "/account",
    name: "个人页",
    redirect: "/account/center",
    children: [
      {
        path: "/account/center",
        name: "个人中心",
        component: UserCenter,
      },
      {
        path: "/account/settings",
        name: "个人设置",
        component: UserSettings,
      },
    ],
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthPage,
    meta: { hideInMenu: true },
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFoundPage,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配404
    redirect: "/404",
  },
];
