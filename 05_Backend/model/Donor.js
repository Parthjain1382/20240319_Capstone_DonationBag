import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  Companyemail:{
    type:String,
    required:true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 200,
  },
  address:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:false
  },
  State:{
    type:String,
    required:false
  },
  NumberOfDonor:{
    type:Number,
    required:true
  }
})


const donor = mongoose.model("donor", donorSchema)
export default donor