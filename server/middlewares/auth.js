import { getUser } from "../service/auth.js";

export function restrictToLoggedinUserOnly(req, res, next) {
  const tokenCookie = req.cookies?.jwt;
  if (!tokenCookie) return res.redirect("/user/login");

  const user = getUser(tokenCookie); // _id, email
  if (!user) return res.redirect("/user/login");

  req.user = user;
  next();
}

export function checkAuth(req, res, next) {
  const tokenCookie = req.cookies?.jwt;

  const user = getUser(tokenCookie);

  req.user = user;
  next();
}
