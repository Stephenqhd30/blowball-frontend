<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostList from "../components/index/PostList.vue";
import PictureList from "../components/index/PictureList.vue";
import UserList from "../components/index/UserList.vue";

const route = useRoute();
const router = useRouter();

const searchParams = ref({
  text: "",
  pageSize: 10,
  pageNum: 1,
});
const searchText = ref<string>("");
const activeKey = ref("post");

const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
};

watchEffect(() => {
  searchParams.value = {
    text: route.query.text as string,
  };
});
</script>

<template>
  <a-col id="index-page">
    <a-input-search
      v-model:value="searchText"
      enter-button
      placeholder="请输入搜索内容"
      size="large"
      style="margin-bottom: 16px"
      @search="onSearch"
    />
    <a-tabs v-model:activeKey="activeKey" size="large">
      <a-tab-pane key="post" tab="文章">
        <PostList />
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片">
        <PictureList />
      </a-tab-pane>
      <a-tab-pane key="user" tab="用户">
        <UserList />
      </a-tab-pane>
    </a-tabs>
  </a-col>
</template>

<style scoped>
#index-page {
  width: 1024px;
  min-width: 256px;
  margin: 0 auto;
  text-align: center;
}
</style>