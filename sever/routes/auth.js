const express =require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use('/', authMiddleware); // "/"온 요청을 authmiddleware로 거쳐 사용

router.get('/login', (req,res)=>{
    res.send("You logged in :)");
})

module.exports = router; //module화 이후 외부 이용가능