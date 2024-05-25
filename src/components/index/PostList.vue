<script lang="ts" setup>
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';

interface Props {
  postList: API.PostVO[];
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [] as API.PostVO[],
});

const actions: Record<string, any>[] = [
  { icon: StarOutlined, text: '156' },
  { icon: LikeOutlined, text: '156' },
  { icon: MessageOutlined, text: '2' },
];
</script>

<template>
  <a-list item-layout="vertical" size="large"  :data-source="props.postList">
    <template #renderItem="{ item }">
      <a-list-item :key="item.url">
        <template #actions>
          <span v-for="{ icon, text } in actions" :key="icon">
            <component :is="icon" style="margin-right: 8px" />
            {{ text }}
          </span>
        </template>
        <template #extra>
          <img
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </template>
        <a-list-item-meta :description="item.description">
          <template #title>
            <span>{{ item.title }}</span>
          </template>
          <template #avatar>
            <a-avatar :src="item.user" />
          </template>
        </a-list-item-meta>
        {{ item.content }}
      </a-list-item>
    </template>
  </a-list>
</template>

<style scoped>
</style>