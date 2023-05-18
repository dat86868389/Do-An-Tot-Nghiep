const mongoose = require('mongoose');
require('../common/connect_mongodb');

const commentSchema = new mongoose.Schema({
    userId: Number,
    userName: String,
    postId: Number,
    comment: String,
    time: Date
})

module.exports = mongoose.model('comments', commentSchema);