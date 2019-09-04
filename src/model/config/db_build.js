const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./conncetion');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'dbBuild.sql')).toString();
  return connection.query(sql);
};

module.exports = dbBuild;
