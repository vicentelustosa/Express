const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Post = require('./post');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    }
  }
});

Comment.belongsTo(Post, { foreignKey: 'postId' });

module.exports = Comment;
