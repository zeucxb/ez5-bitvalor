export default class FilterHelper {
  /**
   * Filter a range
   * 
   * @static
   * @param {[Object]} [orders=[]] 
   * @param {String} [key=''] 
   * @param {Object} [filter={}] 
   * @returns 
   * @memberof FilterHelper
   */
  static filterRange(orders = [], key = '', filter = {}) {
    if (filter.max) orders = FilterHelper.filterMax(orders, key, filter.max);
    if (filter.min) orders = FilterHelper.filterMin(orders, key, filter.min);

    return orders;
  }

  /**
   * Filter a range adding equal in the interval
   * 
   * @static
   * @param {[Object]} [orders=[]] 
   * @param {String} [key=''] 
   * @param {Object} [filter={}] 
   * @returns 
   * @memberof FilterHelper
   */
  static filterRangeEqual(orders = [], key = '', filter = {}) {
    if (filter.max) orders = FilterHelper.filterMaxEqual(orders, key, filter.max);
    if (filter.min) orders = FilterHelper.filterMinEqual(orders, key, filter.min);

    return orders;
  }

  /**
   * Filter looking for a similar string
   * 
   * @static
   * @param {[Object]} [orders=[]] 
   * @param {String} [key=''] 
   * @param {String} [string=''] 
   * @returns 
   * @memberof FilterHelper
   */
  static filterString(orders = [], key = '', string = '') {
    return orders = orders.filter(order => (order[key] || '').toLowerCase() === string.toLowerCase());
  }

  /**
   * Filter based on a max value
   * 
   * @static
   * @param {[Object]} [orders=[]] 
   * @param {String} [key=''] 
   * @param {Number} [maxValue=0] 
   * @returns 
   * @memberof FilterHelper
   */
  static filterMax(orders = [], key = '', maxValue = 0) {
    return orders.filter(order => order[key] < maxValue);
  }

  /**
   * Filter based on a min value
   * 
   * @static
   * @param {[Object]} [orders=[]] 
   * @param {String} [key=''] 
   * @param {Number} [maxValue=0] 
   * @returns 
   * @memberof FilterHelper
   */
  static filterMin(orders = [], key = '', minValue = 0) {
    return orders.filter(order => order[key] > minValue);
  }

  /**
   * Filter based on a max value, adding equal
   * 
   * @static
   * @param {[Object]} [orders=[]] 
   * @param {String} [key=''] 
   * @param {Number} [maxValue=0] 
   * @returns 
   * @memberof FilterHelper
   */
  static filterMaxEqual(orders = [], key = '', maxValue = 0) {
    return orders.filter(order => order[key] <= maxValue);
  }

  /**
   * Filter based on a min value, adding equal
   * 
   * @static
   * @param {[Object]} [orders=[]] 
   * @param {String} [key=''] 
   * @param {Number} [maxValue=0] 
   * @returns 
   * @memberof FilterHelper
   */
  static filterMinEqual(orders = [], key = '', minValue = 0) {
    return orders.filter(order => order[key] >= minValue);
  }
};