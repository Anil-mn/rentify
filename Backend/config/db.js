// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbURI = "mongodb://localhost:27017/rentify"; // Replace with your MongoDB connection string

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));






