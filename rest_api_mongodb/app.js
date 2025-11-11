const express = require('express')
const cors = require('cors')
require('./config/db')
const userRouter = require('./routes/user.route')
const { urlencoded } = require('body-parser')
const app = express()



app.use(cors())
app.use(urlencoded({extended:true}))
app.use(express.json())

app.use('/api/users',userRouter)


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html")
})

// invalid route handle
app.use((req,res)=>{
    res.status(404).send("<h2>404 page not found.</h2>")
})


// server error handled
app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "something broke"
    })
})

module.exports = app