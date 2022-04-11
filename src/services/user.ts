import User from "../models/user";

export const getAllUsers = async () => {
  return await User.find({});
};
