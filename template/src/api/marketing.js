import { createHttpRequest } from '@/common/http';
/**
 * 营销列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getMaInfoList(params = {}) {
  params.action = 'marketing.MaInfo.getMaInfoList';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 营销活动详情
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getMaInfo(params = {}) {
  params.action = 'marketing.MaInfo.getMaInfoDetail';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 状态下拉
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getMaStatus(params = {}) {
  params.action = 'marketing.MaInfo.getMaStatus';
  return createHttpRequest({
    data: params,
  });
}

/**
 * 修改预算
 *
 * @export
 * @param {any} params
 * @returns
 */
export function changeBudget(params = {}) {
  params.action = 'marketing.MaInfo.changeBudget';
  return createHttpRequest({
    data: params,
  });
}

/**
 * 校验数据
 *
 * @export
 * @param {any} params
 * @returns
 */
export function addMaGrantExecl(params = {}) {
  params.action = 'marketing.MaGrant.addMaGrantExecl';
  return createHttpRequest({
    data: params,
  });
}

/**
 * 少量发放
 *
 * @export
 * @param {any} params
 * @returns
 */
export function addMaGrantManual(params = {}) {
  params.action = 'marketing.MaGrant.addMaGrantManual';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 获取预算
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getBudgetType(params = {}) {
  params.action = 'marketing.MaInfo.getBudgetType';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 确认发放
 *
 * @export
 * @param {any} params
 * @returns
 */
export function confirmMaGrantExecl(params = {}) {
  params.action = 'marketing.MaGrant.confirmMaGrantExecl';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 获取失败信息
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getMapListErr(params = {}) {
  params.action = 'marketing.MaGrant.getMapListErr';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 获取发放进度
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getCompletion(params = {}) {
  params.action = 'marketing.MaGrant.getCompletion';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 接口发放
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getGrantUrl(params = {}) {
  params.action = 'record.Grant.getGrantUrl';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 获取渠道
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getGrChannelList(params = {}) {
  params.action = 'channel.channel.getGrChannelList';
  return createHttpRequest({
    data: params,
  });
}
