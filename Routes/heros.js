const express = require("express");
const heros = express.Router();
const connect = require('../Database/db')
const { ObjectID } = require("mongodb");


heros.route('/').get(async (req, res) => {
    const db = await connect();
    const heros = await db.collection('hero').find().toArray();
    // res.send("All books of Marvels comics");
    res.json(heros)

}).post(async(req,res) => {
    const db = await connect();
    
    await db.collection("hero").insertOne(req.body);

    res.status(201).json({data:"heros in Marvel Studios"})

})


heros.route("/:id").get(async(req,res)=>{
    const _id = ObjectID(req.params.id);
    const db =await connect();
  const heros  =  await db.collection("hero").find({_id }).toArray();
    res.json(heros)
})




// its declare the id 

// heros.get ("/",(req,res) => {
//     res.send("All Heros of Marvels");
// })

// heros.get("/:id",(req,res) => {
//     // console.log(req.params)
//     res.send(`The Hero name is Thor , him number is ${req.params.id}`)
// })


module.exports = heros;