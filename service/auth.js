import jwt from "jsonwebtoken";
import "dotenv/config";
const jwtSecret = process.env.JWT_SECRET;

export function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    jwtSecret
  );
}

export function getUser(jwtToken) {
  try {
    if (!jwtToken) return null;
    return jwt.verify(jwtToken, jwtSecret);
  } catch (error) {
    return null;
  }
}
