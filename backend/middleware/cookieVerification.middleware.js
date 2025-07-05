import { findUserById } from "../DAO/findUserById.js";
import CustomError from "../errorhandlers/ErrorClass.js";
import { verifyToken } from "../utils/verifyToken.js";

export const cookieVerification = async (req, res, next) => {
  const cookie = req.cookies.token;
  if (!cookie) {
    throw new CustomError(404, "token not found");
  }
  try {
    const { id } = verifyToken(cookie);
    const decoded = await findUserById(id);
    req.user = decoded;
    next();
  } catch (err) {
    throw new CustomError(401, "invalid token");
  }
};
