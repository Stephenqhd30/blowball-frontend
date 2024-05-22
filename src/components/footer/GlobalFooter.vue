<script lang="ts" setup>
import { CopyrightCircleOutlined, GithubOutlined } from "@ant-design/icons-vue";
import { AUTHOR, AUTHOR_NAME, BLOG, GITHUB, TITLE } from "../../constants";
</script>

<template>
  <a-layout-footer class="footer">
    <a-space>
      <a-typography-link :href="GITHUB" class="link" target="_blank">
        {{ TITLE }}
      </a-typography-link>
      <GithubOutlined />
      <a-typography-link :href="BLOG" class="link" target="_blank">
        {{ AUTHOR_NAME }}
      </a-typography-link>
    </a-space>
    <div>
      <CopyrightCircleOutlined />
      by {{ AUTHOR }}
    </div>
  </a-layout-footer>
</template>

<style scoped>
.footer {
  text-align: center;
  font-size: 14px;

  .link {
    color: #000000a6;
  }
}
</style>
