const express = require('express');
const graphqlHTTP = require('express-graphql');

const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();
const PORT = 4000;

//connect to mlab/mongoatlas -- replace user/pw with own
mongoose.connect(
  'mongodb+srv://sara:sara123@cluster0-ufbem.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => console.log('Connected to db'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () =>
  console.log(`Now listening for requests on Port ${PORT}...`)
);
