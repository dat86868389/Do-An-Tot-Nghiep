const usersController = require('../controllers/users_controller');


module.exports = function(router) {
    /**
     * router PeopleRouter 
     * gồm các action
     * getPeople,getPeopleById,addPerson,deletePerson,updatePerson
     */
    router.get('/users/get',usersController.getUsers); 
}
