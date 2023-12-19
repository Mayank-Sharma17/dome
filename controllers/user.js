import { users } from "../models/user.js";
import { setUser } from "../service/auth.js";

export async function handleUserSignup(req, res) {
  const { username, email, password } = req.body;

  try {
    const newUser = new users({
      userName: username,
      email: email,
      password: password,
    });

    await newUser.save();

    return res.redirect("/user/login");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
}

export async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await users.findOne({ email });

    if (!user || !(await user.validatePassword(password))) {
      return res.render("login", {
        error: "Invalid username or password",
      });
    }

    const jwtToken = setUser(user);
    res.cookie("jwt", jwtToken, { expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), httpOnly: true });

    return res.redirect("/today");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
}
