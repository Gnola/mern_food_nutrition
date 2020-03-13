// VARIABLES //
const express = require('express');
const app = express();
const port = 5000;
// const bodyParser = require('body-parser');

// DATA //
const foods = require('./api/foods.js')

// MIDDLEWARE //
// app.use(bodyParser.json());


// ROUTES //

// Read
app.get('/foods', (req, res) => {
  res.json(foods)
})

// Create

// Update

// Delete



app.listen(port, () => {
  console.log('listening...');
})
