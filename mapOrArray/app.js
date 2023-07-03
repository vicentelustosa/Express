const express = require('express');
const morgan = require('morgan');
const post = require('./routes/post');
const { port } = require('./config');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.use('/posts', post);

app.listen(port, () => {
  console.log('Server running at http://localhost:3000/');
});
