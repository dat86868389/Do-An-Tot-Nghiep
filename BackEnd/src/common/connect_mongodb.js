const mongoose = require('mongoose');
const mongodbConnection = mongoose.connect('mongodb://127.0.0.1:27017/DO-AN-2023')
    .then(() => {
        console.log("ket noi CSDL mongodb thanh cong");
    })
    .catch(error => handleError(error));


module.exports = mongodbConnection;