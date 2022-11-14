const express = require("express");
const heros = express.Router();





// its declare the id 

heros.get ("/heros",(req,res) => {
    res.send("All Heros of Marvels");
})

heros.get("/heros/:id",(req,res) => {
    // console.log(req.params)
    res.send(`The Hero name is Thor , him number is ${req.params.id}`)
})


module.exports = heros;