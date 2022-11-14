const express = require("express");
const router = express.Router();
const books = require("./books");
const heros = require("./heros");


// this is get method
router.get('/',(req,res) => {
    // myEvent.emit('test-event',{name:"pavinane"})
    res.send("Hello Express js")
})

router.use(books)


router.use(heros)

// Post method

router.post('/',(req,res) => {
    // myEvent.emit('test-event',{name:"pavinane"})
    res.json({Data:"Hello this is post method"})
})

router.all('/*',(req,res) => {
    res.send("Page not found")
})


module.exports = router;