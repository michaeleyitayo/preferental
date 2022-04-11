import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const passwordToHash = (p: string): string => bcrypt.hashSync(p, 12);

const signToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyBcryptPassword = (password: string, hash: string): boolean =>
  bcrypt.compareSync(password, hash);

export { passwordToHash, signToken, verifyBcryptPassword };
