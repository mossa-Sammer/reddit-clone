const router = require('express').Router();
const postUser = require('./signup');
const { clientError, serverError } = require('./error');
const { login } = require('./login/login');
const { addPost } = require('./posts/insertPost');

router.get('/', (req, res) => {
  res.send('keep it simple for now');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/sign?-up', (req, res) => {
  res.render('signup');
});
router.use(postUser);
router.post('/login', login);
router.post('/add-post', addPost);
router.use(clientError);
router.use(serverError);
module.exports = router;
