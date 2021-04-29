const express = require("express")
const UserModel = require('../models/users')

const Router = express.Router()

Router.get("/", (request, response)=>{
    console.log("listing users");
    console.log(request.query);
    UserModel.find({}, (err, data) => {
        if(!err) return response.render("./users.ejs", { users: data })
        response.send("error happend")
    })
    // response.send("here a list of userss")
})

Router.get("/:id", (request, response)=>{
    const id = request.params.id
    UserModel.find({"_id": id}, (err, data) => {
        if(!err) return response.json(data)
        response.send("error happend")
    })
    // response.send(`user with id = ${id}`)
})


Router.post("/", (request, response)=>{
    console.log(request.body);
    const userData = request.body
    // create new instance form usermodel
    const userInstance = new UserModel({
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        dob: userData.dob
    })
    console.log(userInstance);
    // save the user instance in db
    userInstance.save((err, userDoc) => {
        if (!err) return response.json(userDoc)
        response.send(err)
    })
    // response.send("user created")
})


Router.delete("/:id", (request, response)=>{
    const id = request.params.id
    UserModel.deleteOne({"_id": id}, (err, data) => {
        if(!err) return response.json(data)
        response.send("error happend")
    })
    // response.send(`user with id ${request.params.id} deleted`)
})

module.exports = Router