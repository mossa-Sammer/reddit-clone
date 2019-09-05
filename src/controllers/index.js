const router = require('express').Router();
const postUser = require('../signup/index');
const { clientError, serverError } = require('./error');
const { login } = require('../login/login');

router.get('/', (req, res) => {
  res.send('keep it simple for now');
});

router.use(postUser);
router.use('/login', login);
router.use(clientError);
router.use(serverError);
module.exports = router;
