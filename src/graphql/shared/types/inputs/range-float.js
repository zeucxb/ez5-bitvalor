import {
  GraphQLFloat,
  GraphQLInputObjectType,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'RangeFloatInputType',
  fields: () => ({
    min: {
      type: GraphQLFloat,
    },
    max: {
      type: GraphQLFloat,
    },
  }),
});
