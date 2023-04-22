const postsController = require('../controllers/posts_controller');

module.exports = function (router) {

    //get 8 latest posts
    router.get('/posts/top_8_Latest', postsController.getTop8Latest);

    // Add Post
    router.post('/post/add', postsController.addPosts);

    //get top posts
    router.get('/get_top_posts_by_view', postsController.getTop8Posts);

    // get posts by id 
    router.get('/posts/:id', postsController.getPostsById);


}
