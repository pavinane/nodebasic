
const express = require("express");
const books = express.Router();

const BookController = require('../Controller/BookController')

// this is another type of declare both get and post method
books.route('/')
.get(BookController.index)
.post(BookController.store)



// this is another type of declare both get and post method


// combined all routes 
books.route("/:id")
.get(BookController.getdata)
.patch(BookController.updatedata)
.delete(BookController.deletedata)



module.exports = books;