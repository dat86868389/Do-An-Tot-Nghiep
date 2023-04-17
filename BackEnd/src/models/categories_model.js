const database = require('../common/connect_mysql');

const Categories = function (categories) {
    this.CategoryId = categories.CategoryId;
    this.CategoryName = categories.CategoryName;
}

Categories.getAllCategories = function (result) {
    database.query(`select * from categories;`, function (err, categories) {
        if (err) {
            result(err);
        }
        else {
            result(categories);
        }
    });
}

module.exports = Categories;