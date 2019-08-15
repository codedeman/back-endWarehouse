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


    const _id =  req.params.id

    try{
        const product =  await Product.findById(_id)
        // const pr = await Product.findOne({ _id, owner: req.user._id })

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

router.patch('/products/:id',async(req,res) =>{

    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((updates) => allowedUpdates.includes(updates) )

    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates !'})
    }
    try {
        
        const product =  await Product.findOne({_id:req.param.id,owner:req.user._id})
        if(!product)
        {
            return res.status(404).send()
        }
        updates.forEach((update) => tasks[update] = req.body[update])
        await product.save
        res.send(product)
    } catch (error) {

        res.status(400).send(e)
        
    }
})

router.delete('/products/:id',async (req,res) =>{

    try {
        const product = await Product.findOneAndDelete({_id:req.params.id,owner:req.user._id})
        
        if(!product){
            res.status(404).send()
        }
        res.send(product)
    } catch (error) {
        res.status(500).send()
    }
})

// router.

module.exports = router