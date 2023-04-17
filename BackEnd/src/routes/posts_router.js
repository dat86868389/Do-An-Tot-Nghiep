const postsController = require('../controllers/posts_controller');

module.exports = function(router) {


    // Add Post
    router.post('/post/add', postsController.addPosts);
}
