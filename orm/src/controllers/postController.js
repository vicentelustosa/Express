const Post = require('../models/postORM');
const Comment = require('../models/comment');

class PostController {
  static async create(req, res) {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).send('Erro ao criar o post.');
    }
  }

  static async findAll(req, res) {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).send('Erro ao buscar os posts.');
    }
  }

  static async findById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const post = await Post.findByPk(id, { include: Comment });
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).send('Post não encontrado.');
      }
    } catch (error) {
      res.status(500).send('Erro ao buscar o post.');
    }
  }

  static async updateById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const [updatedRows] = await Post.update(req.body, {
        where: { id }
      });
      if (updatedRows) {
        const post = await Post.findByPk(id);
        res.status(200).json(post);
      } else {
        res.status(404).send('Post não encontrado.');
      }
    } catch (error) {
      res.status(500).send('Erro ao atualizar o post.');
    }
  }

  static async deleteById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const deletedRows = await Post.destroy({ where: { id } });
      if (deletedRows) {
        res.status(200).send('Post excluído com sucesso.');
      } else {
        res.status(404).send('Post não encontrado.');
      }
    } catch (error) {
      res.status(500).send('Erro ao excluir o post.');
    }
  }

  static async deleteAll(req, res) {
    try {
      await Post.destroy({ truncate: true });
      res.status(204).send();
    } catch (error) {
      res.status(500).send('Erro ao excluir todos os posts.');
    }
  }

  static async getCommentsByPostId(req, res) {
    try {
      const postId = parseInt(req.params.id);
      const comments = await Comment.findAll({ where: { postId } });
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).send('Erro ao buscar os comentários do post.');
    }
  }

  static async createComment(req, res) {
    try {
      const postId = parseInt(req.params.id);
      const commentData = { content: req.body.content, postId };
      const comment = await Comment.create(commentData);
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).send('Erro ao criar o comentário.');
    }
  }

  // Outros métodos do controlador

  // ...

}

module.exports = PostController;
