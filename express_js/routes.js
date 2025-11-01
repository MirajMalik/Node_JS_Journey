const express = require('express')
const app = express()

// if process env gives a port otherwise default value
const PORT = process.env.PORT || 8080 



// 3 different routes are created and handled using handler function.

app.get('/about',(req,res)=>{
    res.send('<h1>I am about page.</h1>') //to send a response into the browser
}) 

app.get('/contact',(req,res)=>{
    res.send('<h1>I am contact page.</h1>') //to send a response into the browser
}) 

app.get('/posts',(req,res)=>{
    res.send('<h1>I am posts page.</h1>') //to send a response into the browser
}) 



/* '/' is used as a root route . It is request from client.To handle this req we need a req handler
 to handle the req . This is a fucntion that holds 2 arguments (req,res) . we typically use the
 root route at the end beacuse '/' can be hit at first and skip other routes if it is at the beginning.
*/
app.get('/',(req,res)=>{
    res.send('<h1>I am listening.</h1>') //to send a response into the browser
}) 




/* If other than the valid route that i handled anyother route is hit by user than i want to 
 show error message or something else in the browser.for this all other routes we use app.use()
 and return controller(handler function).This runs only after all routes — if no other route matched.
 */

 app.use((req,res)=>{
    res.send('<h1>404 page Not Found</h1>')
 })


// to run a server we need port to listen.It will take a callback function that includes request and response

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at ${PORT}`)
}) 

