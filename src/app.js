const express = require('express');
const dotenv = require('dotenv');
const app = express();


// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

// GET route to retrieve the secret number from the .env file
app.get('/api/get-env', (req, res) => {
    const number = process.env.NUMBER;

    if (number) {
        res.status(200).json({ number });
    } else {
        res.status(404).json({ err: "Not Found" });
    }
});

module.exports = app;
