const express = require('express');
const app = express();
const postsRouter = require('./posts');

// Configuração do body-parser para parsear requisições JSON
app.use(express.json());

// Configuração das rotas do recurso posts
app.use('/posts', postsRouter);

// Rota para tratar erros 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

// Rota para tratar erros internos do servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
