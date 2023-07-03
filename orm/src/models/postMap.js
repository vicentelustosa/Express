class PostMapModel {
  static #postsMap = new Map();
  static #nextId = 1;

  static async create(postData) {
    const post = {
      id: this.#nextId++,
      title: postData.title || '',
      content: postData.content || ''
    };
    this.#postsMap.set(post.id, post);
    return post;
  }

  static async findByPk(id) {
    const post = this.#postsMap.get(id);
    return post || null;
  }

  static async findAll() {
    return Array.from(this.#postsMap.values());
  }

  static async update(postData, options) {
    const post = this.#postsMap.get(options.where.id);
    if (!post) {
      return 0;
    }
    Object.assign(post, postData);
    return 1;
  }

  static async destroy(options) {
    if (options.truncate) {
      this.#postsMap.clear();
    } else if (options.where) {
      const id = options.where.id;
      const deletedPost = this.#postsMap.get(id);
      if (deletedPost) {
        this.#postsMap.delete(id);
        return 1;
      }
      return 0;
    }
  }
}

module.exports = PostMapModel;
