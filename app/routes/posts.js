const express = require("express")
const PostModel = require('../models/posts')

const Router = express.Router()

Router.get("/", (request, response)=>{
    console.log("listing all posts");
    console.log(request.query);
    UserModel.find({}, (err, data) => {
        if(!err) return response.json(data)
        response.send("error happend")
    })
})

Router.get("/:id", (request, response)=>{
    const id = request.params.id
    UserModel.find({"_id": id}, (err, data) => {
        if(!err) return response.json(data)
        response.send("error happend")
    })
})


Router.post("/", (request, response)=>{
    console.log(request.body);
    const postData = request.body
    // create new instance form usermodel
    const postInstance = new PostModel({
        title: postData.title,
        body: postData.body,
        author: postData.author,
    })
    console.log(postInstance);
    postInstance.save((err, postDoc) => {
        if (!err) return response.json(postDoc)
        response.send(err)
    })
})


Router.delete("/:id", (request, response)=>{
    const id = request.params.id
    PostModel.deleteOne({"_id": id}, (err, data) => {
        if(!err) return response.json(data)
        response.send("error happend")
    })
})

module.exports = Router