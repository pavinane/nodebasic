const http = require("http");
const fs = require("fs");
const routes = require('./Routes/index')
const PORT = 4000

const server = http.createServer((req,res) => {
    // res.write("Hello World");
    // res.end();

    if(req.url === '/') {
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("Page/home.html","utf8",(err,data)=>{
            if (err) throw err;

            res.write(data);
            res.end();
        })
        
       
        // res.end(
        //     JSON.stringify({
        //         data:"Hello World"
        //     })
        // )
    }
    else if(req.url === '/about') {
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("Page/about.html",(err,data) => {
            if(err) throw err;  
            res.write(data);
            res.end();
        })
       
        // res.end(
        //     JSON.stringify({
        //         data:"Hello About World"
        //     })
        // )
    }else if(req.url === '/create-file') {
        res.writeHead(200,{"Content-Type":"text/html"});
        const data = "<h1>A New File Created</h1>" 

        fs.writeFile("Temp/test.html",data,(err) => {  
            if(err) throw err;
            res.write(data);
            res.end();
        })
       
        // res.end(
        //     JSON.stringify({
        //         data:"Hello About World"
        //     })
        // )
    }    
    else{
            res.writeHead(400,{"Content-Type":"text/html"});
            res.write("<p>404 Page not found</p>")  ;
            res.end();  
    } 

})

console.log(`Server Running at http://localhost:${PORT}`);
server.listen(PORT);