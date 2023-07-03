class PostArrayModel {
  static #postsArray = [];
  static #nextId = 1;

  static async create(postData) {
    const post = {
      id: this.#nextId++,
      title: postData.title || '',
      content: postData.content || ''
    };
    this.#postsArray.push(post);
    return post;
  }

  static async findByPk(id) {
    const post = this.#postsArray.find(post => post.id === id);
    return post || null;
  }

  static async findAll() {
    return this.#postsArray;
  }

  static async update(postData, options) {
    const id = options.where.id;
    const post = this.#postsArray.find(post => post.id === id);
    if (!post) {
      return 0;
    }
    Object.assign(post, postData);
    return 1;
  }

  static async destroy(options) {
    if (options.truncate) {
      this.#postsArray = [];
    } else if (options.where) {
      const id = options.where.id;
      const index = this.#postsArray.findIndex(post => post.id === id);
      if (index !== -1) {
        this.#postsArray.splice(index, 1);
        return 1;
      }
      return 0;
    }
  }
}

module.exports = PostArrayModel;
