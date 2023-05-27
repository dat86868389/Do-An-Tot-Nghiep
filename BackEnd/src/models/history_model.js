const database = require('../common/connect_mysql');

const History = function (history) {
    this.UserId = categories.UserId;
    this.PostId = categories.PostId;
    this.date = categories.date;
}

History.addHistory = function (prams, result) {
    const date = new Date();
    console.log(date);
    const dateString = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const sql = `call SP_AddHistory(${prams.postId},${prams.userId},'${dateString}');`;
    console.log(sql);
    database.query(sql, function (err) {
        if (err) {
            throw err;
        }
        else {
            result(1);
        }
    });
}

module.exports = History;