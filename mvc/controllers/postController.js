const Post = require('../models/post');

class PostController {
  static create(req, res) {
    const post = Post.create(req.body);
    res.status(201).json(post);
  }

  static findAll(req, res) {
    const posts = Post.findAll();
    res.status(200).json(posts);
  }

  static findById(req, res) {
    const id = parseInt(req.params.id);
    const post = Post.findById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).send('Post não encontrado.');
    }
  }

  static updateById(req, res) {
    const id = parseInt(req.params.id);
    const post = Post.updateById(id, req.body);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).send('Post não encontrado.');
    }
  }

  static deleteById(req, res) {
    const id = parseInt(req.params.id);
    const post = Post.deleteById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).send('Post não encontrado.');
    }
  }

  static deleteAll(req, res) {
    Post.deleteAll();
    res.status(204).send();
  }
}

module.exports = PostController;
