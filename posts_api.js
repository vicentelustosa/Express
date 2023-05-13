const express = require('express');
const app = express();
const port = 3000;

// Criando um objeto Map para armazenar os posts
const postsMap = new Map();

// Middleware para permitir o uso do req.body para requisições com JSON
app.use(express.json());

// Rota para listar todos os posts
app.get('/posts', (req, res) => {
  // Obtendo um array com todos os valores do objeto Map de posts
  const posts = Array.from(postsMap.values());
  res.status(200).json(posts);
});

// Rota para criar um novo post
app.post('/posts', (req, res) => {
  // Criando um novo objeto post com os dados enviados na requisição
  const post = {
    id: Date.now().toString(),
    title: req.body.title,
    content: req.body.content,
  };

  // Adicionando o novo post ao objeto Map de posts
  postsMap.set(post.id, post);

  res.status(201).json(post);
});

// Rota para obter um post específico por ID
app.get('/posts/:id', (req, res) => {
  // Obtendo o post com o ID especificado do objeto Map de posts
  const post = postsMap.get(req.params.id);

  if (!post) {
    // Se não encontrar um post com o ID especificado, retorna 404
    res.status(404).send('Post não encontrado.');
  } else {
    res.status(200).json(post);
  }
});

// Rota para atualizar um post existente
app.put('/posts/:id', (req, res) => {
  // Obtendo o post com o ID especificado do objeto Map de posts
  const post = postsMap.get(req.params.id);

  if (!post) {
    // Se não encontrar um post com o ID especificado, retorna 404
    res.status(404).send('Post não encontrado.');
  } else {
    // Atualizando os dados do post com os dados enviados na requisição
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    res.status(200).json(post);
  }
});

// Rota para excluir um post existente
app.delete('/posts/:id', (req, res) => {
  // Excluindo o post com o ID especificado do objeto Map de posts
  const deleted = postsMap.delete(req.params.id);

  if (!deleted) {
    // Se não encontrar um post com o ID especificado, retorna 404
    res.status(404).send('Post não encontrado.');
  } else {
    res.status(204).send();
  }
});

app.listen(port, () => {
  console.log(`Server running...`);
});
