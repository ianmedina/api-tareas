if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

module.exports = {
  USER: process.env.USER,
  PASS: process.env.PASS,
  DB: process.env.DB
}