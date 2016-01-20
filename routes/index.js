var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  request("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var jase = JSON.parse(body);
      var lat = jase["results"][0]["geometry"]["location"]["lat"];
      var lng = jase["results"][0]["geometry"]["location"]["lng"];
      res.render('index', { title: 'Express', lat: lat, lng: lng });
    }
  });
});

module.exports = router;
