const express = require('express')
const jwt = require('jsonwebtoken')
const bearerToken = require('express-bearer-token')
const app = express()
app.use(bearerToken())

const secret = process.env.JWT_SECRET
app.get('/', function (req, res) {
  let token = req.token
  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      console.log(err)
      return res.send('No')
    }
    console.log(decoded) // check some claims etc...
    res.send('Welcome')
  })
})

app.listen(5002, function () {
  console.log('Example app listening on port 5002!')
})
