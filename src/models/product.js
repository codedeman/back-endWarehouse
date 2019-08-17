const mongoose = require('mongoose')
const validate = require('validator')
const Product = mongoose.model('Product',{

    product_code:{
        type:String,
        require:true

    },
    product_name:{

        type:String
    }
    ,
    price:{
        type:Number,
        validate(value){

            if(value<0){

                throw new Error("Price must be postive number")
            }
        }
       
    },
    amount:{
        
        type:Number
        // validate(value){

        //     if(value<0){

        //         throw new Error("Price must be postive number")
        //     }
        // }
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }


})


module.exports = Product