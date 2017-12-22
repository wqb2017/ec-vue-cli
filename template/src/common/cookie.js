/**
 * @获取缓存值
 * @export
 * @param {any} name
 */
export function getCookie(nm) {
  return localStorage.getItem(nm);
}
/**
 * @设置缓存值
 * @export
 * @param {any} name
 * @param {any} value
 */
export function setCookie(nm, val) {
  localStorage.setItem(nm, val);
}
/**
 * @删除缓存值
 * @export
 * @param {any} name
 */
export function removeCookie(nm) {
  localStorage.removeItem(nm);
}
/**
 * @清除缓存值
 * @export
 * @param {any} name
 */
export function clearCookie() {
  localStorage.clear();
}
