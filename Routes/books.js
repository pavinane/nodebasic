const express = require("express");
const books = express.Router();



// this is another type of declare both get and post method
books.route('/books')
.get((req,res)=>{
    res.send("All books of Marvels comics");
})
.post((req,res) => {
    res.json({data:"Comics are stored in database"})
})
// this is another type of declare both get and post method

books.get("/books/:id",(req,res) => {
    // console.log(req.params)
    res.send(`The Book name is IronMan , him Book number is ${req.params.id}`)
})


module.exports = books;