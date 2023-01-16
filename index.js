const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Hello welcome to my server");
    } else if (req.url==='/user') {
        fs.readFile('user.json', "utf-8", (err,data) => {
            console.log(data)
        })
    }
})

server.listen(4200, "127.0.0.1", () => {
    
})
    