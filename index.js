require('newrelic');
const express = require('express');
const polymarket = require('./polyMarketService')
const app = express();

// Define a route to handle GET requests
app.get('/', async (req, res) => {
    const randomNumber = Math.random();

    try {
        if (randomNumber < 0.6) {
            throw new Error('Could not fetch data');
        }
    } catch (error) {
        res.status(500).send(error.message);
        return;
    }
    const data = await polymarket.fetchData();
    // Send the data as a JSON response
    res.json(data);``
});

// Start the server
const port = 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});