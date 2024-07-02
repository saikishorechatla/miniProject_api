const express = require('express')
const app = express()

const Product = require('./models/product')

const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/Node-Api').then(()=>{console.log('connected to Database')}).catch((err)=> err.message)

app.use(express.json())
app.get('/',(req,res)=>{
   res.send('Hello from Node Api')
})

app.get('/api/products', async (req, res)=>{
   try{
        const products = await Product.find({});
        res.status(200).json(products)
   }catch(err){
      res.status(500).json({message : err.message})
   }
})

app.get('/api/products/:id', async (req, res)=>{
   try{
      const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
   }catch(err){
      res.status(500).json({message : err.message})
   }
})

app.post('/api/products', async (req,res)=>{
   try{
       const product = await Product.create(req.body);
       res.status(200).json(product);
   }catch(err){
    res.status(500).json({message :console.err.message})
   }
})


app.listen(5000,()=>{
    console.log('connected to 5000')
})


const Student = require('./models/student')

const obj = {
   id:"2100032302",
   name:"Kishore",
   email:"2100032302cseh@gmail.com"
}

Student.create(obj)