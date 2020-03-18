// VARIABLES //
const express = require('express');
const app = express();
const port = 5000;
const foods = require('./api/foods.js')

// READ (GET)
app.get('/foods', (req, res) => {
  res.json(foods)
})


app.listen(port, () => {
  console.log('listening...');
})
