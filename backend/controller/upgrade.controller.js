import CustomError from "../errorhandlers/ErrorClass.js";
import { wrapperasync } from "../errorhandlers/wrapperasyc.js";
import { findUserById } from "../DAO/findUserById.js";
import { findAllListOfHost } from "../DAO/findAllListOfHost.js";

export const upgrade = wrapperasync(async (req, res) => {
  const { id } = req.body;

  const user = await findUserById(id);
  if (user) {
    if (user.role[0] == "host" || user.role[1] == "host") {
      const allListings = await findAllListOfHost(id);
      console.log("All listings",allListings);
      res.status(200).json({ success: true, allListings:allListings });

      return;
    }
    user.role.push("host");
    await user.save();
    res.status(200).json({ success: true, message: "Signed as HOST" });
  } else {
    throw new CustomError(404, "PLease Signup");
  }
});
