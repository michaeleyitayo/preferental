import { getAllUsers, upgradeUserToAgent } from "../services/user";
import catchAsync from "../utils/catchAsync";

const getUsers = catchAsync(async (req, res, next) => {
  const users = await getAllUsers();
  res.status(200).json({
    status: "success",
    message: "users fetched successfully",
    data: { users },
  });
});

const upgradeToAgent = catchAsync(async (req, res, next) => {
  const user = await upgradeUserToAgent(req.params.userId);
  res.status(200).json({
    status: "success",
    message: "user upgraded to agent successfully",
    data: { user },
  });
});

export { getUsers, upgradeToAgent };
