const { Router } = require('express')
const { taskController } = require('../controllers')

const router = Router()

router.get('/', taskController.getTasks)

router.get('/:taskId', taskController.getTaskById)

router.post('/', taskController.createTask)

router.put('/:taskId', taskController.updateTask)

router.delete('/:taskId', taskController.deleteTask)

module.exports = router