<script lang="ts" setup>
import { ref } from "vue";
import { updateUserUsingPost } from "../../../api/userController.ts";
import { message } from "ant-design-vue";

interface Props {
  userList: API.LoginUserVO;
}
const props = withDefaults(defineProps<Props>(), {
  userList: () => ({} as API.LoginUserVO),
});

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const formState = ref<API.LoginUserVO>({
  ...props.userList,
});
const handleUpdate = async (values: API.LoginUserVO) => {
  try {
    const res = await updateUserUsingPost({
      ...values,
      id: props.userList.id,
    });
    if (res?.data?.code === 0 && res.data?.data) {
      message.success("用户更新成功");
    } else {
      message.error("用户更新失败, " + res?.data?.message);
    }
  } catch (error: any) {
    message.error("用户更新失败, " + error.message);
  }
};
</script>

<template>
  <a-col>
    <a-row :span="12">
      <a-form
        :model="formState"
        name="baseSetting"
        v-bind="layout"
        @finish="handleUpdate"
      >
        <a-form-item label="用户名" name="userName">
          <a-input v-model:value="formState.userName" allowClear />
        </a-form-item>
        <a-form-item label="用户邮箱" name="userEmail">
          <a-input v-model:value="formState.userEmail" allowClear />
        </a-form-item>
        <a-form-item label="用户电话" name="userPhone">
          <a-input v-model:value="formState.userPhone" allowClear />
        </a-form-item>
        <a-form-item label="用户简介" name="userProfile">
          <a-textarea v-model:value="formState.userProfile" allowClear />
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
          <a-button html-type="submit" type="primary">提交</a-button>
        </a-form-item>
      </a-form>
    </a-row>
  </a-col>
</template>

<style scoped></style>
