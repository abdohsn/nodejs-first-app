const { response } = require("express")
const express = require("express")
const http = require("http")

const server = http.createServer()

server.on('request', (request, response)=>{
    console.log(request.method, request.url);
    console.log("request received");
    response.end("hello world")
})

server.listen(3000, (err)=> {
    if (err) return console.log(err);
    console.log("started server on port 3000");
})