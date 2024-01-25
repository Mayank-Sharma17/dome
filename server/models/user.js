import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    userName: {
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
      required: true,
    },
  },
  { timestamps: true }
);

// hash the password before saving to db
userSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// compare palintext password with hashed passoword
userSchema.methods.validatePassword = async function (userPassword) {
  return bcrypt.compare(userPassword, this.password);
};

const users = mongoose.model("user", userSchema);

export { users };
