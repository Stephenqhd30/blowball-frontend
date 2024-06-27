<script lang="ts" setup>
import { useLoginUserStore } from "../../store";
import { USER_CENTER_TITLE } from "../../constants";
import UserCard from "../../components/account/center/UserCard.vue";
import UserInfoCard from "../../components/account/center/UserInfoCard.vue";
import {onMounted, ref, watchEffect} from 'vue';

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
</script>

<template>
  <a-card
    id="user-center"
    :extra="new Date().toLocaleDateString()"
    :title="USER_CENTER_TITLE"
  >
    <a-col :span="24">
      <a-space>
        <a-row>
          <UserCard :user-list="loginUser" />
        </a-row>
        <a-row>
          <UserInfoCard :user-list="loginUser" />
        </a-row>
      </a-space>
    </a-col>
  </a-card>
</template>

<style scoped></style>