const tape = require('tape');
// eslint-disable-next-line no-unused-vars
const dbBulid = require('../src/model/config/db_build');

tape('simple db test', (t) => {
  t.equal(1, 1, 'simple test should pass');
  t.end();
});
