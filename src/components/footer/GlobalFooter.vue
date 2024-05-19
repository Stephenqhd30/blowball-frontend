<script lang="ts" setup>
import { CopyrightCircleOutlined, GithubOutlined } from "@ant-design/icons-vue";
import { AUTHOR, AUTHOR_NAME, BLOG, GITHUB, TITLE } from "../../constants";
</script>

<template>
  <div id="global-footer">
    <a-layout-footer class="footer">
      <a-space size="middle">
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
  </div>
</template>

<style scoped>
#global-footer {
  text-align: center;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  background: #f5f5f5;

  .link {
    color: #000000a6;
  }
}
</style>
