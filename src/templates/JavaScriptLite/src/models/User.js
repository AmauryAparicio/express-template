"use strict";

const { model, Schema } = require("mongoose");

/**
 * Simple model for a User. you can use this as a base for other models.
 */

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;
