import {
  addUser,
  getAllUsers,
  loginUser,
} from "../Controller/userController.js";
import {
  addUserMiddleware,
  loginMiddleware,
} from "../Middlewares/userMiddleware.js";

function userRoutes(userRouter) {
  userRouter.get("/", getAllUsers);
  userRouter.post("/register", addUserMiddleware, addUser);
  userRouter.post("/login", loginMiddleware, loginUser);
}
export default userRoutes;
