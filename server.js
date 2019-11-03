//root file

require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

//Add request statement 
const schoolController = require('./controllers/schoolController');
const departmentController = require('./controllers/departmentController');
const teacherController = require('./controllers/teacherController');
const school_DepartmentController = require('./controllers/school_DepartmentController');
const studentController = require('./controllers/studentController');
const studentHomeController = require('./controllers/studentHomeController');
//Call express function with the Variable app
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

//In join function the 1st parameter is (__dirname) reserved inside the node js appplications
//it is base file directory path
app.set('views', path.join(__dirname, '/views/'));

//Configure the Express Engine handle bars
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));

//app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'deptLayout', layoutsDir: __dirname + '/views/layouts/'}));
//set view engine as hbs
app.set('view engine', 'hbs');

//To starts server we call listen function from app variable
//1st parameter port number, 2nd is call back function
app.listen(3000, () => {
    console.log('Server started at port : 3000');
});

//Add a route for schoolController we call 'use' middleware function
//Configure the route for node js application
app.use('/school', schoolController);
app.use('/department', departmentController);
app.use('/teacher',teacherController);
app.use('/school_Department', school_DepartmentController);
app.use('/student',studentController);
app.use('/studentHome',studentHomeController);

