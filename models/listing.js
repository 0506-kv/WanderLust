const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  Image: {
    type: String,
    default:
      "https://unsplash.com/photos/shadows-of-hands-almost-touching-h9UnfGJTAp4",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/shadows-of-hands-almost-touching-h9UnfGJTAp4"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
