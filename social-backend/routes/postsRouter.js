const express = require('express')
const PostController = require('../controllers/postsController')
const router = express.Router()

router.get("/all", PostCon)

module.exports = router