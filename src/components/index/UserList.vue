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
  <a-row :gutter="[16, 16]" justify="start">
    <template v-for="item in props.userList">
      <a-col :span="6">
        <a-card :bordered="false" hoverable>
          <template #cover>
            <a-image :src="item.userAvatar" alt="userAvatar" />
          </template>
          <a-card-meta>
            <template #description>
              <a-space>
                <IdcardTwoTone />
                {{ item.userName }}
              </a-space>
              <a-space>
                <SmileTwoTone />
                {{ item.userProfile }}
              </a-space>
              <a-space>
                <BankTwoTone />
                {{ item.userRole === "user" ? "普通用户" : "管理员" }}
              </a-space>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </template>
  </a-row>
</template>

<style scoped></style>
