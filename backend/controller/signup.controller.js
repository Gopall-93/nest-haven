import User from "../schema/user.schema.js";
import bcrypt from "bcrypt";
import { findUserByEmail } from "../DAO/findUserByEmail.js";
import CustomError from "../errorhandlers/ErrorClass.js";
import { tokenGenerator } from "../utils/tokenGenerator.js";

export const sigupHandler = async (req, res) => {
  console.log("Found the path")
  const {
    name,
    email,
    password,
    phonenumber,
    city,
    state,
    country,
    role,
    wishlist,
    avatar,
    recenttrips,
    createdat,
    emailverified,
    phoneverified,
  } = req.validated;

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new CustomError(400, "Email already registered.");
  } else {
    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedpassword,
      phonenumber,
      city,
      state,
      country,
      role,
      wishlist,
      avatar,
      recenttrips,
      createdat,
      emailverified,
      phoneverified,
      expiresIn: new Date(Date.now() + 2 * 60 * 1000),
    });

    await newUser.save();

    const token = tokenGenerator({id:newUser._id},"1h");

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 86400000,
      })
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      });
  }
};
