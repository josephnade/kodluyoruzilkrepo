const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("Index sayfası");
});
app.get('/about', (req, res) => {
    res.status(200).send("About sayfası");
});
app.get('/contact', (req, res) => {
    res.status(200).send("Contact sayfası");
});
app.get('*', (req, res) => {
    res.status(404).send("Sayfa bulunamadı");
});

app.listen(port, () => {
    console.log(`Port ${port} dinleniyor`);
});