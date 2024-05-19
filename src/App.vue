<script lang="ts" setup>
import {useRoute} from 'vue-router';
import BasicLayout from './layouts/BasicLayout.vue';

const route = useRoute();
</script>

<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<style scoped></style>
