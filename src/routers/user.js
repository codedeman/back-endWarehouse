const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const jwt = require('jsonwebtoken')

router.post('/users', async (req, res) => {
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


router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
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
        res.send(req.user)
    }catch(e){
        res.status(500).send()
    }

})



module.exports = router
