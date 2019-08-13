const validate = require('validator')

const mongoose = require('mongoose')
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
    user_name:{
        type:String,
        require:true

    },
    phone_number:{
        type:String,
        require:true
    }

})

module.exports = User