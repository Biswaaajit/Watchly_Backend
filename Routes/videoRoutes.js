import {
  addCommentByVideoId,
  addVideo,
  deleteComment,
  deleteVideoById,
  editComment,
  getAllVideo,
  getVideoById,
  getVideoByUserId,
} from "../Controller/videoController.js";
import verifyMiddleware from "../Middlewares/verifyMiddleware.js";
import { videoAddMiddleware } from "../Middlewares/videoMiddleware.js";

function videoRoutes(videoRouter) {
  videoRouter.get("/", getAllVideo);
  videoRouter.get("/:id", getVideoById);
  videoRouter.get("/userId/:id", verifyMiddleware, getVideoByUserId);
  videoRouter.post("/", videoAddMiddleware, addVideo);
  videoRouter.post("/comment/:id", verifyMiddleware, addCommentByVideoId);
  videoRouter.put("/addComment", verifyMiddleware, editComment);
  videoRouter.delete("/deleteComment", verifyMiddleware, deleteComment);
  videoRouter.delete("/:id", verifyMiddleware, deleteVideoById);
}
export default videoRoutes;
