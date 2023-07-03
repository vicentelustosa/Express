const express = require('express');
const PostController = require('../controllers/postController');

const router = express.Router();

router.post('/', PostController.create);
router.get('/', PostController.findAll);
router.get('/:id', PostController.findById);
router.put('/:id', PostController.updateById);
router.delete('/:id', PostController.deleteById);
router.delete('/', PostController.deleteAll);

// Rotas relacionadas aos comentários
router.get('/:id/comments', PostController.getCommentsByPostId);
router.post('/:id/comments', PostController.createComment);

module.exports = router;
