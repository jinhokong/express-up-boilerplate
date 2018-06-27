const express = require('express');
const { registerServer } = require('apollo-server-express');
const { ApolloServer, gql } = require('apollo-server');
 
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
registerServer({ server, app });
 
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});