<script lang="ts" setup>

interface Props {
  pictureList: API.Picture[];
}

const props = withDefaults(defineProps<Props>(), {
  pictureList: () => [] as API.Picture[],
});
</script>

<template>
  <div class="waterfall-container">
    <template v-for="item in props.pictureList" :key="item.id">
      <div class="waterfall-item">
        <a-card :bordered="false" hoverable>
          <!-- Card content -->
          <template #cover>
            <a-image
                :src="item.url"
                style="width: 100%; height: auto;"
            />
          </template>
          <a-card-meta>
            <template #description>
              <span>{{ item .title }}</span>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.waterfall-container {
  columns: 300px; /* 适应容器宽度，可以根据实际情况调整 */
  column-gap: 16px; /* 列之间的间隔 */
}

.waterfall-item {
  break-inside: avoid; /* 避免在元素内部断行 */
  page-break-inside: avoid; /* 避免在打印时在元素内部断页 */
  margin-bottom: 16px; /* 设置元素之间的垂直间隔 */
}
</style>
