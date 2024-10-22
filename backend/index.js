import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';



dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
    origin: true
};

app.get('/', (req, res) => {
    res.send('Api is working');
});

// Database connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB database is connected');
    } catch (error) {
        console.log('MongoDB database connection failed:', error);
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use("/api/v1/reviews", reviewRoute);


app.listen(port, () => {
    console.log('Server is starting on port ' + port);
    connectDB();
    console.log('Server is running on port ' + port);
});
