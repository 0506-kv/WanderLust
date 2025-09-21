const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose); //Automatically genrates username,password fields and hash and salt.also add methods to schema.

module.exports = mongoose.model("User", userSchema);
