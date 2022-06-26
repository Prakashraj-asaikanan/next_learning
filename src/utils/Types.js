/**
 * @memberOf Utils.Types
 * @type {function}
 * @param {*} value
 * @param {string} type
 * @return {boolean}
 */
export const isTypeOf = (value, type) => typeof value === type;

/**
 * @memberOf Utils.Types
 * @type {function}
 * @param {*} value
 * @return {boolean}
 */
export const isObject = (value) => {
  return value && isTypeOf(value, 'object') && !Array.isArray(value);
};

/**
 * @memberOf Utils.Types
 * @type {function}
 * @param {*} value
 * @return {boolean}
 */
export const isArray = (value) => {
  return value && isTypeOf(value, 'object') && Array.isArray(value);
};
