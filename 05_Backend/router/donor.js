// Importing external dependencies
import express from "express";
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Importing internal dependencies (Model, Validators)
import requireLogin from "../middleware/requireLogin.js";
import User from "../model/Users.js";
import Orphanage from "../model/orphanage.js"
import { emailValidator, passwordValidator, usernameValidator } from "../dependencies/validations/userValidations.js";
import signupValidation from "../dependencies/validations/signupValidation.js";
import Donation from "../model/donation.js";

// Creating an Express Router
const donorRouter=express.Router()

//Get all the User whose role is "CompanyUser"
donorRouter.get('/donorList', async (req, res) => {
  try {
    //Finding the role==="CompanyUser"
    const companyUsers = await User.find({ role: 'CompanyUser' });
    // Return the list of company users
    res.json(companyUsers);
  } catch (error) {
    console.error('Error fetching company users:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// API endpoint for donor to make a payment to an orphanage
// donorRouter.post('/donate', requireLogin, async (req, res) => {
//   try {
//     const { user } = req;
//     // Extract donation details from request body
//     const { orphanageId, beds, clothes } = req.body;

//     // Validate donation details
  

//     // Find the orphanage by ID
//     const orphanage = await Orphanage.findById(orphanageId);
//     if (!orphanage) {
//       return res.status(404).json({ error: 'Orphanage not found' });
//     }

//     // Create a new donation
//     const donation = new Donation({
//       orphanageId:orphanageId,
//       donorID: req.user._id, // Assuming you have user details stored in req.user after authentication
//       donerThings: { beds, clothes },
//       status: 'Pending', // Assuming the initial status is 'Pending'
//       date: new Date() // Assuming the current date is the donation date
//     });

//     // Save the donation to the database
//     await donation.save();

//     // Send success response
//     return res.status(200).json({ message: 'Donation successful', donation });
//   } catch (error) {
//     console.error('Error making donation:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });


export default donorRouter
