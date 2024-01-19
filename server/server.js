import express from 'express';
const app = express();
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const uri = "mongodb+srv://benjaminsmithep:Abucus-octopod12@mongodb.vhkp1oc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3001/todos");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

app.use(express.json());
app.use(cors());

import Todo from './models/Todo.js';

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todo/new', (req, res) => {
  const todo = new Todo({
  text: req.body.text
  });
  todo.save();

  res.json(todo);
});
// emitter.setMaxListeners(15);
app.listen(3001, () => console.log("Server started on port 3001"));