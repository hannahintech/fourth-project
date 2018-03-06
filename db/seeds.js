const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Place = require('../models/place');
const User = require('../models/user');

mongoose.connect(db[env]);
Place.collection.drop();
User.collection.drop();

User
  .create([
    {
      firstname: 'Hannah',
      lastname: 'Tucker McLellan',
      username: 'hannah',
      email: 'hannah@hannah',
      password: 'hannah',
      passwordConfirmation: 'hannah'
    },{
      firstname: 'Andrea',
      lastname: 'Campanella',
      username: 'andrea',
      email: 'andrea@andrea',
      password: 'andrea',
      passwordConfirmation: 'andrea'
    }
  ])
  .then(users => {
    console.log(`${users.length} users have been added to the db.`);

    return Place.create([
      {
        location: { 'lat': 52.8353879, 'lng': -110.85868119999998 },
        name: 'Catville!',
        image: 'https://cdn.filestackcontent.com/utO8lZFQfiSuPhvAUT10',
        notes: 'There is actually a place called Catville.',
        publicPlace: true,
        createdBy: users[0]._id
      }, {
        name: 'Mill House Poland',
        location: { lat: 51.086812, lng: 15.133495 },
        image: 'https://i.pinimg.com/736x/49/68/1d/49681dd3cd0656fb73f1e7904cf8cff9--poland-house.jpg',
        notes: 'This is a nice place to stay for a holiday',
        publicPlace: true,
        createdBy: users[0]._id
      }, {
        name: 'Palace Ruins',
        location: { lat: 51.0862256, lng: 15.146322 },
        image: 'https://mw2.google.com/mw-panoramio/photos/medium/56920051.jpg',
        notes: 'This is a nice place to visit if you like old, grand buildings',
        publicPlace: true,
        createdBy: users[1]._id
      }, {
        name: 'Platerowka',
        location: { lat: 51.0595615, lng: 15.1543212 },
        image: 'https://mw2.google.com/mw-panoramio/photos/medium/56179112.jpg',
        notes: 'A lovely country village',
        publicPlace: true,
        createdBy: users[1]._id
      }, {
        name: 'The Crooked House',
        location: { lat: 54.4442013, lng: 18.5645061 },
        image: 'http://englishforarchitects.pbworks.com/f/1264519705/image_03.jpg',
        notes: 'fun architecture, if you are in Sopot, it is a great place to see',
        publicPlace: true,
        createdBy: users[0]._id
      }, {
        name: 'Polish Chicken',
        location: { lat: 51.0595615, lng: 18.5645061 },
        image: 'https://www.purelypoultry.com/images/silver-laced-polish-chickens.jpg',
        notes: 'Polish chickens have funky hairstyles! Like a 70s popstar!',
        publicPlace: true,
        createdBy: users[0]._id
      }, {
        name: 'Polish Chicken, just for me',
        location: { lat: 51.0595615, lng: 18.5645061 },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Polish_Silver_Lace.jpg/1200px-Polish_Silver_Lace.jpg',
        notes: 'this is my personal polish chicken!',
        publicPlace: false,
        createdBy: users[0]._id
      }]);
  })
  .then(places => {
    console.log(`${places.length} places have been added to the db.`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

// const userData = [{
//   username: 'hannah',
//   email: 'hannah@hannah',
//   password: 'hannah',
//   passwordConfirmation: 'hannah'
// },{
//   username: 'andrea',
//   email: 'andrea@andrea',
//   password: 'andrea',
//   passwordConfirmation: 'andrea'
// }];
//
// User.create(userData)
//   .then(places => console.log(`${places.length} places created!`, `data: ${placeData}`))
//   .catch(err => console.log(err));
//
// const placeData = [{
//   name: 'Mill House Poland',
//   location: { lat: 51.086812, lng: 15.133495 },
//   image: 'https://i.pinimg.com/736x/49/68/1d/49681dd3cd0656fb73f1e7904cf8cff9--poland-house.jpg'
// }, {
//   name: 'Palace Ruins',
//   location: { lat: 51.0862256, lng: 15.146322 },
//   image: 'https://mw2.google.com/mw-panoramio/photos/medium/56920051.jpg'
// }, {
//   name: 'Platerowka',
//   location: { lat: 51.0595615, lng: 15.1543212 },
//   image: 'https://mw2.google.com/mw-panoramio/photos/medium/56179112.jpg'
// }, {
//   name: 'The Crooked House',
//   location: { lat: 54.4442013, lng: 18.5645061 },
//   image: 'http://englishforarchitects.pbworks.com/f/1264519705/image_03.jpg'
// }];
//
// Place.create(placeData)
//   .then(places => console.log(`${places.length} places created!`, `data: ${placeData}`))
//   .catch(err => console.log(err))
//   .finally(() => mongoose.connection.close());
