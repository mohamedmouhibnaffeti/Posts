const express = require('express')
const { PostsController } = require('../controllers/postsController')
const router = express.Router()

router.get("/", PostsController)

export default router