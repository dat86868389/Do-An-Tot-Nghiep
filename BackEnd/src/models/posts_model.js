const database = require('../common/connect_mysql');

const Posts = function (posts) {
    this.UserId = posts.UserId;
    this.CensorId = posts.CensorId;
    this.Title = posts.Title;
    this.Content = posts.Content;
    this.View = posts.View;
    this.Status = posts.Status;
    this.TimePost = posts.TimePost;
}

Posts.addPosts = function (data, result) {
    const sql = `call SP_addPosts(${data.UserId}, ${data.CensorId}, ${data.Title}, ${data.Content}, ${data.View}, ${data.Status});`;
    database.query(sql, function (err) {
        if (err) {
            result(0); // nếu thực hiện truy vấn KHÔNG thành công
        }
        else {
            result(1); //nếu thực hiện truy vấn thành công
        }
    });
}

module.exports = Posts;