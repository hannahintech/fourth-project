const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Place = require('../models/place');

mongoose.connect(db[env]);
Place.collection.drop();

const placeData = [{
  name: 'Mill House Poland',
  location: { lat: 51.086812, lng: 15.133495 },
  image: 'https://i.pinimg.com/736x/49/68/1d/49681dd3cd0656fb73f1e7904cf8cff9--poland-house.jpg'
}, {
  name: 'Palace Ruins',
  location: { lat: 51.0862256, lng: 15.146322 },
  image: 'https://mw2.google.com/mw-panoramio/photos/medium/56920051.jpg'
}, {
  name: 'Platerowka',
  location: { lat: 51.0595615, lng: 15.1543212 },
  image: 'https://mw2.google.com/mw-panoramio/photos/medium/56179112.jpg'
}];

Place.create(placeData)
  .then(places => console.log(`${places.length} places created!`, `data: ${placeData}`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
