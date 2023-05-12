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

Categories.addCategoriesForPost = function (data, result) {
    var listCate = ``;
    data.cateList.map((e, index) => {
        if (index == data.cateList.length - 1) {
            listCate += e;
        }
        else {
            listCate += `${e},`;
        }

    })
    const sql = `call SP_addCategoriesForPost('${listCate}',${data.id});`;
    database.query(sql, function (err) {
        if (err) {
            throw err;
            result(0);
        }
        else {
            result(1)
        }
    })
}

module.exports = Categories;