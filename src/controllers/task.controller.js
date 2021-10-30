const { Tasks } = require('../models')

// Find
const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find()
    res.json(tasks)
  } catch (e) {
    res.json(e)
  }
}

// FindById
const getTaskById = async (req, res) => {
  const { taskId } = req.params
  try {
    const task = await Tasks.findById(taskId)
    res.json(task)
  } catch (e) {
    res.json(e)
  }
}

// Create
const createTask = async (req, res) => {
  const { body } = req
  try {
    const task = await Tasks.create(body)
    res.json(task)
  } catch (e) {
    res.json(e)
  }
}

// Update
const updateTask = async (req, res) => {
  const { body } = req
  const { taskId } = req.params
  try {
    const task = await Tasks.findByIdAndUpdate(taskId, body, {new:true})
    res.json(task)
  } catch (e) {
    res.json(e)
  }
}

// Delete
const deleteTask = async (req, res) => {
  const { taskId } = req.params
  try {
    const task = await Tasks.findByIdAndDelete(taskId)
    res.json(task)
  } catch (e) {
    res.json(e)
  }
}

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
}