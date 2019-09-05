const connection = require('../config/conncetion');

exports.getUser = ({ email }) => {
  const sql = {
    text: 'SELECT name,user_id, email,password FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql);
};
