const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Place = require('../models/place');
const User = require('../models/user');

mongoose.connect(db[env]);
Place.collection.drop();
User.collection.drop();

const userData = [{
  username: 'hannah',
  email: 'hannah@hannah',
  password: 'hannah',
  passwordConfirmation: 'hannah'
},{
  username: 'andrea',
  email: 'andrea@andrea',
  password: 'andrea',
  passwordConfirmation: 'andrea'
}];

User.create(userData)
  .then(places => console.log(`${places.length} places created!`, `data: ${placeData}`))
  .catch(err => console.log(err));

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
}, {
  name: 'The Crooked House',
  location: { lat: 54.4442013, lng: 18.5645061 },
  image: 'http://englishforarchitects.pbworks.com/f/1264519705/image_03.jpg'
}];

Place.create(placeData)
  .then(places => console.log(`${places.length} places created!`, `data: ${placeData}`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
