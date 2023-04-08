const database = require('../common/connect_mysql');

const User = function(user) {
    this.UserId = user.UserId;
    this.RoleName = user.RoleName;
    this.UserName = user.UserName;
    this.Account = user.Account;
    this.Password = user.Password;
    this.Avartar = user.Avartar;
}

User.getUsers = function (result) {
    database.query(`select * from users`, function (err, users) {
        if (err) {
            result(err);
        }
        else {
            result(users);
        }

    });
}


module.exports = User;