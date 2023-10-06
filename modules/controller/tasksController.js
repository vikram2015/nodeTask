let TaskModal = require('../modal/tasksModal');
let Promise = require('promise');


let createTask = (task) => {
    return new Promise((resolve, reject) => {
        try {
            let tasksModal = new TaskModal(task);
            tasksModal.save().then((savedTask) => {
                if (savedTask) {
                    resolve(savedTask);
                } else {
                    reject('Error in saving the task')
                }
            }).catch((err) => {
                reject(err);
            })
        } catch (error) {
            throw (error);
        }
    })
}

let fetchTasks = (start, end) => {
    return new Promise((resolve, reject) => {
        try {
            TaskModal.find().skip(start).limit(end).then((tasksList) => {
                if (tasksList) {
                    resolve(tasksList);
                } else {
                    reject('Error in saving the task')
                }
            }).catch((err) => {
                reject(err);
            })
        } catch (error) {
            throw (error);
        }
    })
}


let updateTask = (id, task) => {
    return new Promise((resolve, reject) => {
        try {
            console.log(id)
            console.log(task)
            TaskModal.findByIdAndUpdate(id, task, { new: true}).exec().then((updatedTasks) => {
                if (updatedTasks) {
                    resolve(updatedTasks);
                } else {
                    reject('Error in updatings task')
                }
            }).catch((err) => {
                reject(err);
            })
        } catch (error) {
            throw (error);
        }
    })
}

module.exports = {
    createTask: createTask,
    fetchTasks: fetchTasks,
    updateTask: updateTask
}