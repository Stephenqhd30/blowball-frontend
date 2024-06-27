<script setup lang="ts">
import { useLoginUserStore } from "../../store";
import { USER_CENTER_TITLE } from "../../constants";
import {
  HomeOutlined,
  SecurityScanOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import {onMounted, ref, watchEffect} from 'vue';
import BaseSetting from "../../components/account/setting/BaseSetting.vue";

const loginUserStore = useLoginUserStore();
const loginUser = ref(loginUserStore.loginUser);

/**
 * 页面首次加载的时候获取最近的用户信息
 */
onMounted(() => {
  loginUserStore.fetchLoginUser();
});

/**
 * 监听数据的变化
 */
watchEffect(() => {
  loginUser.value = { ...loginUserStore.loginUser };
});
const activeKey = ref<string>("base");
</script>

<template>
  <a-card :extra="new Date().toLocaleDateString()" :title="USER_CENTER_TITLE">
    <a-col :span="24">
      <a-tabs v-model:activeKey="activeKey" tab-position="left">
        <a-tab-pane key="base">
          <template #tab>
            <span>
              <SettingOutlined />
              基本设置
            </span>
          </template>
          <BaseSetting :user-list="loginUser" />
        </a-tab-pane>
        <a-tab-pane key="binding">
          <template #tab>
            <span>
              <HomeOutlined />
              账号绑定
            </span>
          </template>
          Tab 2
        </a-tab-pane>
        <a-tab-pane key="security">
          <template #tab>
            <span>
              <SecurityScanOutlined />
              安全设置
            </span>
          </template>
          Tab 2
        </a-tab-pane>
      </a-tabs>
    </a-col>
  </a-card>
</template>

<style scoped></style>