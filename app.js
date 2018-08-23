const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('It Works!');
        res.end();
    }
});

server.listen(8082);