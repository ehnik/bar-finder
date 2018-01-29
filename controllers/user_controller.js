var User = require('../models/user')
var express = require('express');

exports.user_get = function(req, res) {
    res.render("users/sign_in");
};

exports.user_post = function(req, res) {
    User.findOne({'username': req.body.username},(err,user)=>{
      if(user){
        if(user.password==req.body.password &&
        user.passwordConf==req.body.passwordConf){
          req.session.userId = user._id
          return res.redirect('/')
        }
        else{
          return res.send("incorrect password")
        }
      }
      res.send("username doesn't exist")
    })
};

exports.user_create_get = function(req, res) {
    res.render("users/sign_up");
};

exports.user_create_post = function(req, res) {

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
          var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
          }
  //use schema.create to insert data into the db
    User.create(userData, function (err, user) {

      if (err) {
        console.log(err)
        //res.send(err) //stand-in for error handling
      } else {
        req.session.userId = user._id;
        return res.redirect('/');
      }
    });
  }
};
