const validate = require('validator')

const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema()
const User = mongoose.model('User',{

    email:{

        type:String,
        require:true,
        lowercase:true,
        validate(value){

            if(!validate.isEmail(value)){

                throw new Error('Email is invalid ')
            }
        }
    },
    password:{
        type:String,
        require:true

    }

    

})

UserSchema.pre('save',async (nex)=>{

    const user =  this
    console.log('just before saving')
    next()
})

module.exports = User