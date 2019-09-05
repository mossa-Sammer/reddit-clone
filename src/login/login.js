const { getUser } = require('../model/queries/getUser');
const { createToken } = require('../utils/cookie');
const { comparePassword } = require('../utils/password');

exports.login = (req, res, next) => {
  let storedUser;

  getUser(req.body)
    .then((user) => {
      [storedUser] = [user.rows[0]];

      if (storedUser === undefined) {
        res.send('user not found');
      } else {
        comparePassword(req.body.password, storedUser.password)
          .then((authed) => {
            if (authed) {
              return createToken(String(storedUser.user_id));
            } return res.send('not authed');
          })
          .then((token) => {
            res.cookie('user', token);
            res.cookie('username', storedUser.name);
            res.send('welcome');
          })
          .catch((err) => { next(err); });
      }
    });
};
