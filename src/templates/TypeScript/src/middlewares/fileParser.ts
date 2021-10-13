import { v2 } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import type { Options } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from "dotenv";

declare interface cloudinaryOptions extends Options {
  params: {
    folder: string;
    allowed_formats: Array<string>;
    unique_filename: boolean;
  };
}

dotenv.config();

/**
 * Configure your cloudinary account here
 */

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const multerOpts: cloudinaryOptions = {
  cloudinary: v2,
  params: {
    allowed_formats: ["jpg", "png"],
    unique_filename: true,
    folder: "journal",
  },
};

// We export the storage if needed.
export const storage = new CloudinaryStorage(multerOpts);

// We export the middleware to parse the files
export const parser = multer({ storage });

// We export the cloud in case of needing any cloudinary tools
export const cloud = v2;

export default { cloud, parser, storage };
