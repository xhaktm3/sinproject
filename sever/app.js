const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

app.use(bodyParser.json())
app.use('/',router);
app.use(express.static('static'));

app.set('views',__dirname + '/static');
app.engine('html', ejs.renderFile);

const server = app.listen(8000, () => {
    console.log("We made a server!");
})