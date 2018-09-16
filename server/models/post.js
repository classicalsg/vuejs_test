var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: 'string',
  description: 'string'
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
