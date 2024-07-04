const {models, model, Schema} = require('mongoose')

const PostSchema = Schema({
    title: {
        type
    }
})

const Post = models.Post || model('Post', PostSchema)