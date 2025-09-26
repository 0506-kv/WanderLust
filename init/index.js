const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//Connection with Database
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Can't Connect to DB", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68d622358ff6581f2e321809",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was Initialized");
};

initDB();
