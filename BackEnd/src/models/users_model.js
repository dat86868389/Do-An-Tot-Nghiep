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

User.addUser = function (data, result) {
    const sql = `call SP_addUser(n'${data.userName}', '${data.account}', '${data.password}', '${data.email}');`;
    database.query(sql , function(err, user){
        if (err) {
            result(0); // nếu thực hiện truy vấn KHÔNG thành công
        }
        else {
            result(1); //nếu thực hiện truy vấn thành công
        }
    });
}


module.exports = User;