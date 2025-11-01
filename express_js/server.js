const express = require('express')
const app = express()

// if process env gives a port otherwise default value
const PORT = process.env.PORT || 8080 


// to run a server we need port to listen.It will take a callback function that includes request and response

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at ${PORT}`)
}) 