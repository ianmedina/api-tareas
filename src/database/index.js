const mongoose = require('mongoose')
const { USER, PASS, DB } = require('../config')

const options = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}

const uri = `mongodb+srv://${USER}:${PASS}@cluster0.umr5t.mongodb.net/${DB}?retryWrites=true&w=majority`

// Conexión a la base de datos
const conn = () => {
  mongoose.connect(uri, options)
  .then( () => {
    console.log('Connected successfully...')
  })
  .catch( err => {
    console.error(err)
  })
}

module.exports = conn