const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('keep it simple for now');
});

module.exports = router;
