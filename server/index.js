import { GraphQLServer } from 'graphql-yoga';
import { resolvers } from './resolver';

const typeDefs = `
input person {
    name: String!
    username: String!
    email: String
    phone: String
    website: String
}
  type people {
    id: ID!
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
  type Mutation{
    addPerson(person: person): people!
    modifyPerson(id: ID!, person: person): people!
    deletePerson(id: ID!): Boolean!
  }
`;

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));
