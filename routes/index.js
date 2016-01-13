var express = require('express');
var router = express.Router();
var marked = require('marked');
var glob = require('glob');
var path = require('path');
var fs = require('fs');

// var md = require('node-markdown').Markdown;
// console.log('here');
// fs.readFile(path.resolve('./data/posts/2015-10-03-A-Little-Introduction.md'), function(err, data){
//   if (err) {
//     console.log(err);
//   };
//   console.log(md(data.toString()))
// })




var posts = [];
glob.sync('./data/posts/*.markdown').forEach(function(file) {
  posts.push(marked(require(path.resolve(file))));
});

router.get('/api/posts', function(req, res, next) {
  res.jsonp({posts: posts});
});
//
// router.get('/api/sendpost', function(req, res){
//
//   var options = {
//      root: './',
//      dotfiles: 'deny',
//      headers: {
//          'x-timestamp': Date.now(),
//          'x-sent': true
//      }
//    };
//
//    var fileName = './data/posts/2015-10-26-Permutations.markdown';
//    res.sendFile(fileName, options, function (err) {
//      if (err) {
//        console.log(err);
//        res.status(err.status).end();
//      }
//      else {
//        console.log('Sent:', fileName);
//      }
//    });
//
// })

module.exports = router;
