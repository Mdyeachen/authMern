const mongoose = require("mongoose");

// create a schema for user authentication
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [10, "Password must be at least 10 characters long"],
      maxlength: [20, "Password must be at most 20 characters long"],
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    verificationToken: String,
    verificationTokenExpires: Date,
  },
  {
    timestamps: true,
  }
);

// create a model from the schema
const User = mongoose.model("User", userSchema);

// export the model
module.exports = User;
