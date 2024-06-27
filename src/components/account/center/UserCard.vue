<script lang="ts" setup>
import {
  BankTwoTone,
  IdcardTwoTone,
  SmileTwoTone,
} from "@ant-design/icons-vue";
interface Props {
  userList: API.LoginUserVO;
}
const props = withDefaults(defineProps<Props>(), {
  userList: () => ({}) as API.LoginUserVO,
})

</script>

<template>
  <a-card hoverable style="width: 400px">
    <template #cover>
      <a-image :src="props.userList.userAvatar"/>
    </template>
    <a-card-meta>
      <template #description>
        <a-space>
          <IdcardTwoTone />
          {{ props.userList.userName }}
        </a-space>
        <a-space>
          <SmileTwoTone />
          {{ props.userList.userProfile }}
        </a-space>
        <a-space>
          <BankTwoTone />
          {{ props.userList.userRole === "user" ? "普通用户" : "管理员" }}
        </a-space>
      </template>
    </a-card-meta>
  </a-card>
</template>

<style scoped></style>
