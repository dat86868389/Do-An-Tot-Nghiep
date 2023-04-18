const postsModel = require('../models/posts_model');

exports.addPosts = function (req, res) {
    const data = req.body;
    console.log(data);
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