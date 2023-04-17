const postsModel = require('../models/posts_model');

exports.addPosts = function (req, res) {
    const data = req.body;
    console.log(data);
    postsModel.addPosts(data, function (respond) {
        res.send({ result: respond });
    });
}
