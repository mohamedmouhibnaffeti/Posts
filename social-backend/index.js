const express = require('express')
const PostRouter = require('./routes/postsRouter.js')
const mongoose = require('mongoose')
const cors = require('cors')

const corsOptions = {
    origin: '*'
}

mongoose.connect("mongodb://localhost:27017/DevDB")

const app = express()

app.use(cors(corsOptions))
app.use(express.json())



app.use("/api/posts", PostRouter)

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})