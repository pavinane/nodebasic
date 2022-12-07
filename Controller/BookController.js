const connect = require('../Database/db')
const { ObjectID } = require("mongodb");

exports.index = async(req,res)=>{
    const db = await connect();
    const books = await db.collection('book').find().toArray();
    // res.send("All books of Marvels comics");
    res.json(books)
}

exports.store = async(req,res) => {

    const db = await connect();

    const title = req.title;
    const author = req.author;

    await db.collection("book").insertOne(title,author);

    res.status(201).json({data:"Comics are stored in database"})
}

exports.getdata = async(req,res) => {
    // console.log(req.params)
    const _id =     ObjectID(req.params.id);      
    const db = await connect();
    const books  =  await db.collection("book").find({_id }).toArray();
    res.json(books)
    // res.send(`The Book name is IronMan , him Book number is ${req.params.id}`)
}

exports.updatedata  = async(req,res) => {
    // console.log(req.params)
    const _id = ObjectID(req.params.id);      
    const db = await connect();
    await db.collection("book").updateOne({_id},{$set:req.body});
    res.json({'data':"Books is updated"})
    // res.send(`The Book name is IronMan , him Book number is ${req.params.id} to update` )
}

exports.deletedata  = async(req,res) => {
    const _id = ObjectID(req.params.id); 
    const db = await connect();
    await db.collection("book").deleteOne({_id},{$set:req.body})
    res.status(203).json({'data':"Books is Deleted"})
    // console.log(req.params)
    // res.send(`The Book name is IronMan , him Book number is ${req.params.id} to delete`)
}