const express = require('express')
const { PostsController } = require('../controllers/postsController')
const router = express.Router()

router.get("/api/posts", PostsController)

export default router