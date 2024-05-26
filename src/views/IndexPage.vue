<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostList from "../components/index/PostList.vue";
import PictureList from "../components/index/PictureList.vue";
import UserList from "../components/index/UserList.vue";
import { message } from "ant-design-vue";
import { doSearchAllUsingPost } from "../servers/api/searchController.ts";

const route = useRoute();
const router = useRouter();
const activeKey = route.params.category;
const postList = ref<API.PostVO[]>([]);
const userList = ref<API.UserVO[]>([]);
const pictureList = ref<API.Picture[]>([]);
// 初始化搜索参数
const initSearchParams = {
  searchText: "",
  pageSize: 10,
  pageNum: 1,
};
const searchParams = ref(initSearchParams);

/**
 * 执行搜索函数
 */
const onSearch = () => {
  router.push({
    query: searchParams.value,
  });
  loadData();
};

/**
 * tab栏切换
 * @param key
 */
const onTabChange = (key: string) => {
  router.push({
    path: `/${key}`,
    query: searchParams.value,
  });
};

/**
 * 加载数据
 */
const loadData = async () => {
  try {
    const res = await doSearchAllUsingPost(searchParams.value);
    if (res.data.code === 0 && res.data.data) {
      postList.value = res.data.data.postVOList as API.PostVO[];
      userList.value = res.data.data.userVOList as API.UserVO[];
      pictureList.value = res.data.data.pictureList as API.Picture[];
    } else {
      message.error("数据加载失败" + res?.data?.message);
    }
  } catch (error: any) {
    message.error("数据加载失败" + error.message);
  }
};

/**
 * 页面首次加载的时候的时候加载数据
 */
onMounted(() => {
  loadData();
});
/**
 * 监听参数的变化
 */
watchEffect(() => {
  searchParams.value = {
    ...initSearchParams,
    searchText: route.query.searchText as string,
  };
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
        <PostList :post-list="postList" />
      </a-tab-pane>
      <a-tab-pane key="picture" tab="图片">
        <PictureList :picture-list="pictureList" />
      </a-tab-pane>
      <a-tab-pane key="consumer" tab="用户">
        <UserList :user-list="userList" />
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