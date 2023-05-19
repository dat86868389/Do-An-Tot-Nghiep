const CommentModel = require('../models/comments_model');

exports.addComment = function (req, res) {
    const Comment = CommentModel;
    
    Comment.create(req.body)
    .then(() => {
        res.send({'isSuccess': true});
    })
    .catch(() => {
        res.send(400);
    })
}


exports.getCommentsByPost = function(req, res) {
    const Comment = CommentModel;
    
    Comment.find({postId: req.params.postId}).sort({time: -1})
    .then(r => {
        res.send({ result: r });
    })
}