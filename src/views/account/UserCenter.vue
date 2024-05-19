<script lang="ts" setup>
import { useLoginUserStore } from "../../store";
import { USER_CENTER_TITLE } from "../../constants";
import UserCard from "../../components/account/center/UserCard.vue";
import UserInfoCard from "../../components/account/center/UserInfoCard.vue";
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
  <a-card :extra="new Date().toLocaleDateString()" :title="USER_CENTER_TITLE">
    <a-col :span="24">
      <a-space>
        <a-row :span="8">
          <UserCard :user="loginUser" />
        </a-row>
        <a-row :span="16">
          <UserInfoCard :user="loginUser" />
        </a-row>
      </a-space>
    </a-col>
  </a-card>
</template>

<style scoped></style>
