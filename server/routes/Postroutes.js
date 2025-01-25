import express from "express"
import Post from "../models/Post.js"
import {v2 as cloudinary} from "cloudinary"
import dotenv from 'dotenv'

const router = express.Router()
dotenv.config();


cloudinary.config({
    cloud_name:"drrkyplxg",
    api_key:"991727165883534",
    api_secret:"duJrerOhLzomQp7FIEPdRh6WKuY"
})
router.get("/",async(req,res)=>{
  try {
    const posts  = await Post.find({})
    res.status(200).json({success:true,data:posts})
  } catch (error) {
    res.status(500).json({msg:err.message})
  }
})
router.post("/", async (req, res) => {
  const {name, prompt, photo} = req.body
  console.log(req.body)
    try {
      const photoUrl = await cloudinary.uploader.upload(photo);
  
      const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url,
      });
      // console.log(newPost)
      res.status(200).json({ success: true, data: newPost });
    } catch (err) {
      console.log(err)
      res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
  });
export default router