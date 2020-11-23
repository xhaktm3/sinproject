const express = require('express');
const path = require("path");
const authRouter = require('./auth');

const router = express.Router();

router.use('/auth', authRouter)

router.get('/', (req,res)=>{
    res.send('Hello World!');
})

router.get('/id/:id',(req,res)=>{
    res.send('You enter in ' + req.params.id);
})

router.get('/query',(req,res)=>{
    res.send('Id is ' + req.query.id + 'and Password is '+ req.query.password);
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

module.exports = router;