
const Product = require('../models/product')

async function getProducts(req, res){
    try{
         const products = await Product.find({});
         res.status(200).send(products)
    }catch(err){
       res.status(500).json({message : err.message})
    }
 }
 async function getById(req, res){
    try{
       const {id} = req.params;
         const product = await Product.findById(id);
         res.status(200).json(product)
    }catch(err){
       res.status(500).json({message : err.message})
    }
 }

 async function addProduct(req,res){
    try{
       const {name , quantity, price} =req.body
       const obj = 
       {
          name :name ,
          quantity : quantity,
          price : price
       }
       console.log(object)
        const product = await Product.create(obj);
        res.status(200).json(product);
    }catch(err){
     res.status(500).json({message :err.message})
    }
 }

 async function updateById(req,res){
    try{
        
       const {id} = req.params;
       const product = await Product.findByIdAndUpdate(id,req.body);
       if(!product) return res.status(404).json({message : "Product not found"})
          const updateProduct = await Product.findById(id);
          res.status(200).json(updateProduct)
    }catch(e)
    {
       return res.status(500).json({message:e.message})
    }
 }
 async function deleteById(req,res){
    const {id} = req.params
        try{ const product = await Product.findByIdAndDelete(id)
          if(!product) return res.status(404).json({message : " Product Not  found"})
          res.status(200).json(product)
        }catch(e)
        {
          res.status(500).json({message:e.message})
        }
    
    }
 module.exports= {getProducts,getById,addProduct,updateById,deleteById}