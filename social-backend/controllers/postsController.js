const Post = require('../models/PostModel.js')

module.exports.getAllPosts = async(req, res) => {
    return res.json("Hello World")
}

module.exports.createPost = async(req, res) => {
    try{
        const {title, description} = req.body
        Post.
    }catch(err){

    }
}