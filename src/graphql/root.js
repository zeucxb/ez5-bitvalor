import { GraphQLObjectType, GraphQLSchema } from 'graphql/type';

import OrderBookQuery from './order-book/query';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    orderBook: OrderBookQuery,
  },
});

export default new GraphQLSchema({ query });