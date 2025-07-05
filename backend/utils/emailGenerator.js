import { trasporter } from "./nodemailer.js";

export const emailGenerator = async (email, token) => {
  const verificationURL = `${process.env.BACKEND_URL}/verify-email?token=${token}`;
  await trasporter.sendMail({
    from: '"Nest Haven" <no-reply@nesthaven.com>',
    to: email,
    subject: "Verify Your Email",
    html: `
      <h2>Welcome to Nest Haven!</h2>
      <p>Click the link below to verify your email address:</p>
      <a href="${verificationURL}">${verificationURL}</a>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  });
};
