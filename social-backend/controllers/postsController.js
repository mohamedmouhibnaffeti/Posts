const Post = require('../models/PostModel.js')

module.exports.getAllPosts = async(req, res) => {
    return res.json("Hello World")
}

module.exports.createPost = async(req, res) => {
    try{
        const {title, description} = req.body
        const createdPost = await Post.create({title, description})
        if(createdPost){
            return res.status(200).json('Post Created Successfullly')
        }else{
            return res.status(500).json('Failed creating post')
        }
    }catch(err){

    }
}