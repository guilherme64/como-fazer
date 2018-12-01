const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const categorias = require('./routes/categorias');
const publicacoes = require('./routes/publicacoes');
app.set('view engine', 'pug');
app.get('/', (req, res) => res.render('header'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/categorias', categorias);
app.use('/publicacoes', publicacoes);
const port = process.env.port || 5000;

console.log('hue');



app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log('Server is running on port ' + port);
});