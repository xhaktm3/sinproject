const password = "ilovesparcs";

function authMiddleware (req, res, next) {
    if (req.query.password === password) {
        next() //다음 명령어 실행
    }
    else res.send("fail to login")
}

module.exports = authMiddleware;