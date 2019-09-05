/* eslint-disable no-new */
const jwt = require('jsonwebtoken');
require('env2')('config.env');

exports.createToken = (payloads) => new Promise((resolve, reject) => {
  jwt.sign(payloads, process.env.PRIVATE_KEY, (err, jwt) => {
    if (err) { reject(err); } else resolve(jwt);
  });
});
exports.verfiy = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      reject(err);
    } else resolve(decoded);
  });
});
