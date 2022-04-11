import { createProperty } from "../services/property";
import catchAsync from "../utils/catchAsync";
import { postPropertyValidator } from "../validators/property";

const postProperty = catchAsync(async (req, res, next) => {
  postPropertyValidator(req.body, next);
  const prop = await createProperty(req.user._id, req.body);
  res.status(201).json({
    status: "success",
    message: "property posted successfully",
    data: prop,
  });
});

export { postProperty };
