import { createProperty, getAllProperties } from "../services/property";
import catchAsync from "../utils/catchAsync";
import { postPropertyValidator } from "../validators/property";

const postProperty = catchAsync(async (req, res, next) => {
  postPropertyValidator(req.body, next);
  const property = await createProperty(req.user._id, req.body);
  res.status(201).json({
    status: "success",
    message: "property posted successfully",
    data: { property },
  });
});

const getProperties = catchAsync(async (req, res, next) => {
  const properties = await getAllProperties();
  res.status(200).json({
    status: "success",
    messages: "properties fetched successfully",
    data: { properties },
  });
});

export { postProperty, getProperties };
