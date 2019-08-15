const express = require('express')
require('../src/db/mongoose')
const app = express()

const productRouter = require('./routers/product')

const userRouter  =  require('./routers/user')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(productRouter)






app.listen(port,() => {

    console.log('Server is up on port'+port)
})