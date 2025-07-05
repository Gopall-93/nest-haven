import { findUserByEmail } from "../DAO/findUserByEmail.js";
import bcrypt from "bcrypt";
import CustomError from "../errorhandlers/ErrorClass.js";
import { tokenGenerator } from "../utils/tokenGenerator.js";

export const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  if (user) {
    const actualPass = user.password;
    const match = await bcrypt.compare(password, actualPass);
    if (match) {
      const token = tokenGenerator({ id: user._id }, "1d");

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 86400000,
        })
        .status(200)
        .json({
          success: true,
          message: "Logged-in successfully",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        });
    }
  } else {
    throw new CustomError(401, "Invaild Credentials");
  }
};
