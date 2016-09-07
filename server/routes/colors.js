var express = require('express');
var router = express.Router();
var Colors = require('../models/colors')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/color');

router.get('/', function(req, res) {
  Colors.find({}, function(err, colors) {
    if(err) {
      console.log("Can't find colors! ", err);
      res.sendStatus(500);
      return;
    }
    console.log("colors: ", colors);
    res.send(colors);
  });
});

router.post('/', function(req, res) {
  var color = req.body;

  console.log("color: ", color);

  var colorObj = Colors({
    value: color.color,
  });

  colorObj.save(function(err) {
    if(err) {
      console.log("Error creating color: ", err);
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

router.put('/', function(req, res) {

});

module.exports = router;
