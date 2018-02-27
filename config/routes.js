const router = require('express').Router();
// const secureRoute = require('../lib/secureRoute');
const entries  = require('../controllers/entries');
const auth  = require('../controllers/auth');

router.route('/entries')
  .get(entries.index)
  .post(entries.create);

router.route('/entries/:id')
  .get(entries.show)
  .put(entries.update)
  .delete(entries.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
