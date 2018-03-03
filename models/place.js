const mongoose = require('mongoose');

// const ratingSchema = new mongoose.Schema({
//   rating: Number,
//   user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
// });

const placeSchema = new mongoose.Schema({
  name: String,
  location: { lat: Number, lng: Number },
  image: String,
  notes: String,
  // visitDate: String,
  publicPlace: Boolean,
  // ratings: [ ratingSchema ],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

placeSchema.methods.belongsTo = function placeBelongsTo(user) {
  return this.createdBy.id === user.id;
};

placeSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

module.exports = mongoose.model('Place', placeSchema);
