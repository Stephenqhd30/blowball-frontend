<script lang="ts" setup>
import GlobalFooter from "../components/footer/GlobalFooter.vue";
import {SUBTITLE, TITLE} from '../constants';
</script>

<template>
  <div id="user-layout">
    <a-space :size="[0, 48]" :style="{ width: '100%' }" direction="vertical">
      <a-layout style="height: 100vh">
        <!--网页全局头部-->
        <a-layout-header class="header">
          <a-space>
            <img alt="logo" class="logo" src="../../public/assets/logo.png" />
            <div class="title">{{ TITLE }}</div>
          </a-space>
          <div class="sub-title">{{SUBTITLE}}</div>
        </a-layout-header>
        <a-layout-content class="content">
          <div class="router-content">
            <router-view />
          </div>
        </a-layout-content>
        <!--网页全局底部-->
        <GlobalFooter />
      </a-layout>
    </a-space>
  </div>
</template>

<style scoped>
#user-layout {
  text-align: center;

  .header {
    margin-top: 64px;
    background: none;

    .logo {
      height: 64px;
    }

    .title {
      font-size: 21px;
      font-weight: bolder;
    }

    .sub-title {
      font-size: 14px;
      color: rgba(0, 0, 0, .45);
      margin-top: 12px;
      margin-bottom: 40px;
    }
  }

  .content {
    background: url("../../public/assets/background.svg");
    background-size: 100%;
    float: right;
    padding: 50px 0 84px;
  }
}
</style>
