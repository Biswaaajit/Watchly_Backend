import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  channelName: {
    type: String,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  channelBanner: {
    type: String,
    default: "",
  },
  subscribers: {
    type: Number,
    default: 0,
  },
});

const channelModel = mongoose.model("ChannelData", channelSchema);
export default channelModel;
