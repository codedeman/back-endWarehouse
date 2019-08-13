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

})


module.exports = Product