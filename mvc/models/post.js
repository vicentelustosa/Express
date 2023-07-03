class PostModel {
  static #postsMap = new Map();
  static #nextId = 1;

  static create(postData) {
    const post = {
      id: this.#nextId++,
      title: postData.title || '',
      content: postData.content || ''
    };
    this.#postsMap.set(post.id, post);
    return post;
  }

  static findById(id) {
    return this.#postsMap.get(id);
  }

  static findAll() {
    return Array.from(this.#postsMap.values());
  }

  static updateById(id, updateData) {
    const post = this.findById(id);
    if (!post) {
      return null;
    }
    Object.assign(post, updateData);
    return post;
  }

  static deleteById(id) {
    const post = this.findById(id);
    return this.#postsMap.delete(id) ? post : null;
  }

  static deleteAll() {
    this.#postsMap.clear();
  }
}

module.exports = PostModel;
