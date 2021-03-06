const mongoose = require('mongoose')
const { Schema } = mongoose

const TasksSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Tasks', TasksSchema)