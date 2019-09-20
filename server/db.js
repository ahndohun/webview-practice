const people = [
  {
    id: 1,
    name: '이정도',
    username: 'jd1386',
    email: 'lee.jungdo@gmail.com',
    phone: '010-3192-2910',
    website: 'https://leejungdo.com'
  },
  {
    id: 2,
    name: '김재완',
    username: 'lastrites2018',
    email: 'jaewan@gmail.com',
    phone: '02-879-5000',
    website: 'https://github.com/lastrites2018'
  },
  {
    id: 3,
    name: '김성은',
    username: 'sunnysid3up',
    email: 'sunny@daum.net',
    phone: '010-4280-1991',
    website: 'https://github.com/sunnysid3up'
  }
];

export const getPeople = () => people;
export const getPerson = id =>
  people.filter(person => person.id === Number(id));
export const addPerson = person => {
  person.id = people.length + 1;
  people.push(person);
  return person;
};
export const modifyPerson = (id, person) => {
  id = Number(id);
  people[id - 1] = person;
  return person;
};
export const deletePerson = id => {
  people = people.filter(person => person.id !== Number(id));
  return true;
};
