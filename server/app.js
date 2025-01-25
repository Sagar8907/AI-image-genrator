import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors';
import db from './database/db.js';
import Post from './models/Post.js';
import postRoutes from './routes/Postroutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.json({limit: '50mb'}))

app.use("/api/v1/post",postRoutes)
app.use("/api/v1/dalle",dalleRoutes)
app.get("/",(req,res)=>{
    res.send("hello world")
})


app.listen(3000,()=>{
    console.log("server started on port 3000")
})