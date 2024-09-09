import {ref} from 'vue';
import {defineStore} from 'pinia';
import {getLoginUserUsingGet} from '../../../api/userController.ts';
import {ACCESS_ENUM} from '../../../constants';

/**
 * 登录用户信息全局状态
 */
const useLoginUserStore = defineStore(
  "loginUserVO",
  () => {
    const loginUser = ref<API.LoginUserVO>({});
    /**
     * 设置当前用户登录的状态
     * @param newLoginUser
     */
    const setLoginUser = (newLoginUser: API.LoginUserVO) => {
      loginUser.value = newLoginUser;
    };

    const fetchLoginUser = async () => {
      const res = await getLoginUserUsingGet();
      if (res?.data?.code === 0 && res?.data?.data) {
        loginUser.value = res?.data?.data;
      } else {
        loginUser.value = {
          userRole: ACCESS_ENUM.NOT_LOGIN,
        };
      }
    };

    return { loginUser, setLoginUser, fetchLoginUser };
  },
  {
    persist: {
      // 开启持久化
      // @ts-ignore
      enable: true,
      // 选择存储方式和内容，
      strategies: [{ storage: localStorage, paths: ["loginUser"] }],
    },
  }
);

export default useLoginUserStore;
