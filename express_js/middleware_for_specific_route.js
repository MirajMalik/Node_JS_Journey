const express = require('express')


/* middleware -> in simple a function that is used to check different things,
vulnerabilities,authetications etc by fetching data from req object between the time
when req is send to to the res.between this time we can use middlewares for our own use
before it gets to response.
*/


// just a simple middleware(third party) used to get the method name,status code and runtime.dev is used as development .

const morgan = require('morgan')

const app = express()






// if process env gives a port otherwise default value
const PORT = process.env.PORT || 8080 



// 3 different routes are created and handled using handler function.
/* use middleware(morgan) between route and handlerer.here app.use() is not required.
It is specifically only applied to /about .We can use multiple middlewares between them.they 
will execute serially.One after another
*/
app.get('/about',morgan('dev'),(req,res)=>{
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

