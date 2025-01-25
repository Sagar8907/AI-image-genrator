import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()
const uri ="mongodb+srv://sagarhimanshu093:sagar6788@cluster0.zhcjv.mongodb.net/ai-image-generator?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri)

mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})

mongoose.connection.on('error',(err)=>{
    console.log("error connecting to mongo",err)
})


export default mongoose