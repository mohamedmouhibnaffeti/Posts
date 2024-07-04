const express = require('express')
const PostController = require('../controllers/postsController.js')
const router = express.Router()

router.use(PostController.getAllPosts)

module.exports = router