const postsModel = require('../models/posts_model');

exports.addPosts = function (req, res) {
    const data = req.body;
    postsModel.addPosts(data, function (respond) {
        res.send({ result: respond });
    });
}

exports.getTop8Latest = function (req, res) {
    postsModel.getTop8Latest(function (data) {
        res.send({ result: data });
    });
}

exports.getPostsById = function (req, res) {
    const data = req.params;
    postsModel.getPostsById(data, function (respond) {
        res.send({ result: respond });
    });
}

exports.getTop8Posts = function (req, res) {
    postsModel.getTopPosts(function (data) {
        res.send({ result: data });
    })
}

exports.getPersonalPosts = function (req, res) {
    const prams = req.params;
    postsModel.getPersonalPosts(prams, function (data) {
        res.send({ result: data });
    })
}

exports.deletePostById = function (req, res) {
    const prams = req.params;
    postsModel.deletePostById(prams.id, function (data) {
        res.send({ result: data });
    });
}

exports.getPostByPostIdAndUserId = function (req, res) {
    const params = req.params;
    postsModel.getPostByPostIdAndUserId(params, function (data) {
        res.send({ result: data });
    });
}

exports.updatePost = function (req, res) {
    const data = req.body;
    postsModel.updatePost(data, function (data) {
        res.send({ result: data });
    })
}