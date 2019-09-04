const bcrypt = require('bcrypt');

exports.hash = (password) => {
  // eslint-disable-next-line no-new
  bcrypt.genSalt(10)
    .then((salt) => {
      bcrypt.hash(password, salt);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

exports.comparePassword = (actual, expected) => bcrypt.compare(actual, expected);
