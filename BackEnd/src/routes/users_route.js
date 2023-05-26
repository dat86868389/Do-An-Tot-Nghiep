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

    // Get User Quantity
    router.get('/users/quantity',usersController.getUserQuantity);

    // get the latest 15 subscribers
    router.get('/users/latest15',usersController.getLatest15);

    // paginate users
    router.get('/users/paginate/page/:page',usersController.getUsersByPage);

    //update user role 
    router.put('/user/update/role/:role/userId/:userId',usersController.updateRoleUser);
}
