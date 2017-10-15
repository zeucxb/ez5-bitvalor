import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} from 'graphql/type';

export default new GraphQLObjectType({
  name: 'OrderType',
  fields: () => ({
    exchange: { type: GraphQLString },
    price: { type: GraphQLFloat },
    btc_volume: { type: GraphQLFloat },
  }),
});
