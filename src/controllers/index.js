const router = require('express').Router();
const postUser = require('../signup/index');
const { clientError, serverError } = require('./error');

router.get('/', (req, res) => {
  res.send('keep it simple for now');
});

router.use(postUser);
router.use(clientError);
router.use(serverError);
module.exports = router;
