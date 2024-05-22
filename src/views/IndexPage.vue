<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostList from "../components/index/PostList.vue";
import PictureList from "../components/index/PictureList.vue";
import UserList from "../components/index/UserList.vue";
import {listPostVoByPageUsingPost} from '../servers/api/postController.ts';
import {message} from 'ant-design-vue';
import {listUserVoByPageUsingPost} from '../servers/api/userController.ts';

const route = useRoute();
const router = useRouter();

const initSearchParams = {
  text: "",
  pageSize: 10,
  pageNum: 1,
};
const searchParams = ref(initSearchParams);

const onSearch = () => {
  router.push({
    query: searchParams.value
  });
};
const activeKey = route.params.category;
const postList = ref<API.PostVO[]>([]);
const userList = ref<API.UserVO[]>([]);
/**
 * tab栏切换
 * @param key
 */
const onTabChange = (key: string) => {
  router.push({
    path: `/${key}`,
    query: searchParams.value
  });
};

/**
 * 加载帖子数据
 */
const listPostVoByPage = async () => {
  try {
    const res = await listPostVoByPageUsingPost({});
    if (res.data.code === 0 && res.data.data) {
      postList.value = res.data.data.records as API.PostVO[];
    } else {
      message.error('数据加载失败' + res?.data?.message);
    }
  } catch (error: any) {
    message.error('数据加载失败' + error.message);
  }
};

/**
 * 加载用户列表
 */
const getUserVo = async () => {
  try {
    const res = await listUserVoByPageUsingPost({});
    if (res.data.code === 0 && res.data.data) {
      userList.value = res.data.data.records as API.UserVO[];
    } else {
      message.error('数据加载失败' + res?.data?.message);
    }
  } catch (error: any) {
    message.error('数据加载失败' + error.message);
  }
};

/**
 * 页面初始化的时候加载数据
 */
onMounted(() => {
  listPostVoByPage();
  getUserVo();
});
/**
 * 监听参数的变化
 */
watchEffect(() => {
  searchParams.value = {
    ...initSearchParams,
    text: route.query.text as string,
  };
});
</script>

<template>
  <a-col id="index-page">
    <a-input-search
      v-model:value="searchParams.text"
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
        <PictureList />
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