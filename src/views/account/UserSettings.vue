<script setup lang="ts">
import { useLoginUserStore } from "../../store";
import { USER_CENTER_TITLE } from "../../constants";
import {
  HomeOutlined,
  SecurityScanOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import BaseSetting from "../../components/account/setting/BaseSetting.vue";

const loginUserStore = useLoginUserStore();
let loginUser = loginUserStore.loginUser;
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
          <BaseSetting :user="loginUser" />
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