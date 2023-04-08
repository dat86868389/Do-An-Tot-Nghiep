const usersModel = require('../models/users_model');

exports.getUsers = function(req, res) {
    usersModel.getUsers(function(data){
        res.send({ result: data });
    });
}