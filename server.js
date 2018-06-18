const express = require('express');
const graphqlHTTP = require('express-graphql');
const {schema, rootValue} = require('./schema.js');

const server = express();

// server.get('/', (req,res) => {
//   res.send('hello express');
// });

// server.get('/', graphqlHTTP({
//   schema,
//   rootValue,
// }));

server.use('/', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));


server.listen(8000, () => {
  console.log('server is running');
})


// localhost:8000/?query={hello,%20counter}
