import { GraphQLList, GraphQLString } from 'graphql/type';

import OrderBookType from './types/order-book';
import OrderBookCtrl from '../../v1/order_book/controllers/order_book';

const OrderBookQuery = {
  type: OrderBookType,
  resolve: (obj) => OrderBookCtrl.getOrderBook(),
};

export default OrderBookQuery;