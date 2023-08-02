import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullname: {
    type: "String",
    required: [true, " Name is required"],
    minLength: [5, "Name must 5 Char"],
    maxLength: [50, "Name less 50 Char"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: "String",
    required: [true, " Email is required"],
    lowercase: true,
    trim: true,
    unique: true,
    Math: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please fill a vlid Email",
    ],
  },
  password: {
    type: "String",
    required: [true, " password is required"],
    minLength: [8, "password must be 8 char"],
    select: false,
  },
  avatar: {
    public_id: {
      type: "String",
    },
    secure_url: {
      type: "String",
    },
  },
});

const User = model("User", userSchema);

export default User;
