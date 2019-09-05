const bcrypt = require('bcrypt');

exports.hash = (password) => new Promise((resolve, reject) => bcrypt.genSalt(10)
  .then((salt) => bcrypt.hash(password, salt))
  .then((hashed) => resolve(hashed))
  .catch((err) => reject(err)));
exports.comparePassword = (actual, expected) => bcrypt.compare(actual, expected);
