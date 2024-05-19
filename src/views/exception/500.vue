<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const toHome = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <a-result
    status="500"
    sub-title="Sorry, the server is reporting an error."
    title="500"
  >
    <template #extra>
      <a-button type="primary" @click="toHome"> Back Home</a-button>
    </template>
  </a-result>
</template>
