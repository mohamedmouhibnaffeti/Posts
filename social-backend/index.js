const express = require('express')
const PostRouter = require('./routes/postsRouter.js')
const mongoose = require('mongoose')

mongoose.connect
const app = express()

app.use(express.json())

app.use("/api/posts", PostRouter)

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})