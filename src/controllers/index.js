const router = require('express').Router();
const postUser = require('../signup/index');

router.get('/', (req, res) => {
  res.send('keep it simple for now');
});

router.use(postUser);
module.exports = router;
