const {models, model, Schema} = require('mongoose')

const PostSchema = Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
})

const Post = models.Post || model('Post', PostSchema)

export default Post