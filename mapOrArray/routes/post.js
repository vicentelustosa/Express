const express = require('express');
const PostMapModel = require('../models/postMap');
const PostArrayModel = require('../models/postArray');
const PostController = require('../controllers/postController');

const { model } = require('../config');

if (model === 'array') {
  postModel = PostArrayModel;
} else {
  postModel = PostMapModel;
}

PostController.postModel = postModel;

const router = express.Router();

router.post('/', PostController.create);
router.get('/', PostController.findAll);
router.get('/:id', PostController.findById);
router.put('/:id', PostController.updateById);
router.delete('/:id', PostController.deleteById);
router.delete('/', PostController.deleteAll);

module.exports = router;
