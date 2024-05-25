<script lang="ts" setup>
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons-vue";

interface Props {
  postList: API.PostVO[];
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [] as API.PostVO[],
});

const pagination = {
  pageSize: 5,
};
</script>

<template>
  <a-list
    :data-source="props.postList"
    :pagination="pagination"
    item-layout="vertical"
    size="large"
  >
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #actions style="margin-right: 8px">
          <span>
            <StarOutlined />
            {{ item.thumbNum }}
          </span>
          <span>
            <LikeOutlined />
            {{ item.favourNum }}
          </span>
          <span>
            <MessageOutlined />
            {{ item.favourNum }}
          </span>
        </template>
        <template #extra>
          <img
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            width="272"
          />
        </template>
        <a-list-item-meta :description="item">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <template #avatar>
            <a-avatar :src="item.user.userAvatar" />
          </template>
        </a-list-item-meta>
        <!--{{ item.content }}-->
      </a-list-item>
    </template>
  </a-list>
</template>

<style scoped></style>