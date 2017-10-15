import {
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';

import RangeFloatInputType from '../../../shared/types/inputs/range-float';

export default new GraphQLInputObjectType({
  name: 'OrderFilterInputType',
  fields: () => ({
    exchange: {
      name: 'Exchange name',
      type: GraphQLString,
    },
    price: {
      name: 'Price range',
      type: RangeFloatInputType,
    },
    btc_volume: {
      name: 'BTC volume range',
      type: RangeFloatInputType,
    }
  }),
});