 const mongoose = require('mongoose');

 // Function to connect MongoDB, And 1st parameter is pass the URL for the Database
 // single call back function - err to ensure connectivity status
 mongoose.connect('mongodb://localhost:27017/PhDstudentDB',{useNewUrlParser: true}, (err) => {
     if(!err){
         console.log('MongoDB connected Succeeded.') 
     }
     else{
         console.log('Error in DB connection : ' + err)
     }
 }); 

 require('./school.model');
 require('./department.model');
 require('./teacher.model');
 require('./school_Department.model');
 require('./student.model');
require('./studentHome.model');