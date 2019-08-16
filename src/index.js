const express = require('express')
require('../src/db/mongoose')
const app = express()

const productRouter = require('./routers/product')

const userRouter  =  require('./routers/user')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(productRouter)
// app.use((req,res,next)=>{

//     if(req.method ==='GET'){
//         res.send('Get requests are disable')

//     }else{

//         next()
//     }
//     // console.log(req.method,req.path)
//     // next()
// })

// app.use((req,res, next)=>{

//     res.status(503).send("Site currently down . check back soon!")
// })

app.listen(port,() => {

    console.log('Server is up on port'+port)
})