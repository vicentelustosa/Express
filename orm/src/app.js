const express = require('express');
const {port} = require('./config');
const morgan = require('morgan');
const post = require('./routes/post');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/posts', post);

// Criar o banco de dados e as tabelas, se elas não existirem
sequelize.sync({ force: true })
  .then(() => {
    console.log('Banco de dados sincronizado.');
    app.listen(port, () => {
      console.log('Server running...');
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

