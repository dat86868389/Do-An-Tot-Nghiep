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

Categories.getCategoriesByPostId = function (postId, result) {
    const sql = `select categoriespost.CategoryId, categories.CategoryName 
    from categoriespost inner join categories
    on categoriespost.CategoryId = categories.CategoryId
    where categoriespost.PostId = ${postId};`

    database.query(sql, function (err, categories) {
        if (err) {
            throw err;
        }
        else {
            result(categories);
        }
    })
}

Categories.getCategoriesQuantity = function (result) {
    const sql = 'select count(categories.CategoryId) as count from categories;';
    database.query(sql, function (err, count) {
        if (err) {
            result(err);
        }
        else {
            result(count);
        }
    });
}

Categories.addCategories = function(cate, result) {
    const sql = `call SP_AddCategory('${cate.cate_name}')`;
    database.query(sql, function (err) {
        if (err) {
            throw err;
        }
        else {
            result(1);
        }
    });
}

module.exports = Categories;