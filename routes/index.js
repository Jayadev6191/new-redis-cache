var express = require('express');

var http = require('http'),
    util = require('util'),
    fs = require('fs'),
    url = require('url');
	
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
