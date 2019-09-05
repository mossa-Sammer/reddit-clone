const router = require('express').Router();
const postUser = require('./postUser');

router.route('/signup')
  .post(postUser);

module.exports = router;
