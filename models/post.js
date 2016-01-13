'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Post;

let postSchema = Schema({
  title: String,
  date: {type: Date, default: Date.now},
  tags: [String],
  body: String
});

Post = mongoose.model('Post', postSchema);
module.exports = Post;
