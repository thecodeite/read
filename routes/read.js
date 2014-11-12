var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient
var mongoUrl = process.env.MONGO_URL || "mongodb://website:alpha123@ds063909.mongolab.com:63909/codeite_read";

// GET users listing
router.get('/:user', function(req, res) {
  var user = req.params.user;
  console.log('Found user:', user);
  /*
  MongoClient.connect(mongoUrl, function(err, db) {
    if(err) throw err;

    var collection = db.collection('users');

    collection.find(function(err, users){
      if(err) throw err;
      res.render('users', {users, users});
    });
  });
  */
  res.render('reading-list', {user: user});
});

router.get('/:user/:site', function(req, res) {
  var user = req.params.user;
  var site = req.params.site;

  res.render('reader', { user: user, site: site, url: 'https://google.com'});
});

module.exports = router;
