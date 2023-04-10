const usersModel = require('../models/users_model');

exports.getUsers = function(req, res) {
    usersModel.getUsers(function(data){
        res.send({ result: data });
    });
}

exports.addUser = function (req, res) {
    const data = req.body;
    usersModel.addUser(data, function (respond) {
        res.send({ result: respond });
    });
}


exports.getUserByAccount = function(req, res) {
    const data = req.params;
    usersModel.getUser(data, function (respond) {
        res.send({ result: respond });
    });
}