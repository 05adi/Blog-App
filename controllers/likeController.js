const Post=require('../models/post');
const Like=require('../models/like');

exports.likePost= async(req, res) =>{
    try {
        const {post, user}=req.body;

        const postExists= await Post.findById({_id: post});

        if(postExists){
            const like=await Like.create({post, user});
            
            const updatedPost= await Post.findByIdAndUpdate(post, {$push: {likes: like._id} }, {new: true})
                            .populate("likes")
                            .exec();
            
            res.status(200).json({
                post: updatedPost
            });
        }
        else{
            res.status(404).json({
                success: false,
                message: "No post found with given ID"
            })
        }
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

exports.unLikePost= async(req, res) =>{
    try {
        const {post, like}=req.body;

        const postExists= await Post.findById({_id: post});
        const likeExists= await Like.findById({_id: like});

        if(postExists && likeExists){
            const deletedLike=await Like.findOneAndUpdate({post:post, _id:like});
            
            const updatedPost= await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id} }, {new: true})
                            .populate("likes").populate("comments")
                            .exec();
            
            res.status(200).json({
                post: updatedPost
            });
        }
        else{
            if(!postExists){
                res.status(404).json({
                    success: false,
                    message: "No post found with given ID"
                })
            }
            else{
                res.status(404).json({
                    success: false,
                    message: "No like found with given ID"
                })
            }
        }

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