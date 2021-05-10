var express = require('express');
var myctrl = require('../controller/userController');

var approute=express.Router();
approute.post('/newUser',myctrl.addnew);
approute.post('/authentication',myctrl.authenticate);
approute.get('/userinfo/:id',myctrl.selectedUser);



module.exports = approute;