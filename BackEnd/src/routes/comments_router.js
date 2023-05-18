const CommentController = require('../controllers/comments_controller');

module.exports = function(router) {
   router.get('/comments/post/:postId', CommentController.getCommentsByPost);
   router.post('/comments/add', CommentController.addComment);
//    router.put('/comments/post/:postId');
}
