const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite', // Especifique o caminho para o arquivo SQLite
});

module.exports = sequelize;
