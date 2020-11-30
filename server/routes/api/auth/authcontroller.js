const User = require('../../../models/user');
const { decodeToken } = require('../../../routes/lib/token');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

//register
exports.createUser = async (req, res) => {
    let existing = null;
    try {
        existing = await User.findByUsername(req.body.username);
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }
    if (existing) {
        res.status(401).json({ message: 'id exits' });
        return;
    }

    let user = null;
    try {
        user = await User.createUser(req.body.username, req.body.password);
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }

    let token = null;
    try {
        token = await user.makeToken();
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }
    res.cookie('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    });
    res.status(200).json({ user: user, access_token: token });
};

//loign
exports.login = async (req, res) => {
    const { username, password } = req.body;
    let user = null;
    try {
        user = await User.findByUsername(username);
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }

    if (!user || !User.verify(username, password)) {
        res.status(402).json({ message: "check id or password again" })
        return;
    }

    /* Create token */
    let token = null;
    try {
        token = await user.makeToken();
    } catch (e) {
        res.status(500).json({ message: e.message });
        return;
    }
    res.cookie('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    });
    res.status(200).json({ username: username, access_token: token });
};

// logout
exports.logout = async (req, res) => {
    res.cookie('access_token', null, {
        httpOnly: true,
        maxAge: 0
    });
    res.status(201);
    res.end();
};

// check token
exports.check = async (req, res) => {
    const user = await decodeToken(req.body.access_token);
    if (!user) {
        res.status(403).json({ message: "Forbidden" })
        return;
    }
    res.json({ user: user });
};