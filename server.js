const express = require('express');
const app = express()
const port = 3000

const food = require('./data/food.js')
const drinks = require('./data/drinks.js')
const desserts = require('./data/desserts.js')
console.log(desserts)


app.listen(port, (req,res) => {
    console.log(`Listening on port ${port}`)
})