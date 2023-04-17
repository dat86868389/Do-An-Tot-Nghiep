const database = require('../common/connect_mysql');

const Posts = function (posts) {
    this.userId = posts.userId;
    this.CensorId = posts.CensorId;
    this.Title = posts.Title;
    this.blocks = posts.blocks; // content 
    this.View = posts.View;
    this.Status = posts.Status;
    this.TimePost = posts.TimePost;
}

Posts.addPosts = function (data, result) {
    var content = `[`;
     data.blocks.map((e) => {
        content += JSON.stringify(e)
    })
    content += `]`;
    console.log('1234411231232131',content);
    const sql = `call SP_addPosts(${data.userId}, ${data.userId}, '${data.Title}', '${content}', 0, 1);`;
    console.log(sql);
    database.query(sql, function (err) {
        if (err) {
            throw err
            result(0); // nếu thực hiện truy vấn KHÔNG thành công
        }
        else {
            result(1); //nếu thực hiện truy vấn thành công
        }
    });
}

module.exports = Posts;