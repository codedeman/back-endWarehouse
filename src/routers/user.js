const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const jwt = require('jsonwebtoken')

router.post('/users', auth,async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const  token = await user.generateAuthToken()

        res.status(201).send({user,token})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login',async(req,res) =>{

    try{
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
            )
            const token = await user.generateAuthToken()
            res.send({user,token})
    }catch (e){

        res.status(400).send(e)
    }

})


router.get('/users',auth, async (req, res) => {

    // res.send(req.user)

    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res) => {
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

router.delete('/users/id',auth,async(req,res)=>{
    
    console.log("what do want to delete")
    try{
        const user = await User.findById(_id)
        await user.remove()
        // res.send(req.user)
    }catch(e){
        res.status(500).send()
    }

})

router.post('users/logout',auth, async(req,res) =>{

    try {
        
        req.user.token =  req.user.token.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }

})


module.exports = router
