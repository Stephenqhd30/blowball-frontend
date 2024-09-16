<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import PostList from "../components/index/PostList.vue";
import PictureList from "../components/index/PictureList.vue";
import UserList from "../components/index/UserList.vue";
import { message } from "ant-design-vue";
import { doSearchAllUsingPost } from "../api/searchController.ts";
import { ref, watchEffect } from "vue";

const route = useRoute();
const router = useRouter();
const activeKey = ref(route.params.category);
const dateList = ref<any[]>([]);
// 初始化搜索参数
const initSearchParams: API.SearchRequest = {
  searchText: "",
  pageSize: 10,
  current: 1,
  type: (route.params.category as string) || "post",
};
const searchParams = ref<API.SearchRequest>({ ...initSearchParams });
/**
 * 执行搜索函数
 */
const onSearch = () => {
  router.push({
    query: searchParams.value,
  });
  loadData(searchParams.value);
};

/**
 * tab栏切换
 * @param key
 */
const onTabChange = async (key: string) => {
  dateList.value = [];
  activeKey.value = key;
  searchParams.value.type = key;
  await loadData(searchParams.value);
  await router.push({
    path: `/${key}`,
    query: searchParams.value,
  });
};

/**
 * 加载数据
 *
 * @param params
 */
const loadData = async (params: API.SearchRequest) => {
  const { type } = params;
  if (!type) {
    message.error("类别为空");
    return;
  }
  try {
    const res = await doSearchAllUsingPost(searchParams.value);
    if (res.data.code === 0 && res.data.data) {
      dateList.value = res.data.data?.dateList as any;
    } else {
      message.error("数据加载失败" + res?.data?.message);
    }
  } catch (error: any) {
    message.error("数据加载失败" + error.message);
  }
};

// 监听路由变化，更新 activeKey 和加载数据
watchEffect(() => {
  activeKey.value = route.params.category || "post";
  loadData(searchParams.value);
});
</script>

<template>
  <a-col id="index-page">
    <a-input-search
      v-model:value="searchParams.searchText"
      enter-button
      placeholder="请输入搜索内容"
      size="large"
      style="margin-bottom: 16px"
      @search="onSearch"
    />
    <a-tabs v-model:activeKey="activeKey" size="large" @change="onTabChange">
      <a-tab-pane key="post" tab="文章">
        <PostList :post-list="dateList || []" />
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片">
        <PictureList :picture-list="dateList || []" />
      </a-tab-pane>
      <a-tab-pane key="consumer" tab="用户">
        <UserList :user-list="dateList || []" />
      </a-tab-pane>
    </a-tabs>
  </a-col>
</template>

<style scoped>
#index-page {
  width: 1024px;
  min-width: 256px;
  margin: 0 auto;
}
</style>