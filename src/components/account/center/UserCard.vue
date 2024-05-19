<script lang="ts" setup>
import {
  BankTwoTone,
  IdcardTwoTone,
  SmileTwoTone,
} from "@ant-design/icons-vue";
import { useLoginUserStore } from "../../../store";
import {watchEffect} from 'vue';

const loginUserStore = useLoginUserStore();
const fetchLoginUser = async () => {
  await loginUserStore.fetchLoginUser();
};
const loginUser = loginUserStore.loginUser;

watchEffect(() => {
  fetchLoginUser();
});

</script>

<template>
  <a-card hoverable style="width: 400px">
    <template #cover>
      <a-image :src="loginUser.userAvatar" alt="userAvatar" />
    </template>
    <a-card-meta>
      <template #description>
        <a-space>
          <IdcardTwoTone />
          {{ loginUser.userName }}
        </a-space>
        <a-space>
          <SmileTwoTone />
          {{ loginUser.userProfile }}
        </a-space>
        <a-space>
          <BankTwoTone />
          {{ loginUser.userRole === "user" ? "普通用户" : "管理员" }}
        </a-space>
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped></style>
