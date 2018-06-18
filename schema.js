// also can run graphql in ruby, java, scala
// run this file in terminal by using node schema.js

// https://graphql.org/code/#javascript

const { graphql, buildSchema } = require ('graphql');

// SDL - schema definition language
var schema = buildSchema(`
  type Hacker {
    firstName: String,
    lastName: String,
    score: Int
  }
  type Query {
    hello: String
    counter: Int
    randomPerson: Hacker
  }
  type Mutation {
    incrementCounter(value: Int): Int
  }
`);

let counterValue = 10;

let person = {
  firstName : "Samer",
  lastName : "Buna",
  score : 9
}

var rootValue = {
  // Queries
   hello: () => 'Hello world!',
   counter: () => counterValue,  // GET value
   randomPerson: () => person,

   // Mutations
   incrementCounter: (obj, args) => {
     counterValue = counterValue + (args.value) || 1;
     return counterValue;
   },
 };

// node schema.js "query X {x}"
// node schema.js "{counter}"
//
// const query = process.argv[2];
//
// graphql(schema, query, root)
//   .then((response) => {
//   console.log(response);
// });

module.exports = {
  schema,
  rootValue
};
