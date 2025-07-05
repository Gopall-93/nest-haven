import { Router } from "express";
import { test } from "../controller/test.controller.js";
import { userValidator } from "../validator/user.validator.js";
import { validator } from "../middleware/validator.middleware.js";
import { sigupHandler } from "../controller/signup.controller.js";
import { wrapperasync } from "../errorhandlers/wrapperasyc.js";
import { sendEmail } from "../controller/sendEmail.controller.js";
import { verifyEmail } from "../controller/verifyEmail.controller.js";
import { loginHandler } from "../controller/login.controller.js";
import { cookieVerification } from "../middleware/cookieVerification.middleware.js";
import { verfiedUser } from "../controller/verifiedUser.controller.js";
import { upgrade } from "../controller/upgrade.controller.js";
import List from "../schema/list.schema.js";
import { findListById } from "../DAO/findListById.js";
import { upload } from "../middleware/multer.middleware.js";
import { handleupload } from "../controller/handleupload.controller.js";

export const route = Router();

route.get("/", test);
route.post(
  "/:listid/image/upload",
  upload.single("image"),
  handleupload
);

route.post("/newlist/add", async (req, res) => {
  const { list } = req.body;


  const data = await findListById(list.newListId, list);

  console.log(data);
});

//save the host and return the list ID
route.post("/:id/listid", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const newList = new List({
    hostId: id,
  });
  await newList.save();
  console.log(newList);
  res.status(200).json({ id: newList._id, status: newList.status });
});

//auth route
route.get("/auth/me", cookieVerification, verfiedUser);

//upgrade to host
route.post("/host/update", upgrade);

//user sigup route
route.post(
  "/user/signup",
  validator(userValidator),
  wrapperasync(sigupHandler)
);

//login route
route.post("/user/login", wrapperasync(loginHandler));

//send mail
route.post("/email-verification", sendEmail);

//email verification
route.get("/verify-email", verifyEmail);
