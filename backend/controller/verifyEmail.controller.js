import { wrapperasync } from "../errorhandlers/wrapperasyc.js";
import User from "../schema/user.schema.js";
import { verifyToken } from "../utils/verifyToken.js";

export const verifyEmail = wrapperasync(async (req, res) => {
  const { token } = req.query;
  const { email } = verifyToken(token);
  const updatedUser = await User.findOneAndUpdate(
    { email: email },
    { emailVerified: true, $unset: { expiresIn: "" } },
    { new: true }
  );
  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.redirect(`${process.env.FRONTEND_URL}/?success=true`);
});
