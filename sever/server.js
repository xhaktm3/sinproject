const express = require('express');
const path = require("path");
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

const server = app.listen(8000, () => {
    console.log("We made a server!");    
})