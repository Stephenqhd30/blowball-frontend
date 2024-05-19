import axios from "axios";

// 创建自己的axios实例
const request = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  withCredentials: true,
});

// 请求拦截器
request.interceptors.request.use(
  (config: any) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers = {
        ...config.headers,
        token: token,
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 得到响应的请求地址
    const requestPath = response.config.url ?? "";
    // 响应
    const { data } = response;
    if (!data) {
      throw new Error("服务异常");
    }
    // 错误码的处理
    const code: number = data.code;
    // 未登录，且不为获取用户登录信息接口
    if (
      code === 40100 &&
      !requestPath.includes("user/get/login") &&
      !location.pathname.includes("/user/login")
    ) {
      // 跳转至登录页面
      window.location.href = `/user/login?redirect=${window.location.href}`;
      throw new Error("用户还未登录,请先登录");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
