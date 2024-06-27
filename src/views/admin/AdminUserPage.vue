<script lang="ts" setup>
import {
  deleteUserUsingPost,
  listUserByPageUsingPost,
} from "../../api/userController.ts";
import { ref, watchEffect } from "vue";
import { message } from "ant-design-vue";
import { dateFormat } from "../../utils";
// 初始化搜索条件(不应该被修改)
const initSearchParams = {
  current: 1,
  pageSize: 5,
};
/**
 * 分页搜索条件
 */
const searchParams = ref<API.UserQueryRequest>({
  ...initSearchParams,
});

const formSearchParams = ref<API.UserQueryRequest>({});
const dataList = ref<API.LoginUserVO[]>([]);
const total = ref<number>(0);

/**
 * 获取加载数据
 */
const loadData = async () => {
  const res = await listUserByPageUsingPost(searchParams.value);
  if (res?.data?.code === 0) {
    dataList.value = res?.data?.data?.records || [];
    total.value = res?.data?.data?.total || 0;
  } else {
    message.error("获取数据失败" + res?.data?.message);
  }
};

/**
 * 监听数据的变化
 */
watchEffect(() => {
  loadData();
});

/**
 * 分页参数 改变搜索条件
 * @param page
 */
const onPageChange = ({ current }: { current: number }) => {
  searchParams.value = {
    ...searchParams.value,
    current: current,
  };
};

/**
 * 执行搜索
 */
const doSearch = () => {
  searchParams.value = {
    ...initSearchParams,
    ...formSearchParams.value,
  };
};
/**
 * 删除
 * @param record
 */
const doDelete = async (record: API.User) => {
  const res = await deleteUserUsingPost({
    id: record.id,
  });
  if (res?.data?.code === 0) {
    await loadData();
    message.success("删除成功");
  } else {
    message.error("删除失败" + res?.data?.message);
  }
};

/**
 * 定义列
 */
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "用户名",
    dataIndex: "userName",
    key: "userName",
  },
  {
    title: "用户头像",
    dataIndex: "userAvatar",
    key: "userAvatar",
  },
  {
    title: "邮箱",
    dataIndex: "userEmail",
    key: "userEmail",
  },
  {
    title: "电话",
    dataIndex: "userPhone",
    key: "userPhone",
  },
  {
    title: "用户简介",
    dataIndex: "userProfile",
    key: "userProfile",
  },
  {
    title: "用户身份",
    key: "userRole",
    dataIndex: "userRole",
    customRender: ({ value }: { value: string }) => {
      return value === "user" ? "普通用户" : "管理员";
    },
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
    customRender: ({ value }: { value: string }) => dateFormat(value),
  },
  {
    title: "更新时间",
    dataIndex: "updateTime",
    key: "updateTime",
    customRender: ({ value }: { value: string }) => dateFormat(value),
  },
  {
    title: "操作",
    key: "action",
  },
];
</script>

<template>
  <div>
    <a-form :model="formSearchParams" @submit="doSearch">
      <a-row :gutter="24">
        <a-col :span="4">
          <a-form-item label="用户名" name="userName">
            <a-input
              v-model:value="formSearchParams.userName"
              allowClear
              placeholder="请输入用户名"
            ></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item label="用户简介" name="userProfile">
            <a-input
              v-model:value="formSearchParams.userProfile"
              allowClear
              placeholder="请输入用户简介"
            />
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item label="邮箱" name="userEmail">
            <a-input
              v-model:value="formSearchParams.userEmail"
              allowClear
              placeholder="请输入用户邮箱"
            />
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item label="电话" name="userPhone">
            <a-input
              v-model:value="formSearchParams.userPhone"
              allowClear
              placeholder="请输入用户电话"
            />
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item label="身份" name="userRole">
            <a-select
              allowClear
              v-model:value="formSearchParams.userRole"
              placeholder="请选择用户身份"
            >
              <a-select-option value="user">普通用户</a-select-option>
              <a-select-option value="admin">管理员</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-button html-type="submit" type="primary">搜索</a-button>
        </a-col>
      </a-row>
    </a-form>
    <a-table
      :columns="columns"
      :data-source="dataList"
      :pagination="{
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total: Number(total),
      }"
      @change="onPageChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'userAvatar'">
          <a-image :src="record?.userAvatar" style="width: 64px" />
        </template>
        <template v-if="column.key === 'action'">
          <a-popconfirm
            cancel-text="否"
            ok-text="是"
            title="确定删除吗"
            @confirm="doDelete(record)"
          >
            <a-button danger>删除</a-button>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped></style>
