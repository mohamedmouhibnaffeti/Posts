const express = require('express')
const mongoose = require('mongoose')
import router from './routes/postsRouter'
const app = express()

app.use(express.json())

app.use()

app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})