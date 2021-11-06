const mongoose = require("mongoose");
const multer = require("multer");
const { join } = require("path");
const path = require("path");
const AVATRA_PATH = path.join("/uploads/users/avatars");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATRA_PATH));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

//static function()
userSchema.statics.uploadedAvater = multer({ storage: storage }).single(
  "avatar"
);
userSchema.statics.avatarPath = AVATRA_PATH;

const User = mongoose.model("User", userSchema);
module.exports = User;
