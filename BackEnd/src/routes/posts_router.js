const postsController = require('../controllers/posts_controller');

module.exports = function (router) {

    //get 8 latest posts
    router.get('/posts/top_8_Latest', postsController.getTop8Latest);

    // Add Post
    router.post('/post/add', postsController.addPosts);

    //get top posts
    router.get('/get_top_posts_by_view', postsController.getTop8Posts);

    // get posts by id (read posts)
    router.get('/posts/:id', postsController.getPostsById);

    //get all posts by id user
    router.get('/get_personal_posts/:idUser', postsController.getPersonalPosts);

    //delte post by id 
    router.delete('/posts/delete/:id', postsController.deletePostById);

    //get post by postId and userId
    router.get('/posts/postId/:postId/userId/:userId', postsController.getPostByPostIdAndUserId);

    //update post
    router.put('/post/update', postsController.updatePost);

    //get post by page
    router.get('/posts/get_posts_by_page/:page/limit/:limit', postsController.getPostByPage);

    //get post quantity
    router.get('/posts/get/quantity', postsController.getPostQuantity);

    //find posts by keywords
    router.get('/posts/search/:keyword', postsController.getPostsByKeyWord);

    // get posts by category
    router.get('/posts/category/:category', postsController.getPostsByCategory);

    //get posts have status code = 0
    router.get('/posts/status/code/0', postsController.getPostsStatusCodeEqual0);

    //get quantity posts have status code = 0
    router.get('/posts/status/code/0/quantity', postsController.getPostsStatusCode0Quantity)

    // set status code = 1 for post acepted
    router.put('/posts/set/status/code/1/postId/:postId', postsController.setPostStatusCodeEqual1);

    // get post info by postId (on admin side)
    router.get('/post/getinfo/:postId', postsController.getInfoByPostId);
}
