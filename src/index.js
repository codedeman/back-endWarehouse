const express = require('express')
require('../src/db/mongoose')
const app = express()

const Product = require('./models/product')

const User =  require('./models/user')
const port = process.env.PORT || 3000

app.use(express.json())



app.post('/product', async(req,res)=>{

    const product =  new Product(req.body)

    try{

        await product.save()
        res.status(201).send(product)
    }catch(e){
        res.status(400).send(e)
    }
    
})

app.get('/product', async (req,res) => {

    try{
        const product =  await Product.find({})
        res.send(product)

    } catch(e) {
        res.status(500).send()
    }

})

app.get('product/:id',async(req,res)=>{


    const _id =  req.param.id 

    try{
        const product =  await Product.findById(_id)
        if(!product){
            return res.status(404).send()
        }
        res.send(500).send()

    }catch (e){
        res.status(500).send()

    }
})

app.get('/user',async(req,res) => {

    try{

        const user =  await User.find({})
        res.send(user)
    } catch (e) {

        res.status(500).send()
    }
})
app.post('/users',async(req,res)=>{

    const user = new User(req.body)
        try{

            await user.save()
            res.status(201).send(user)

        }catch (e) {

            res.status(400).send(e)
        }

})

app.get('/users',async(req,res) =>{

    try{

        const user = await User.find({})
        res.send(user)

    }catch(e){
        res.status(500).send()
    }

})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})



app.listen(port,() => {

    console.log('Server is up on port'+port)
})