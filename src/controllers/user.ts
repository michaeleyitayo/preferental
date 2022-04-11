import { getAllUsers } from "../services/user";
import catchAsync from "../utils/catchAsync";

const getUsers = catchAsync(async (req, res, next) => {
  const users = await getAllUsers();
  res
    .status(200)
    .json({
      status: "success",
      message: "users fetched successfully",
      data: { users },
    });
});

export { getUsers };
