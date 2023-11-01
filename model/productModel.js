const mongoose=require("mongoose")

const productModel= mongoose.model("products",{
    image:{type:String},
    price:{type:Number},
    title:{type:String},
    description:{type:String},
    category:{type:String},
    rating:{type:Number}
})

module.exports=productModel;