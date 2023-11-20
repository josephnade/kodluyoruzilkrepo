const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (url === "/") res.write("<h1>Index Sayfası</h1>");
    else if (url === "/about") res.write("About Sayfası");
    else if (url === "/contact") res.write("Contact Sayfası");
    else res.write("404 Not found");
    console.log("Bir istek oluşturuldu");

    res.end();
});

const port = 3000;

server.listen(port, 'localhost', () => {
    console.log(`Port ${port} dinleniyor`);
});