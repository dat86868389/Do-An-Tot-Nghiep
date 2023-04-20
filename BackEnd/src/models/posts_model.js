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
    // var content = `{"blocks": [`;
    // data.blocks.map((e, index) => {
    //     if (index < data.blocks.length - 1) {
    //         content += JSON.stringify(e);
    //         content += `,`
    //     }
    //     else {
    //         content += JSON.stringify(e);
    //     }

    // })
    // content += `]}`;
    // console.log('123', content);

    var content = {blocks: data.blocks}
    const sql = `call SP_addPosts(${data.userId},${data.userId},'${data.Title}','${JSON.stringify(content)}',0,1,'${data.thumnailLink}','${data.description}');`;
    console.log('sql', sql);
    database.query(sql, function (err) {
        if (err) {
            // throw err;
            result(0); // nếu thực hiện truy vấn KHÔNG thành công
        }
        else {
            result(1); //nếu thực hiện truy vấn thành công
        }
    });
}

Posts.getTop8Latest = function (result) {
    const sql = `SELECT Title, View, PostId, TimePost, Thumnail, description from posts order by  TimePost DESC LIMIT 8;`;

    database.query(sql, function (err, top8posts) {
        if (err) {
            throw err
        }
        else {
            result(top8posts); //nếu thực hiện truy vấn thành công
        }
    });
}
Posts.getPostsById = function (data, result) {
    const sql = `select posts.Title, posts.Content, users.UserName from posts INNER JOIN users ON posts.UserId = users.UserId where posts.PostId = ${data.id};`;
    console.log(sql);
    database.query(sql, function (err, data) {
        if (err) {
            throw err
        }
        else {
            result(data); //nếu thực hiện truy vấn thành công
        }
    });
}

Posts.getTop8Posts = function (data, result) {

}

module.exports = Posts;