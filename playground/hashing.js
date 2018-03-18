const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')

const data = {
	id: 4
}

var token = jwt.sign(data, '123somedata')

var decoded = jwt.verify(token, '123somedata')

console.log(token)
console.log(decoded)