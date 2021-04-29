const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")

mongoose.connect("mongodb://localhost:27017/blogApp",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
 }, (err) => {
    if (err) return console.error(err)
    console.log("connected to db");
})
const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.json())

app.use("/users", userRouter)

app.use(express.json())

app.use("/posts", postRouter)


app.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("startee server on port 3000");
})