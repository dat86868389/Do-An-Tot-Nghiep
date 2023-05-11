const categoriesModel = require('../models/categories_model');

exports.getAllCategories = function(req, res) {
    categoriesModel.getAllCategories(function(data){
        res.send({ result: data });
    });
}

exports.addCategoriesForPost = function(req, res) {
    var data = req.body;
    console.log(data);
}