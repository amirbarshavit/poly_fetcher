require('newrelic');
const express = require('express');
const polymarket = require('./polyMarketService')
const app = express();

// Define a route to handle GET requests
app.get('/', async (req, res) => {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // Throw an error 20% of the time
    
    const data = await polymarket.fetchData();
    // Send the data as a JSON response
    res.json(data);``
});

// Start the server
const port = 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});