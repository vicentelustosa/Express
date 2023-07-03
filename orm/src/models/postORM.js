const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Comment = require('./commentORM');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Post.hasMany(Comment, { foreignKey: 'postId' });

module.exports = Post;
