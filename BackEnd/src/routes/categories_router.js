const categoriesController = require('../controllers/categories_controller');


module.exports = function(router) {
    router.get('/categories/get',categoriesController.getAllCategories); 
    router.post('/categories/post/add',categoriesController.addCategoriesForPost);
}
