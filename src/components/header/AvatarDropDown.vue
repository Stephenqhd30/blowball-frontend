<script lang="ts" setup>
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { userLogoutUsingPost } from "../../api/userController.ts";
import { MenuProps } from "ant-design-vue";

interface AvatarDropDownProps {
  user: API.LoginUserVO;
}
const props = withDefaults(defineProps<AvatarDropDownProps>(), {
  user: () => ({} as API.LoginUserVO),
});
const router = useRouter();

/**
 * 点击菜单的跳转事件
 * @param event
 */
const handleMenuClick: MenuProps["onClick"] = (event) => {
  const { key } = event;
  if (key === "logout") {
    loginOut();
    return;
  }
  router.push({ path: `/account/${key}` });
};

/**
 * 退出登录，并且将当前的 url 保存
 * 重定向到登录页面
 */
const loginOut = async () => {
  await userLogoutUsingPost();
  const { search, pathname } = window.location;
  const urlParams = new URL(window.location.href).searchParams;
  /** 此方法会跳转到 redirect 参数所在的位置 */
  const redirect = urlParams.get("redirect");
  // Note: There may be security issues, please note
  if (window.location.pathname !== "/user/login" && !redirect) {
    // 替换当前路由到登录页面，并带上重定向的 URL
    await router.replace({
      path: "/user/login",
      query: { redirect: pathname + search },
    });
  }
};
</script>

<template>
  <a-dropdown>
    <template v-if="props.user.id">
      <a-space>
        <a-avatar :size="36" :src="props.user.userAvatar">
          <template v-if="!props.user.userAvatar" #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <span>{{ props.user.userName ?? "匿名用户" }}</span>
      </a-space>
    </template>
    <template v-else>
      <a-button class="button" href="/user/login" type="primary">登录</a-button>
    </template>
    <template #overlay v-if="props.user.id">
      <a-menu @click="handleMenuClick">
        <a-menu-item key="center">
          <UserOutlined />
          <span>个人中心</span>
        </a-menu-item>
        <a-menu-item key="settings">
          <UserOutlined />
          <span>个人设置</span>
        </a-menu-item>
        <a-menu-item key="logout">
          <UserOutlined />
          <span>退出登录</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style scoped></style>
