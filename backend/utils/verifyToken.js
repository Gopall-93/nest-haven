import JWT from "jsonwebtoken";

export const verifyToken = (value) => {
  const decoded = JWT.verify( value , process.env.JWT_SECRET_KEY);
  console.log(decoded)
  return decoded
};
