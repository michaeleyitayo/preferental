import { Model, model, Schema } from "mongoose";
import { IUser } from "../types/user";
import { verifyBcryptPassword } from "../helpers/auth";

// interface IUserModel extends Model<IUser> {
//   myStaticMethod(): number;
// }

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.method("validatePassword", function (password: string): boolean {
  const user = this;
  const hashedPassword = user.password;
  return verifyBcryptPassword(password, hashedPassword);
});

const User = model<IUser>("user", userSchema);

export default User;
