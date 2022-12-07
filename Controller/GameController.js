const connect = require('../Database/db');
// const {ObjectID} = require("mongodb");

exports.index = async(req,res) => {
    const db = await connect();
    const games = await db.collection('games').find().toArray();
    // res.send("All books of Marvels comics");
    res.json(games)
}

exports.store = async(req,res) => {
    const db = await connect();

    await db.collection("games").insertOne(req.body);

    res.status(203).json({data:"Games Data Stored"})

}