import channelModel from "../Model/channelModel.js";

export async function createChannel(req, res) {
  try {
    const {
      channelName,
      ownerEmail,
      description,
      channelBanner,
      subscribers,
      videos,
    } = req.body;

    //creating channel
    const newChannel = await channelModel.create({
      channelName,
      ownerEmail,
      description,
      channelBanner,
      subscribers,
      videos,
    });
    res.status(201).json({ message: "New channel created", newChannel });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Issue", error: err.message });
  }
}

export async function getChannelByUserEmail(req, res) {
  try {
    const { email } = req.body;
    const channelData = await channelModel.findOne({ ownerEmail: email });
    if (!channelData) {
      return res
        .status(404)
        .json({ message: "Create a channel", statusCode: 404 });
    }
    res.status(200).json(channelData);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Issue",
      error: err.message,
      statusCode: 500,
    });
  }
}
