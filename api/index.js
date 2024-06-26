import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import commentRoute from './routes/commentRoute.js';
import cookieParser from 'cookie-parser';
import  postRoute  from './routes/postRoute.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=> {
    console.log('MongoDb is connected');
}).catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());
app.use(cookieParser());


app.listen(3000, () => {
    console.log('Server listening on port 3000')
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/post', postRoute)
app.use('/api/comment', commentRoute)

app.use((err, req, res, next) => {
     const statusCode = err.statusCode || 500;
     const message = err.message || 'Internal Server Error';
     res.status(statusCode).json({
        success: false,
        statusCode,
        message 
     });
});