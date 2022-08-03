const TasksController = require('../controllers/tasks');

const router = require('express').Router();

//Find all tasks
router.get('/', TasksController.index);

//Create a new task
router.post('/create', TasksController.create);

//Update a task
router.get('/update/:id', TasksController.edit);
router.put('/update/:id', TasksController.update);

//Delete a task
router.delete('/delete/:_id', TasksController.delete);

//Export the router
module.exports = router;