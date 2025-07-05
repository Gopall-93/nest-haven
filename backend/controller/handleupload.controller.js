import cloudinary from "../config/cloudinary.config.js";
import { findListById } from "../DAO/findListById.js";
import { asyncwrapper } from "../error/asyncwrapper.error.js";
import list from "../schema/list.schema.js";

export const handleupload = asyncwrapper(async (req, res) => {
  const { listid } = req.params;
  const { name, category, description, location, price, review } = req.body;

  const result = await new Promise((reslove, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "products",
        },
        (error, result) => {
          if (error) reject(error);
          else reslove(result);
        }
      )
      .end(req.file.buffer);
  });
  const newlist = await findListById(listid, { image: result.secure_url });
  const uploadedlist = await newlist.save();
  res.status(200).json({ message: "product save", uploadedlist });
});
