const express = require('express')
const mongoose = require('mongoose')
const PostRouter from 
const app = express()

app.use(express.json())

app.use("/api/posts", Postsrouter)

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})