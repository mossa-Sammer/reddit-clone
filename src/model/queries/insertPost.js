const connection = require('../config/conncetion');

exports.insertPost = (id, content) => {
  const sql = {
    text: 'INSERT INTO post (user_id, content) VALUES ($1,$2) returning *',
    values: [
      id,
      content,
    ],
  };
  return connection.query(sql);
};
