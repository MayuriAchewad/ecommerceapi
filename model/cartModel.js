const mongoose=require("mongoose")

const cartModel= mongoose.model("carts",{
    image:{type:String},
    price:{type:Number},
    title:{type:String},
    description:{type:String},
    category:{type:String},
    rating:{type:Number},
    quantity:{type:Number},
})

module.exports=cartModel;