const postsController = require('../controllers/posts_controller');

module.exports = function (router) {

    /**
     * GET
     */
    //get 8 latest posts
    router.get('/posts/top_8_Latest', postsController.getTop8Latest);
    //get top posts
    router.get('/get_top_posts_by_view', postsController.getTop8Posts);

    // get posts by id (read posts)
    router.get('/posts/:id', postsController.getPostsById);

    //get all posts by id user
    router.get('/get_personal_posts/:idUser', postsController.getPersonalPosts);

    //get post by page
    router.get('/posts/get_posts_by_page/:page/limit/:limit', postsController.getPostByPage);

    //get post by postId and userId
    router.get('/posts/postId/:postId/userId/:userId', postsController.getPostByPostIdAndUserId);

    //get post quantity have status = 1
    router.get('/posts/get/quantity', postsController.getPostQuantity);

    router.get('/posts/get/all/quantity', postsController.getQuantity);

    //find posts by keywords
    router.get('/posts/search/:keyword', postsController.getPostsByKeyWord);

    // get posts by category
    router.get('/posts/category/:category/page/:page', postsController.getPostsByCategory);

    //get posts have status code = 0
    router.get('/posts/status/code/0/page/:page', postsController.getPostsStatusCodeEqual0);

    //get quantity posts have status code = 0
    router.get('/posts/status/code/0/quantity', postsController.getPostsStatusCode0Quantity);

    // get post info by postId (on admin side)
    router.get('/post/getinfo/:postId', postsController.getInfoByPostId);

    // get post on admin side
    router.get('/posts/get/page/:page', postsController.getPostsbyPageOnAdminSide);

    router.get('/posts/get/quantity/category/:category', postsController.getPostQuantityByCategory);


    /**
     * POST
     */
    // Add Post
    router.post('/post/add', postsController.addPosts);


    /**
     * PUT
     */

    //update post
    router.put('/post/update', postsController.updatePost);

    //update view posts
    router.put('/post/:postId/update/view', postsController.updateViewPost);

    // set status code = 1 for post acepted
    router.put('/posts/set/status/code/1/postId/:postId', postsController.setPostStatusCodeEqual1);


    /**
     * DELETE
     */
    //delte post by id 
    router.delete('/posts/delete/:id', postsController.deletePostById);

    // delte post on admin side ( set status for post = -1)
    router.delete('/admin/posts/delete/:id', postsController.deletePostOnAdminSide);
}
