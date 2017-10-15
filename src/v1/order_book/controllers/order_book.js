import fetch from 'node-fetch';

import FilterHelper from '../../../helpers/filter';

export default class OrderBookController {
  /**
   * Format a order
   * 
   * @static
   * @param {Object} order
   * @returns 
   * @memberof OrderBookController
   */
  static formatOrder(order) {
    return {
      exchange: order[0],
      price: order[1],
      btc_volume: order[2],
    };
  }

  /**
   * Apply filter in orders
   * 
   * @static
   * @param {[Object]} [orders=[]] 
   * @param {Object} { exchange, price, btc_volume } 
   * @returns 
   * @memberof OrderBookController
   */
  static filterOrders(orders = [], { exchange, price, btc_volume }) {
    if (exchange) orders = FilterHelper.filterString(orders, 'exchange', exchange);
    if (price) orders = FilterHelper.filterRangeEqual(orders, 'price', price);
    if (btc_volume) orders = FilterHelper.filterRangeEqual(orders, 'btc_volume', btc_volume);

    return orders;
  }

  /**
   * Get orders book from bitvalor
   * 
   * @static
   * @returns 
   * @memberof OrderBookController
   */
  static async getOrderBook() {
    try {
      const orderBook = await fetch(`https://api.bitvalor.com/v1/order_book.json`)
        .then(res => res.json());

      const bids = orderBook.bids.map(order => OrderBookController.formatOrder(order));
      const asks = orderBook.asks.map(order => OrderBookController.formatOrder(order));

      return {
        asks,
        bids,
      }
    } catch (e) {
      throw new Error('Problemas de conexão, tente novamente mais tarde.', );
    }
  }
}