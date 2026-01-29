const jwt = require("jsonwebtoken");

const JWT_KEY = process.env.JWT_KEY;
if (!JWT_KEY) throw "No JWT_KEY!";
const expiresSec = 60 * 60 * 24; // 1 day

const createJwt = data => new Promise((resolve, reject) => {
	jwt.sign({...data, exp: Math.round(Date.now() / 1000) + expiresSec}, JWT_KEY, {}, (err, token) => {
		if (token) resolve(token);
		if (err) reject(err);
	});
});

const verifyJwt = token => new Promise((resolve) => {
	jwt.verify(token, JWT_KEY, {}, (err, res) => {
		if (res) resolve([null, res]);
		if (err) resolve([err]);
	});
});

module.exports = {verifyJwt, createJwt};