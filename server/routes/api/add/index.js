const express = require('express');
const add = express.Router();
const cors = require('cors');
const app = express();
app.use(cors());

const addc = require('./addcontroller');

add.post('/create', addc.createPlan);
add.post('/join', addc.joinPlan);
add.get('/show', addc.showPlan);

module.exports = add;