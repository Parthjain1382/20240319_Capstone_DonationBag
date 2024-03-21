// Importing external dependencies
import express from "express";
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Importing internal dependencies (Model, Validators)
import User from "../model/Users.js";
import Orphanage from "../model/orphanage.js"
import { emailValidator, passwordValidator, usernameValidator,phoneNumberValidation } from "../dependencies/validations/userValidations.js";
import signupValidation from "../dependencies/validations/signupValidation.js";

// Creating an Express Router
const orphanageRouter = express.Router();

//Get the orphanage List which is closest to the today's date
orphanageRouter.get('/orphanageList', async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();

    // Find the orphanages whose dates are closest to today's date
    const orphanages = await Orphanage.find().sort({ DateofPost: 1 }).limit(3); // Limit the results to 3 orphanages

    // Return the closest orphanages
    res.json(orphanages);
  } catch (error) {
    console.error('Error fetching closest orphanages:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Post the New Orphanage in the Collection
orphanageRouter.post('/addNewOrphanage',async (req, res)=>{
  try {
    // Extract data from the request body
    const {
      orphanageName,
      orphanageEmail,
      address,
      description,
      contactInfo,
      needs,
      imageUrl,
    } = req.body;


    // Create a new orphanage object using the Orphanage model
    const newOrphanage = new Orphanage({
      orphanageName,
      orphanageEmail,
      address,
      description,
      contactInfo,
      needs,
      imageUrl,
    });

    // Save the new orphanage to the database
    const savedOrphanage = await newOrphanage.save();

    // Return a success response with the saved orphanage data
    res.status(201).json(savedOrphanage);
  } catch (error) {
    // Handle errors
    console.error('Error adding new orphanage:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})


export default orphanageRouter