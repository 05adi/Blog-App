const Post=require('../models/post');

exports.createPost= async(req, res) => {
     try {
            const {title, body}=req.body;
    
            const post=await Post.create({title, body});
            
            res.status(200).json({
                post: post
            });
        } 
        catch (error) {
            console.error(error);
            console.log(error);
            res.status(500).json(
                {
                    success:false,
                    data:"internal server error",
                    message:error.message
                }
            )
        }
}

exports.getAllPosts= async(req, res) => {
     try {
            const posts= await Post.find({}).populate("comments").populate("likes").exec();

            res.status(200).json({
                post: posts
            });
        } 
        catch (error) {
            console.error(error);
            console.log(error);
            res.status(500).json(
                {
                    success:false,
                    data:"internal server error",
                    message:error.message
                }
            )
        }
}