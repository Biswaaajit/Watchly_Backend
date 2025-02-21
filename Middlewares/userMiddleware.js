import bcrypt from "bcrypt";
import userModel from "../Model/UserModel.js";

export async function addUserMiddleware(req, res, next) {
  try {
    const { password, email } = req.body;
    const emailCheck = await userModel.findOne({ email });

    // email check
    if (emailCheck) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // hashing password
    const hashPassword = await bcrypt.hash(password, 15);
    req.hash = hashPassword;
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}

export async function loginMiddleware(req, res, next) {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "You are not registered!!!" });
    }
    req.user = user;
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}
