<script lang="ts" setup>
import { ref } from "vue";
import { message } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { uploadFileUsingPost } from "../servers/api/fileController.ts";
import { useLoginUserStore } from "../store";

interface Props {
  biz: string;
  onChange: () => void;
  value?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
})

const loginUserStore = useLoginUserStore();
const loginUser = loginUserStore.loginUser;
let userAvatar = loginUser.userAvatar;
/**
 * 用户更新头像
 */
const customRequest = async (options: any) => {
  const { onSuccess, onError, file } = options;
  try {
    const res = await uploadFileUsingPost(
      {
        biz: "user_avatar",
      },
      {
        file: file,
      },
      file
    );
    onSuccess(res.data);
    userAvatar = res.data as any;
  } catch (error: any) {
    onError(error);
    message.error("文件上传失败", error.message);
  }
};

const fileList = ref([]);
const headers = {
  authorization: "authorization-text",
};
</script>

<template>
  <a-upload
    v-model:file-list="fileList"
    :headers="headers"
    maxCount="1"
    name="file"
    @customRequest="customRequest"

  >
    <a-button>
      <UploadOutlined />
      点击上传
    </a-button>
  </a-upload>
</template>

<style scoped></style>
