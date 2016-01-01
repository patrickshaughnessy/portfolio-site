var express = require('express');
var router = express.Router();
var marked = require('marked');
var glob = require('glob')
var path = require('path');

var posts = [];
glob.sync('./data/posts/*.md').forEach(function(file) {
  posts.push(marked(require(path.resolve(file))));
});

router.get('/api/posts', function(req, res, next) {
  res.jsonp({posts: posts});
});

module.exports = router;
