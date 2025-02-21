import channelModel from "../Model/channelModel.js";

export async function videoAddMiddleware(req, res, next) {
  try {
    const { channelId } = req.body;
    const channelData = await channelModel.findOne({ _id: channelId });
    if (!channelData) {
      return res
        .status(400)
        .json({ message: "Please check your channel info" });
    }
    req.Data = channelData;
    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server issue", error: err.message });
  }
}
