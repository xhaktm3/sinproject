const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

app.use(bodyParser.json())
app.use('/',router);
app.use(express.static('static')); //static middleware 자동으로 라우팅없이 static폴더안에 내용을 보여줌

app.set('views', __dirname + '/static');
//app.engine('html', ejs.renderFile);

const server = app.listen(8080, () => {
    console.log("We made a server!");
})