const connection = require('../config/conncetion');

exports.getUserByEmail = (email) => {
  const sql = {
    text: 'SELECT name,user_id, email,password FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql);
};

exports.getUserById = (id) => {
  const sql = {
    text: 'SELECT user_id ,name From users WHERE user_id=$1',
    values: [id],
  };
  return connection.query(sql);
};
