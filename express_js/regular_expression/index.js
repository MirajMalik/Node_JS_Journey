const express = require('express')
const app = express()
// const router = express.Router()
const PORT = process.env.PORT || 3000


/*
some regular expressions=>
[abc] = Find any char between the brackets
[^abc] = Find any char not between the brackets
[0-9] = Find any digits between the brackets
[^0-9] = Find any non digit NOT between the brackets
[x|y] = Find any of the alternatives specified
 + = specified one or more

*/
/* 
   explanation =>  /^\/products\/(\d+)$/
    ^ = Start of the string (so it matches from the beginning)
    \/products\/ = Matches the literal /products/ part of the URL
    (\d+) = A capturing group — matches one or more digits (0–9)
    ([a-zA-Z]+) =  A capturing group → matches one or more (+) English letters
                  (both lowercase and uppercase)
    $ = End of the string(ensures no extra characters after the number)
    req.params[0] = Refers to the first capturing group 
                  (in this case, the digits matched by (\d+)).

*/
// only digits as a id by using regular expression
app.get(/^\/products\/(\d+)$/, (req, res) => {
  const id = req.params[0];
  res.send(`Product ID: ${id}`);
});

// Match only alphabetic strings

app.get(/^\/products\/([a-zA-Z]+)$/, (req, res) => {
  const id = req.params[0];
  res.send(`Product ID: ${id}`);
});

// Match alphanumeric usernames (letters + numbers)

app.get(/^\/products\/([a-zA-Z0-9]+)$/, (req, res) => {
  const id = req.params[0];
  res.send(`Product ID: ${id}`);
});








app.use((req,res)=>{
    res.status(404).send('<h2>404 Page Not Found</h2>')
})

app.listen(PORT,(req,res)=>{
    console.log(`The server is running at port : http://localhost:${PORT}`)
})