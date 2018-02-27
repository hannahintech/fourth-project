const Place = require('../models/place');

function entriesIndex(req, res, next) {
  Place
    .find()
    .exec()
    .then(entries => res.json(entries))
    .catch(next);
}

function entriesCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Place
    .create(req.body)
    .then(place => res.status(201).json(place))
    .catch(next);
}

function entriesShow(req, res, next) {
  Place
    .findById(req.params.id)
    .exec()
    .then((place) => {
      if(!place) return res.notFound();
      res.json(place);
    })
    .catch(next);
}

function entriesUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Place
    .findById(req.params.id)
    .exec()
    .then((place) => {
      if(!place) return res.notFound();
      place = Object.assign(place, req.body);
      return place.save();
    })
    .then(place => res.json(place))
    .catch(next);
}

function entriesDelete(req, res, next) {
  Place
    .findById(req.params.id)
    .exec()
    .then((place) => {
      if(!place) return res.notFound();
      return place.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: entriesIndex,
  create: entriesCreate,
  show: entriesShow,
  update: entriesUpdate,
  delete: entriesDelete
};
