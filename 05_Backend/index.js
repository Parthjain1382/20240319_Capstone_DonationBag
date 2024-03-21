// External dependencies
import express from "express";
import 'dotenv/config';
import cors from 'cors';
import { connectDatabase } from "./database.js";

// Internal dependencies
import authRouter from "./router/auth.js";
import userRouter from "./router/userrouter.js";
import orphanageRouter from "./router/orphanage.js";
import donorRouter from "./router/donor.js";
// import { connectDatabase } from "./database.js";
// import { setupSwagger } from "./swaggerSetup.js";
// import profileRouter from "./routes/profile.js";
// import walletRouter from "./routes/wallet.js";
// import checkoutRouter from "./routes/checkout.js";
// import bookingRouter from "./routes/booking.js";
// import hotelRouter from "./routes/hotel.js";
// import roomRouter from "./routes/room.js";
// import reviewRouter from "./routes/reviews.js";
// import searchRouter from "./routes/search.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', authRouter);
app.use('/user',userRouter);
app.use('/orphanage',orphanageRouter);
app.use('/donor',donorRouter);
// app.use('/', profileRouter);
// app.use('/', walletRouter);
// app.use('/', checkoutRouter);
// app.use('/', bookingRouter);
// app.use('/', hotelRouter);
// app.use('/', roomRouter);
// app.use('/', reviewRouter);
// app.use('/', searchRouter);

// Connect to MongoDB
connectDatabase();

// // Setup Swagger
// setupSwagger(app);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Server is running Listening on port ${PORT}`);
});
