const express = require('express');
const router = express.Router();

const postsMap = new Map();
let nextPostId = 1;

// Middleware para definir o ID do post
const setPostId = (req, res, next) => {
  req.body.id = String(nextPostId++);
  next();
};

// Rota para criar um novo post
router.post('/', setPostId, (req, res) => {
  const post = {
    id: req.body.id,
    title: req.body.title,
    content: req.body.content
  };

  postsMap.set(post.id, post);

  res.status(201).json(post);
});

// Rota para buscar todos os posts
router.get('/', (req, res) => {
  const posts = [...postsMap.values()];

  res.json(posts);
});

// Rota para buscar um post pelo ID
router.get('/:id', (req, res) => {
  const post = postsMap.get(req.params.id);

  if (!post) {
    res.status(404).send('Post não encontrado.');
  } else {
    res.json(post);
  }
});

// Rota para atualizar um post existente
router.put('/:id', (req, res) => {
  const post = postsMap.get(req.params.id);

  if (!post) {
    res.status(404).send('Post não encontrado.');
  } else {
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    res.json(post);
  }
});

// Rota para excluir um post existente
router.delete('/:id', (req, res) => {
  const post = postsMap.get(req.params.id);

  if (!post) {
    res.status(404).send('Post não encontrado.');
  } else {
    postsMap.delete(req.params.id);

    res.json(post);
  }
});

module.exports = router;
