const Post = require('../models/PostModel.js')

module.exports.getAllPosts = async(req, res) => {
    try{
        const posts = await Post.find()
        console.log(posts)
        return res.status(200).json({posts: posts})
    }catch(err){
        return res.status(500).json({message: 'Error fetching posts'})
    }
}

module.exports.createPost = async(req, res) => {
    try{
        const {title, description} = req.body
        const createdPost = await Post.create({title, description})
        if(createdPost){
            return res.status(200).json('Post Created Successfullly')
        }else{
            return res.status(400).json('Failed creating post')
        }
    }catch(err){
        return res.status(500).json('Error creating post')
    }
}

module.exports.deletePost = async(req, res) => {
    try{
        const {id} = req.params
        const postToDelete = await Post.findById(id)
        if(!postToDelete){
            return res.status(400).json("post not found")
        }else{
            await Post.deleteOne({_id: id})
            return res.status(200).json("post deleted")
        }
    }catch(err){
        return res.status(500).json('Error deleting post')
    }
}