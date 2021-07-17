//Add module express
const express = require('express');
//Important: DO NOT FORGET round braces!
const app = express();
const port = process.env.PORT || 3000;
let bodyParser = require("body-parser");
const Validation = require('./ValidationService');
const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    next();
});

// necessary for posting data
// support json encoded bodies
app.use(bodyParser.json());
app.post('/register', (req, res) => {
    // fetch attributes as object
    let userObj = {
        "gender": req.body.gender,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "birthday": req.body.birthday,
        "mobile": req.body.mobile,
        "password": req.body.password
    };
    // validate all user properties
      if (Validation.validateUser(userObj)) {
          // return http status 200 with boolean true 
          res.status(200).send(true);
      } else {
          // return http status 400 with boolean false
          res.status(400).send(false);
      };
});
