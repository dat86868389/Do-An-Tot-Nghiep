const database = require('../common/connect_mysql');

const User = function (user) {
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
    const dateOBJ = new Date(Date.now());
    const month = dateOBJ.getMonth() + 1 < 10 ? `0${dateOBJ.getMonth() + 1}` : dateOBJ.getMonth() + 1;
    const date = dateOBJ.getDate() < 10 ? `0${dateOBJ.getDate()}` : dateOBJ.getDate();
    const _date = `${dateOBJ.getFullYear()}-${month}-${date}`;
    const sql = `call SP_addUser(n'${data.userName}','${data.account}','${data.password}','${data.email}','${_date}');`;
    database.query(sql, function (err) {
        if (err) {
            throw err;
            result(0); // nếu thực hiện truy vấn KHÔNG thành công
        }
        else {
            result(1); //nếu thực hiện truy vấn thành công
        }
    });
}

User.getUser = function (data, result) {
    const sql = `select * from users where Account = '${data.account}' and Password = '${data.password}'
    and status != 0;`;
    database.query(sql, function (err, user) {
        if (err) {
            throw err;
        }

        if (user) {
            result(user);
        }
    });
}

User.getUserQuantity = function (result) {
    const sql = `select count(users.UserId) as count from users where status != 0;`;

    database.query(sql, function (err, count) {
        if (err) {
            throw err;
        }
        else {
            result(count);
        }
    });
}

User.getLatest15 = function (result) {
    const sql = `select * from users order by time_create DESC;`;
    database.query(sql, function (err, users) {
        if (err) {
            throw err;
        }
        else {
            result(users);
        }
    })
}

User.getUsersByPage = function (page, result) {
    const sql = `select * from users
    where status != 0
    order by time_create DESC
    limit 12
    offset ${(parseInt(page) - 1) * 12}`;
    database.query(sql, function (err, users) {
        if (err) {
            throw err;
        }
        else {
            result(users);
        }
    })
}

User.updateRoleUser = function (prams, result) {
    const sql = `call SP_UpdateRoleUser(${prams.role},${prams.userId});`;
    database.query(sql, function (err) {
        if (err) {

            result(0);
        }
        else {
            result(1);
        }
    })
}

User.updateStatusUser = function (user, result) {
    const sql = `call SP_UpdateStatusUser(${user.userID},${user.status});`;
    database.query(sql, function (err) {
        if (err) {
            result(0);
        }
        else {
            result(`update success`);
        }
    })
}

module.exports = User;