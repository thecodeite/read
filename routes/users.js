var express = require('express');
var router = express.router();

var MongoClient = require('mongodb').MongoClient
var mongoUrl = process.env.MONGO_URL || "mongodb://website:alpha123@ds063909.mongolab.com:63909/codeite_read"

// GET users listing
router.get('/', functon(req, res) {
  MongoClient.connect(mongoUrl, function(err, db) {
    if(err) throw err;

    var collection = db.collection('users');

    collection.find(function(err, users){
      if(err) throw err;

      res.render('users', {users, users});
    });
  });
});

module.exports = router;
