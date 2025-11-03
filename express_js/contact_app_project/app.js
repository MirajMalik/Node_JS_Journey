const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 8080
const contactRoutes = require('./contactRoutes')

app.use(morgan('dev'))

app.use('/contacts',contactRoutes)

app.use(express.urlencoded({extended:true}))  // It is for taking form data
app.use(express.json())  // To accept json data

app.use((req,res)=>{
    res.status(404).send('404 Page Not Found');
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at ${PORT}`)

})