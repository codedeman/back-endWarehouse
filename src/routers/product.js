const express = require('express')
const Product = require('../models/product')
const router = new express.Router()


router.post('/products', async(req,res) => {

    const product =  new Product(req.body)

    try{

        await product.save()
        res.status(201).send(product)
    }catch(e){
        res.status(400).send(e)
    }
    
})

router.get('products/:id',async(req,res)=>{


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

router.get('/products', async (req, res) => {
    try {
        const tasks = await Product.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router