const connection = require('../config/conncetion');

exports.getUser = (email) => {
  const sql = {
    text: 'SELECT email FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql);
};
