let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let morgan = require('morgan');

let config = require('./config/config');
let tasks = require('./modules/routes/tasksRoute');

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Routes
app.use('/tasks', tasks);


//Global error handling
app.use((data, req, res, next) => {
    const error = new Error(data);
    error.status = 404;
    next(error);
})



//Server start
app.listen(config.port, (err)=> {
    if(err){
        console.log('Error in starting server');
    } else {
        console.log(`Server started at port ${config.port}`);
    }
});


mongoose.connect(config.database);
mongoose.connection.on("connected", (err) => {
    if(err){
        console.log('Error in connecting databse');
    } else{
        console.log('Connected to database at port 27017');
    }
})