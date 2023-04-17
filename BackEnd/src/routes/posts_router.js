const postsController = require('../controllers/posts_controller');

module.exports = function(router) {

    router.get('/posts/top_8_Latest', postsController.getTop8Latest);

    // Add Post
    router.post('/post/add', postsController.addPosts);
}
