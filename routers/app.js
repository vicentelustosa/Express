const express = require('express');
const app = express();
const postsRouter = require('./posts');

app.use(express.json());

app.use('/posts', postsRouter);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
