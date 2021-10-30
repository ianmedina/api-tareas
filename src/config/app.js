const express = require('express')

const { apiRoutes } = require('../routes/index.routes')
const { notFound } = require('../middlewares')

const app = express()
const api = express.Router()

// Api version
api.use('/api/v1', apiRoutes)

// Middlewares lógicos
api.use(notFound)

app.use(api)

module.exports = app