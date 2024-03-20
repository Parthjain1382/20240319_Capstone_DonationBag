import mongoose from "mongoose";
import Orphanage from "./orphanage.js";
import donor from "./Donor.js";

const donationSchema = new mongoose.Schema({
  orphanageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Orphanage,
    required:true
  },
  donorID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:donor,
    required:true
  },
  donerThings:{
    beds: {
      type:Number,
      required: true 
      
    },
    clothes: {
      type: Number,
      required: true 
    },
  },
  status:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
  }
});

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
