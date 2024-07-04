const express = require('express')
const postRouter = ('./routes/postsRouter.js')
const app = express()

app.use(express.json())

app.use("/api/posts", postRouter)

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})