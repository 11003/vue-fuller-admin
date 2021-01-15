/**
 * @param path
 * @returns {boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param str
 * @returns {boolean}
 */
export function validUsername(str) {
  return str.indexOf(str.trim()) >= 0
}
