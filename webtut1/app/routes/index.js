var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ListUsers = mongoose.model('contacts');

/* GET home page. */
//router.get('/', function (req, res, next) {
//    res.render('index', {title: 'Express'});
//});

router.get('/listusers', function (req, res, next) {

    ListUsers.find({}).exec(function (err, data) {
        if (err) {
            res.send({'data': "A db error has occurred."});
        } else {
            res.send({'data': data});
        }
    });
});

router.get('/listusers/:id', function (req, res, next) {
    ListUsers.find({name: req.params.id}).exec(function (err, data) {
        if (err) {
            res.send({'data': "A db error has occurred."});
        } else {
            res.json(data);
        }
    });
});

router.post('/listusers', function(req,res){
    //res.send('user data' + res.body.name);
    console.log("posting...." + req.body.email);
    var newuser = new ListUser({name:req.body.name, email:email});
    newuser.save( function(err,contact,count){
        if(err){

        }else {

        }
    })
});



    module.exports = router;
