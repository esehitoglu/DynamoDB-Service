const express = require('express')
const app = express()
const endpoint = require('./routes/api')
const jwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

app.use(express.json())
//app.use(jwt())
app.use('/api',endpoint)
app.use(errorHandler)


app.listen(3000,(req,res)=>{
    console.log("çalıştı")
}) 