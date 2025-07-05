import CustomError from "../errorhandlers/ErrorClass.js";
import { wrapperasync } from "../errorhandlers/wrapperasyc.js";
import User from "../schema/user.schema.js";
import { emailGenerator } from "../utils/emailGenerator.js";
import { tokenGenerator } from "../utils/tokenGenerator.js";

export const sendEmail = wrapperasync(async (req, res) => {
  const { email } = req.body;
  
  const user = await User.findOne({ email: email });
  
  if (!user) {
    console.log("in if")
    throw new CustomError(404, "User not found");
  } else {
    const token = tokenGenerator({ email: email },"5m");
    
    await emailGenerator(email, token);
    res.status(200).json({ message: "Verification Email sent" });
  }
});
