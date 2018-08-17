import { createHttpRequest } from '@/common/http';
/**
 * 登录
 *
 * @export
 * @param {any} params
 * @param {boolean} isIllegality 不检查非法请求
 * @returns
 */
export function login(params = {}) {
  params.action = 'sys.user.login';
  return createHttpRequest({
    data: params,
    isIllegality: true,
  });
}
/**
 * 修改密码
 *
 * @export
 * @param {any} params
 * @returns
 */
export function changePwd(params = {}) {
  params.action = 'sys.user.changePwd';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 重置密码
 *
 * @export
 * @param {any} params
 * @param {boolean} isIllegality 不检查非法请求
 * @returns
 */
export function forgotPwd(params = {}) {
  params.action = 'sys.user.forgotPwd';
  return createHttpRequest({
    data: params,
    isIllegality: true,
  });
}
/**
 * 获取验证码
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getForgotPwdCaptcha(params = {}) {
  params.action = 'sys.user.getForgotPwdCaptcha';
  return createHttpRequest({
    data: params,
    isIllegality: true,
  });
}
/**
 * 获取腾讯视屏AppId
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getUploadAppId(params = {}) {
  params.action = 'sys.sys.getUploadAppId';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 修改用户头像
 *
 * @export
 * @param {any} params
 * @returns
 */
export function updateUserHead(params = {}) {
  params.action = 'sys.user.updateUserHead';
  return createHttpRequest({
    data: params,
  });
}
