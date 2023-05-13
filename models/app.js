const express = require('express');
const morgan = require('morgan');
const postRoutes = require('./postRoutes');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
