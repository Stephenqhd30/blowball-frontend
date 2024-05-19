<script lang="ts" setup>
// @ts-ignore
import { Editor } from "@bytemd/vue-next";
import { ref } from "vue";
import highlight from "@bytemd/plugin-highlight";
import gfm from "@bytemd/plugin-gfm";

const plugins = [
  gfm(),
  highlight(),
  // 这里可以加载更多扩展插件
];

const value = ref("");
const handleChange = (v: string) => {
  value.value = v;
};
</script>

<template>
  <Editor
    :plugins="plugins"
    :value="value"
    @change="handleChange"
  />
</template>

<style scoped></style>
