import {
  createChannel,
  getChannelByUserEmail,
} from "../Controller/channelController.js";
import { createChannelMiddleware } from "../Middlewares/channelMiddleware.js";
import verifyMiddleware from "../Middlewares/verifyMiddleware.js";

function channelRoutes(channelRouter) {
  channelRouter.post("/email", verifyMiddleware, getChannelByUserEmail);
  channelRouter.post(
    "/createChannel",
    verifyMiddleware,
    createChannelMiddleware,
    createChannel
  );
}
export default channelRoutes;
