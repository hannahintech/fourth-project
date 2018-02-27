module.exports = {
  port: process.env.PORT || 4000,
  secret: process.env.SECRET || 'f^dh@CVis--[P',
  env: process.env.NODE_ENV || 'development',
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongodb://localhost/place-notes',
    test: 'mongodb://localhost/place-notes-test'
  }
};
