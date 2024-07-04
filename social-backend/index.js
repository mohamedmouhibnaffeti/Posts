const express = require('express')
const  = ('./routes/postsRouter.js')
const app = express()

app.use(express.json())

app.use("/api/posts", router)

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})