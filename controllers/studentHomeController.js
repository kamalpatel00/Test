const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');


router.get('/', (req, res) => {
    res.render('studentHome/addOrEdit',{
        viewTitle: 'Hello'
    });
});    




router.post('/', (req, res) => {
    // console.log(req.body);
    Student.find(({ registrationNumber: req.body.studentSearch }),(err, docs) => {
        if(!err){
            res.render("student/studentViewList", {
                list: docs
            });
        }
        else{
            console.log('Error in retriving School Detail :' + err);
        }
    });
});

module.exports = router;