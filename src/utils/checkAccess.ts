import {ACCESS_ENUM} from '../constants';

/**
 * 检查权限工具类(检查当前登录用户是否有权限)
 * @param loginUser
 * @param needAccess
 */
const checkAccess = (
  loginUser: API.LoginUserVO,
  needAccess = ACCESS_ENUM.NOT_LOGIN
) => {
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  // 页面不需要什么权限就可以访问
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  // 需要用户才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    return loginUserAccess !== ACCESS_ENUM.NOT_LOGIN;
  }
  // 需要管理员才能访问
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // 如果不是管理员，表示无权限
    return loginUserAccess === ACCESS_ENUM.ADMIN;
  }
};

export default checkAccess;
