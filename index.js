const express = require('express');

const app = express();
const port = 3000;

// Objeto "postsMap" que mapeia cada post pelo seu id
let postsMap = {};

app.use(express.json());

// Retorna todos os posts
app.get('/posts', (req, res) => {
  const posts = Object.values(postsMap);
  res.json(posts);
});

// Retorna um post com base no id fornecido
app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postsMap[id];
  if (!post) {
    res.status(404).send('Post não encontrado');
  } else {
    res.json(post);
  }
});

// Cria um novo post
app.post('/posts', (req, res) => {
  const post = req.body;
  const id = post.id;
  if (!id) {
    res.status(400).send('O id do post é obrigatório');
  } else if (postsMap[id]) {
    res.status(409).send('Já existe um post com o id fornecido');
  } else {
    postsMap[id] = post;
    res.status(201).send(`Post criado com sucesso: ${JSON.stringify(post)}`);
  }
});

// Atualiza um post existente com base no id fornecido
app.put('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = req.body;
  if (!id) {
    res.status(400).send('O id do post é obrigatório');
  } else if (!postsMap[id]) {
    res.status(404).send('Post não encontrado');
  } else {
    postsMap[id] = post;
    res.send(`Post atualizado com sucesso: ${JSON.stringify(post)}`);
  }
});

// Remove um post com base no id fornecido
app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postsMap[id];
  if (!post) {
    res.status(404).send('Post não encontrado');
  } else {
    delete postsMap[id];
    res.send(`Post removido com sucesso: ${JSON.stringify(post)}`);
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});