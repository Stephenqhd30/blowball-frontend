<script lang="ts" setup>
import { dateFormat } from "../../../utils";
import { useLoginUserStore } from "../../../store";
import { watchEffect } from "vue";

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
  <a-card>
    <a-descriptions :title="loginUser.userName">
      <a-descriptions-item label="id">{{ loginUser.id }}</a-descriptions-item>
      <a-descriptions-item label="电话"
        >{{ loginUser.userPhone }}
      </a-descriptions-item>
      <a-descriptions-item label="邮箱"
        >{{ loginUser.userEmail }}
      </a-descriptions-item>
      <a-descriptions-item :span="2" label="用户简介">
        {{ loginUser.userProfile }}
      </a-descriptions-item>
      <a-descriptions-item label="用户身份"
        >{{ loginUser.userRole === "user" ? "普通用户" : "管理员" }}
      </a-descriptions-item>
      <a-descriptions-item label="创建时间">
        {{ dateFormat(loginUser.createTime as string) }}
      </a-descriptions-item>
      <a-descriptions-item label="更新时间">
        {{ dateFormat(loginUser.updateTime as string) }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<style scoped></style>
