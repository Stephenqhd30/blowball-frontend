<script lang="ts" setup>
import { computed, ref } from "vue";
import { TITLE } from "../../constants";
import { useRouter } from "vue-router";
import { routes } from "../../router/routes.ts";
import { useLoginUserStore } from "../../store";
import { checkAccess } from "../../utils";
import AvatarDropDown from './AvatarDropDown.vue';

const router = useRouter();
// 当前选中的菜单项
const selectedKeys = ref(["/"]);
const loginUserStore = useLoginUserStore();
const loginUser = loginUserStore.loginUser;

/**
 * 可以展示的菜单项目
 */
const visibleRoutes = computed(() => {
  return routes.filter((route) => {
    // 如果路由有 hideInMenu 属性并且为 true，则不展示
    if (route.meta?.hideInMenu) {
      return false;
    }
    // 检查权限
    return checkAccess(loginUserStore.loginUser, route.meta?.access as string);
  });
});

/**
 * 点击菜单跳转
 * @param key
 */
const doMenuClick = ({ key }: { key: string }) => {
  router.push({ path: key });
};

/**
 * 绑定路由状态
 */
router.afterEach((to) => {
  selectedKeys.value = [to.path];
});
</script>

<template>
  <a-row id="global-header" :wrap="false">
    <a-col flex="auto">
      <a-layout-header class="header">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="horizontal"
          :inlineCollapsed="false"
          style="background-color: #f5f5f5"
          theme="light"
          @select="doMenuClick"
        >
          <a-menu-item disabled>
            <div class="title-bar">
              <img alt="logo" class="logo" src="../../assets/logo.png" />
              <div class="title">{{ TITLE }}</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-layout-header>
    </a-col>
    <a-col flex="200px">
      <AvatarDropDown :user="loginUser"/>
    </a-col>
  </a-row>
</template>

<style scoped>
#global-header {
  align-items: center;
  width: 100%;
  z-index: 100;
  inset-inline-end: 0;
  inset-block-start: 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .header {
    position: relative;
    background: transparent;
    display: flex;
    margin-block: 0;
    margin-inline: 16px;
    height: 56px;
    line-height: 56px;

    .title-bar {
      display: flex;
      align-items: center;

      .logo {
        height: 48px;
      }

      .title {
        color: black;
        margin-left: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
