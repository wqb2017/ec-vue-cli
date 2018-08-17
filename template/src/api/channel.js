import { createHttpRequest } from '@/common/http';
/**
 * 渠道列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getUseChannelList(params = {}) {
  params.action = 'channel.channel.getUseChannelList';
  return createHttpRequest({
    data: params,
  });
}
