const http = require("http");


const PORT = 4000

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

console.log(`Server Running at http://localhost:${PORT}`);
server.listen(PORT);