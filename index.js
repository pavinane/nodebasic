// const EventEmitter = require("events");
// const myEvent = new EventEmitter();


// myEvent.on("test-event",(data)=>{
//     console.log("this event is listing");
//     console.log(data);
// })

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT  = 4000;
const routes = require("./Routes/index")


// declare value through router
app.set('view engine', 'pug')

// body parser

app.use(bodyParser.json());

// console.log(routes);
app.use(routes)


app.listen(PORT,() => {
    console.log("server created in express js");
})