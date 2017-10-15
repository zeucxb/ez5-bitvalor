import express from 'express';
import graphqlHttp from 'express-graphql';

import rootSchema from './src/graphql/root';

const app = express();

app.use('/graphql', graphqlHttp({ schema: rootSchema, graphiql: true }));

app.listen(3000, () => console.log('Now browse to http://localhost:3000/graphql'));