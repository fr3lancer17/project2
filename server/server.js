import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import axios from 'axios';
import ejs from 'ejs';
import router from 'express';

const app = express();

dotenv.config();

export const uri = "mongodb+srv://benjaminsmithep:Abucus-octopod12@mongodb.vhkp1oc.mongodb.net/?retryWrites=true&w=majority";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};
connectToDatabase();
async function fetchData() {
  try {
    const response = await fetch("http://localhost:3001/inquiries");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
app.listen(3001, () => console.log("Server started on port 3001"));