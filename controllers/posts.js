import PostMessage from "../models/postMessage.js"
import postMessage from "../models/postMessage.js"

export const getPosts=async (req,res)=>{
    try{
        const postMessage=await PostMessage.find();
        console.log(postMessage)
        res.status(200).json(postMessage)
    }catch(error){
        res.status(404).json({Message:error.message})
    }
}

export const createPost=(req,res)=>{
    res.send('Post Creation')}