import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolver";

const typeDefs = `
  type people {
    id: ID
    name: String
    username: String
    email: String
    phone: String
    website: String
  }

  type Query {
    people: [people]!
    person(id: ID!): [people]!
  }
`;

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
