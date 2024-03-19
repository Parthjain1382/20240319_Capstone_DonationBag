import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  username:{
    type:String
  },
  adminemail:{ 
    type:String,
    required:true
  }
})

const adminDB=mongoose.model("MiddleMan",adminSchema)
export default adminDB