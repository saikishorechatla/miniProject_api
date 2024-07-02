const express = require('express')
const app = express()

const mongoose = require('mongoose')
const route = require('./router/route')
 mongoose.connect('mongodb://localhost:27017/Node-Api').then(()=>{console.log('connected to Database')}).catch((err)=> err.message)

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use('/api/',route)
app.listen(5000,()=>{
    console.log('connected to 5000')
})



const Student = require('./models/student')

const obj = {
   id:"2100032302",
   name:"Kishore",
   email:"2100032302cseh@gmail.com"
}

// Student.create(obj)