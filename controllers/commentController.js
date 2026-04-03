const Post=require('../models/post');
const Comment=require('../models/comment');

exports.createComment= async(req, res) =>{
    try {
        const {post, user, body}=req.body;

        const postExists= await Post.findById({_id: post});

        if(postExists){
            const comment=await Comment.create({post, user, body});
        
            const updatedPost= await Post.findByIdAndUpdate(post, {$push: {comments: comment._id} }, {new: true})
                            .populate("comments")
                            .exec();
            
            res.status(200).json({
                data: updatedPost
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