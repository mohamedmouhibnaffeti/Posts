const express = require('express')
const mongoose = require('mongoose')
import Postsrouter from './routes/postsRouter'
const app = express()

app.use(express.json())

app.use("/api/")

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})