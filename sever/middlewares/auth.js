const password = "ilovesparcs";

function authMiddleware (req, res, next) {
    if (req.query.password === password) {
        next()
    }
    else res.send("fail to login")
}

module.exports = authMiddleware;