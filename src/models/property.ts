import { model, Schema, ObjectId } from "mongoose";
import { IProperty } from "../types/property";

const propertySchema = new Schema<IProperty>(
  {
    cost: { type: Number, required: true },
    rooms: { type: Number, required: true },
    location: { type: String, required: true },
    ownerId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const Property = model<IProperty>("property", propertySchema);

export default Property;
