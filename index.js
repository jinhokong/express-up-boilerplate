const { ApolloServer, gql } = require('apollo-server-express');
const express = require("express");
const { PORT = 3000 } = process.env
const app =  express();


const typeDefs = gql`
   type Test {
    obj: String
    arg: String
    context:String
    info:String
  }

  type Query {
    TestQuery(t:Int!): Test
  }
`;

const resolvers = {
  Query: {
    TestQuery: (obj,arg,context,info) => {
      return {
        obj:JSON.stringify(obj),
        info:JSON.stringify(info),
        arg:JSON.stringify(arg),
        context:JSON.stringify(context)
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app }); 
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)