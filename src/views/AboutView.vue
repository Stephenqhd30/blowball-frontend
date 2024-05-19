<script lang="ts" setup>
import { useLoginUserStore } from "../store";

const loginUserStore = useLoginUserStore();
</script>

<template>
  <div>
    <h2>AboutView</h2>
    <h2>{{ JSON.stringify(loginUserStore.loginUser) }}</h2>
  </div>
</template>

<style scoped></style>
