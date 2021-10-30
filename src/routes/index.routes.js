const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const { taskRoutes } = require('.')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const apiRoutes = express.Router()

// Middlewares
apiRoutes
.use(cors(corsOptions))
.use(express.json())
.use(morgan('dev'))
.use(helmet())

apiRoutes.use('/tasks', taskRoutes)

module.exports = {
  apiRoutes
}