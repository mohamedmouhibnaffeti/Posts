// File: routes/posts.js
const express = require('express');
const { getAllPosts } = require('../controllers/postsController');
const router = express.Router();

router.get('/all', getAllPosts);

module.exports = router; // Use module.exports for CommonJS syntax
