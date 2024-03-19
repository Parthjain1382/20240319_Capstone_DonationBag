import mongoose from "mongoose";
import Orphanage from "./orphanage.js";
import donor from "./Donor.js";

const donationSchema = new mongoose.Schema({
  orphanageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Orphanage,
    required:false
  },
  donorID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:donor,
    required:false
  },
  status:{
    type:String,
    required:true
  }
  // date:{
  //   type:date,
  //   required:true
  // }
});

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
