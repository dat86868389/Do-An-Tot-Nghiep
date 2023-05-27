const historyModel = require('../models/history_model');

exports.addHistory = function (req, res) {
    const params = req.params;
    console.log(params);
    historyModel.addHistory(params, function (respond) {
        res.send({ result: respond });
    });
}