const express = require('express')
const PostController = require('../controllers/postsController')
const router = express.Router()

router.get("/all", PostController.getAllPosts)

module.exports = router