import mongoose from "mongoose";

const OrphanageSchema= new mongoose.Schema({
  orphanageName: {
    type: String,
    required: true
  },
  orphanageEmail:{
    type:String,
    required:true
  },
  address: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  },
  needs: {
      beds: {
        type:Number,
        required: true 
        
      },
      clothes: {
        type: Number,
        required: true 
      },
    },  

  contactInfo:{
    type:String,
    required:true
  }
})


const Orphanage = mongoose.model("Orphanage", OrphanageSchema);
export default Orphanage;