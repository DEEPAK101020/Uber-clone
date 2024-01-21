const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    adminname: {
      type: String,
    },
    username: {
      type: String,
      require: true,
      immutable: true,
    },
    email: {
      type: String,
      require: true,
      immutable: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid 10-digit phone number!`,
      },
    },
    dateofBirth: {
      type: Date,

    },
    designation:{
        type:String
    },
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
      immutable: true,
    },
    registeredDate: {
      type: Date,
      default: Date.now,
//       immutable: true,
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
