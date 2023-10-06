let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let taskSchema = Schema({
    task_name: {
        type: String,
        required: true
    },
    task_type: {
        type: String, 
        required: false
    },
    task_status: {
        type: String,
        required: true
    },
    task_flag: {
        type: Boolean,
        required: false
    }
});

let tasks = module.exports = mongoose.model('Tasks', taskSchema);