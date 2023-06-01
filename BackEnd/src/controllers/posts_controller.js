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

exports.getPostByPage = function (req, res) {
    const data = req.params;
    postsModel.getPostByPage(data, function (data) {
        res.send({ result: data });
    })
}

exports.getPostQuantity = function (req, res) {
    postsModel.getPostQuantity(function (data) {
        res.send({ result: data });
    })
}

exports.getPostsByKeyWord = function (req, res) {
    const data = req.params;
    postsModel.getPostsByKeyWord(data, function (data) {
        res.send({ result: data });
    })
}

exports.getPostsByCategory = function (req, res) {
    const params = req.params;
    postsModel.getPostsByCategory(params, function (data) {
        res.send({ result: data });
    })
}

exports.getPostsStatusCodeEqual0 = function (req, res) {
    const prams = req.params
    postsModel.getPostsStatusCodeEqual0(prams, function (data) {
        res.send({ result: data });
    })
}

exports.setPostStatusCodeEqual1 = function (req, res) {
    const postID = req.params.postId
    postsModel.setPostStatusCodeEqual1(postID, function (data) {
        res.send({ result: data });
    })
}

exports.getInfoByPostId = function (req, res) {
    const postID = req.params.postId;
    postsModel.getInfoByPostId(postID, function (data) {
        res.send({ result: data });
    })
}

exports.getPostsStatusCode0Quantity = function (req, res) {
    postsModel.getPostsStatusCode0Quantity(function (data) {
        res.send({ result: data });
    })
}

exports.getPostsbyPageOnAdminSide = function (req, res) {
    const page = req.params.page;
    postsModel.getPostsbyPageOnAdminSide(page, function (data) {
        res.send({ result: data });
    })
}

exports.deletePostOnAdminSide = function (req, res) {
    const postID = req.params.id;
    postsModel.deletePostOnAdminSide(postID, function (data) {
        res.send({ result: data });
    })
}

exports.getQuantity = function (req, res) {
    postsModel.getQuantity(function (data) {
        res.send({ result: data });
    })
}

exports.updateViewPost = function (req, res) {
    const params = req.params;
    postsModel.updateViewPost(params, function (data) {
        res.send({ result: data });
    })
}

exports.getPostQuantityByCategory = function (req, res) {
    const params = req.params;
    postsModel.getPostQuantityByCategory(params, function(data){
        res.send({ result: data });
    })
}