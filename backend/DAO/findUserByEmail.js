import User from "../schema/user.schema.js";

export const findUserByEmail = async(email) => {
  const user =await User.findOne({ email });
  return user;
};
