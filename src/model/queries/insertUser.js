const connection = require('../config/conncetion');

exports.insertUser = ({
  name,
  email,
  password,
  dateOfBirth,
  mobileNo,
}) => {
  const sql = {
    text: 'INSERT INTO users (name,email,password,date_of_birth,mobile_no) VALUES ($1,$2,$3,$4,$5) returning *',
    values: [
      name,
      email,
      password,
      dateOfBirth,
      mobileNo,
    ],
  };
  return connection.query(sql);
};
