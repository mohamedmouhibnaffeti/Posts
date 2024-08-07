const express = require('express')
const PostController = require('../controllers/postsController.js')
const router = express.Router()

router.get('/all', PostController.getAllPosts)
router.post('/', PostController.createPost)
router.delete('/:id', PostController.deletePost)

module.exports = router