class PostController {
  static postsMap = new Map();
  static idCounter = 0;

  static getAllPosts(req, res) {
    const posts = Object.values(PostController.postsMap);
    res.status(200).json(posts);
  }

  static getPostById(req, res) {
    const post = PostController.postsMap.get(req.params.id);
    if (!post) {
      res.status(404).send('Post não encontrado.');
    } else {
      res.status(200).json(post);
    }
  }

  static createPost(req, res) {
    const { title, content } = req.body;
    const id = ++PostController.idCounter;
    const post = { id, title, content };
    PostController.postsMap.set(id, post);
    res.status(201).json(post);
  }

  static updatePost(req, res) {
    const post = PostController.postsMap.get(req.params.id);

    if (!post) {
      res.status(404).send('Post não encontrado.');
    } else {
      post.title = req.body.title || post.title;
      post.content = req.body.content || post.content;
      PostController.postsMap.set(post.id, post);
      res.status(200).json(post);
    }
  }

  static deletePost(req, res) {
    const post = PostController.postsMap.get(req.params.id);

    if (!post) {
      res.status(404).send('Post não encontrado.');
    } else {
      PostController.postsMap.delete(post.id);
      res.sendStatus(204);
    }
  }
}

module.exports = PostController;
