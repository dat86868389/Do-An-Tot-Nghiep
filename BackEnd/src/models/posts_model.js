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

    var content = { blocks: data.blocks }
    const sql = `call SP_addPosts(${data.userId},${data.userId},'${data.Title}','${JSON.stringify(content)}',0,1,'${data.thumnailLink}','${data.description}');`;
    database.query(sql, function (err) {
        if (err) {
            // throw err;
            result(0); // nếu thực hiện truy vấn KHÔNG thành công
        }
        else {
            database.query(`select PostId from posts where UserId = ${data.userId} order by TimePost desc;`, function (err, idPost) {
                if (err) {
                    result(0); // nếu thực hiện truy vấn KHÔNG thành công
                }
                else {
                    console.log(idPost[0].PostId);
                    console.log(sql);
                    result(idPost[0].PostId); //nếu thực hiện truy vấn thành công
                }
            });

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
    // console.log(sql);
    database.query(sql, function (err, data) {
        if (err) {
            throw err
        }
        else {
            result(data); //nếu thực hiện truy vấn thành công
        }
    });
}

Posts.getTopPosts = function (result) {
    const sql = `select posts.PostId,posts.Title,posts.View,posts.TimePost,posts.Thumnail,posts.description,users.UserName from posts inner join users on posts.UserId = users.UserId order by View DESC limit 8;`;
    database.query(sql, function (err, data) {
        if (err) {
            throw err;
        }
        else {
            result(data);
        }
    })
}

Posts.getPersonalPosts = function (prams, result) {
    const sql = `select PostId,Title,TimePost,Thumnail,description from posts where UserId = ${prams.idUser};`;
    database.query(sql, function (err, data) {
        if (err) {
            throw err;
        }
        else {
            result(data);
        }
    })
}

Posts.deletePostById = function (id, result) {
    const sql = `DELETE FROM categoriespost WHERE PostId = ${id};`;
    // console.log(sql);
    database.query(sql, function (err) {
        if (err) {
            result(0);
        }
        else {
            const sql = `DELETE FROM posts WHERE PostId = ${id};`;
            database.query(sql, function (err) {
                if (err) {
                    result(0)
                }
                else {
                    result(1);
                }
            })
        }
    })
}

Posts.getPostByPostIdAndUserId = function (params, result) {
    const sql = `select * from posts where PostId=${params.postId} and UserId=${params.userId};`;
    database.query(sql, function (err, data) {
        if (err) {
            throw (err);
        }
        else {
            result(data);
        }
    })
}

Posts.updatePost = function (data, result) {
    var content = { blocks: data.blocks };

    const sql = `call SP_updatePost(${data.idPost},'${data.Title}','${JSON.stringify(content)}','${data.thumbnail}','${data.description}');`;
    database.query(sql, function (err) {
        if (err) {
            result(0);
        }
        else {
            result(1);
        }
    })
}

Posts.getPostByPage = function (data, result) {
    console.log(data);
    const sql = `select * from posts order by TimePost DESC limit ${data.limit} offset ${(parseInt(data.page) - 1) * parseInt(data.limit)}`;
    database.query(sql, function (err, res) {
        if (err) {
            throw err;
        }
        else {
            result(res);
        }
    })
}

Posts.getPostQuantity = function (result) {
    const sql = `select count(PostId) as quantity from posts`;
    database.query(sql, function (err, res) {
        if (err) {
            throw err;
        }
        result(res);
    })
}

Posts.getPostsByKeyWord = function (data, result) {
    const sql = `select * from posts where Title like '%${data.keyword}%'`;
    database.query(sql, function (err, res) {
        if (err) {
            throw err;
        }
        else {
            result(res);
        }
    });
}

Posts.getPostsByCategory = function (categoryId, result) {
    const sql = `call SP_GetPostByCategory(${categoryId})`;
    database.query(sql, function (err, data) {
        if (err) {
            throw err;
        }
        else {
            result(data);
        }
    });
}

module.exports = Posts;