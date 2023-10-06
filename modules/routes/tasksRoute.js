let express = require('express');
let taskController = require('../controller/tasksController');

let router = express.Router();

//Creating new tasks
router.post('/create', (req, res) => {
    if (req.body) {
        let task = {
            task_name: req.body.taskName,
            task_type: req.body.taskType,
            task_status: req.body.taskStatus,
            task_flag: true
        }

        taskController.createTask(task).then((savedTask) => {
            console.log(savedTask);
            if (savedTask) {
                res.status(200).send({
                    success: true,
                    MSG: "Successfully save the new task",
                    savedTask: savedTask
                })
            } else {
                res.status(400).send({
                    success: false,
                    MSG: "Error found in saving new task",
                })
            }
        }).catch((err) => {
            res.status(400).send({
                success: false,
                MSG: "Error found in saving new task",
                error: err.toString()
            })
        })
    } else {
        res.status(400).send({
            success: false,
            MSG: "Please input the task details",
        })
    }
});

//Fetching All Tasks
router.get('/fetchAll', (req, res) => {
    let start = req.query.start;
    let end = req.query.end;

    taskController.fetchTasks(start, end).then((tasks) => {
        console.log(tasks);
        if (tasks) {
            res.status(200).send({
                success: true,
                MSG: "Successfully fetch all the tasks",
                tasksList: tasks
            })
        } else {
            res.status(400).send({
                success: false,
                MSG: "Error found in saving new task",
            })
        }
    }).catch((err) => {
        res.status(400).send({
            success: false,
            MSG: "Error found in saving new task",
            error: err.toString()
        })
    })
});


//Updating the task
router.put('/updateTask', (req, res) => {
    if (req.body) {
        let id = req.body._id;
        let updateTask = {
            task_name: req.body.task_name,
            task_type: req.body.task_type,
            task_status: req.body.task_status,
            task_flag: true
        }

        taskController.updateTask(id, updateTask).then((updatedTask) => {
            if (updatedTask) {
                res.status(200).send({
                    success: true,
                    MSG: "Successfully update the task",
                    updatedTask: updatedTask
                })
            } else {
                res.status(400).send({
                    success: false,
                    MSG: "Error in updating task",
                })
            }
        }).catch((err) => {
            res.status(400).send({
                success: false,
                MSG: "Error in updating task",
                error: err.toString()
            })
        })
    } else {
        res.status(400).send({
            success: false,
            MSG: "Please input the task details to update",
        })
    }
});

module.exports = router;