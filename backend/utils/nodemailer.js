import nodemailer from "nodemailer";

export const trasporter = nodemailer.createTransport({
  service:"gmail",
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure:true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
