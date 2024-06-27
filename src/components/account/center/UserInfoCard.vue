<script lang="ts" setup>
import { dateFormat } from "../../../utils";

interface Props {
  userList: API.LoginUserVO;
}
const props = withDefaults(defineProps<Props>(), {
  userList: () => ({}) as API.LoginUserVO,
});
</script>

<template>
  <a-card>
    <a-descriptions :title="props.userList.userName">
      <a-descriptions-item label="id">{{ props.userList.id }}</a-descriptions-item>
      <a-descriptions-item label="电话"
        >{{ props.userList.userPhone }}
      </a-descriptions-item>
      <a-descriptions-item label="邮箱"
        >{{ props.userList.userEmail }}
      </a-descriptions-item>
      <a-descriptions-item :span="2" label="用户简介">
        {{ props.userList.userProfile }}
      </a-descriptions-item>
      <a-descriptions-item label="用户身份"
        >{{ props.userList.userRole === "user" ? "普通用户" : "管理员" }}
      </a-descriptions-item>
      <a-descriptions-item label="创建时间">
        {{ dateFormat(props.userList.createTime as string) }}
      </a-descriptions-item>
      <a-descriptions-item label="更新时间">
        {{ dateFormat(props.userList.updateTime as string) }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<style scoped></style>
