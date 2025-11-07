const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 8080 

const app = express()
app.use(morgan('dev'))

// router variable holds the router module .Different router is taken to handle diff groups of routing
// router object holds GET,PUT,PATCH,DELETE etc
// const userRouter = express.Router()
// const postRouter = express.Router()
 
 // User Router starts => it includes different user routes
const router = express.Router()
router.get('/login',(req,res)=>{
    res.send('I am login page.')
})

router.get('/logout',(req,res)=>{
    res.send('I am logout page.')
})

router.get('/logout',(req,res)=>{
    res.send('I am logout page.')
})

// User Router ends







app.use('/user',router)



app.get('/',(req,res)=>{
    res.send('<h1>I am listening.</h1>') //to send a response into the browser
}) 


 app.use((req,res)=>{
    res.send('<h1>404 page Not Found</h1>')
 })


app.listen(PORT,(req,res)=>{
    console.log(`Server is running at ${PORT}`)
}) 

