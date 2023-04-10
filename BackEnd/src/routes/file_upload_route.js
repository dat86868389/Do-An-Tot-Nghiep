const imageUploadController = require('../controllers/file_upload_controller');


module.exports = function (router, upload) {
    /**
     * router PeopleRouter 
     * gồm các action
     * getPeople,getPeopleById,addPerson,deletePerson,updatePerson
     */
    router.post('/users/get', usersController.getUsers);


    app.post('/upload', upload.single('image'), imageUploadController);
    // 
}
