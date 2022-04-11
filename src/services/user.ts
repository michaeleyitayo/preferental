import User from "../models/user";

export const getAllUsers = async () => {
  return await User.find({});
};

export const upgradeUserToAgent = async (userId: string) => {
  return await User.findByIdAndUpdate(userId, { $set: { role: "agent" } });
};
