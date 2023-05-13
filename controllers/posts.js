const express = require('express');
const router = express.Router();
const postController = require('./postController');

// Rota para listar todos os posts
router.get('/', postController.getAllPosts);

// Rota para buscar um post pelo ID
router.get('/:id', postController.getPostById);

// Rota para criar um novo post
router.post('/', postController.createPost);

// Rota para atualizar um post existente
router.put('/:id', postController.updatePost);

// Rota para deletar um post existente
router.delete('/:id', postController.deletePost);

module.exports = router;
