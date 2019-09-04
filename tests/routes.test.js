const tape = require('tape');

tape('simple test', (t) => {
  t.equal(1, 1, 'simple test should pass');
  t.end();
});
