const historyController = require('../controllers/history_controller');


module.exports = function(router) {

    router.post('/history/add/postID/:postId/userId/:userId', historyController.addHistory);

}