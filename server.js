const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productModel = require("./model/productModel");
const cartModel = require("./model/cartModel");
const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").then(()=>{
    console.log("mongoose is connected");
})

app.get("/getproduct",async(req,res)=>{
    const result = await productModel.find({});
    res.send(result)
})

app.get("/getcart",async(req,res)=>{
    const result = await cartModel.find({});
    res.send(result)
})

app.post("/addproduct",async(req,res)=>{
    const result = new productModel(req.body);
    await result.save()
    res.send("successfully added new products")
})

app.post("/addcart",async(req,res)=>{
    const result = new cartModel(req.body);
    await result.save()
    res.send("successfully added new cart")
})

app.post("/update", async(req,res)=>{
    const result = await productModel.findOneAndUpdate({_id:req.body._id},req.body)
    res.send("updated")
})

app.post("/delete",async(req,res)=>{
    const result= await productModel.deleteOne(req.body)
    res.send("deleted products from product list")
})

app.post("/deletecart",async(req,res)=>{
    const result= await cartModel.deleteOne(req.body)
    res.send("deleted products from cart list")
})

app.listen(1032,()=>{
    console.log(("server is connected successful on 1032"));
})