const express = require("express");
const router = express.Router();
const books = require("./books");
const heros = require("./heros");
const path = require('path')

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


// set folder path using (path.join and __directfile and onestep ahead using ../)

router.get('/read-file',(req,res) =>{
    res.sendFile(path.join(__dirname,"/../Page/home.html"));
});

// declared value throught the router : this is template engine



router.get('/value-declare', (req, res) => {
    res.render('index', {name:"pavimegan"})
  })

router.all('/*',(req,res) => {
    res.send("Page not found")
});


module.exports = router;