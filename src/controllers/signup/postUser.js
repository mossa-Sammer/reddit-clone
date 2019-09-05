const { insertUser } = require('../../model/queries/insertUser');
const { getUserByEmail } = require('../../model/queries/getUser');
const { hash } = require('../../utils/password');

module.exports = (req, res, next) => {
  getUserByEmail(req.body.email)
    .then((user) => {
      if (user.rows[0]) { throw new Error('email already exists'); } else return hash(req.body.password);
    })
    .then((hashed) => {
      req.body.password = hashed;
      return insertUser(req.body);
    })
    .then((inserted) => {
      res.redirect('/');
    })
    .catch((err) => {
      if (err.message === 'email already exists') {
        res.send(err.message);
      } else next(err);
    });
};
