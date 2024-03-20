import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  contactInfo:{
    type:Number,
    required:false
  },
  adminemail:{ 
    type:String,
    required:true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 200,
  },
})

const adminDB=mongoose.model("MiddleMan",adminSchema)
export default adminDB