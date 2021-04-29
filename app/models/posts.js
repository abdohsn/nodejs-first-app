const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    body: String, 
    author: Number,
})

const PostModel = mongoose.model("Post", postSchema)

module.exports = PostModel