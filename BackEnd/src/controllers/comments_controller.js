const CommentModel = require('../models/comments_model');
const Comment = CommentModel;


exports.addComment = function (req, res) {
    Comment.create(req.body)
        .then(() => {
            res.send({ 'isSuccess': true });
        })
        .catch(() => {
            res.send(400);
        })
}


exports.getCommentsByPost = function (req, res) {
    Comment.find({ postId: req.params.postId }).sort({ time: -1 })
        .then(r => {
            res.send({ result: r });
        })
}

exports.deleteComment = function (req, res) {
    const idComment = req.params.idComment;
    Comment.deleteOne({ _id: idComment })
        .then(r => res.send({ result: r }))
}