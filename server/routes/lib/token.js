const jwt = require('jsonwebtoken');
const key = require('../../config');

function generateToken(payload) {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                payload,
                key,
                {
                    expiresIn: '7d'
                }, (error, token) => {
                    if (error) reject(error);
                    resolve(token);

                }
            );
        }
    );
};

function decodeToken(token) {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, key, (error, decoded) => {
                if (error) reject(error);
                resolve(decoded);
            });
        }
    );
};

exports.generateToken = generateToken;
exports.decodeToken = decodeToken;