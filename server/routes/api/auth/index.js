const express = require('express');
const auth = express.Router();
const cors = require('cors');
const app = express();
app.use(cors());

const authc = require('./authcontroller');

auth.post('/signup', authc.createUser);
auth.post('/login', authc.login);
auth.post('/logout', authc.logout);
auth.post('/check', authc.check);

module.exports = auth;