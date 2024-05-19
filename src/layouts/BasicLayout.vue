<script lang="ts" setup>
import GlobalHeader from "../components/header/GlobalHeader.vue";
import GlobalFooter from "../components/footer/GlobalFooter.vue";
</script>

<template>
  <div id="basic-layout">
    <a-space :size="[0, 48]" :style="{ width: '100%' }" direction="vertical">
      <a-layout style="height: 100vh">
        <!--网页全局头部-->
        <GlobalHeader />
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
        <!--网页全局底部-->
        <GlobalFooter />
      </a-layout>
    </a-space>
  </div>
</template>

<style scoped>
#basic-layout {
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: transparent;
    position: relative;
    padding-block: 32px;
    padding-inline: 40px;
    box-sizing: border-box;
  }
}
</style>
