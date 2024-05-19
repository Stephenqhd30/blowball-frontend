<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const toHome = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <a-result
    status="404"
    sub-title="Sorry, the page you visited does not exist."
    title="404"
  >
    <template #extra>
      <a-button type="primary" @click="toHome"> Back Home</a-button>
    </template>
  </a-result>
</template>
