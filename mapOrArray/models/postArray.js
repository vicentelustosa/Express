class PostArrayModel {
  static #postsArray = [];
  static #nextId = 1;

  static create(postData) {
    const post = {
      id: this.#nextId++,
      title: postData.title || '',
      content: postData.content || ''
    };
    this.#postsArray.push(post);
    return post;
  }

  static findById(id) {
    return this.#postsArray.find(post => post.id === id);
  }

  static findAll() {
    return this.#postsArray;
  }

  static updateById(id, updateData) {
    const index = this.#postsArray.findIndex(post => post.id === id);
    if (index === -1) {
      return null;
    }
    const post = this.#postsArray[index];
    Object.assign(post, updateData);
    return post;
  }

  static deleteById(id) {
    const index = this.#postsArray.findIndex(post => post.id === id);
    if (index === -1) {
      return null;
    }
    return this.#postsArray.splice(index, 1)[0];
  }

  static deleteAll() {
    this.#postsArray = [];
  }
}

module.exports = PostArrayModel;
