const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();
app.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  next();
});

module.exports = router;


/* const express = require('express');
const path = require("path");
const authRouter = require('./auth');
const mongoose = require('mongoose');
const cors = require('cors');

//router
const router = express.Router();

router.use('/auth', authRouter) //auth라는 router가 들어오면 authRouter로 보내주겠다.   
router.use(cors());

router.get('/', (req,res)=>{
    res.send('Hello World!');
})

router.get('/id/:id',(req,res)=>{
    res.send('You enter in ' + req.params.id);
})

router.get('/query',(req,res)=>{
    res.send('Id is ' + req.query.user + 'and Password is '+ req.query.password);
})

router.get('/html', (req,res)=>{
    res.render('login.html');
})

router.post('/login-post',(req,res)=>{
    const password = "ilovesparcs";
    console.log(req.body.content)
    if (req.body.content === password)
        res.send("You Logged In!")
    else res.send("Fail To Login")
})

module.exports = router; */