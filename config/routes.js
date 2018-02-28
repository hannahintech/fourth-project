const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const places  = require('../controllers/places');
const auth  = require('../controllers/auth');
const users = require('../controllers/users');

router.route('/places')
  .get(places.index)
  .post(places.create);

router.route('/places/:id')
  .get(places.show)
  .put(places.update)
  .delete(places.delete);

router.route('/users')
  .get(secureRoute, users.index);

router.route('/users/:id')
  .get(secureRoute, users.show)
  // .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
