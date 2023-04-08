const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'zxcVbnm123@',
    database: 'doan2023'
})

connection.connect(function (err) {
    if (err) {
        console.log("Ket noi Co So Du Lieu That Bai");
    }
    else {
        console.log("ket noi CSDL MySQL thanh cong");
    }
});

module.exports = connection;