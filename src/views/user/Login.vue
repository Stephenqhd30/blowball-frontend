<script lang="ts" setup>
import { reactive, ref } from "vue";
import {
  userLoginUsingPost,
  userRegisterUsingPost,
} from "../../servers/api/userController.ts";
import { useLoginUserStore } from "../../store";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";

const loginUserStore = useLoginUserStore();
const router = useRouter();
const labelCol = { style: { width: "100px" } };
const wrapperCol = { span: 24 };
const loginForm = reactive({
  userAccount: "",
  userPassword: "",
} as API.UserLoginRequest);

const registerForm = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as API.UserRegisterRequest);

const activeKey = ref<string>("login");

/**
 * 用户登录
 */
const handleLoginSubmit = async () => {
  if (activeKey.value !== "login") {
    await handleRegisterSubmit();
    return;
  }
  const res = await userLoginUsingPost(loginForm);
  try {
    if (res.data.code === 0) {
      window.localStorage.setItem("token", res.data.data?.token as string);
      await loginUserStore.fetchLoginUser();
      message.success("用户登录成功");
      await router.push({
        path: "/",
        replace: true,
      });
    }
  } catch (error: any) {
    message.error("用户登录失败" + error.message);
  }
};

/**
 * 用户注册
 */
const handleRegisterSubmit = async () => {
  const { userPassword, checkPassword } = registerForm;
  if (userPassword !== checkPassword) {
    message.error("两次密码不一致");
    return;
  }
  const res = await userRegisterUsingPost(registerForm);
  try {
    if (res.data.code === 0) {
      message.success("用户注册成功");
      activeKey.value = "login";
    }
  } catch (error: any) {
    message.error("用户注册失败" + error.message);
  }
};
</script>

<template>
  <div id="login-card">
    <a-form
      :label-col="labelCol"
      :model="activeKey === 'login' ? loginForm : registerForm"
      :wrapper-col="wrapperCol"
      class="login-form"
      layout="horizontal"
      @submit="handleLoginSubmit"
    >
      <a-tabs
        v-model:activeKey="activeKey"
        centered
        size="large"
      >
        <a-tab-pane key="login" tab="用户登录">
          <a-form-item
            :rules="[{ required: true, message: '请输入用户名' }]"
            label="账号"
            name="userAccount"
            tooltip="账号长度不小于4位"
          >
            <a-input v-model:value="loginForm.userAccount" placeholder="用户名">
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            :rules="[{ required: true, message: '请输入密码' }]"
            label="密码"
            name="userPassword"
            tooltip="密码不小于8位"
          >
            <a-input-password
              v-model:value="loginForm.userPassword"
              placeholder="密码"
              type="password"
            >
              <template #prefix>
                <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-button
              html-type="submit"
              style="width: 120px"
              type="primary"
            >
              登录
            </a-button>
          </a-form-item>
        </a-tab-pane>
        <a-tab-pane key="register" tab="用户注册">
          <a-form-item
            :rules="[{ required: true, message: '请输入用户名' }]"
            label="账号"
            name="userAccount"
            tooltip="账号长度不小于4位"
          >
            <a-input
              v-model:value="registerForm.userAccount"
              placeholder="用户名"
            >
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
            :rules="[{ required: true, message: '请输入密码' }]"
            label="密码"
            name="userPassword"
            tooltip="密码不小于8位"
          >
            <a-input-password
              v-model:value="registerForm.userPassword"
              placeholder="密码"
              type="password"
            >
              <template #prefix>
                <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item
            :rules="[{ required: true, message: '请输入确认密码' }]"
            label="确认密码"
            name="checkPassword"
            tooltip="确认密码不小于8位"
          >
            <a-input-password
              v-model:value="registerForm.checkPassword"
              placeholder="确认密码"
              type="password"
            >
              <template #prefix>
                <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button
              html-type="submit"
              style="width: 120px"
              type="primary"
            >
              注册
            </a-button>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
#login-card {
  .login-form {
    width: 360px;
    max-width: 480px;
    margin: 0 auto;
  }
}
</style>
