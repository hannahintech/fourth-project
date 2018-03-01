const User = require('../models/user');
const Place = require('../models/place');

function usersIndexRoute(req, res, next) {
  User
    .find()
    .exec()
    .then((users) => res.json(users))
    .catch(next);
}

function usersShowRoute(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if (!user) return res.notFound();

      Place
        .find({ createdBy: user.id })
        .exec()
        .then(places => {
          return res.status(200).json({ user, places });
        });
    })
    .catch(next);
}

function usersUpdateRoute(req, res, next) {
  User
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(user => {
      if (!user) return res.notFound();
      return res.status(200).json(user);
    })
    .catch(next);
}

function usersDeleteRoute(req, res, next) {
  User
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.status(204).end();
    })
    .catch(next);
}


// function userPlacesShow(req, res, next) {
//
//   Place
//     .findById(req.params.id)
//     .populate('createdBy')
//     .exec()
//     .then((place) => {
//       console.log(place.createdBy, req.currentUser);
//       // if(!req.currentUser) {
//       //   return res.notFound();
//       // } else (place.createdBy === req.currentUser);
//       // return res.json(place);
//     })
//     .catch(next);
// }


module.exports = {
  show: usersShowRoute,
  update: usersUpdateRoute,
  delete: usersDeleteRoute,
  index: usersIndexRoute
  // placesShow: userPlacesShow
};
