const experss=require('express');
const router=experss.Router();

//import controller
const {createComment}= require('../controllers/commentController');
const {likePost, unLikePost}=require('../controllers/likeController');
const {createPost, getAllPosts}=require('../controllers/postController');


//create mapping
router.post('/comments/create', createComment);
router.post('/likes/like', likePost);
router.post('/likes/unlike', unLikePost);
router.post('/posts/create', createPost);
router.get('/posts', getAllPosts);


//export routes
module.exports=router;