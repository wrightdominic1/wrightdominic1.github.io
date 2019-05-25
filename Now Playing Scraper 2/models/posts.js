var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var PostsSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `times` is required and of type String
  times: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property timess the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  notes: {
    type: String,
    required: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var posts = mongoose.model("posts", PostsSchema);

// Export the Article model
module.exports = posts;