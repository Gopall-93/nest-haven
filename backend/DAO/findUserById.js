import User from "../schema/user.schema.js";

export const findUserById=async(id)=>{
    const user = await User.findById(id)
    return user
}