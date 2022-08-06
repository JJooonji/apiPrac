//게시글에 대한 business logic
const Post = require("../model/post")
const assert = require('assert');


const getAllPost = async(req,res) =>{
    const result = await Post.find({})
    res.send(result)
}
const createPostPage = async(req, res) =>{
    res.send("Nickname, title, content를 입력해주세요")
}
const insertPost = async(req,res) => {
    const newPost= new Post(req.body);
    
   try{
    await newPost.save();
    return res.status(200).json({msg: "게시글이 생성되었습니다."})
   }catch(err){
    return res.status(400).json({err:err.message})
   }
   
   

}

module.exports = {getAllPost,createPostPage, insertPost}