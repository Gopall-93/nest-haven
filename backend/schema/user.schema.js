import mongoose from "mongoose";
import { nanoid } from "nanoid";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  role: [
    {
      type: String,
      required: true,
    },
  ],
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  avatar: {
    type: String,
    default: function () {
      const seed = nanoid(7);
      return `https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=${seed}`;
    },
  },
  recenttrips: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  createdat: {
    type: Date,
    default: Date.now(),
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  phoneVerified: {
    type: Boolean,
    default: false,
  },
  expiresIn: {
    type: Date,
    expires: 0,
  },
});

userSchema.set("toJSON", {
  transform(doc, ret) {
    delete ret.password;
    delete ret.createdat;
    return ret;
  },
});

const User = mongoose.model("User", userSchema);
export default User;
