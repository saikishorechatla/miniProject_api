const express = require('express')
const router = express.Router()

const Product = require('../models/product')
const {getById ,getProducts,addProduct,updateById,deleteById} = require('../controllers/func')

router.get('/',(req,res)=>{
    res.send('Hello from Node Api')
 })
 
router.get('/products',getProducts)
 
router.get('/products/:id', getById)
 
router.post('/products', addProduct)

router.put('/product/:id',updateById)
 
router.delete('/products/:id',deleteById)


 module.exports = router