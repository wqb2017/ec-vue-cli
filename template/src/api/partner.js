import { createHttpRequest } from '@/common/http';
/**
 * 获取钱包
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getWallet(params = {}) {
  params.action = 'partner.PartnerInfo.getWallet';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 交流详情
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getWaterDetail(params = {}) {
  params.action = 'partner.WalletWater.getWaterDetail';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 交流类型
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getWalletWaterType(params = {}) {
  params.action = 'partner.WalletWater.getWalletWaterType';
  return createHttpRequest({
    data: params,
  });
}
