import { createHttpRequest } from '@/common/http';
/**
 * 交流类型
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getWalletWaterType(params = {}) {
  params.action = 'finance.WalletWater.getWalletWaterType';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 财务管理详情
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getWaterDetail(params = {}) {
  params.action = 'finance.WalletWater.getWaterDetail';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 消费对账详情
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getConsumeBill(params = {}) {
  params.action = 'finance.Bill.getConsumeBill';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 重新生成对对单
 *
 * @export
 * @param {any} params
 * @returns
 */
export function consumeBill(params = {}) {
  params.action = 'finance.Bill.consumeBill';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 确认对账单
 *
 * @export
 * @param {any} params
 * @returns
 */
export function consumeBillVerify(params = {}) {
  params.action = 'finance.Bill.consumeBillVerify';
  return createHttpRequest({
    data: params,
  });
}
/**
 * 对账单状态
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getBillStatus(params = {}) {
  params.action = 'finance.Bill.getBillStatus';
  return createHttpRequest({
    data: params,
  });
}
