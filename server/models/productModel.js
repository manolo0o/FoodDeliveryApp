const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema(
    {
        product__image : {
            type : 'string',
            required : true,
        }
    },
    {
        product__Name : {
            type : String,
            required : true,
        }
    },
    {
        product__Description : {
            type : String,
            required : true,
        }
    },
    {
        product__ShortDescription : {
            type : String,
            required : true,
        }
    },
    {   
        product__Price : {
            type : Number,
            required : true,
        }
    },
    {
        product__Category : {
            type : String,
            required : true,
        }
    },
    {
        product__Food__Time : { 
            type : String,
            required : true,
        }
    },
    {
        product__calories : {
            type : String,
            required : true
        }
    }
)