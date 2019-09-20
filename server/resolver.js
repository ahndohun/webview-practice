import { getPeople, getPerson } from "./db";

export const resolvers = {
  Query: {
    people: _ => getPeople(),
    person: (_, { id }) => getPerson(id)
  }
};
