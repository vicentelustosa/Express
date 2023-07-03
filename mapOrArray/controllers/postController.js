class PostController {
  static #postModel;

  static set postModel(model) {
    PostController.#postModel = model;
  }

  static get postModel() {
    return PostController.#postModel;
  }
  static create(req, res) {
    const post = PostController.postModel.create(req.body);
    res.status(201).json(post);
  }

  static findAll(req, res) {
    const posts = PostController.postModel.findAll();
    res.status(200).json(posts);
  }

  static findById(req, res) {
    const id = parseInt(req.params.id);
    const post = PostController.postModel.findById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).send('Post não encontrado.');
    }
  }

  static updateById(req, res) {
    const id = parseInt(req.params.id);
    const post = PostController.postModel.updateById(id, req.body);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).send('Post não encontrado.');
    }
  }

  static deleteById(req, res) {
    const id = parseInt(req.params.id);
    const post = PostController.postModel.deleteById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).send('Post não encontrado.');
    }
  }

  static deleteAll(req, res) {
    PostController.postModel.deleteAll();
    res.status(204).send();
  }
}

module.exports = PostController;
