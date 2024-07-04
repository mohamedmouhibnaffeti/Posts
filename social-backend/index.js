const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    return res.json("Hello world")
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})