const http = require("http");

const server = http.createServer((req,res) => {
    // res.write("Hello World");
    // res.end();
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(
        JSON.stringify({
            data:"Hello World"
        })
    )
})

server.listen(3001);