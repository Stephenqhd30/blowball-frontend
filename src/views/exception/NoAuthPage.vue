<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const toHome = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <a-result
    status="403"
    sub-title="Sorry, you don't have access to this page."
    title="403"
  >
    <template #extra>
      <a-button type="primary" @click="toHome">返回主页</a-button>
    </template>
  </a-result>
</template>
