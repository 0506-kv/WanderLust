const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer"); //used multer for file upload
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage }); //specify the destination folder for uploaded files

//Index and Create Route
router
  .route("/")
  .get(wrapAsync(listingController.index))

  .post(
    isLoggedIn,
    upload.single("listing[image][url]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

//New Route
//This route is used to render the form for create a new listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Show and Update Route
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))

  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image][url]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )

  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
