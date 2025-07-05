import { wrapperasync } from "../errorhandlers/wrapperasyc.js";

export const validator = (schema) => wrapperasync(async(req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ message: result.error.flatten() });
  }
  req.validated = result.data;
  next();
});
