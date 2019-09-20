import {
  getPeople,
  getPerson,
  addPerson,
  modifyPerson,
  deletePerson
} from './db';

export const resolvers = {
  Query: {
    people: _ => getPeople(),
    person: (_, { id }) => getPerson(id)
  },
  Mutation: {
    addPerson: (_, { person }) => addPerson(person),
    modifyPerson: (_, { id, person }) => modifyPerson(id, person),
    deletePerson: (_, { id }) => deletePerson(id)
  }
};
