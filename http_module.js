//to get the http module in http variable
import { createServer } from 'http'


//to create e server . the callback function takes two
//parameter request and response

 const server = createServer((req,res)=>{
   console.log(req.url)
   res.end('<h1>you are beauty nodejs.</h1>')
   
})

// to run server we need a port to listen.

server.listen(4141,()=>{
    console.log("Server is running.")
})