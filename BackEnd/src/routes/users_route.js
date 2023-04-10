const usersController = require('../controllers/users_controller');


module.exports = function(router) {
    /**
     * router PeopleRouter 
     * gồm các action
     * getPeople,getPeopleById,addPerson,deletePerson,updatePerson
     */

    // get All Users
    router.get('/users/get',usersController.getUsers); 

    // Register User
    router.post('/user/add', usersController.addUser);

    // User Login
    router.get('/account/:account/password/:password', usersController.getUserByAccount);
}
