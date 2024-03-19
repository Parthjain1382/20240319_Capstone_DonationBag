// External dependencies
import express from "express";
import 'dotenv/config';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


import Donation from "./model/donation.js";
import donor from "./model/Donor.js";
import adminDB from "./model/Middleman.js";
import Orphanage from "./model/orphanage.js";

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to Database Successfully");
        app.listen(PORT, () => {
          console.log(` Server is running Listening on port ${PORT}`);
      });
    })
    .catch(error => {
        console.error("Error connecting to database:", error);
    });


// Routes
// Uncomment and import your route files here
// app.use('/', authRouter);
// app.use('/', profileRouter);
// app.use('/', walletRouter);
// app.use('/', checkoutRouter);
// app.use('/', bookingRouter);
// app.use('/', hotelRouter);
// app.use('/', roomRouter);
// app.use('/', reviewRouter);
// app.use('/', searchRouter);

// Start server
const PORT = process.env.PORT || 3005;

