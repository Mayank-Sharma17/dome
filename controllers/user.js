import { users } from "../models/user.js";
import { setUser } from "../service/auth.js";

export async function handleUserSignup(req, res) {
  const { username, email, password } = req.body;
  await users.create({
    userName: username,
    email: email,
    password: password,
  });
  return res.redirect("/user/login");
}

export async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await users.findOne({ email, password });
  if (!user) {
    return res.render("login", {
      error: "Invalid username or password",
    });
  }

  const jwtToken = setUser(user);
  res.cookie("jwt", jwtToken);

  return res.redirect("/today");
}
