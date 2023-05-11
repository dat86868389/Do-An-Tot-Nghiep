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

Categories.addCategoriesForPost = function(data, result) {
    const sql = `call SP_addCategoriesForPost('1,2,3,4,5', 79);`;
}

module.exports = Categories;