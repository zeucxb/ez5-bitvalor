import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql/type';

import OrderType from './order';
import OrderFilterInputType from './inputs/order-filter';

import OrderBookCtrl from '../../../v1/order_book/controllers/order_book';

export default new GraphQLObjectType({
  name: 'OrderBookType',
  fields: () => ({
    asks: {
      args: {
        filter: {
          type: OrderFilterInputType,
        },
      },
      type: new GraphQLList(OrderType),
      resolve: (obj, { filter = {} }) => {
        const asks = obj.asks || [];

        return OrderBookCtrl.filterOrders(asks, filter);
      },
    },
    bids: {
      args: {
        filter: {
          type: OrderFilterInputType,
        },
      },
      type: new GraphQLList(OrderType),
      resolve: (obj, { filter = {} }) => {
        const bids = obj.bids || [];

        return OrderBookCtrl.filterOrders(bids, filter);
      },
    },
  }),
});
