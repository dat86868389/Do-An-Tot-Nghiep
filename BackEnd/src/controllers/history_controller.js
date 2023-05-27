const historyModel = require('../models/history_model');

exports.addHistory = function (req, res) {
    const params = req.params;
    historyModel.addHistory(params, function (respond) {
        res.send({ result: respond });
    });
}

exports.getHistory = function (req, res) {
    const params = req.params;
    historyModel.getHistory(params, function (data) {
        res.send({ result: data });
    });
}