import channelModel from "../Model/channelModel.js";

export async function createChannelMiddleware(req, res, next) {
  try {
    const { ownerEmail } = req.body;
    const checkEmail = await channelModel.findOne({ ownerEmail });
    if (checkEmail) {
      return res
        .status(400)
        .json({ message: "A channel already exist with this email" });
    }
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}
