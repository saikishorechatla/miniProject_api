const mongoose = require("mongoose");
  

const StudentSchema = mongoose.Schema({
    id:{
        type:String ,
        required : true
    },
    name :{
        type:String,
        required :true
    },
    email :{
        type:String,
        required :true
    }
}, { timestamp : true})

const Student = mongoose.model("Student" , StudentSchema);

module.exports= Student