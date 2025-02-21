import userModel from "../Model/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function getAllUsers(req, res) {
  try {
    const users = await userModel.find();
    if (users.length === 0) {
      return res.status(200).json({ msg: "No data present" });
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).json({ msg: "Internal server Issue" });
  }
}

export async function addUser(req, res) {
  try {
    const { userName, email, channel, avatar } = req.body;
    const userPassword = req.hash;
    const newUser = await userModel.create({
      userName,
      password: userPassword,
      email,
      channel,
      avatar,
    });
    res.status(201).json({ message: "New user created", newUserData: newUser });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server Issue", error: err.message });
  }
}

export async function loginUser(req, res) {
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    const { userName, password: hashPassword } = req.user;
    const { password } = req.body;
    const checkPassword = await bcrypt.compare(password, hashPassword);
    if (!checkPassword) {
      return res.status(400).json({ message: "Wrong Password" });
    }

    const token = jwt.sign({ userName }, JWT_SECRET);
    res
      .status(200)
      .json({ message: "Login Successful", token, userData: req.user });
  } catch (err) {
    res.status(500).json({ msg: "Internal server Issue", error: err.message });
  }
}
