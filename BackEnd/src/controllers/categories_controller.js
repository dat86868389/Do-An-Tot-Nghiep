const categoriesModel = require('../models/categories_model');

exports.getAllCategories = function(req, res) {
    categoriesModel.getAllCategories(function(data){
        res.send({ result: data })
    });
}

exports.addCategoriesForPost = function(req, res) {
    var data = req.body;
    categoriesModel.addCategoriesForPost(data, function(r){
        res.send({result : r});
    })
}

exports.getCategoriesByPostId = function(req, res) {
    var postId = req.params.postId;
    categoriesModel.getCategoriesByPostId(postId, function(r){
        res.send({result : r});
    })
}

exports.getCategoriesQuantity = function(req, res) {
    categoriesModel.getCategoriesQuantity(function(count) {
        res.send({result : count});
    });
}