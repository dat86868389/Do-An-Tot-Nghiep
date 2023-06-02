const categoriesController = require('../controllers/categories_controller');


module.exports = function(router) {
    //get all categories
    router.get('/categories/get',categoriesController.getAllCategories); 

    // add categories for post
    router.post('/categories/post/add',categoriesController.addCategoriesForPost);

    // get categories by post id
    router.get('/categories/get_by_post_id/:postId',categoriesController.getCategoriesByPostId);

    // get categories quantity
    router.get('/categories/quantity',categoriesController.getCategoriesQuantity);

    // add categories on Admin side
    router.post('/admin_side/categories/post/add',categoriesController.addCategories);

    //delete categories on Admin side
    router.delete('/admin_side/categories/delete/:id',categoriesController.deleteCategories);
}
