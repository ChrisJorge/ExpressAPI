const express = require('express');
const app = express()
const port = 3000

const food = require('./data/food.js')


app.listen(port, (req,res) => {
    console.log(`Listening on port ${port}`)
})