const categoriesModel = require('../models/categories_model');

exports.getAllCategories = function(req, res) {
    categoriesModel.getAllCategories(function(data){
        res.send({ result: data });
    });
}