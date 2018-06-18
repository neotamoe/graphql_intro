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
   incrementCounter: (args) => {
     counterValue = counterValue + ((args.value) || 1);
     return counterValue;
   },
 };

// use terminal to run either of the following commands.  it will log either
// "Hello world!" or 8 depending on which command is run.
//
// node schema.js "{hello}"
// node schema.js "{counter}"
//
// const query = process.argv[2];
//
// graphql(schema, query, rootValue)
//   .then((response) => {
//   console.log(response);
// });

module.exports = {
  schema,
  rootValue
};
