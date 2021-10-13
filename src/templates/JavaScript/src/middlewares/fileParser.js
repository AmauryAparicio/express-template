"use strict";

const { v2 } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();

/**
 * Configure your cloudinary account here
 */

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const multerOpts = {
  cloudinary: v2,
  params: {
    allowed_formats: ["jpg", "png"],
    unique_filename: true,
    folder: "journal",
  },
};

// We export the storage if needed.
exports.storage = new CloudinaryStorage(multerOpts);

// We export the middleware to parse the files
exports.parser = multer({ storage });

// We export the cloud in case of needing any cloudinary tools
exports.cloud = v2;
