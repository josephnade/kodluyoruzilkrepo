const http = require('http');

function htmlTitleGenerator(text) {
    return `<h2>${text}</h2>`;
}

const port = 5000;
const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
    });

    const url = req.url;
    if (url === '/') res.write(htmlTitleGenerator("Index sayfasına hoşgeldiniz"));
    else if (url === '/hakkimda') res.write(htmlTitleGenerator("Hakkımda sayfasına hoşgeldiniz"));
    else if (url === '/iletisim') res.write(htmlTitleGenerator("İletişim sayfasına hoşgeldiniz"));
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8',
        });
        res.write(htmlTitleGenerator("Sayfa bulunamadı"));
    }
    res.end();
});

server.listen(port, 'localhost', () => {
    console.log(`Port ${port} dinleniyor`);
});