const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

// home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

// handaling invalid routes
app.use((req,res)=>{
    res.status(404).send('<h3>404 Page Not Found </h3>')

})

//server error handling

app.use((err,req,res,next)=>{
    res.status(500).json({
        message: "something broke"
    })
});

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

module.exports = app

