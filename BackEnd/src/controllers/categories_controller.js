const categoriesModel = require('../models/categories_model');

exports.getAllCategories = function (req, res) {
    categoriesModel.getAllCategories(function (data) {
        res.send({ result: data })
    });
}

exports.addCategoriesForPost = function (req, res) {
    var data = req.body;
    categoriesModel.addCategoriesForPost(data, function (r) {
        res.send({ result: r });
    })
}

exports.getCategoriesByPostId = function (req, res) {
    var postId = req.params.postId;
    categoriesModel.getCategoriesByPostId(postId, function (r) {
        res.send({ result: r });
    })
}

exports.getCategoriesQuantity = function (req, res) {
    categoriesModel.getCategoriesQuantity(function (count) {
        res.send({ result: count });
    });
}

exports.addCategories = function (req, res) {
    const cate = req.body;
    categoriesModel.addCategories(cate, function (data) {
        res.send({ result: data });
    })
}

exports.deleteCategories = function (req, res) {
    const idCate = req.params.id;
    categoriesModel.deleteCategories(idCate, function(data){
        res.send({ isSucces: data });
    })
}