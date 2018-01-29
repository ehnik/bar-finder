var User = require('../models/user')


exports.user_create_get = function(req, res) {
    console.log("yay")
    res.render("users/sign_in");
};

exports.user_create_post = function(req, res) {

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
          console.log("confirmed")
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
        return res.redirect('/usersss');
      }
    });
  }
    res.send(req.body)
};
