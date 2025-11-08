const express = require('express')
const cors = require('cors')
const { urlencoded } = require('body-parser')
const app = express()



app.use(cors())
app.use(urlencoded({extended:true}))
app.use(express.json())


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html")
})

module.exports = app