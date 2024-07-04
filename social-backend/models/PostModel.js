const {models, model, Schema} = require('mongoose')

const PostSchema = Schema({
    title: {
        type: String
    },
    description: [
        
    ]
})

const Post = models.Post || model('Post', PostSchema)