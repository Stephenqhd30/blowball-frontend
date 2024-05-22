<script lang="ts" setup>
interface Props {
  postList: API.PostVO[];
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [] as API.PostVO[],
});
</script>

<template>
  <div id="post-list">
    <a-list :data-source="props.postList" item-layout="horizontal">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.content">
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style scoped>
#post-list {
  padding: 20px;
}
</style>