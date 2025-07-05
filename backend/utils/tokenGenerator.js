import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const tokenGenerator = (value, expiresIn) => {
  const token = jwt.sign(value, process.env.JWT_SECRET_KEY, {
    expiresIn: expiresIn,
  });
  return token;
};
