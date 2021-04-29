const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String, 
    dob: Date,
    email: { type: "string" }
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel