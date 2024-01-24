import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import axios from 'axios';
const app = express();

dotenv.config();

export const uri = "mongodb+srv://benjaminsmithep:Abucus-octopod12@mongodb.vhkp1oc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

app.use(express.json());
app.use(cors());
const getPictures = axios.get('https://api.unsplash.com/photos/', {
  params: {
    client_id: 'zmXlFBmzUt_Jx5BsLW1909vUd_dE5ZwMkr1Lyuvmw00'
  }
})
  .then(response => {
    // Handle the response data here
    // console.log(response.data);
    const data = response.data;
    const urls = data.map(photo => photo.urls.full)
    console.log(urls)
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });

console.log(getPictures[0])
app.listen(3004, () => console.log("Server started on port 3001"));