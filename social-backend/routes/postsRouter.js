const express = require('express')
const PostController = require('../controllers/postsControllera')
const router = express.Router()

router.get('/all', PostController.getAllPosts)

module.exports = router