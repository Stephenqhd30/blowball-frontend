<script lang="ts" setup>
import {
  BankTwoTone,
  IdcardTwoTone,
  SmileTwoTone,
} from "@ant-design/icons-vue";

interface Props {
  userList: API.UserVO[];
}

const props = withDefaults(defineProps<Props>(), {
  userList: () => [] as API.UserVO[],
});
</script>

<template>
  <div class="waterfall-container">
    <template
      v-for="item in props.userList"
      v-if="props.userList"
      :key="item.id"
    >
      <div class="waterfall-item">
        <a-card :bordered="false" hoverable>
          <!-- Card content -->
          <template #cover>
            <a-image
              :alt="item.userName"
              :src="item.userAvatar"
              style="width: 100%; height: auto"
            />
          </template>
          <a-card-meta>
            <template #description>
              <a-space>
                <IdcardTwoTone />
                <span>{{ item.userName }}</span>
              </a-space>
              <a-space>
                <SmileTwoTone />
                <span>{{ item.userProfile }}</span>
              </a-space>
              <a-space>
                <BankTwoTone />
                <span>{{
                  item.userRole === "user" ? "普通用户" : "管理员"
                }}</span>
              </a-space>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </template>
    <template v-else>
      <a-empty />
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
