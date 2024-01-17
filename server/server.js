const express = require('express');
const app = express()
const dotenv = require('dotenv');

// loads info from .env file
dotenv.config();

app.get("/api", (reg, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"] })
})

app.listen(5000, () => {console.log("server started on port 5000")})