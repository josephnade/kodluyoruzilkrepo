const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.URL.pathname === '/') ctx.body = '<h1>Index Sayfası</h1>';
    if (ctx.URL.pathname === '/hakkimda') ctx.body = '<h1>Hakkımda Sayfası</h1>';
    if (ctx.URL.pathname === '/iletisim') ctx.body = '<h1>İletişim Sayfası</h1>';
});

app.listen(3000);